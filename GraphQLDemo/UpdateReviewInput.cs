namespace GraphQLDemo;

public record UpdateReviewInput(int BookId, int ReviewId, string? Content, int? Rating, string? ClientMutationId);
