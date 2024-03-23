using System;
using System.Collections.Generic;

namespace webxemphimcartoon.Models;

public partial class Taikhoan
{
    public int Id { get; set; }

    public string TenTk { get; set; } = null!;

    public string MatKhau { get; set; } = null!;

    public string Email { get; set; } = null!;

    public int LoaiTk { get; set; }

    public virtual ICollection<Binhluan> Binhluans { get; set; } = new List<Binhluan>();

    public virtual ICollection<Chitiethd> Chitiethds { get; set; } = new List<Chitiethd>();

    public virtual ICollection<Danhgium> Danhgia { get; set; } = new List<Danhgium>();
}
