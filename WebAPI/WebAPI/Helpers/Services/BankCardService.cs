using WebAPI.Interface.Services;
using WebAPI.Models.Dtos;
using WebAPI.Models.Schemas;

namespace WebAPI.Helpers.Services;

public class BankCardService : IBankCardService
{
    public Task<BankCardDto> CreateAsync(BankCardCreateSchema schema)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeleteCard(int id)
    {
        throw new NotImplementedException();
    }

    public Task<BankCardDto> GetAllUserCards(string userId)
    {
        throw new NotImplementedException();
    }

    public Task<BankCardDto> GetCard(string id)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsCardOwnedByUser(int cardId, string userId)
    {
        throw new NotImplementedException();
    }

    public Task<BankCardDto> UpdateAsync(BankCardUpdateSchema schema)
    {
        throw new NotImplementedException();
    }
}
