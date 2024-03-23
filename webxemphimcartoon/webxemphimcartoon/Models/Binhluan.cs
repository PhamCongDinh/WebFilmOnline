using System;
using System.Collections.Generic;

namespace webxemphimcartoon.Models;

public partial class Binhluan
{
    public int Id { get; set; }

    public string? NoiDung { get; set; }

    public DateTime? ThoiGian { get; set; }

    public int IdTapPhim { get; set; }

    public int IdTk { get; set; }

    public virtual Tapphim IdTapPhimNavigation { get; set; } = null!;

    public virtual Taikhoan IdTkNavigation { get; set; } = null!;
}
