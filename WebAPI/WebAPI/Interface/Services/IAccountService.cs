namespace WebAPI.Interface.Services;

public interface IAccountService
{
    Task <string> CreateJwsToken(string email);
    string? GetIdFromToken(string token);
}
