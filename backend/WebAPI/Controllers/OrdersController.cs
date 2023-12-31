﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Helpers.Extensions;
using WebAPI.Interface.Services;
using WebAPI.Models.Identity;
using WebAPI.Models.Schemas;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _orderService;
    private readonly IAccountService _accountService;
    private readonly UserManager<AppUser> _userManager;

    public OrdersController(IOrderService orderService, IAccountService accountService, UserManager<AppUser> userManager)
    {
        _orderService = orderService;
        _accountService = accountService;
        _userManager = userManager;
    }

    [HttpPost]
    public async Task<IActionResult> PlaceCustomerOrder(OrderCreateSchema schema)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        if (!await _orderService.AllProductItemsValidAsync(schema.Products))
            return BadRequest("One or more of the products requested could not be found in the database.");

        var orderDto = await _orderService.PlaceOrderAsync(schema, null);

        // Return created status code
        return StatusCode(201, orderDto);
    }

    [Authorize]
    [HttpPost("User")]
    public async Task<IActionResult> PlaceUserOrder(OrderCreateSchema schema)
    {
        var userId = _accountService.GetIdFromToken(Request.GetAuthString());

        if (userId == null)
            return StatusCode(403, "Jwt token did not contain user id.");

        // It is not possible to enter this if statement unless the account has been deleted and therefore the token is invalid.
        if (await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId) == null)
            return BadRequest("The token you tried to use is no longer valid.");

        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        if (!await _orderService.AllProductItemsValidAsync(schema.Products))
            return BadRequest("One or more of the products requested could not be found in the database.");

        var orderDto = await _orderService.PlaceOrderAsync(schema, userId);

        // Return created status code
        return StatusCode(201, orderDto);
    }

    [Authorize]
    [HttpGet]
    public async Task<IActionResult> GetUserOrders()
    {
        var userId = _accountService.GetIdFromToken(Request.GetAuthString());

        if (userId == null)
            return StatusCode(403, "Jwt token did not contain user id.");

        if (await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId) == null)
            return BadRequest("The token you tried to use is no longer valid.");

        var orders = await _orderService.GetAllUserOrders(userId);

        return Ok(orders);
    }
}
