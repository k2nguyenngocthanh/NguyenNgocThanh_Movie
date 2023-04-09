import React, { useEffect, useState } from "react";
import style from "./Booking.css";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhongVe } from "../../Redux/action/quanLyDatVeAction";

export default function BookingPage() {
  let user = useSelector((state) => state.userReducer.userInfo);
  let chiTiet=useSelector((state)=>state.chiTietPhongVe);

  
  return (
    <div className=" min-h-screen mt-2">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
          <div className="bg-black" style={{width:'80%',height:15}}></div>
          <div className="trapezoid text-center">
            <h3 className="mt-3 text-black">Màn Hình</h3>
          </div>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-center text-2xl">0</h3>
          <hr />
          <h3 className="text-green-500 mt-2">Lật mặt 48h</h3>
          <p>Địa điểm : BHD Star - Vincom</p>
          <p>Ngày chiếu 12/5/2023</p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-500 text-lg">0đ</span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i>Email</i> <br />
            {user?.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i> <br />
            {user?.soDT}
          </div>
          <hr />
          <div
            className="mb-0 h-full flex flex-col justify-end items-center "
            style={{ marginBottom: 0 }}
          >
            <div className=" bg-green-500 text-white w-full text-center py-3 font-bold text-2xl">
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
