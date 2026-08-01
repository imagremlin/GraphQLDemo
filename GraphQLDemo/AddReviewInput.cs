namespace GraphQLDemo;

public record AddReviewInput(int BookId, string Content, int Rating, string? ClientMutationId);