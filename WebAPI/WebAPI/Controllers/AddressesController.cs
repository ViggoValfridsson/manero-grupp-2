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
            var jwsString = Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var id = _accountService.GetIdFromToken(jwsString!);

            if (id == null)
                return Forbid("Jws token did not contain user id.");

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
            var jwsString = Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var id = _accountService.GetIdFromToken(jwsString!);

            if (id == null)
                return Forbid("Jws token did not contain user id.");

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
            var jwsString = Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var id = _accountService.GetIdFromToken(jwsString!);

            if (id == null)
                return Forbid("Jws token did not contain user id.");

            // It is not possible to enter this if statement unless the account has been deleted and therefore the token is invalid.
            if (await _userManager.Users.FirstOrDefaultAsync(x => x.Id == id) == null)
                return BadRequest("The token you tried to use is no longer valid.");

            var address = await _addressService.UpdateUserAddressAsync(schema, id);

            return Ok(address);
        }
        catch
        {
            return StatusCode(502, "Something went wrong when signing up. Please try again.");
        }
    }
}
