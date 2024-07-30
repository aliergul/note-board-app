import React from "react";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="login-container">
        <div>
          <input placeholder={t("login.title")} />
        </div>
      </div>
    </>
  );
};

export default Login;
