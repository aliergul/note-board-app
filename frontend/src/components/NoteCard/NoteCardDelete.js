import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const NoteCardDelete = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = () => {
    console.log("test");
  };
  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("modal.title_delete")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("modal.close")}
          </Button>
          <Button variant="primary" onClick={handleAction}>
            {t("modal.delete")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NoteCardDelete;
