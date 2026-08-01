namespace GraphQLDemo;

public record DeleteReviewPayload(bool Success, string? Message, int ReviewId, string? ClientMutationId);