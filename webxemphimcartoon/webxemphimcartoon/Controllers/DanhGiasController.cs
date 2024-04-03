using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webxemphimcartoon.Models;

namespace webxemphimcartoon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DanhGiasController : ControllerBase
    {
        WebphimonlineContext DB = new WebphimonlineContext();

        [HttpPost("danhgia")]

        public JsonResult danhgia([FromBody] Danhgia req)
        {
            req.ThoiGian = DateTime.Now;
            DB.Add(req);
            DB.SaveChanges();


            return new JsonResult(new { Message = "success", data = req });
        }    
    }
}
