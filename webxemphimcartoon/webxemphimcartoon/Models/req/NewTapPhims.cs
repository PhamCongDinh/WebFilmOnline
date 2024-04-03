namespace webxemphimcartoon.Models.req
{
    public class NewTapPhims
    {
        public List<PhimData> PhimDatas { get; set; }
    }
     public class PhimData
    {
        public string TenPhim { get; set; }
        public int TapSo { get; set; }
        public DateTime ThoiGianChieu { get; set; }
        public DateTime ThoiHan { get; set; }
        public string ThoiLuong { get; set; }
        public string Url_trailer { get; set; }
        public string Url_tapphim { get; set; }
        public int Gia { get; set; }
    }
}
