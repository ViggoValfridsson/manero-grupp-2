using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models.Entities;

public class AddressEntity
{
    public int Id { get; set; }
    [Column(TypeName = "nvarchar(255)")]
    public required string StreetName { get; set; }
    [Column(TypeName = "nvarchar(255)")]
    public required string City { get; set; }
    [Column(TypeName = "nvarchar(20)")]
    public required string PostalCode { get; set; }
    public int? CustomerId { get; set; }
    public CustomerEntity? Customer { get; set; }
}