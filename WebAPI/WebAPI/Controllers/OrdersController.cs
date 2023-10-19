using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using WebAPI.Helpers.Services;
using WebAPI.Models.Entities;
using WebAPI.Models.Schemas;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class OrdersController : ControllerBase
{
    private readonly OrderService _orderService;

    public OrdersController(OrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpPost]
    public async Task<IActionResult> GetProducts(OrderCustomerCreateSchema schema)
    {
        try
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var orderDto = await _orderService.PlaceCustomerOrderAsync(schema);

            return Ok(orderDto);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when processing the order. Please try again.");
        }
    }
}
