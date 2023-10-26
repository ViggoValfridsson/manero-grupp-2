using Microsoft.AspNetCore.Mvc;
using WebAPI.Helpers.Services;
using WebAPI.Interface.Repositories;
using WebAPI.Interface.Services;
using WebAPI.Models.Schemas;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _orderService;

    public OrdersController(IOrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpPost]
    public async Task<IActionResult> PlaceCustomerOrder(OrderCustomerCreateSchema schema)
    {
        try
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!await _orderService.AllProductItemsValidAsync(schema.Products))
                return BadRequest("One or more of the products requested could not be found in the database.");

            var orderDto = await _orderService.PlaceCustomerOrderAsync(schema);

            // Return created status code
            return StatusCode(201, orderDto);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when processing the order. Please try again.");
        }
    }
}
