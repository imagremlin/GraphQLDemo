namespace GraphQLDemo;

public record UpdateReviewPayload(Review?  Review, bool Success, string? Message, string? ClientMutationId);
