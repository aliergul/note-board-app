import React, { useEffect } from "react";
import { Button, Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import tr from "../assets/tr.svg";
import en from "../assets/en.svg";

const Language = () => {
  const { t } = useTranslation();

  const handleLanguage = (language) => {
    i18next.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const items = [
    {
      label: t("language_tr"),
      key: "1",
      icon: <img src={tr} alt="" width="24" height="24" />,
      onClick: () => handleLanguage("tr"),
    },
    {
      label: t("language_en"),
      key: "2",
      icon: <img src={en} alt="" width="24" height="24" />,
      onClick: () => handleLanguage("en"),
    },
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18next.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="flex items-center w-fit justify-end">
      <Space direction="vertical">
        <Space wrap>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Button className="w-24">{t("language")}</Button>
          </Dropdown>
        </Space>
      </Space>
    </div>
  );
};

export default Language;
