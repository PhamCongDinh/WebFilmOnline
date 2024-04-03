using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webxemphimcartoon.Models;

namespace webxemphimcartoon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhimsController : ControllerBase
    {
        WebphimonlineContext DB = new WebphimonlineContext();



        [HttpGet("phimbyid")]
        public JsonResult phimbyid([FromQuery] int id)
        {
            var lst = from phim in DB.Phims
                       where phim.Id == id
                       select phim;
            return new JsonResult(new { Message = "success", data = lst });
        }
        [HttpGet("alltapbyphim")]
        public JsonResult alltapbyphim([FromQuery] int id)
        {
            var lst = (from tap in DB.Tapphims
                       join phim in DB.Phims on tap.IdPhim equals phim.Id
                       where phim.Id == id
                       select new { phim.TenPhim, tap }).OrderByDescending(t=>t.tap.TapSo);
            return new JsonResult(new { Message = "success", data = lst });

        }
        [HttpGet("playtapphim")]

        public JsonResult playtapphim([FromQuery] int id)
        {
            var lst = from tap in DB.Tapphims
                      join phim in DB.Phims on tap.IdPhim equals phim.Id
                      where tap.Id == id
                      select new { phim.TenPhim, tap };
            return new JsonResult(new { Message = "success", data = lst.ToList() });

        }
        
        //public JsonResult playtapphim([FromQuery] int id_phim, int sotap)
        //{
        //    var lst = from tap in DB.Tapphims
        //              join phim in DB.Phims on tap.IdPhim equals phim.Id
        //              where phim.Id == id_phim && tap.TapSo == sotap
        //              select new { phim.TenPhim, tap };
        //    return new JsonResult(new { Message = "success", data = lst.ToList() });

        //}
    }
}
