---- phpMyAdmin SQL Dump
---- version 5.2.1
---- https://www.phpmyadmin.net/
----
---- Máy chủ: 127.0.0.1
---- Thời gian đã tạo: Th3 19, 2024 lúc 08:55 AM
---- Phiên bản máy phục vụ: 10.4.28-MariaDB
---- Phiên bản PHP: 8.2.4

--SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
--START TRANSACTION;
--SET time_zone = "+00:00";


--/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
--/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
--/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
--/*!40101 SET NAMES utf8mb4 */;

----
---- Cơ sở dữ liệu: webphimonline
----

---- --------------------------------------------------------

----
---- Cấu trúc bảng cho bảng binhluan
----
--create database webphimonline
CREATE TABLE binhluan (
  ID int(11) NOT NULL,
  NoiDung varchar(50) DEFAULT NULL,
  ThoiGian datetime DEFAULT NULL,
  ID_TapPhim int(11) NOT NULL,
  ID_TK int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng binhluan
--

INSERT INTO binhluan (ID, NoiDung, ThoiGian, ID_TapPhim, ID_TK) VALUES
(1, 'Phim rất là hay', '2023-12-06 20:51:26', 1, 1),
(2, 'sắp ra tập mới chưa', '2023-12-15 20:52:12', 2, 2),
(3, 'đồ họa đỉnh quá', '2023-12-14 20:52:42', 3, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng chitiethd
--

CREATE TABLE chitiethd (
  ID int(11) NOT NULL,
  NgayNhan datetime NOT NULL,
  SoTien int(11) DEFAULT NULL,
  ID_TK int(11) DEFAULT NULL,
  ID_HD int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng chitiethd
--

INSERT INTO chitiethd (ID, NgayNhan, SoTien, ID_TK, ID_HD) VALUES
(1, '2023-12-18 14:49:34', 100000, 1, 1),
(2, '2023-12-18 14:50:04', 100000, 2, 2),
(3, '2023-12-18 14:50:19', 100000, 3, 3),
(4, '2023-12-18 14:50:32', 100000, 4, 4),
(5, '2023-12-18 14:50:44', 100000, 5, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng chitiethdn
--

CREATE TABLE chitiethdn (
  ID int(11) NOT NULL,
  GiaPhim int(11) DEFAULT NULL,
  ID_PNK int(11) DEFAULT NULL,
  ID_TapPhim int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng chitiethdn
--

INSERT INTO chitiethdn (ID, GiaPhim, ID_PNK, ID_TapPhim) VALUES
(1, 12345, 1, 1),
(2, 12345678, 2, 2),
(3, 12345678, 3, 3),
(4, 12345678, 4, 4),
(5, 12345678, 5, 5),
(6, 100000, 6, 6),
(7, 123, 7, 7),
(8, 1234, 9, 8),
(9, 1234, 9, 9),
(10, 123, 10, 10),
(11, 123, 10, 11);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng danhgia
--

CREATE TABLE danhgia (
  ID int(11) NOT NULL,
  SoDiem float DEFAULT NULL,
  ThoiGian datetime DEFAULT NULL,
  ID_TapPhim int(11) NOT NULL,
  ID_TK int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng danhgia
--

INSERT INTO danhgia (ID, SoDiem, ThoiGian, ID_TapPhim, ID_TK) VALUES
(1, 8, '2023-12-14 20:53:12', 1, 1),
(2, 9, '2023-12-15 20:52:12', 2, 2),
(3, 10, '2023-12-14 20:52:42', 3, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng hangphim
--

CREATE TABLE hangphim (
  ID int(11) NOT NULL,
  Ten_HangPhim varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng hangphim
--

INSERT INTO hangphim (Ten_HangPhim) VALUES
(N'Trung Quốc'),
(N'Nhật Bản'),
(N'Mỹ'),
(N'Anh'),
(N'Thái Lan'),
(N'Việt Nam');
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng hoadon
--

CREATE TABLE hoadon (
  ID int(11) NOT NULL,
  NgayTao datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng hoadon
--

INSERT INTO hoadon (ID, NgayTao) VALUES
(1, '2023-12-18 14:48:59'),
(2, '2023-12-18 14:48:59'),
(3, '2023-12-18 14:48:59'),
(4, '2023-12-18 14:48:59'),
(5, '2023-12-18 14:48:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng hoadonnhap
--

CREATE TABLE hoadonnhap (
  ID int(11) NOT NULL,
  NgayNhap datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng hoadonnhap
--

INSERT INTO hoadonnhap (ID, NgayNhap) VALUES
(1, '2023-12-30 22:45:00'),
(2, '2023-12-21 22:51:00'),
(3, '2023-12-21 22:51:00'),
(4, '2023-12-21 22:51:00'),
(5, '2023-12-21 22:51:00'),
(6, '2023-12-20 14:47:00'),
(7, '2023-12-01 15:20:00'),
(8, '2023-12-13 15:23:00'),
(9, '2023-12-09 15:32:00'),
(10, '2023-12-07 15:36:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng loaiphim
--

CREATE TABLE loaiphim (
  ID int(11) NOT NULL,
  Ten_LP varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng loaiphim
--
select * from loaiphim
INSERT INTO loaiphim (Ten_LP) VALUES
(N'Tu Tiên'),
(N'Trùng sinh'),
(N'Anime'),
(N'Hiện đại'),
(N'cổ trang');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng phim
--

CREATE TABLE phim (
  ID int(11) NOT NULL,
  Ten_Phim varchar(50) NOT NULL,
  Anh_Phim varchar(50) NOT NULL,
  NgayPhatHanh datetime NOT NULL,
  ThoiLuongPhim varchar(10) DEFAULT NULL,
  MoTa varchar(10) DEFAULT NULL,
  DanhGia float DEFAULT NULL,
  ID_HangPhim int(11) DEFAULT NULL,
  ID_LP int(11) DEFAULT NULL,
  TongSoTap int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng phim
--
select *from hangphim
INSERT INTO phim (Ten_Phim, Anh_Phim, NgayPhatHanh, ThoiLuongPhim, MoTa, DanhGia, ID_HangPhim, ID_LP, TongSoTap) VALUES
(N'Nghịch Thiên Tà Thần', 'NghichThienTaThan.jpg', '2023-12-02 22:44:00', '20p', N'combat nhi', NULL, 1, 1, 100),
(N'Thái Cổ Tinh Thần Quyết', 'ThaiCoTinhThanQuyet.jpg', '2023-12-07 22:48:00', '20p', N'combat nhi', NULL, 6, 2, 100),
(N'Thôn Phệ Tinh Không', 'ThonPheTinhKhong.jpg', '2023-12-05 22:49:00', '20p', N'rất hay', NULL, 2, 3, 100),
(N'Tiên Nghịch', 'TienNghich.jpg', '2023-12-02 22:50:00', '20p', N'Đồ họa đẹp', NULL, 1, 2, 100),
(N'Tiên Võ Đế', 'TienVoDe.jpg', '2023-12-05 22:50:00', '20p', N'Nội dung h', NULL, 1, 1, 100),
(N'Vạn Cổ Cuồng Đế', 'VanCoCuongDe.jpg', '2024-01-07 20:00:56', '20p', NULL, NULL, 1, 3, 100),
(N'Đấu Phá Thương Khung', 'DauPhaThuongKhung.jpg', '2024-01-30 14:00:55', '20 phút', NULL, NULL, 4, 5, 100);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng taikhoan
--

CREATE TABLE taikhoan (
  ID int(11) NOT NULL,
  Ten_TK varchar(50) NOT NULL,
  MatKhau varchar(255) NOT NULL,
  Email varchar(30) NOT NULL,
  Loai_TK int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng taikhoan
--

INSERT INTO taikhoan (ID, Ten_TK, MatKhau, Email, Loai_TK) VALUES
(1, N'Phạm Công Định', '18042002', 'pcd@gmail.com', 1),
(2, 'Nguyễn Việt Anh', '18042002', 'anh@gmail.com', 1),
(3, 'Trần Huy Hiệp', '18042002', 'hiep@gmail.com', 1),
(4, 'Vũ Huy Đức', '18042002', 'Duc@gmail.com', 1),
(5, 'Nguyễn Thế Hào', '18042002', 'hao@gmail.com', 1),
(6, 'abc', '123456', 'abc@gmail.com', 1),
(7, 'abc', '$2y$12$HTH8MjJNKy52ycLaQV/MDeUgP2hYZ.REk/K3yCi6GGapUHbw1nxDu', 'pcd1@gmail.com', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng tapphim
--

CREATE TABLE tapphim (
  ID int(11) NOT NULL,
  ThoiHan datetime NOT NULL,
  TapSo int(11) NOT NULL,
  ThoiGianChieu datetime NOT NULL,
  ThoiLuong varchar(10) DEFAULT NULL,
  URL_Phim varchar(100) DEFAULT NULL,
  URL_Trailer varchar(100) DEFAULT NULL,
  ID_Phim int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng tapphim
--

INSERT INTO tapphim (ThoiHan, TapSo, ThoiGianChieu, ThoiLuong, URL_Phim, URL_Trailer, ID_Phim) VALUES
('2023-12-14 22:45:00', 2, '2023-11-29 22:44:00', '20p', 'https://www.dailymotion.com/embed/video/x8rujy7?autoplay=1&quality=1080&queue-autoplay-next=false&qu', '1234567asdfgyu', 1),
('2023-12-29 22:51:00', 1, '2023-11-29 22:51:00', '20p', 'qưertyufghj', '1234567asdfgyu', 2),
('2023-12-29 22:51:00', 1, '2023-11-29 22:51:00', '20p', 'qưertyufghj', '1234567asdfgyu', 5),
('2023-12-29 22:51:00', 1, '2023-11-29 22:51:00', '20p', 'qưertyufghj', '1234567asdfgyu', 3),
('2023-12-29 22:51:00', 1, '2023-11-29 22:51:00', '20p', 'https://player.phimapi.com/player/?url=https://s2.phim1280.tv/20240118/SCf3ukLV/index.m3u8', '1234567asdfgyu', 4),
('2023-12-01 14:47:00', 27, '2023-12-14 14:47:00', '20p', 'ádfghjk7654ew', '1234567asdfgyu', 1),
('2023-12-08 15:20:00', 1, '2023-12-02 15:20:00', '20', 'https://player.phimapi.com/player/?url=https://s2.phim1280.tv/20231231/Kl6YsRIK/index.m3u8', 'lkjhhgfda', 1),
('2023-12-07 15:32:00', 12, '2023-12-08 15:32:00', '20', 'iiyytrewdgjj', 'lkjhhgfda', 1),
('2023-12-07 15:32:00', 12, '2023-12-08 15:32:00', '20', 'iiyytrewdgjj', 'lkjhhgfda', 3),
('2023-12-01 15:36:00', 2, '2023-12-09 15:36:00', '20', 'iiyytrewdgjj', 'ádfg', 5),
('2023-12-01 15:36:00', 2, '2023-12-09 15:36:00', '20', 'iiyytrewdgjj', 'ádfg', 4);


select phim.ID, phim.Ten_Phim, phim.TongSoTap, phim.Anh_Phim,phim.DanhGia,phim.MoTa, count(tapphim.ID) as solg
from phim left join tapphim on phim.ID = tapphim.ID_Phim
group by phim.ID, phim.Ten_Phim, phim.TongSoTap, phim.Anh_Phim,phim.DanhGia,phim.MoTa
SELECT 
    p.ID,
    p.Ten_Phim,
    p.TongSoTap,
    p.Anh_Phim,
    p.NgayPhatHanh,
    p.ThoiLuongPhim,
    p.MoTa,
    p.DanhGia,
    COUNT(tp.ID) AS SoLuongTap
FROM 
    Phim p
inner JOIN 
    TapPhim tp ON p.ID = tp.ID_Phim
GROUP BY 
    p.ID, p.Ten_Phim, p.TongSoTap, p.Anh_Phim, p.NgayPhatHanh,
    p.ThoiLuongPhim, p.MoTa, p.DanhGia
ORDER BY 
    p.ID DESC;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng binhluan
--
ALTER TABLE binhluan
  ADD PRIMARY KEY (ID),
  ADD KEY ID_TapPhim (ID_TapPhim),
  ADD KEY ID_TK (ID_TK);

--
-- Chỉ mục cho bảng chitiethd
--
ALTER TABLE chitiethd
  ADD PRIMARY KEY (ID),
  ADD KEY ID_TK (ID_TK),
  ADD KEY ID_HD (ID_HD);

--
-- Chỉ mục cho bảng chitiethdn
--
ALTER TABLE chitiethdn
  ADD PRIMARY KEY (ID),
  ADD KEY ID_PNK (ID_PNK),
  ADD KEY ID_TapPhim (ID_TapPhim);

--
-- Chỉ mục cho bảng danhgia
--
ALTER TABLE danhgia
  ADD PRIMARY KEY (ID),
  ADD KEY ID_TapPhim (ID_TapPhim),
  ADD KEY ID_TK (ID_TK);

--
-- Chỉ mục cho bảng hangphim
--
ALTER TABLE hangphim
  ADD PRIMARY KEY (ID);

--
-- Chỉ mục cho bảng hoadon
--
ALTER TABLE hoadon
  ADD PRIMARY KEY (ID);

--
-- Chỉ mục cho bảng hoadonnhap
--
ALTER TABLE hoadonnhap
  ADD PRIMARY KEY (ID);

--
-- Chỉ mục cho bảng loaiphim
--
ALTER TABLE loaiphim
  ADD PRIMARY KEY (ID);

--
-- Chỉ mục cho bảng phim
--
ALTER TABLE phim
  ADD PRIMARY KEY (ID),
  ADD KEY ID_HangPhim (ID_HangPhim),
  ADD KEY ID_LP (ID_LP);

--
-- Chỉ mục cho bảng taikhoan
--
ALTER TABLE taikhoan
  ADD PRIMARY KEY (ID);

--
-- Chỉ mục cho bảng tapphim
--
ALTER TABLE tapphim
  ADD PRIMARY KEY (ID),
  ADD KEY ID_Phim (ID_Phim);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng binhluan
--
ALTER TABLE binhluan
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng chitiethd
--
ALTER TABLE chitiethd
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng chitiethdn
--
ALTER TABLE chitiethdn
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng danhgia
--
ALTER TABLE danhgia
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng hangphim
--
ALTER TABLE hangphim
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng hoadon
--
ALTER TABLE hoadon
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng hoadonnhap
--
ALTER TABLE hoadonnhap
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng loaiphim
--
ALTER TABLE loaiphim
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng phim
--
ALTER TABLE phim
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng taikhoan
--
ALTER TABLE taikhoan
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng tapphim
--
ALTER TABLE tapphim
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng binhluan
--
ALTER TABLE binhluan
  ADD CONSTRAINT binhluan_ibfk_1 FOREIGN KEY (ID_TapPhim) REFERENCES tapphim (ID),
  ADD CONSTRAINT binhluan_ibfk_2 FOREIGN KEY (ID_TK) REFERENCES taikhoan (ID);

--
-- Các ràng buộc cho bảng chitiethd
--
ALTER TABLE chitiethd
  ADD CONSTRAINT chitiethd_ibfk_1 FOREIGN KEY (ID_TK) REFERENCES taikhoan (ID),
  ADD CONSTRAINT chitiethd_ibfk_2 FOREIGN KEY (ID_HD) REFERENCES hoadon (ID);

--
-- Các ràng buộc cho bảng chitiethdn
--
ALTER TABLE chitiethdn
  ADD CONSTRAINT chitiethdn_ibfk_1 FOREIGN KEY (ID_PNK) REFERENCES hoadonnhap (ID),
  ADD CONSTRAINT chitiethdn_ibfk_2 FOREIGN KEY (ID_TapPhim) REFERENCES tapphim (ID);

--
-- Các ràng buộc cho bảng danhgia
--
ALTER TABLE danhgia
  ADD CONSTRAINT danhgia_ibfk_1 FOREIGN KEY (ID_TapPhim) REFERENCES tapphim (ID),
  ADD CONSTRAINT danhgia_ibfk_2 FOREIGN KEY (ID_TK) REFERENCES taikhoan (ID);

--
-- Các ràng buộc cho bảng phim
--
ALTER TABLE phim
  ADD CONSTRAINT phim_ibfk_1 FOREIGN KEY (ID_HangPhim) REFERENCES hangphim (ID),
  ADD CONSTRAINT phim_ibfk_2 FOREIGN KEY (ID_LP) REFERENCES loaiphim (ID);

--
-- Các ràng buộc cho bảng tapphim
--
ALTER TABLE tapphim
  ADD CONSTRAINT tapphim_ibfk_1 FOREIGN KEY (ID_Phim) REFERENCES phim (ID);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
