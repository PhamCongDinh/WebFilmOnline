using Microsoft.Data.SqlClient;

namespace webxemphimcartoon.Models.req
{
    public class Phimreq
    {
        public int ID { get; set; }
        public string Ten_Phim { get; set; }
        public int TongSoTap { get; set; }
        public string Anh_Phim { get; set; }
        public double DanhGia { get; set; }
        public string MoTa { get; set; }
        public int solg { get; set; }

       
    }
}
