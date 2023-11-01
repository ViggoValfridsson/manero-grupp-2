using WebAPI.Models.Dtos;
using WebAPI.Models.Schemas;

namespace WebAPI.Interface.Services;

public interface IBankCardService
{
    Task<BankCardDto> CreateAsync(BankCardCreateSchema schema, string userId);
    Task<BankCardDto?> GetCard(int cardId);
    Task<BankCardDto> GetAllUserCards(string userId);
    Task<BankCardDto> UpdateAsync(BankCardUpdateSchema schema);
    Task<bool> IsCardOwnedByUser(int cardId, string userId);
    Task<bool> DeleteCard(int id);
}
