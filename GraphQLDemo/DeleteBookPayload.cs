namespace GraphQLDemo;

public record DeleteBookPayload(bool Success, string? Message, int BookId, string? ClientMutationId);