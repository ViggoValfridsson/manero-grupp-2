using WebAPI.Data;
using WebAPI.Models.Entities;

namespace WebAPI.Helpers.Repositories;

public class OrderRepo : GenericRepo<OrderEntity>
{
    public OrderRepo(DataContext context) : base(context)
    {
    }
}
