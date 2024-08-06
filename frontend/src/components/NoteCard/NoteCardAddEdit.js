import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const NoteCardAddEdit = ({ open, setOpen, type = "add" }) => {
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = () => {
    console.log("type: ", type);
  };
  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {type === "add" ? t("modal.title_add") : t("modal.title_edit")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("modal.close")}
          </Button>
          <Button variant="primary" onClick={handleAction}>
            {type === "add" ? t("modal.add") : t("modal.edit")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NoteCardAddEdit;
