using WebAPI.Data;
using WebAPI.Models.Entities;

namespace WebAPI.Helpers.Repositories;

public class CategoryRepo : GenericRepo<CategoryEntity>
{
    public CategoryRepo(DataContext context) : base(context)
    {
    }
}
