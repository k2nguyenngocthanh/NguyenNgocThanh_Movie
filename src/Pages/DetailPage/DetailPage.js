import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { movieServ } from "../../Service/movieService";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Tabs } from "antd";
import moment from "moment";
import { Rate } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import ShowTime from "./ShowTime";

export default function DetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    let fetchDetail = async () => {
      try {
        let result = await movieServ.getDetailMovie(id);
        setMovie(result.data.content);
      } catch (error) {}
    };
    fetchDetail();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie.hinhAnh})`,
        backgroundSize: "100%",
        minHeight: "100vh",
        backgroundPosition: "center",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="fff" // required
        color="fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12 ">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1 "
                src={movie.hinhAnh}
                style={{ width: "100%", height: 300 }}
                alt="anh phim"
              />
              <div className="col-span-2 ml-5 " style={{ marginTop: "25%" }}>
                <p className="text-2xl">
                  Ngày chiếu: {moment(movie.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-4xl text ">{movie.tenPhim}</p>
                <p>{movie.moTa?.substring(0, 100)} ...</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 ml-5">
            <p className="text-4xl ">Đánh giá phim</p>
            <Progress percent={movie.danhGia * 10} />
            <h1
              style={{ marginLeft: "5%" }}
              className="text-yellow-500 text-2xl"
            >
              <Rate
                allowHalf
                value={movie.danhGia / 2}
                style={{ color: "yellow", fontSize: 30 }}
              />
            </h1>
            <br />
            <br />

            <a
              href="#DatVe"
              className="rounded px-5 py-2 bg-red-600 text-white font-medium "
            >
              Mua vé
            </a>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div className="mt-20 ml-72 w-2/3 container bg-white px-5 py-5">
          <ShowTime  />
        </div>
      </CustomCard>
    </div>
  );
}
