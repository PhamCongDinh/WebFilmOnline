using System.Drawing;

namespace webxemphimcartoon.Models.req
{
    public class Newphim
    {
        public int Id { get; set; }
        public string TenPhim { get; set; }
        public IFormFile AnhPhim { get; set; }
        public DateTime NgayPhatHanh { get; set; }
        public string? ThoiLuongPhim { get; set; }
        public string? MoTa { get; set; }
        public string TenLP {  get; set; }
        public string TenHP { get; set; }
        public int TongSoTap { get; set; }

    }
}
