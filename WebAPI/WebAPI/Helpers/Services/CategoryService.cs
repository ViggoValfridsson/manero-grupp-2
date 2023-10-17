using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models.Dtos;

namespace WebAPI.Helpers.Services;

public class CategoryService
{
    private readonly DataContext _context;

    public CategoryService(DataContext context)
    {
        _context = context;
    }

    public async Task<List<CategoryDto>> GetAllAsync()
    {
        var dtos = new List<CategoryDto>();
        var entities = await _context.Categories.ToListAsync();

        foreach (var entity in entities)
            dtos.Add(entity);

        return dtos;
    }
}
