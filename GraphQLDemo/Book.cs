namespace GraphQLDemo;

public class Book
{
    public int Id { get; set; }
    public string Title { get; set; } = default;
    public string Author { get; set; } = default;
    
    public List<Review> Reviews { get; set; } = new();
};