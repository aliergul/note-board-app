import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
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
    <div className="items-center justify-center flex h-full">
      <div
        className="flex items-center justify-center"
        style={{
          padding: "2rem",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
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
                message: t("signup.empty_email"),
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t("signup.empty_password"),
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
              {t("login.title")}
            </Button>
            {t("login.get_account")} <a href="/signup">{t("login.sign_up")}</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
