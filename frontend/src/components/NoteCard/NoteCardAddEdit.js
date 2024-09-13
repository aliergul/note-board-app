import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import noteService from "../../services/noteService";
import { Form, Input, Modal, Select } from "antd";
import ModalTitleDivider from "../../helpers/modalTitleDivider";

const NoteCardAddEdit = ({
  open,
  setOpen,
  type = "add",
  data,
  getNotes,
  setSnackbarProps,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const allTags = JSON.parse(localStorage.getItem("tags"));
  const [tags, setTags] = useState(type === "edit" ? data?.tags : []);
  const [noteTags, setNoteTags] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = async (formObject) => {
    try {
      setLoading(true);
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
      setSnackbarProps({
        open: true,
        type: "success",
        message: t("action_success"),
      });
      getNotes();
      handleClose();
    } catch (err) {
      setSnackbarProps({
        open: true,
        type: "error",
        message: t("action_failed"),
      });
      console.error("Not ekleme sırasında hata oluştu:", err.message);
      //setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onOk = () => {
    form.submit();
  };

  useEffect(() => {
    if (allTags && tags) {
      const matchingTags = allTags
        .filter((tag) => tags.includes(tag._id))
        .map((tag) => ({ title: tag.title, color: tag.color }));

      setNoteTags(matchingTags);
    }
  }, [tags]); //eslint-disable-line

  return (
    <>
      <Modal
        closable={false}
        open={open}
        onCancel={handleClose}
        onOk={onOk}
        okText={type === "add" ? t("modal.add") : t("modal.edit")}
        cancelText={t("modal.close")}
        okButtonProps={{ loading: loading, disabled: loading }}
      >
        <ModalTitleDivider
          title={type === "add" ? t("modal.title_add") : t("modal.title_edit")}
        />
        <Form
          form={form}
          name="layout-multiple-horizontal"
          layout="vertical"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 24 }}
          onFinish={handleAction}
          initialValues={{
            title: type === "edit" ? data?.title : "",
            content: type === "edit" ? data?.content : "",
            tags: type === "edit" ? tags : "",
          }}
        >
          <Form.Item
            label={t("modal.form_title")}
            name="title"
            rules={[{ required: true }]}
          >
            <Input placeholder={t("modal.form_title_placeholder")} />
          </Form.Item>
          <Form.Item
            label={t("modal.form_content_title")}
            name="content"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              rows={5}
              placeholder={t("modal.form_content_placeholder")}
            />
          </Form.Item>
          <Form.Item label={t("modal.tags")} name="tags">
            <Select
              mode="multiple"
              placeholder={t("modal.select_tags")}
              onChange={(selectedTags) => setTags(selectedTags)}
              options={allTags.map((tag) => ({
                label: tag.title,
                value: tag._id,
              }))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NoteCardAddEdit;
