using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using webxemphimcartoon.Models;
using webxemphimcartoon.Models.req;

namespace webxemphimcartoon.Controllers.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class HomeAdminsController : ControllerBase
    {
        WebphimonlineContext DB = new WebphimonlineContext();
        [HttpPost("newphim")]
        public async Task<IActionResult> newphim([FromForm] Newphim req)
        {
            var lp = DB.Loaiphims.Where(x => x.TenLp == req.TenLP).First();
            var hp = DB.Hangphims.Where(x => x.TenHangPhim == req.TenHP).First();
            var phim = new Phim();
            phim.IdHangPhim = hp.Id;
            phim.IdLp = lp.Id;
            phim.ThoiLuongPhim = req.ThoiLuongPhim;
            phim.MoTa = req.MoTa;
            phim.TenPhim = req.TenPhim;
            phim.TongSoTap = req.TongSoTap;
            phim.NgayPhatHanh = req.NgayPhatHanh;
            if (req.AnhPhim != null)
            {
                var imageName = req.AnhPhim.FileName;
                var imagePath = Path.Combine("C:\\fpt\\QLwebphim\\Primeng\\src\\assets\\images", imageName);

                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    await req.AnhPhim.CopyToAsync(stream);
                }

                phim.AnhPhim = req.AnhPhim.FileName;
            }
            DB.Phims.Add(phim);
            DB.SaveChanges();
            return Ok(new { success = true, phim });

        }


        [HttpPost("newtapphim")]
        public async Task<IActionResult> newtapphim([FromBody] NewTapPhims req)
        {
            var hd = new Hoadonnhap
            {
                NgayNhap = DateTime.Now,
            };
            DB.Hoadonnhaps.Add(hd);
            DB.SaveChanges();
            var idHD = hd.Id;

            foreach (var phimdata in req.PhimDatas)
            {
                var ten_phim = phimdata.TenPhim;
                var tapso = phimdata.TapSo;
                var thoigianchieu = phimdata.ThoiGianChieu;
                var thoihan = phimdata.ThoiHan;
                var thoiluong = phimdata.ThoiLuong;
                var url_trailer = phimdata.Url_trailer;
                var url_tapphim = phimdata.Url_tapphim;
                var giaphim = phimdata.Gia;
                var existingTapPhim = DB.Phims
                    .Join(DB.Tapphims, phim => phim.Id, tap => tap.IdPhim, (phim, tap) => new { phim.TenPhim, tap.TapSo })
                    .Where(x => x.TenPhim == ten_phim && x.TapSo == tapso)
                    .FirstOrDefault();
                if (existingTapPhim!= null)
                {
                    return  BadRequest(new { error = "Tập đã tồn tại", existingTapPhim });

                }
                var phim = DB.Phims.FirstOrDefault(x => x.TenPhim == ten_phim);
                var idPhim = phim.Id;
                var tapphim = new Tapphim
                {
                    TapSo = tapso,
                    ThoiGianChieu = thoigianchieu,
                    ThoiHan = thoihan,
                    ThoiLuong = thoiluong,
                    UrlPhim = url_tapphim,
                    UrlTrailer = url_trailer,
                    IdPhim = idPhim,
                };
                DB.Tapphims.Add(tapphim);
                DB.SaveChanges();
                var chitiethd = new Chitiethdn
                {
                    GiaPhim = giaphim,
                    IdPnk = idHD,
                    IdTapPhim = tapphim.Id
                };
                DB.Chitiethdns.Add(chitiethd);
                DB.SaveChanges();
            }
            return Ok(new { success = true, req });
        }



        [HttpGet("getalltp")]
        public JsonResult getalltp()
        {
            var lst = from p in DB.Phims
                      join tp in DB.Tapphims on p.Id equals tp.IdPhim
                      select new
                      {
                          tp,
                          p.TenPhim,
                          p.AnhPhim
                      };
            return new JsonResult(new { Message = "success", data = lst });
        }

        [HttpGet("gettapphimbyid")]
        public JsonResult gettapphimbyid([FromQuery] int id)
        {
            var lst = from p in DB.Phims
                      join tp in DB.Tapphims on p.Id equals tp.IdPhim
                      where p.Id == id
                      select new
                      {
                          tp,
                          p.TenPhim,
                          p.AnhPhim
                      };
            return new JsonResult(new { Message = "success", data = lst });
        }

        [HttpGet("tapphimbyid")]
        public JsonResult tapphimbyid([FromQuery] int id)
        {
            var lst = from p in DB.Phims
                      join tp in DB.Tapphims on p.Id equals tp.IdPhim
                      where tp.Id == id
                      select new
                      {
                          tp,
                          p.TenPhim,
                      };
            return new JsonResult(new { Message = "success", data = lst });
        }


        [HttpPut("updatetapphim")]
        public JsonResult updatetapphim([FromBody] Tapphim req)
        {
            DB.Tapphims.Update(req);
            DB.SaveChanges();
            return new JsonResult(new { Message = "success", data = req });

        }
    }
}
