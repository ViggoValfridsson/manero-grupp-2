using WebAPI.Interface.Repositories;
using WebAPI.Interface.Services;
using WebAPI.Models.Dtos;
using WebAPI.Models.Entities;
using WebAPI.Models.Schemas;

namespace WebAPI.Helpers.Services;

public class BankCardService : IBankCardService
{
    private readonly IBankCardRepo _bankCardRepo;

    public BankCardService(IBankCardRepo bankCardRepo)
    {
        _bankCardRepo = bankCardRepo;
    }

    public async Task<BankCardDto> CreateAsync(BankCardCreateSchema schema, string userId)
    {
        BankCardEntity entity = schema;
        entity.UserId = userId;

        entity = await _bankCardRepo.CreateAsync(entity);

        return entity;
    }

    public async Task<bool> DeleteCard(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<BankCardDto> GetAllUserCards(string userId)
    {
        throw new NotImplementedException();
    }

    public async Task<BankCardDto?> GetCard(int cardId)
    {
        var card = await _bankCardRepo.GetAsync(x => x.Id == cardId);

        if (card == null)
            return null;

        return card;
    }

    public async Task<bool> IsCardOwnedByUser(int cardId, string userId)
    {
        var card = await _bankCardRepo.GetAsync(x => x.Id == cardId);

        if (card == null)
            return false;

        return card.UserId == userId;
    }

    public async Task<BankCardDto> UpdateAsync(BankCardUpdateSchema schema)
    {
        throw new NotImplementedException();
    }
}
