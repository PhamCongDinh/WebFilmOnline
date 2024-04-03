using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webxemphimcartoon.Models;

namespace webxemphimcartoon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LichSuXemsController : ControllerBase
    {
        WebphimonlineContext DB = new WebphimonlineContext();


        [HttpGet("lichsu")]
        public JsonResult lichsu([FromQuery] int id)
        {
            var lst = from ls in DB.Lichsuphims
                      join tp in DB.Tapphims on ls.IdTapPhim equals tp.Id
                      join p in DB.Phims on tp.IdPhim equals p.Id
                      join tk in DB.Taikhoans on ls.IdTk equals tk.Id
                      where tk.Id == id
                      select new
                      {
                          p.Id,
                          p.TenPhim,
                          p.AnhPhim,
                          IdTap = tp.Id,
                          tp.TapSo,
                          ls.Create_at
                      };
            return new JsonResult(new { Message = "success", data = lst });

        }
        [HttpPost("addlichsu")]
        public JsonResult addlichsu([FromBody] Lichsuphim req)
        {
            req.Create_at=DateTime.Now;
            DB.Add(req);
            DB.SaveChanges();






            return new JsonResult(new { Message = "success", data = req });

        }


    }
}
