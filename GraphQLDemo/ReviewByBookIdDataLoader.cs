using Microsoft.EntityFrameworkCore;

namespace GraphQLDemo;

public class ReviewByBookIdDataLoader : BatchDataLoader<int, IReadOnlyList<Review>>
{
    private readonly IDbContextFactory<BookContext> _dbContextFactory;

    public ReviewByBookIdDataLoader(
        IDbContextFactory<BookContext> dbContextFactory,
        IBatchScheduler batchScheduler,
        DataLoaderOptions? options = null)
        : base(batchScheduler, options)
    {
        _dbContextFactory = dbContextFactory;
    }

    protected override async Task<IReadOnlyDictionary<int, IReadOnlyList<Review>>> LoadBatchAsync(
        IReadOnlyList<int> bookIds,
        CancellationToken cancellationToken)
    {
        await using BookContext context = _dbContextFactory.CreateDbContext();

        List<Review> reviews = await context.Reviews
            .Where(r => bookIds.Contains(r.BookId))
            .ToListAsync(cancellationToken);

        return reviews
            .GroupBy(r => r.BookId)
            .ToDictionary(g => g.Key, g => (IReadOnlyList<Review>)g.ToList());
    }
}