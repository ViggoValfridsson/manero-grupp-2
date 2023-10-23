using WebAPI.Helpers.Repositories;
using WebAPI.Interface.Repositories;
using WebAPI.Models.Dtos;

namespace WebAPI.Helpers.Services;

public class CategoryService
{
    private readonly ICategoryRepo _categoryRepo;

    public CategoryService(ICategoryRepo categoryRepo)
    {
        _categoryRepo = categoryRepo;
    }

    public async Task<List<CategoryDto>> GetAllAsync()
    {
        var dtos = new List<CategoryDto>();
        var entities = await _categoryRepo.GetAllAsync();

        foreach (var entity in entities)
            dtos.Add(entity);

        return dtos;
    }
}
