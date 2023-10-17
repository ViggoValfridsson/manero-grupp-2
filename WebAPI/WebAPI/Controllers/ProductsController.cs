using Microsoft.AspNetCore.Mvc;
using WebAPI.Helpers.Services;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductsController(ProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        try
        {
            var products = await _productService.GetAllAsync();

            if (products == null || !products.Any())
                return NotFound("Could not find any products.");

            return Ok(products);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when fetching the data from the database. Please try again.");
        }
    }

    [HttpGet("category/{categoryName}")]
    public async Task<IActionResult> GetProductsByCategory(string categoryName)
    {
        try
        {
            var products = await _productService.GetAllByCategoryAsync(categoryName);

            if (products == null || !products.Any())
                return NotFound("Could not find any products in the choosen category.");

            return Ok(products);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when fetching the data from the database. Please try again.");
        }
    }
}
