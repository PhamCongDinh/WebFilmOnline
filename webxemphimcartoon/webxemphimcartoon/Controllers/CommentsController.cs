using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using webxemphimcartoon.Models;

namespace webxemphimcartoon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        WebphimonlineContext DB = new WebphimonlineContext();

        [HttpGet("getallcmmt")]
        public JsonResult getallcmmt([FromQuery] int req)
        {
            var cmmt = from tk in DB.Taikhoans
                       join bl in DB.Binhluans on tk.Id equals bl.IdTk
                       join tp in DB.Tapphims on bl.IdTapPhim equals tp.Id
                       where tp.Id == req
                       select new
                       {
                           tk.Email,
                           tk.TenTk,
                           bl.NoiDung
                       };
            return new JsonResult(new { Message = "success", data = cmmt });

        }

        [HttpPost("addcmmt")]
        public JsonResult addcmmt([FromBody] Binhluan req)
        {
            req.ThoiGian = DateTime.Now;
            DB.Add(req);
            DB.SaveChanges();


            return new JsonResult(new { Message = "success", data =  req});

        }
    }
}
