using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models.Dtos;

namespace WebAPI.Helpers.Services;

public class ProductService
{
    private readonly DataContext _context;

    public ProductService(DataContext context)
    {
        _context = context;
    }

    public async Task<List<ProductDto>> GetAllAsync()
    {
        var dtos = new List<ProductDto>();
        var entities = await _context.Products
            .Include(x => x.Tags)
            .Include(x => x.Category)
            .Include(x => x.Images)
            .Include(x => x.AvailableSizes)
            .ToListAsync();

        foreach (var entity in entities)
            dtos.Add(entity);

        return dtos;
    }
}
