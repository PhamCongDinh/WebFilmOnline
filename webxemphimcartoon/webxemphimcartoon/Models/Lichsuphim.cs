namespace webxemphimcartoon.Models
{
    public class Lichsuphim
    {
        public int Id { get; set; }
        public DateTime? Create_at { get; set; }

        public int IdTapPhim { get; set; }

        public int IdTk { get; set; }

        public virtual Tapphim? IdTapPhimNavigation { get; set; }

        public virtual Taikhoan? IdTkNavigation { get; set; }
    }
}
