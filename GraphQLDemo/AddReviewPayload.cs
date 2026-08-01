namespace GraphQLDemo;

public record AddReviewPayload(Review? Review, bool Success, string? Message, string? ClientMutationId);