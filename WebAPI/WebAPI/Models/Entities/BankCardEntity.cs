using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models.Entities;

public class BankCardEntity
{
    public int Id { get; set; }

    [Column(TypeName = "nvarchar(16)")]
    public required string CreditCardNumber { get; set; }
    public int CVC { get; set; }
    public required string CardholderName { get; set; }
    public required string CardIssuer { get; set; }
}
