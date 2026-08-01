using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace GraphQLDemo;

public static class JwtTokenGenerator
{
    public static string GenerateToken(User user, IConfiguration config)
    {
        SymmetricSecurityKey key = new (
            Encoding.UTF8.GetBytes(config["Jwt:Key"]!));

        SigningCredentials credentials = new (key, SecurityAlgorithms.HmacSha256);

        Claim[] claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.Username),
        };

        JwtSecurityToken token = new (
            issuer: config["Jwt:Issuer"],
            audience: config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(2),
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}