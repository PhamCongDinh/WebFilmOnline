using System;
using System.Collections.Generic;

namespace webxemphimcartoon.Models;

public partial class Hangphim
{
    public int Id { get; set; }

    public string TenHangPhim { get; set; } = null!;

    public virtual ICollection<Phim> Phims { get; set; } = new List<Phim>();
}
