using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloWorld : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> GetHelloWorld()
        {
            return "Hello World";
        }
    }
}