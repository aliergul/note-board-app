import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import validateEmail from "../../helpers/validateEmail";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

const SignUp = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onFinish = async (formData) => {
    setError(null);
    if (formData.username === "") {
      setError(t("signup.username_error"));
    }
    if (!validateEmail(formData.email)) {
      setError(t("signup.email_error"));
      form.setFields([
        {
          name: "email",
          errors: [t("signup.email_error")],
        },
      ]);
      return;
    } else {
      try {
        setLoading(true);
        await authService.signUp(
          formData.username,
          formData.email,
          formData.password
        );
        navigate("/dashboard");
      } catch (err) {
        setError(err.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
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
          form={form}
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
            name="username"
            rules={[
              {
                required: true,
                message: t("signup.username_error"),
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
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
          <Form.Item>
            <Button
              loading={loading}
              block
              type="primary"
              htmlType="submit"
              className="mb-2"
            >
              {t("signup.title")}
            </Button>
            {t("signup.already_have")} <a href="/login">{t("login.title")}</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
