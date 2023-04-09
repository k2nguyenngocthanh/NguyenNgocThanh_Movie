import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localUserSrv } from "../../Service/localService";
import UserDropDown from "./UserDropDown";

export default function UserMenu() {
  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo;
  });
  let handleLogout =() =>{
    localUserSrv.remove();
     window.location.reload();
    // window.location.href="/login";
  }

  let renderContent = () => {
    let buttonCss = "px-5 py-2 border-2 border-black rounded ";
    if (userInfo) {
      return (
        <>
          <UserDropDown user={userInfo} logoutBtn={<button onClick={handleLogout} >Đăng xuất</button>}/>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login">
            <button className={buttonCss}>Đăng nhập</button>
          </NavLink>
          <button className={buttonCss}>Đăng ký</button>
        </>
      );
    }
  };
  return <div className="space-x-5">{renderContent()}</div>;
}
