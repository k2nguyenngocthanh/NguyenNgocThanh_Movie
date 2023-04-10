import axios from "axios";
import { BASE_URL, configHeaders, https } from "./config";

export const movieServ = {
  getMovieList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00");
  },

  getMovieByTheater: () => {
    return https.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00"
    );
  },
  getDetailMovie: (maPhim) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  getFooterMovie: () => {
    return https.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  },
  getBookTicketsMovie:(maLichChieu)=>{
    return https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
  },
  getHeThongRapChieu:(maPhim)=>{
    return https.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
  }

};
