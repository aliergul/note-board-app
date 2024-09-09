import React from "react";
import { useTranslation } from "react-i18next";
//import NoteCardTagInput from "./Tags/NoteCardTagInput";
import noteService from "../../services/noteService";
import { Form, Input, Modal } from "antd";
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
  //const [tags, setTags] = useState(type === "edit" ? data?.tags : "");

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = async (formObject) => {
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
    }
  };

  const onOk = () => {
    form.submit();
  };

  return (
    <>
      <Modal
        closable={false}
        open={open}
        onCancel={handleClose}
        onOk={onOk}
        okText={type === "add" ? t("modal.add") : t("modal.edit")}
        cancelText={t("modal.close")}
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
        </Form>
      </Modal>
    </>
  );
};

export default NoteCardAddEdit;
