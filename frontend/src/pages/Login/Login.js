import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomInputContainer from "../../components/CustomInputContainer";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import validateEmail from "../../utils/validateEmail";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePassword = (e) => {
    e.preventDefault();
    var x = document.getElementById("password-input");
    if (x.type === "password") {
      x.type = "text";
      setControlPassword("text");
    } else {
      x.type = "password";
      setControlPassword("password");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateEmail(email) || !password) {
      setError(t("login.input_error"));
    } else {
      setError(null);
    }

    try {
      await authService.login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <label className="mb-2">{t("login.title")}</label>
          <div>
            <CustomInputContainer
              placeholder={t("login.email")}
              value={email}
              setValue={setEmail}
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

            <button className="icon-button" onClick={(e) => handlePassword(e)}>
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
            className="action-btn btn btn-primary"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            {t("login.title")}
          </button>
          <div className="additional-links">
            <p>{t("login.get_account")}</p>
            <a href="/signup">{t("login.sign_up")}</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
