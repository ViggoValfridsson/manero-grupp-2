using System.ComponentModel.DataAnnotations.Schema;
using WebAPI.Models.Entities;

namespace WebAPI.Models.Dtos;

public class CategoryDto
{
    public int Id { get; set; }
    public required string Name { get; set; }
}
