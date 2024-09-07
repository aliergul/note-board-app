import { Button, Divider, Modal } from "antd";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";

const NoteCardPreview = ({ open, setOpen, noteData }) => {
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      centered
      closable={false}
      open={open}
      onCancel={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          {t("modal.close")}
        </Button>,
      ]}
    >
      <Divider
        variant="dotted"
        style={{
          borderColor: "#000000",
        }}
      >
        {noteData?.title}
      </Divider>
      <p>
        <span className="font-bold">{t("modal.inserttime")}: </span>
        <span>{moment(noteData?.inserttime).format("DD/MM/YYYY HH:mm")}</span>
      </p>
      <p style={{ maxHeight: "200px", overflowY: "auto" }}>
        <span className="font-bold">{t("modal.form_content_title")}: </span>
        <span>{noteData?.content}</span>
      </p>
      <p>
        <span className="font-bold">{t("pages.tags")}: </span>
        <span>{noteData?.tags}</span>
      </p>
    </Modal>
  );
};

export default NoteCardPreview;
