using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ErrorController : ControllerBase
{
    [HttpGet]
    public ActionResult Error()
    {
        return StatusCode(502, "Something went wrong when fetching the data from the database. Please try again.");
        // return Problem("Something went wrong when fetching the data from the database. Please try again.");
    }

    [HttpGet("test")]
    public ActionResult TestErrorHandling()
    {
        throw new Exception();
    }
}