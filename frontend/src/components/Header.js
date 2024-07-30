import i18next from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import tr from "../assets/tr.svg";
import en from "../assets/en.svg";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);

  const handleLanguage = (language) => {
    i18next.changeLanguage(language);
    setSelectedLanguage(language);
  };

  return (
    <div className="header">
      <span>Note Board</span>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img
              src={selectedLanguage === "tr" ? tr : en}
              alt=""
              width="24"
              height="24"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLanguage("tr")}>
              <img src={tr} alt="" width="24" height="24" /> {t("language_tr")}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguage("en")}>
              <img src={en} alt="" width="24" height="24" /> {t("language_en")}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
