import { ColorPicker, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import tagService from "../../services/tagService";
import ModalTitleDivider from "../../helpers/modalTitleDivider";

const TagsAddEdit = ({
  open,
  setOpen,
  type = "add",
  data,
  getTags,
  setSnackbarProps,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = async (formObject) => {
    try {
      setLoading(true);
      if (type === "add") {
        await tagService.addTag(formObject.title, formObject.color);
      } else if (type === "edit") {
        await tagService.editTag(data._id, formObject.title, formObject.color);
      }
      setSnackbarProps({
        open: true,
        type: "success",
        message: t("action_success"),
      });
      getTags();
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
            label={t("modal.form_color_title")}
            name="color"
            rules={[{ required: true }]}
            getValueFromEvent={(color) => {
              return "#" + color.toHex();
            }}
          >
            <ColorPicker
              defaultValue={data ? data.color : "#000000"}
              showText
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TagsAddEdit;
