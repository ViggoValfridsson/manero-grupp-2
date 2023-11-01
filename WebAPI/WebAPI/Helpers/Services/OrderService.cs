using WebAPI.Helpers.Repositories;
using WebAPI.Interface.Repositories;
using WebAPI.Interface.Services;
using WebAPI.Models.Dtos;
using WebAPI.Models.Entities;
using WebAPI.Models.Schemas;

namespace WebAPI.Helpers.Services;

public class OrderService : IOrderService
{
    private readonly IOrderRepo _orderRepo;
    private readonly ICustomerService _customerService;
    private readonly IOrderItemRepo _orderItemRepo;
    private readonly IProductRepo _productRepo;
    private readonly IAddressService _addressService;
    private readonly ISizeRepo _sizeRepo;

    public OrderService(IOrderRepo orderRepo, ICustomerService customerService, IOrderItemRepo orderItemRepo, IProductRepo productRepo, IAddressService addressService, ISizeRepo sizeRepo)
    {
        _orderRepo = orderRepo;
        _customerService = customerService;
        _orderItemRepo = orderItemRepo;
        _productRepo = productRepo;
        _addressService = addressService;
        _sizeRepo = sizeRepo;
    }

    public async Task<OrderDto> PlaceUserOrderAsync(OrderUserCreateSchema schema, string userId)
    {
        return await _orderRepo.GetAsync(x => x.Id == 1);
    }

    public async Task<OrderDto> PlaceCustomerOrderAsync(OrderCustomerCreateSchema schema)
    {
        var customer = await _customerService.CreateCustomerAsync(schema.Customer);
        // We don't need to display the address anywhere so it isn't saved
        var address = await _addressService.CreateCustomerAddressAsync(schema.Address, customer.Id);
        var orderEntity = await CreateOrderWithCustomerAsync(schema, customer, address.Id);
        var orderItemEntities = await CreateOrderItemsAsync(schema.Products, orderEntity.Id);

        // Add all the newly created order items to the order so they can be seen in the DTO
        orderEntity.Items = orderItemEntities;

        return orderEntity;
    }

    public async Task<OrderEntity> CreateOrderWithCustomerAsync(OrderCustomerCreateSchema schema, CustomerEntity customer, int addressId)
    {
        var orderEntity = new OrderEntity
        {
            StatusId = 1,
            CustomerId = customer.Id,
            AddressId = addressId,
        };

        orderEntity.TotalPrice = await CalculateTotalPriceAsync(schema.Products);
        // Add to database here since all the required information has been calculated
        orderEntity = await _orderRepo.CreateAsync(orderEntity);
        // Order gets fetched again to get all includes so it can be converted into DTO
        orderEntity = await _orderRepo.GetAsync(x => x.Id == orderEntity.Id);

        return orderEntity!;
    }

    public async Task<decimal> CalculateTotalPriceAsync(List<OrderItemSchema> orderItems)
    {
        decimal totalPrice = 0;

        foreach (var orderItem in orderItems)
        {
            var product = await _productRepo.GetAsync(x => x.Id == orderItem.ProductId);

            // If product is null the order data is incorrect and the order should be refused
            if (product == null)
                throw new Exception();

            totalPrice += (product.Price * orderItem.Quantity);
        }

        return totalPrice;
    }

    public async Task<List<OrderItemEntity>> CreateOrderItemsAsync(List<OrderItemSchema> orderItemSchemas, int orderId)
    {
        List<OrderItemEntity> orderItems = new();

        foreach (var orderItemSchema in orderItemSchemas)
        {
            var entity = new OrderItemEntity
            {
                OrderId = orderId,
                ProductId = orderItemSchema.ProductId,
                //SizeId = orderItemSchema.SizeId,
                Quantity = orderItemSchema.Quantity
            };

            entity.SizeId = (await _sizeRepo.GetAsync(x => x.Name == orderItemSchema.Size.ToUpper()))!.Id;

            entity = await _orderItemRepo.CreateAsync(entity);

            orderItems.Add(entity);
        }

        return orderItems;
    }

    public async Task<bool> AllProductItemsValidAsync(List<OrderItemSchema> items)
    {
        foreach (var item in items)
        {
            var isValidProduct = await _productRepo.AnyAsync(x => x.Id == item.ProductId);
            var isValidProductSize = await _productRepo.AnyAsync(x => x.Id == item.ProductId && x.AvailableSizes.Any(x => x.Name.ToLower() == item.Size.ToLower()));
            
            if (!isValidProduct || !isValidProductSize)
                return false;
        }

        return true;
    }
}
