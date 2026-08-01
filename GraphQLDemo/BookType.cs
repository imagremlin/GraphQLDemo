namespace GraphQLDemo;

[ExtendObjectType(typeof(Book))]
public class BookType
{
    public async Task<IReadOnlyList<Review>> GetReviewsManual(
        [Parent] Book book,
        ReviewByBookIdDataLoader dataLoader,
        CancellationToken cancellationToken)
    {
        return await dataLoader.LoadAsync(book.Id, cancellationToken);
    }
}