namespace GraphQLDemo;

public record UpdateBookPayload(Book? Book, bool Success, string? Message, string? ClientMutationId);