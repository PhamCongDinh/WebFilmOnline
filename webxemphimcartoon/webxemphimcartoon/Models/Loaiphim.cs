using System;
using System.Collections.Generic;

namespace webxemphimcartoon.Models;

public partial class Loaiphim
{
    public int Id { get; set; }

    public string TenLp { get; set; } = null!;

    public virtual ICollection<Phim> Phims { get; set; } = new List<Phim>();
}
