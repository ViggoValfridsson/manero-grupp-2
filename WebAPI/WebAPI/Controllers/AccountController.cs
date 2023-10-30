using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebAPI.Models.Dtos;
using WebAPI.Models.Identity;
using WebAPI.Models.Schemas;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly SignInManager<AppUser> _signInManager;
    private readonly IConfiguration _configuration;

    public AccountController(SignInManager<AppUser> signInManager, UserManager<AppUser> userManager, IConfiguration configuration)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _configuration = configuration;
    }


    [HttpPost("SignUp")]
    public async Task<IActionResult> SignUp(SignUpSchema schema)
    {
        try
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (await _userManager.Users.AnyAsync(x => x.Email == schema.Email))
                return Conflict("An account with that email already exists");

            if ((await _userManager.CreateAsync(schema, schema.Password)).Succeeded)
            {
                var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == schema.Email);
                return Created("", (UserDto)user!);
            }

            return StatusCode(502, "Something went wrong when signing up. Make sure all of the provided information was correct and try again.");
        }
        catch
        {
            return StatusCode(502, "Something went wrong when signing up. Please try again.");
        }
    }

    [HttpPost("SignIn")]
    public async Task<IActionResult> SignIn(SignInSchema schema)
    {
        try
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if ((await _signInManager.PasswordSignInAsync(schema.Email, schema.Password, false, false)).Succeeded)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_configuration["JwtSettings:Key"]!);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new[]
                    {
                        new Claim(ClaimTypes.Name, schema.Email),
                        // Add more claims here as needed
                    }),
                    Expires = DateTime.UtcNow.AddMonths(8),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                    Issuer = "https://manero.com",
                    Audience = "https://manero.com"
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);

                return Ok(new { Token = tokenString });
            }

            return Unauthorized("Invalid login credentials, please try again.");
        }
        catch
        {
            return StatusCode(502, "Something went wrong when signing in. Please try again.");
        }
    }
}
