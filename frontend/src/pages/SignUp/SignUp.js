import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import CustomInputContainer from "../../components/CustomInputContainer";
import validateEmail from "../../utils/validateEmail";

const SignUp = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [controlPassword, setControlPassword] = useState("");
  const [error, setError] = useState(null);

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

  const handleRepeatPassword = () => {
    var x = document.getElementById("repeat-password-input");
    if (x.type === "password") {
      x.type = "text";
      setControlPassword("text");
    } else {
      x.type = "password";
      setControlPassword("password");
    }
  };

  const handleSignUp = async (e) => {
    setError(null);
    e.preventDefault();
    if (username === "") {
      setError(t("signup.username_error"));
    }
    if (!validateEmail(email)) {
      setError(t("signup.email_error"));
    }
    if (password !== repeatPassword) {
      setError(t("signup.password_error"));
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSignUp}>
          <label className="mb-2">{t("signup.title")}</label>
          <div>
            <CustomInputContainer
              placeholder={t("signup.username")}
              value={username}
              setValue={setUsername}
            />
          </div>
          <div>
            <CustomInputContainer
              placeholder={t("signup.email")}
              value={email}
              setValue={setEmail}
            />
          </div>
          <div className="d-flex gap-1">
            <CustomInputContainer
              id="password-input"
              placeholder={t("signup.password")}
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

          <div className="d-flex gap-1">
            <CustomInputContainer
              id="repeat-password-input"
              placeholder={t("signup.repeat_password")}
              value={repeatPassword}
              setValue={setRepeatPassword}
              type="password"
            />

            <button className="icon-button" onClick={handleRepeatPassword}>
              {controlPassword === "text" ? (
                <FaRegEye className="icon" />
              ) : (
                <FaRegEyeSlash />
              )}
            </button>
          </div>

          {error && <p className="error-text">{error}</p>}
          <button
            type="submit"
            class="action-btn btn btn-primary"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            {t("signup.title")}
          </button>

          <div className="additional-links">
            <p>{t("signup.already_have")}</p>
            <a href="/login">{t("login.title")}</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
