import axios from "axios";
import { BASE_URL, configHeaders } from "./config";

export const userServ = {
  postLogin: (loginForm) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: loginForm,
      headers: configHeaders(),
    });
  },
  postRegister: (registerForm) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: registerForm,
      headers: configHeaders(),
    });
  },
};
