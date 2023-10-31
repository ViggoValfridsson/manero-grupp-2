using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Helpers.Services;
using WebAPI.Interface.Services;
using WebAPI.Models.Identity;
using WebAPI.Models.Schemas;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AddressesController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IAccountService _accountService;
    private readonly IAddressService _addressService;

    public AddressesController(UserManager<AppUser> userManager, IConfiguration configuration, IAccountService accountService, IAddressService addressService)
    {
        _userManager = userManager;
        _accountService = accountService;
        _addressService = addressService;
    }

    [Authorize]
    [HttpPost]
    public async Task<IActionResult> CreateUserAddress(AddressCreateSchema schema)
    {
        try
        {
            var jwtString = Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var id = _accountService.GetIdFromToken(jwtString!);

            if (id == null)
                return StatusCode(403, "Jwt token did not contain user id.");

            // It is not possible to enter this if statement unless the account has been deleted and therefore the token is invalid.
            if (await _userManager.Users.FirstOrDefaultAsync(x => x.Id == id) == null)
                return BadRequest("The token you tried to use is no longer valid.");

            var result = await _addressService.CreateUserAddressAsync(schema, id);

            return Created("", result);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when signing up. Please try again.");
        }
    }

    [Authorize]
    [HttpGet]
    public async Task<IActionResult> GetUserAddresses()
    {
        try
        {
            var jwtString = Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var id = _accountService.GetIdFromToken(jwtString!);

            if (id == null)
                return StatusCode(403, "Jwt token did not contain user id.");

            // It is not possible to enter this if statement unless the account has been deleted and therefore the token is invalid.
            if (await _userManager.Users.FirstOrDefaultAsync(x => x.Id == id) == null)
                return BadRequest("The token you tried to use is no longer valid.");

            var addresses = await _addressService.GetAllAsync(x => x.UserId == id);

            return Ok(addresses);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when signing up. Please try again.");
        }
    }

    [Authorize]
    [HttpPut]
    public async Task<IActionResult> UpdateUserAddress(AddressUpdateSchema schema)
    {
        try
        {
            var jwtString = Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var userId = _accountService.GetIdFromToken(jwtString!);

            if (userId == null)
                return StatusCode(403, "Jwt token did not contain user id.");

            // It is not possible to enter this if statement unless the account has been deleted and therefore the token is invalid.
            if (await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId) == null)
                return BadRequest("The token you tried to use is no longer valid.");

            if (!(await _addressService.IsAddressOwnedByUserAsync(schema.Id, userId)))
                return StatusCode(403, "You do not have permission to update this address.");


            var address = await _addressService.UpdateUserAddressAsync(schema, userId);

            return Ok(address);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when signing up. Please try again.");
        }
    }
}
