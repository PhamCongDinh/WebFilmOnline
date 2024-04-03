create table lichsuphim(
  ID INT IDENTITY(1,1) PRIMARY KEY,
  ID_Tapphim int,
  ID_TK int,
  create_at datetime,
  FOREIGN KEY (ID_TapPhim) REFERENCES tapphim(ID),
  FOREIGN KEY (ID_TK) REFERENCES taikhoan(ID)
)
insert into lichsuphim(ID_Tapphim,ID_TK,create_at) values
(3,1,GETDATE())

select phim.Ten_Phim, tapphim.TapSo, lichsuphim.create_at from lichsuphim join tapphim on lichsuphim.ID_Tapphim = tapphim.ID
                          join phim on tapphim.ID_Phim = phim.ID
                          join taikhoan on lichsuphim.ID_TK =taikhoan.ID
                          where taikhoan.ID =1
create TABLE taikhoan (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  Ten_TK nvarchar(50) NOT NULL,
  MatKhau varchar(255) NOT NULL,
  Email varchar(30) NOT NULL,
  Loai_TK int NOT NULL
);

-- Cấu trúc bảng cho bảng `hoadon`
CREATE TABLE hoadon (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  NgayTao datetime NOT NULL
);

-- Cấu trúc bảng cho bảng `hoadonnhap`
CREATE TABLE hoadonnhap (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  NgayNhap datetime NOT NULL
);

create table hangphim(
  ID INT IDENTITY(1,1) PRIMARY KEY,
  Ten_HangPhim Nvarchar(50) Not null
  )

	create table loaiphim(
	  ID INT IDENTITY(1,1) PRIMARY KEY,
	Ten_LP nvarchar(50) not null
);
https://www.dailymotion.com/embed/video/x8rujy7?autoplay=1&quality=1080&queue-autoplay-next=false&qu

-- Cấu trúc bảng cho bảng `phim`
CREATE TABLE phim (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  Ten_Phim varchar(50) NOT NULL,
  Anh_Phim varchar(50) NOT NULL,
  NgayPhatHanh datetime NOT NULL,
  ThoiLuongPhim varchar(10) DEFAULT NULL,
  MoTa varchar(10) DEFAULT NULL,
  DanhGia float DEFAULT NULL,
  ID_HangPhim int DEFAULT NULL,
  ID_LP int DEFAULT NULL,
  TongSoTap int NOT NULL,
  FOREIGN KEY (ID_HangPhim) REFERENCES hangphim(ID),
  FOREIGN KEY (ID_LP) REFERENCES loaiphim(ID)
);

select * from tapphim




-- Cấu trúc bảng cho bảng `binhluan`
CREATE TABLE binhluan (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  NoiDung varchar(50) DEFAULT NULL,
  ThoiGian datetime DEFAULT NULL,
  ID_TapPhim int NOT NULL,
  ID_TK int NOT NULL,
  FOREIGN KEY (ID_TapPhim) REFERENCES tapphim(ID),
  FOREIGN KEY (ID_TK) REFERENCES taikhoan(ID)
);

-- Cấu trúc bảng cho bảng `chitiethd`
CREATE TABLE chitiethd (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  NgayNhan datetime NOT NULL,
  SoTien int DEFAULT NULL,
  ID_TK int DEFAULT NULL,
  ID_HD int DEFAULT NULL,
  FOREIGN KEY (ID_TK) REFERENCES taikhoan(ID),
  FOREIGN KEY (ID_HD) REFERENCES hoadon(ID)
);

-- Cấu trúc bảng cho bảng `chitiethdn`
CREATE TABLE chitiethdn (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  GiaPhim int DEFAULT NULL,
  ID_PNK int DEFAULT NULL,
  ID_TapPhim int DEFAULT NULL,
  FOREIGN KEY (ID_PNK) REFERENCES hoadonnhap(ID),
  FOREIGN KEY (ID_TapPhim) REFERENCES tapphim(ID)
);

-- Cấu trúc bảng cho bảng `danhgia`
CREATE TABLE danhgia (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  SoDiem float DEFAULT NULL,
  ThoiGian datetime DEFAULT NULL,
  ID_TapPhim int NOT NULL,
  ID_TK int NOT NULL,
  FOREIGN KEY (ID_TapPhim) REFERENCES tapphim(ID),
  FOREIGN KEY (ID_TK) REFERENCES taikhoan(ID)
);




-- Cấu trúc bảng cho bảng `taikhoan`


-- Cấu trúc bảng cho bảng `tapphim`
CREATE TABLE tapphim (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  ThoiHan datetime NOT NULL,
  TapSo int NOT NULL,
  ThoiGianChieu datetime NOT NULL,
  ThoiLuong varchar(10) DEFAULT NULL,
  URL_Phim varchar(100) DEFAULT NULL,
  URL_Trailer varchar(100) DEFAULT NULL,
  ID_Phim int DEFAULT NULL,
  FOREIGN KEY (ID_Phim) REFERENCES phim(ID)
);

delete from phim
DBCC CHECKIDENT ('phim', RESEED, 0);
select * from loaiphim inner join phim on  phim.ID_LP = loaiphim.ID where loaiphim.ID=5
select phim.ID,
    phim.Ten_Phim,
    phim.TongSoTap,
    phim.Anh_Phim,
    phim.NgayPhatHanh,
    phim.ThoiLuongPhim,
    phim.MoTa,
    phim.DanhGia,
    COUNT(tapphim.ID) AS SoLuongTap from tapphim right join phim on tapphim.ID_Phim = phim.ID
right join loaiphim on phim.ID_LP = loaiphim.ID
where loaiphim.ID=1
group by phim.ID,
    phim.Ten_Phim,
    phim.TongSoTap,
    phim.Anh_Phim,
    phim.NgayPhatHanh,
    phim.ThoiLuongPhim,
    phim.MoTa,
    phim.DanhGia




	select phim.ID, phim.Ten_Phim, phim.TongSoTap, phim.Anh_Phim,phim.DanhGia,phim.MoTa, count(tapphim.ID) as solg
from phim left join tapphim on phim.ID = tapphim.ID_Phim where DATEPART(dw,tapphim.ThoiGianChieu)=6
group by phim.ID, phim.Ten_Phim, phim.TongSoTap, phim.Anh_Phim,phim.DanhGia,phim.MoTa

SELECT 
    phim.ID, 
    phim.Ten_Phim, 
    phim.TongSoTap, 
    phim.Anh_Phim, 
    phim.DanhGia, 
    phim.MoTa, 
    (
        SELECT COUNT(t.ID)
        FROM tapphim t
        WHERE phim.ID = t.ID_Phim
    ) AS solg
FROM 
    phim 
 JOIN 
    tapphim ON phim.ID = tapphim.ID_Phim 
WHERE 
    DATEPART(dw, tapphim.ThoiGianChieu) = 4 OR tapphim.ThoiGianChieu IS NULL;


	SELECT 
    phim.ID, 
    phim.Ten_Phim, 
    phim.TongSoTap, 
    phim.Anh_Phim, 
    phim.DanhGia, 
    phim.MoTa, 
    COUNT(tapphim.ID) AS solg
FROM 
    phim
 JOIN 
    tapphim ON phim.ID = tapphim.ID_Phim
WHERE 
  exists (	SELECT * from phim, tapphim WHERE DATEPART(dw, tapphim.ThoiGianChieu) = 3)
GROUP BY 
    phim.ID, 
    phim.Ten_Phim, 
    phim.TongSoTap, 
    phim.Anh_Phim, 
    phim.DanhGia, 
    phim.MoTa;






SELECT 
    phim.ID, 
    phim.Ten_Phim, 
    phim.TongSoTap, 
    phim.Anh_Phim,
    phim.DanhGia,
    phim.MoTa, 
    COUNT(tapphim.ID) AS solg
FROM phim 
inner JOIN (
    SELECT ID_Phim FROM tapphim
   WHERE DATEPART(dw, ThoiGianChieu) = 4
) AS tapphim_filtered ON phim.ID = tapphim_filtered.ID_Phim
inner JOIN tapphim ON phim.ID = tapphim.ID_Phim
GROUP BY 
    phim.ID, 
    phim.Ten_Phim, 
    phim.TongSoTap, 
    phim.Anh_Phim,
    phim.DanhGia,
    phim.MoTa;





WITH NumberedTaps AS (
    SELECT 
        ID_Phim,
        TapSo,
        ROW_NUMBER() OVER (PARTITION BY ID_Phim ORDER BY ThoiGianChieu) AS RowNumber
    FROM 
        tapphim
)
SELECT 
    phim.ID, 
    phim.Ten_Phim, 
    phim.TongSoTap, 
    phim.Anh_Phim,
    phim.DanhGia,
    phim.MoTa,
    COUNT(DISTINCT NumberedTaps.RowNumber) AS solg
FROM 
    phim 
INNER JOIN 
    tapphim ON phim.ID = tapphim.ID_Phim
INNER JOIN 
    NumberedTaps ON tapphim.ID_Phim = NumberedTaps.ID_Phim
       WHERE DATEPART(dw, tapphim.ThoiGianChieu) = 6

GROUP BY 
    phim.ID, 
    phim.Ten_Phim, 
    phim.TongSoTap, 
    phim.Anh_Phim,
    phim.DanhGia,
    phim.MoTa,
    DATEPART(dw, tapphim.ThoiGianChieu);



    alter PROCEDURE GetPhimTongSoTapByNgayTrongTuan
    @NgayTrongTuan INT
AS
BEGIN
    WITH NumberedTaps AS (
        SELECT 
            ID_Phim,
            TapSo,
            ROW_NUMBER() OVER (PARTITION BY ID_Phim ORDER BY ThoiGianChieu) AS RowNumber
        FROM 
            tapphim
    )
    SELECT 
        phim.ID, 
        phim.Ten_Phim, 
        phim.TongSoTap, 
        phim.Anh_Phim,
        phim.DanhGia,
        phim.MoTa,
       
        COUNT(DISTINCT NumberedTaps.RowNumber) AS solg
    FROM 
        phim 
    INNER JOIN 
        tapphim ON phim.ID = tapphim.ID_Phim
    INNER JOIN 
        NumberedTaps ON tapphim.ID_Phim = NumberedTaps.ID_Phim
    WHERE 
        DATEPART(dw, tapphim.ThoiGianChieu) = @NgayTrongTuan
    GROUP BY 
        phim.ID, 
        phim.Ten_Phim, 
        phim.TongSoTap, 
        phim.Anh_Phim,
        phim.DanhGia,
        phim.MoTa
END
EXEC GetPhimTongSoTapByNgayTrongTuan @NgayTrongTuan = 5;






select * from phim
where phim.ID = 1

select phim.Ten_Phim, tapphim.* from tapphim join phim on tapphim.ID_Phim = phim.ID
where phim.ID = 1
order by tapphim.TapSo

select phim.Ten_Phim, tapphim.* from tapphim join phim on tapphim.ID_Phim = phim.ID
where phim.Ten_Phim = N'Nghịch Thiên Tà Thần' and tapphim.TapSo=1



select * from danhgia



