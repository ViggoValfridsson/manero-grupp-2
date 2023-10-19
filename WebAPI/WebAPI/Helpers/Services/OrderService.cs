using WebAPI.Helpers.Repositories;
using WebAPI.Models.Dtos;
using WebAPI.Models.Entities;
using WebAPI.Models.Schemas;

namespace WebAPI.Helpers.Services;

public class OrderService
{
    private readonly OrderRepo _ordererRepo;
    private readonly CustomerService _customerService;
    private readonly OrderItemRepo _orderItemRepo;

    public OrderService(OrderRepo ordererRepo, CustomerService customerService, OrderItemRepo orderItemRepo)
    {
        _ordererRepo = ordererRepo;
        _customerService = customerService;
        _orderItemRepo = orderItemRepo;
    }

    public async Task<OrderDto> PlaceCustomerOrder(OrderCustomerCreateSchema schema)
    {
        var customer = await _customerService.CreateCustomerAsync(schema.Customer);

        // If customer is null something went wrong and we cannot create the order. Therefore we throw an error that will be presented to the user.
        if (customer == null)
            throw new Exception();

        var orderEntity = new OrderEntity
        {
            StatusId = 1,
            CustomerId = customer.Id,
        };



        // public List<OrderItemEntity> Items { get; set; } = new();
        //            public decimal TotalPrice { get; set; }
        //public int StatusId { get; set; }
        //public StatusEntity Status { get; set; } = null!;
        //public int? CustomerId { get; set; }
        //public CustomerEntity? Customer { get; set; }



        // TO DO behöver spara order items
    }
}
