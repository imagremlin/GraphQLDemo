namespace GraphQLDemo;

public record UpdateBookInput(int Id, string? Title, string? Author, string? ClientMutationId);