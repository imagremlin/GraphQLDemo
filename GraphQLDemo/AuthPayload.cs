namespace GraphQLDemo;

public record AuthPayload(bool Success, string? Token, string? Message);