namespace WebAPI.Interface.Services;

public interface IAccountService
{
    string CreateJwsToken(string email);
}
