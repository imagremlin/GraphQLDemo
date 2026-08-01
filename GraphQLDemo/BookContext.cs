using Microsoft.EntityFrameworkCore;

namespace GraphQLDemo;

public class BookContext : DbContext
{
    public BookContext(DbContextOptions<BookContext> options)
        : base(options)
    {
    }

    public DbSet<Book> Books => Set<Book>();
    public DbSet<Review> Reviews => Set<Review>();
    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Book>().HasData(
            new Book { Id = 1, Title = "Dune", Author = "Frank Herbert" },
            new Book { Id = 2, Title = "Neuromancer", Author = "William Gibson" },
            new Book { Id = 3, Title = "Foundation", Author = "Isaac Asimov" },
            new Book { Id = 4, Title = "Snow Crash", Author = "Neal Stephenson" },
            new Book { Id = 5, Title = "Hyperion", Author = "Dan Simmons" }
        );
        modelBuilder.Entity<Review>().HasData(
            new Review { Id = 1, BookId = 1, Content = "A sprawling, essential classic.", Rating = 5 },
            new Review { Id = 2, BookId = 1, Content = "Dense but rewarding.", Rating = 4 },
            new Review { Id = 3, BookId = 2, Content = "Defined a genre.", Rating = 5 }
        );
    }
}