using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models.Entities;

public class OrderEntity
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public int MyProperty { get; set; }
    [Column(TypeName = "money")]
    public decimal TotalPrice { get; set; }
    public int StatusId { get; set; }
    public StatusEntity Status { get; set; } = null!;
    public int? CustomerId { get; set; }
    public CustomerEntity? Customer { get; set; }
}