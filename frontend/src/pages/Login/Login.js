import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomInputContainer from "../../components/CustomInputContainer";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  console.log(controlPassword);

  const handlePassword = () => {
    var x = document.getElementById("password-input");
    if (x.type === "password") {
      x.type = "text";
      setControlPassword("text");
    } else {
      x.type = "password";
      setControlPassword("password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <label>{t("login.title")}</label>
        <div>
          <CustomInputContainer
            placeholder={t("login.email")}
            value={email}
            setValue={setEmail}
            type="email"
          />
        </div>
        <div className="d-flex gap-1">
          <CustomInputContainer
            id="password-input"
            placeholder={t("login.password")}
            value={password}
            setValue={setPassword}
            type="password"
          />
          <button className="icon-button" onClick={handlePassword}>
            {controlPassword === "text" ? (
              <FaRegEye className="icon" />
            ) : (
              <FaRegEyeSlash />
            )}
          </button>
        </div>

        <button type="button" class="btn btn-primary">
          {t("login.title")}
        </button>
        <div className="additional-links">
          <p>{t("login.get_account")}</p>
          <a href="/signup">{t("login.sign_up")}</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
