import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const NoteCardAddEdit = ({ open, setOpen, type = "add", data }) => {
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
        <Modal.Body>
          <div className="add-edit-modal-container">
            <Form onSubmit={handleAction}>
              <Form.Group className="mb-3">
                <Form.Label className="titles">
                  {t("modal.form_title")}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("modal.form_title_placeholder")}
                  defaultValue={type === "edit" ? data?.title : ""}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="titles">
                  {t("modal.form_content_title")}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={t("modal.form_content_placeholder")}
                  defaultValue={type === "edit" ? data?.content : ""}
                />
              </Form.Group>

              <Form.Group className="">
                <Form.Label className="titles">
                  {t("modal.form_tags_title")}
                </Form.Label>
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  {t("modal.close")}
                </Button>
                <Button variant="primary" type="submit">
                  {type === "add" ? t("modal.add") : t("modal.edit")}
                </Button>
              </Modal.Footer>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NoteCardAddEdit;
