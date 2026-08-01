namespace GraphQLDemo;

public record AddBookPayload(Book? Book, bool Success, string? Message, string? ClientMutationId);