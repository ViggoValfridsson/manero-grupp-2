using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using WebAPI.Helpers.Services;
using WebAPI.Interface.Repositories;
using WebAPI.Interface.Services;
using WebAPI.Models.Entities;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;
    private readonly IProductRepo _productRepo;

    public ProductsController(IProductService productService, IProductRepo productRepo)
    {
        _productService = productService;
        _productRepo = productRepo;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetProduct(int id)
    {
        try
        {
            var product = await _productService.GetByIdAsync(id);

            if (product == null)
                return NotFound($"Could not find product with id: {id}.");

            return Ok(product);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when fetching the data from the database. Please try again.");
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetProducts([FromQuery] string? tag, [FromQuery] string? category, [FromQuery] string? orderBy, [FromQuery] int? page, [FromQuery] int? pageAmount)
    {
        try
        {
            var products = await _productService.GetAllAsync(page ?? 0, pageAmount ?? 32, tag, category, orderBy);

            return Ok(products);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when fetching the data from the database. Please try again.");
        }
    }

    [HttpGet("Count")]
    public async Task<IActionResult> GetProductCount([FromQuery] string? tag, [FromQuery] string? category)
    {
        try
        {
            var productCount = await _productRepo.GetProductCount(tag, category);

            return Ok(productCount);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when fetching the data from the database. Please try again.");
        }
    }
}
