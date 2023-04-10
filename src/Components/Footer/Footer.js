import { AppleOutlined, FacebookOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { movieServ } from "../../Service/movieService";


export default function Footer() {
  const [heThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    movieServ
      .getFooterMovie()
      .then((res) => {
    
        setHeThongRap(res.data.content);
      })
      .catch((err) => {

      });
  }, []); 
  let renderHeThongRap = () => {
    return heThongRap.map((rap, index) => {
      return <div key={index}>
        <img src={rap.logo} style={{width:50}} alt="" />
      </div>
    });
  };
  return (
    <footer className="py-6 bg-coolGray-100 text-gray-900 bg-gray-800  ">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a
              href=""
              className="flex justify-center space-x-3 md:justify-start text-black"
            >
              <img
                src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium text-white">PARTNER</p>
            <div className="grid grid-cols-2" style={{ color: "fff" }}>
           { renderHeThongRap()}
            </div>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
            <p className="pb-1 text-lg font-medium ">Mobile App</p>
            <div className="flex text-white">
              <div className="mr-5">
                <AppleOutlined className="text-2xl"/>
              </div>
              <div >
                <FacebookOutlined className="text-2xl"/>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between text-white">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1">
            @2023 ALL RIGHTS RESEVED
          </div>
        </div>
      </div>
    </footer>
  );
}
