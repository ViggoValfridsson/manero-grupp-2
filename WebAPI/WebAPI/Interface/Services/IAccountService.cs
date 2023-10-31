namespace WebAPI.Interface.Services;

public interface IAccountService
{
    Task <string> CreateJwtToken(string email);
    string? GetIdFromToken(string token);
}
