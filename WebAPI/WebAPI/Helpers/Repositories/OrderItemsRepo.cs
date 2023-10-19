using WebAPI.Data;
using WebAPI.Models.Entities;

namespace WebAPI.Helpers.Repositories;

public class OrderItemsRepo : GenericRepo<OrderItemEntity>
{
    public OrderItemsRepo(DataContext context) : base(context)
    {
    }
}
