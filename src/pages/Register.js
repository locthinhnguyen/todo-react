import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

import { Form, Input, Button, Select, InputNumber, notification } from 'antd';
import { userApi } from '../apis/user';

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    console.log(data);
    try {
      const res = await userApi.register({
        email: data?.email,
        password: data?.password,
        confirmPassword: data?.confirm,
        age: data?.age,
        gender: Number(data?.gender),
      });
      if (res?.data) {
        notification?.success({
          message: 'tao thanh cong',
        });
        navigate('/login');
      }
    } catch (error) {
      notification.error({
        message: error.message,
      });
      console.log('error: ', error);
    }
  };
  return (
    <div className=" flex justify-center flex-col pt-5 items-center gap-5">
      <h1>Register</h1>
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please select gender!' }]}
        >
          <Select placeholder="select your gender">
            <Option value="1">Male</Option>
            <Option value="2">Female</Option>
            <Option value="3">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="age"
          label="Age"
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="">
          <Button type="primary" htmlType="submit">
            Register
          </Button>

          <Button type="primary" htmlType="">
            Sing In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
