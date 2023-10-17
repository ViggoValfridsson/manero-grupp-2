using Microsoft.AspNetCore.Mvc;
using WebAPI.Helpers.Services;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoryController : ControllerBase
{
    private readonly CategoryService _categoryService;

    public CategoryController(CategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    [HttpGet]
    public async Task<ActionResult> GetCategories()
    {
        try
        {
            var categories = await _categoryService.GetAllAsync();

            if (categories == null || !categories.Any()) 
                return NotFound("Could not find any categories.");

            return Ok(categories);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when fetching the data from the database. Please try again.");
        }
    }
}
