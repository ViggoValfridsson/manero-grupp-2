using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models.Schemas;

public class OrderCustomerCreateSchema
{
    [Required]
    [MinLength(2)]
    [MaxLength(100)]
    [RegularExpression(@"^[a-öA-Ö]+(([',. -][a-öA-Ö ])?[a-öA-Ö]*)*$")]
    public required string FirstName { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(100)]
    [RegularExpression(@"^[a-öA-Ö]+(([',. -][a-öA-Ö ])?[a-öA-Ö]*)*$")]
    public required string LastName { get; set; }

    [Required]
    [MinLength(6)]
    [MaxLength(320)]
    [RegularExpression(@"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")]
    public required string Email { get; set; }

    [Required]
    [MinLength(10)]
    [MaxLength(20)]
    [RegularExpression(@"^(\+\d{1,4}\s?)?(\(?\d{1,}\)?[-.\s]?)+\d{1,}$")]
    public required string PhoneNumber;

    // Send same id multiple times if you wish to purchase multiple of the same item
    public List<int> ProductIds { get; set; } = new();
    public AddressCreateSchema Address { get; set; } = null!;
}
