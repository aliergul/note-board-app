import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = async (formObject) => {
    try {
      setLoading(true);
      await authService.login(formObject.email, formObject.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center mt-72">
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 360,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item> */}

        <Form.Item>
          <Button
            loading={loading}
            block
            type="primary"
            htmlType="submit"
            className="mb-2"
          >
            Log in
          </Button>
          or <a href="/signup">Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
