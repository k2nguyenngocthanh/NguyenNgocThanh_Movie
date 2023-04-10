import { Button, Checkbox, Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { USER_LOGIN } from '../../Redux/contant/userContant';
import { localUserSrv } from '../../Service/localService';
import { userServ } from '../../Service/userService';
import Lottie from "lottie-react";
import bg_animate from "../../asset/login_animate.json"
import { setLoginAction, setLoginActionService } from '../../Redux/action/userAction';

const LoginPage = () =>{
    let dispatch=useDispatch();
    let navigate=useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        userServ
          .postLogin(values)
          .then((res) => {
                  console.log(res);
                  message.success("Login thành công");
                  //Lưu thông tin
                  localUserSrv.set(res.data.content);
                  dispatch(setLoginAction(res.data.content))
                  navigate("/");

                })
                .catch((err) => {
                 console.log(err);
                 message.error("Login thất bại");
                });
      };
      const OnFinishThunk = (values) => {
        let onSuccess=()=> {
          message.success("Login thành công");
         
          navigate("/");
    
        }
    
      dispatch(setLoginActionService(values,onSuccess));
    
        
      }
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        
      };
 return( <div style={{backgroundImage:`url('http://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg')`}} className="h-screen w-screen flex  justify-center items-center">
      <div className="container mx-auto p-5 bg-white rounded flex">
      <div className="w-1/2 h-full">
      <Lottie animationData={bg_animate} loop={true} />
        </div>
      <div className="w-1/2 h-full">
        <p className='text-2xl text-center mb-4' >Đăng Nhập</p>
      <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              width:"100%"
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
          >
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
              
                span: 24,
              }}
              className="flex justify-center items-center"
            >
              <Button className="bg-orange-500 hover:text-white hover:border-hidden" htmlType="submit">
                Submit
              </Button>
              <br /><br />
              <span  > Bạn chưa có tài khoản ? <NavLink className='text-red-500' to="/register"> <u>Đăng kí tại đây</u></NavLink> </span>
            </Form.Item>
          </Form>
        </div>
          
      </div>
  </div>
)};
export default LoginPage;