using HotChocolate.Authorization;

namespace GraphQLDemo;

public class Query
{
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<Book> GetBooks(BookContext context) => context.Books;
}