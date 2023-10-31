using System.Linq.Expressions;
using WebAPI.Helpers.Repositories;
using WebAPI.Interface.Repositories;
using WebAPI.Interface.Services;
using WebAPI.Models.Dtos;
using WebAPI.Models.Entities;
using WebAPI.Models.Schemas;

namespace WebAPI.Helpers.Services;

public class AddressService : IAddressService
{
    private readonly IAddressRepo _addressRepo;

    public AddressService(IAddressRepo addressRepo)
    {
        _addressRepo = addressRepo;
    }

    public async Task<AddressDto> CreateCustomerAddressAsync(AddressCreateSchema schema, int customerId)
    {
        var addressEntity = new AddressEntity
        {
            City = schema.City,
            StreetName = schema.StreetAddress,
            PostalCode = schema.PostalCode,
            CustomerId = customerId,
        };

        addressEntity = await _addressRepo.CreateAsync(addressEntity);

        return addressEntity;
    }

    public async Task<AddressDto> CreateUserAddressAsync(AddressCreateSchema schema, string userId)
    {
        var addressEntity = new AddressEntity
        {
            City = schema.City,
            StreetName = schema.StreetAddress,
            PostalCode = schema.PostalCode,
            UserId = userId
        };

        addressEntity = await _addressRepo.CreateAsync(addressEntity);

        return addressEntity;
    }

    public async Task<List<AddressDto>> GetAll(Expression<Func<AddressEntity, bool>> predicate)
    {
        var dtos = new List<AddressDto>();
        var entities = await _addressRepo.GetAllAsync(predicate);

        foreach (var entity in entities)
            dtos.Add(entity);

        return dtos;
    }
}
