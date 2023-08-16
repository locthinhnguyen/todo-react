import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Checkbox, Button, notification } from 'antd';
import { userApi } from '../apis/user';

const Login = () => {
  const [email, setUsers] = useState('');
  // console.log('email: ', email);
  const [password, setPwd] = useState('');
  //console.log('password: ', password);

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const res = await userApi.login({
        email: data?.email,
        password: data?.password,
      });

      if (res?.data) {
        notification?.success({
          message: 'Dang nhap thanh cong',
        });
        localStorage.setItem('accessToken', res?.data?.accessToken);
        navigate('/');
        //, { replace: true } xoa history
        //navigate("", [])
      }
    } catch (error) {
      notification?.error({
        message: error?.message,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex justify-center items-center gap-10">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <Link to="/register" className="font-bold">
          Register
        </Link>
        <Link to="/tododetail" className="font-bold">
          Todo Detail
        </Link>
      </div>
      <h1 className="font-bold text-[20px]">Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            onChange={(e) => setUsers(e.target.value)}
            value={email}
            type="text"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            type="password"
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary">Sign Up</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
