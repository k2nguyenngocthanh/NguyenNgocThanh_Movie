import React, { useEffect, useState } from "react";
import { movieServ } from "../../../Service/movieService";

import { Tabs } from "antd";

import ItemTabMovie from "./ItemTabMovie";
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

export default function TabsMovie() {
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
                  <div  className=" overflow-y-scroll" style={{ height: 500 }}>
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
  return (
    <div className="container ">
    {""}
      <Tabs
      style={{height:500}}
        defaultActiveKey="1"
        tabPosition="left"
        items={renderHeThongRap()}
        onChange={onChange}
      />
      ;
      
    </div>
  );
}
