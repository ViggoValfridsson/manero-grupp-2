using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Helpers.Repositories;
using WebAPI.Models.Dtos;

namespace WebAPI.Helpers.Services;

public class ProductService
{
    private readonly ProductRepo _productRepo;

    public ProductService(ProductRepo productRepo)
    {
        _productRepo = productRepo;
    }

    public async Task<List<ProductDto>> GetAllAsync()
    {
        var dtos = new List<ProductDto>();
        var entities = await _productRepo.GetAllAsync();

        foreach (var entity in entities)
            dtos.Add(entity);

        return dtos;
    }

    public async Task<List<ProductDto>> GetAllByCategory(string categoryName)
    {
        var dtos = new List<ProductDto>();
        var entities = await _productRepo.GetAllAsync(x => x.Category.Name == categoryName);

        foreach (var entity in entities)
            dtos.Add(entity);

        return dtos;
    }
}
