﻿using System;
using System.Collections.Generic;

namespace webxemphimcartoon.Models;

public partial class Taikhoan
{
    public int Id { get; set; }

    public string TenTk { get; set; }

    public string MatKhau { get; set; }

    public string Email { get; set; }

    public int LoaiTk { get; set; }

    public virtual ICollection<Binhluan> Binhluans { get; set; } = new List<Binhluan>();
    public virtual ICollection<Lichsuphim> Lichsuphim { get; set; } = new List<Lichsuphim>();


    public virtual ICollection<Chitiethd> Chitiethds { get; set; } = new List<Chitiethd>();

    public virtual ICollection<Danhgia> Danhgia { get; set; } = new List<Danhgia>();
}
