using WebAPI.Helpers.Repositories;
using WebAPI.Interface.Repositories;
using WebAPI.Models.Dtos;

namespace WebAPI.Helpers.Services;

public class TagService
{
    private readonly ITagRepo _tagRepo;

    public TagService(ITagRepo tagRepo)
    {
        _tagRepo = tagRepo;
    }

    public async Task<List<TagDto>> GetAllAsync()
    {
        var dtos = new List<TagDto>();
        var entities = await _tagRepo.GetAllAsync();

        foreach (var entity in entities)
            dtos.Add(entity);

        return dtos;
    }
}
