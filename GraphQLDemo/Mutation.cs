using HotChocolate.Authorization;
using Microsoft.EntityFrameworkCore;

namespace GraphQLDemo;

public class Mutation
{
    public async Task<AuthPayload> Register(
        string username,
        string password,
        BookContext context)
    {
        if (await context.Users.AnyAsync(u => u.Username == username))
        {
            return new AuthPayload(false, null, "Username already taken.");
        }

        User user = new() 
        {
            Username = username,
            PasswordHash = PasswordHasher.Hash(password)
        };

        context.Users.Add(user);
        await context.SaveChangesAsync();

        return new AuthPayload(true, null, "Registration successful. Please log in.");
    }

    public async Task<AuthPayload> Login(
        string username,
        string password,
        BookContext context,
        IConfiguration config)
    {
        User? user = await context.Users.FirstOrDefaultAsync(u => u.Username == username);

        if (user is null || !PasswordHasher.Verify(password, user.PasswordHash))
        {
            return new AuthPayload(false, null, "Invalid username or password.");
        }

        string token = JwtTokenGenerator.GenerateToken(user, config);

        return new AuthPayload(true, token, "Login successful.");
    }
    
    [Authorize]
    public async Task<AddBookPayload> AddBook(
        AddBookInput input,
        BookContext context)
    {
        Book book = new() { Title = input.Title, Author = input.Author };

        context.Books.Add(book);
        await context.SaveChangesAsync();

        return new AddBookPayload(
            Book: book,
            Success: true,
            Message: null,
            ClientMutationId: input.ClientMutationId);
    }

    [Authorize]
    public async Task<UpdateBookPayload> UpdateBook(
        UpdateBookInput input,
        BookContext context)
    {
        Book? book = await context.Books.FindAsync(input.Id);

        if (book is null)
        {
            return new UpdateBookPayload(
                Book: null,
                Success: false,
                Message: $"Book with id {input.Id} was not found.",
                ClientMutationId: input.ClientMutationId);
        }

        if (input.Title is not null)
        {
            book.Title = input.Title;
        }

        if (input.Author is not null)
        {
            book.Author = input.Author;
        }

        await context.SaveChangesAsync();

        return new UpdateBookPayload(
            Book: book,
            Success: true,
            Message: null,
            ClientMutationId: input.ClientMutationId);
    }

    [Authorize]
    public async Task<DeleteBookPayload> DeleteBook(
        DeleteBookInput input,
        BookContext context)
    {
        Book? book = await context.Books.FindAsync(input.Id);

        if (book is null)
        {
            return new DeleteBookPayload(
                Success: false,
                Message: $"Book with id {input.Id} was not found.",
                BookId: input.Id,
                ClientMutationId: input.ClientMutationId);
        }

        context.Books.Remove(book);
        await context.SaveChangesAsync();

        return new DeleteBookPayload(
            Success: true,
            Message: null,
            BookId: input.Id,
            ClientMutationId: input.ClientMutationId);
    }
    
    [Authorize]
    public async Task<AddReviewPayload> AddReview(
        AddReviewInput input,
        BookContext context)
    {
       bool bookExists = await context.Books.AnyAsync(b => b.Id == input.BookId);

        if (!bookExists)
        {
            return new AddReviewPayload(
                Review: null,
                Success: false,
                Message: $"Book with id {input.BookId} was not found.",
                ClientMutationId: input.ClientMutationId);
        }

        if (input.Rating is < 1 or > 5)
        {
            return new AddReviewPayload(
                Review: null,
                Success: false,
                Message: "Rating must be between 1 and 5.",
                ClientMutationId: input.ClientMutationId);
        }

        Review review = new() 
        {
            BookId = input.BookId,
            Content = input.Content,
            Rating = input.Rating
        };

        context.Reviews.Add(review);
        await context.SaveChangesAsync();

        return new AddReviewPayload(
            Review: review,
            Success: true,
            Message: null,
            ClientMutationId: input.ClientMutationId);
    }

    [Authorize]
    public async Task<UpdateReviewPayload> UpdateReview(
        UpdateReviewInput input,
        BookContext context)
    {
        Review? review = await context.Reviews.FindAsync(input.ReviewId);

        if (review is null)
        {
            return new UpdateReviewPayload(
                Review: null,
                Success: false,
                Message: $"Review with id {input.ReviewId} was not found.",
                ClientMutationId: input.ClientMutationId);
        }

        if (review.BookId != input.BookId)
        {
            return new UpdateReviewPayload(
                Review: null,
                Success: false,
                Message: $"Review id {input.ReviewId} does not belong to book id {input.BookId}.",
                ClientMutationId: input.ClientMutationId);
        }

        if (input.Content is not null)
        {
            review.Content = input.Content;
        }

        if (input.Rating is not null)
        {
            review.Rating = input.Rating.Value;
        }

        await context.SaveChangesAsync();
        
        return new UpdateReviewPayload(
            Review: review,
            Success: true,
            Message: null,
            ClientMutationId: input.ClientMutationId);
    }
    
    [Authorize]
    public async Task<DeleteReviewPayload> DeleteReview(DeleteReviewInput input, BookContext context) 
    {
        Review? review = await context.Reviews.FindAsync(input.ReviewId);

        if (review is null)
        {
            return new DeleteReviewPayload(
                ReviewId: input.ReviewId,
                Success: false,
                Message: $"Review with id {input.ReviewId} was not found.",
                ClientMutationId: input.ClientMutationId);
        }

        if (review.BookId != input.BookId)
        {
            return new DeleteReviewPayload(
                ReviewId: input.ReviewId,
                Success: false,
                Message: $"Review id {input.ReviewId} does not belong to book id {input.BookId}.",
                ClientMutationId: input.ClientMutationId);
        }
        
        context.Reviews.Remove(review);
        await context.SaveChangesAsync();

        return new DeleteReviewPayload(
            Success: true,
            Message: null,
            ReviewId: input.ReviewId,
            ClientMutationId: input.ClientMutationId);
        
    }
    
    
}