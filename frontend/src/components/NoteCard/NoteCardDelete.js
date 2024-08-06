import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const NoteCardDelete = ({ open, setOpen, data }) => {
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
        <Modal.Body>
          <span
            dangerouslySetInnerHTML={{
              __html: t("modal.delete_description", {
                title: data?.title,
              }),
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("modal.close")}
          </Button>
          <Button variant="danger" onClick={handleAction}>
            {t("modal.delete")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NoteCardDelete;
