using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models.Entities;

public class CategoryEntity
{
    public int Id { get; set; }
    [Column(TypeName = "nvarchar(255)")]
    public required string Name { get; set; }
    public List<ProductEntity> Products { get; set; } = new();
}