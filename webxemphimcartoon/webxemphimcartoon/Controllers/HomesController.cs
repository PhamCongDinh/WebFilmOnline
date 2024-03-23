using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using webxemphimcartoon.Models;
using webxemphimcartoon.Models.req;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Data.Entity.SqlServer;

namespace webxemphimcartoon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomesController : ControllerBase
    {
       WebphimonlineContext DB = new WebphimonlineContext();

        [HttpGet("Getallphim")]
        public JsonResult Getallphim()
        {
            var lst = DB.Phims.Include(p => p.Tapphims)
                .Select(p => new
                {
                    p.Id,
                    p.TenPhim,
                    p.TongSoTap,
                    p.AnhPhim,
                    p.ThoiLuongPhim,
                    p.MoTa,
                    p.DanhGia,
                    SoLuongTap = p.Tapphims.Count()
                }).OrderByDescending(p => p.Id);
            return new JsonResult(new {Message="success", data=lst});

        }
        [HttpGet("getfilmbypag")]
        public async Task<IActionResult> getfilmbypag(int page,int pagesize)
        {
            var lst = DB.Phims.Include(p => p.Tapphims)
                .Select(p => new
                {
                    p.Id,
                    p.TenPhim,
                    p.TongSoTap,
                    p.AnhPhim,
                    p.ThoiLuongPhim,
                    p.MoTa,
                    p.DanhGia,
                    SoLuongTap = p.Tapphims.Count()
                }).OrderByDescending(p => p.Id);
            int totalCount = await lst.CountAsync();
            var films = await lst.Skip((page-1)*pagesize).Take(pagesize).ToListAsync();
            return new JsonResult(new {Message="success", Totalcount=totalCount,data=films});
        }
        [HttpGet("getfilmbypag1")]
        public async Task<IActionResult> getfilmbypag1(int page)
        {
            var lst = DB.Phims.Include(p => p.Tapphims)
                .Select(p => new
                {
                    p.Id,
                    p.TenPhim,
                    p.TongSoTap,
                    p.AnhPhim,
                    p.ThoiLuongPhim,
                    p.MoTa,
                    p.DanhGia,
                    SoLuongTap = p.Tapphims.Count()
                }).OrderByDescending(p => p.Id);
            int totalCount = await lst.CountAsync();
            var films = await lst.Skip((page - 1) * 4).Take(4).ToListAsync();
            return new JsonResult(new { Message = "success", Totalcount = totalCount, data = films });
        }





        [HttpGet("Getalltheloai")]
        public JsonResult Getalltheloai()
        {
            var lst = DB.Loaiphims.ToList();
            return new JsonResult(new { Message = "success", data = lst });
        }
        [HttpGet("phimbytheloai")]
        public JsonResult phimbytheloai([FromQuery] int id)
        {
            var lst = from phim in DB.Phims
                      join tapPhim in DB.Tapphims on phim.Id equals tapPhim.IdPhim into tapPhimGroup
                      from tapPhim in tapPhimGroup.DefaultIfEmpty()
                      join loaiPhim in DB.Loaiphims on phim.IdLp equals loaiPhim.Id
                      where loaiPhim.Id == id
                      group new { phim, tapPhim } by new
                      {
                          phim.Id,
                          phim.TenPhim,
                          phim.TongSoTap,
                          phim.AnhPhim,
                          phim.NgayPhatHanh,
                          phim.ThoiLuongPhim,
                          phim.MoTa,
                          phim.DanhGia
                      } into grouped
                      select new
                      {
                          ID = grouped.Key.Id,
                          Ten_Phim = grouped.Key.TenPhim,
                          TongSoTap = grouped.Key.TongSoTap,
                          Anh_Phim = grouped.Key.AnhPhim,
                          NgayPhatHanh = grouped.Key.NgayPhatHanh,
                          ThoiLuongPhim = grouped.Key.ThoiLuongPhim,
                          MoTa = grouped.Key.MoTa,
                          DanhGia = grouped.Key.DanhGia,
                          SoLuongTap = grouped.Count(x => x.tapPhim != null)
                      };


            return new JsonResult(new { Message = "success", data = lst });

        }

       
        //[HttpGet("phimbydate")]



        //public JsonResult phimbydate([FromQuery] int thu)
        //{
        //    var query = (from phim in DB.Phims
        //                 join tapPhim in DB.Tapphims on phim.Id equals tapPhim.IdPhim into tapPhimGroup
        //                 from subTapPhim in tapPhimGroup.DefaultIfEmpty()
        //                 where EF.Functions.DiffDays(subTapPhim.ThoiGianChieu, DateTime.Now.Date) % 7 == 0 || subTapPhim == null
        //                 select new
        //                 {
        //                     phim.ID,
        //                     phim.Ten_Phim,
        //                     phim.TongSoTap,
        //                     phim.Anh_Phim,
        //                     phim.DanhGia,
        //                     phim.MoTa,
        //                     SoLuong = tapPhimGroup.Count()
        //                 }).ToList();





        //    return new JsonResult(new { Message = "success", data = query });
        //}









    }
}
