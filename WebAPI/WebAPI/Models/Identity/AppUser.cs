using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models.Identity;

public class AppUser : IdentityUser
{
    [Column(TypeName = "nvarchar(100)")]
    public string FirstName { get; set; } = null!;

    [Column(TypeName = "nvarchar(100)")]
    public string LastName { get; set; } = null!;
}
