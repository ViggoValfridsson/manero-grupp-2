using WebAPI.Helpers.Repositories;
using WebAPI.Interface.Repositories;
using WebAPI.Models.Entities;
using WebAPI.Models.Schemas;

namespace WebAPI.Helpers.Services;

public class CustomerService
{
    private readonly ICustomerRepo _customerRepo;

    public CustomerService(ICustomerRepo customerRepo)
    {
        _customerRepo = customerRepo;
    }

    public async Task<CustomerEntity> CreateCustomerAsync(CustomerCreateSchema schema)
    {
        var entity = await _customerRepo.CreateAsync(schema);

        return entity;
    }
}
