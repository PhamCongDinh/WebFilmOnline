using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using webxemphimcartoon.Models;

namespace webxemphimcartoon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthensController : ControllerBase
    {
        IConfiguration config;
        WebphimonlineContext db = new WebphimonlineContext();

        public AuthensController(IConfiguration config)
        {
            this.config = config;
        }

        [HttpPost("login")]

        public IActionResult Login([FromBody] Taikhoan req)
        {
            var user = db.Taikhoans.FirstOrDefault(x=>x.Email==req.Email && x.MatKhau==req.MatKhau);
            if (user != null)
            {
                var key = config["Jwt:Key"];
                var signkey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
                var sign = new SigningCredentials(signkey, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                    issuer: config["Jwt:Iss"],
                    audience: config["Jwt:Aud"],
                    //expires: DateTime.Now.AddHours(1),
                    expires: DateTime.Now.AddMinutes(1),
                    claims: new[]
                    {
                        new Claim("userId", user.Id.ToString())
                    },
                    signingCredentials: sign);
                var tokenlog = new JwtSecurityTokenHandler().WriteToken(token);
                return new JsonResult(new { username = user.TenTk, token = tokenlog });
            }
            else
            {
                return new JsonResult(new { message = "fail" });
            }
        }
    }
}
