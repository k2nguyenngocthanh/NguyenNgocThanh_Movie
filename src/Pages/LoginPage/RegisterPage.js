import React from "react";
import Lottie from "lottie-react";
import bg_animate from "../../asset/login_animate.json";
import { Button, Form, Input, Select, message } from "antd";

import { useNavigate } from "react-router-dom";
import { userServ } from "../../Service/userService";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterPage = () => {
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    userServ
      .postRegister(values)
      .then((res) => {
        console.log(res);
        message.success("Đăng ký thành công");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.content);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url('http://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg')`,
      }}
      className="h-screen w-screen flex  justify-center items-center"
    >
      <div className="container mx-auto p-5 bg-white rounded flex">
        <div className="w-1/2 h-full">
          <Lottie animationData={bg_animate} loop={true} />
        </div>
        <div className="w-1/2 h-full">
          <p className="text-2xl text-center mb-4">Đăng Ký</p>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "84",
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="matKhau"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="matKhau"
              label="Confirm Password"
              dependencies={["matKhau"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("matKhau") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="taiKhoan"
              label="Nickname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="hoTen"
              label="Full Name"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your Fullname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="soDt"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                className="bg-orange-500 hover:text-white hover:border-hidden"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
