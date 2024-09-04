import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import TagInput from "../Tags/TagInput";
import noteService from "../../services/noteService";

const NoteCardAddEdit = ({ open, setOpen, type = "add", data, getNotes }) => {
  const { t } = useTranslation();
  const [tags, setTags] = useState(type === "edit" ? data?.tags : ""); //eslint-disable-line

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = {
      title: formData.get("title"),
      content: formData.get("content"),
      //tags: tags,
    };

    try {
      if (type === "add") {
        await noteService.addNote(
          formObject.title,
          formObject.content,
          formObject.tags
        );
      } else if (type === "edit") {
        await noteService.editNote(
          data._id,
          formObject.title,
          formObject.content,
          formObject.tags
        );
      }
      getNotes();
      handleClose();
    } catch (err) {
      console.error("Not ekleme sırasında hata oluştu:", err.message);
      //setError(err.message);
    }
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
            <Form onSubmit={(e) => handleAction(e)}>
              <Form.Group className="mb-3">
                <Form.Label className="titles">
                  {t("modal.form_title")}
                </Form.Label>
                <Form.Control
                  name="title"
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
                  name="content"
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
                <TagInput tags={data?.tags} setTags={setTags} />
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
