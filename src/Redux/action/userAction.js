import { localUserSrv } from "../../Service/localService";
import { userServ } from "../../Service/userService";
import { USER_LOGIN, USER_REGISTER } from "../contant/userContant"

export const setLoginAction = (value) =>{
    return {
        type:USER_LOGIN,
        payload:value,
      }
}
export const setLoginActionService = (value,onCompleted) => {
    //value đến thẻ form của antd
    return (dispatch) => {
      userServ
        .postLogin(value)
        .then((res) => {
         
          console.log(res);
          dispatch({
            type: USER_LOGIN,
            payload: res.data.content,
          });
          localUserSrv.set(res.data.content);
          onCompleted();
        })
        .catch((err) => {
          
          console.log(err);
        });
    };
  };


  