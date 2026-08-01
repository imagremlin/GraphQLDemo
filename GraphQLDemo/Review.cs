namespace GraphQLDemo;

public class Review
{
    public int Id { get; set; }
    public string Content { get; set; } = default!;
    public int Rating { get; set; }

    public int BookId { get; set; }
    public Book Book { get; set; } = default!;
}