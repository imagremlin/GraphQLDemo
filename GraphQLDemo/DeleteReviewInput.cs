namespace GraphQLDemo;

public record DeleteReviewInput(int BookId, int ReviewId, string? ClientMutationId);
