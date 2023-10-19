using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models.Entities;

[PrimaryKey(nameof(ProductId), nameof(SizeId), nameof(OrderId))]
public class OrderItemEntity
{
    public int ProductId { get; set; }
    public ProductEntity Product { get; set; } = null!;
    public int SizeId { get; set; }
    public SizeEntity Size { get; set; } = null!;
    public int OrderId { get; set; }
    public OrderEntity Order { get; set; } = null!;
    public int Quantity { get; set; }
}
