using WebAPI.Data;
using WebAPI.Models.Entities;

namespace WebAPI.Helpers.Repositories;

public class TagRepo : GenericRepo<TagEntity>
{
    public TagRepo(DataContext context) : base(context)
    {
    }
}
