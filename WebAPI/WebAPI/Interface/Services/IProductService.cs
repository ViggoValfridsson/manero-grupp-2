using System.Linq.Expressions;
using WebAPI.Models.Dtos;
using WebAPI.Models.Entities;

namespace WebAPI.Interface.Services;

public interface IProductService
{
    Task<ProductDto?> GetByIdAsync(int id);
    Task<List<ProductDto>> GetAllAsync(
        int page,
        int pageAmount,
        string? tagName,
        string? categoryName,
        string? orderBy);
}
