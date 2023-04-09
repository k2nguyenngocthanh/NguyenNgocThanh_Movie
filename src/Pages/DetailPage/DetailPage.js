import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { movieServ } from "../../Service/movieService";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Tabs } from "antd";
import ItemTabMovie from "../HomePage/TabsMovie/ItemTabMovie";
import moment from "moment";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
];
export default function DetailPage() {
  const [heThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    movieServ
      .getMovieByTheater()
      .then((res) => {
        console.log(res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderHeThongRap = () => {
    return heThongRap.map((rap, index) => {
      return {
        key: rap.maHeThongRap,
        label: <img className="h-16" src={rap.logo} alt="" />,
        children: (
          <Tabs
            style={{ height: 500 }}
            defaultActiveKey="1"
            tabPosition="left"
            items={rap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: <div>{cumRap.tenCumRap}</div>,
                children: (
                  <div className=" overflow-y-scroll" style={{ height: 500 }}>
                    {cumRap.danhSachPhim.map((item) => {
                      return <ItemTabMovie phim={item} />;
                    })}
                  </div>
                ),
              };
            })}
            onChange={onChange}
          />
        ),
      };
    });
  };
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    let fetchDetail = async () => {
      try {
        let result = await movieServ.getDetailMovie(id);
        setMovie(result.data.content);
        console.log("result:", result);
      } catch (error) {
        console.log(" error:", error);
      }
    };
    fetchDetail();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie.hinhAnh})`,
        backgroundSize: "100%",
        minHeight: "100vh",
        backgroundPosition: "center"
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
          <div className="cols-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1 "
                src={movie.hinhAnh} 
                style={{   height: 300 }}
                alt="anh phim"
              />
              <div className="col-span-2 ml-5 " style={{ marginTop: "25%" }}>
                <p className="">Ngày chiếu:{moment(movie.ngayKhoiChieu).format("DDMM.YYYY")}</p>
                <p className="font-medium text-4xl">{movie.tenPhim}</p>
                <p>{movie.moTa}</p>
              </div>
            </div>
          </div>

          <div className="cols-span-4 ">
            <Progress percent={movie.danhGia * 10} />
          </div>
        </div>
        {/* <div className="flex space-x-10">
            <img src={movie.hinhAnh} className="w-1/3" alt="" />
            <div className="space-y-5">
              <h2 className="font-medium">{movie.tenPhim}</h2>
             

              <Progress percent={movie.danhGia * 10} />
            </div>
          </div>
          <NavLink
            className="rounded px-5 py-2 bg-red-600 text-white font-medium"
            to={`/booking/${id}`}
          >
            Mua vé
          </NavLink> */}
      </CustomCard>
      <div className="container ">
        {""}
        <Tabs
          style={{ height: 500 }}
          defaultActiveKey="1"
          tabPosition="left"
          items={renderHeThongRap()}
          onChange={onChange}
        />
        ;
      </div>
    </div>
  );
}
