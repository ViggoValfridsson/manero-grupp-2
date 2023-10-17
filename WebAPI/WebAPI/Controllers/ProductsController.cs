using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using WebAPI.Helpers;
using WebAPI.Helpers.Services;
using WebAPI.Models.Entities;

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
    public async Task<IActionResult> GetProducts([FromQuery] string? tagName, [FromQuery] string? categoryName)
    {
        try
        {
            List<Expression<Func<ProductEntity, bool>>> filters = new();

            if (!string.IsNullOrWhiteSpace(tagName))
                filters.Add(x => 
                    x.Tags.Any(tag => tag.Name.ToLower() == tagName.ToLower()));

            if (!string.IsNullOrWhiteSpace(categoryName))
                filters.Add(x => 
                    x.Category.Name.ToLower() == categoryName.ToLower());

            var products = await _productService.GetAllFilteredAsync(filters);

            if (products == null || !products.Any())
                return NotFound("Could not find any products.");

            return Ok(products);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when fetching the data from the database. Please try again.");
        }
    }

    // delete this and update tests
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
