import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import tagService from "../../services/tagService";
import { Modal } from "antd";
import ModalTitleDivider from "../../helpers/modalTitleDivider";

const TagsDelete = ({ open, setOpen, data, getTags, setSnackbarProps }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = async () => {
    try {
      setLoading(true);
      await tagService.deleteTag(data._id);
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
      console.error("Not silme sırasında hata oluştu:", err.message);
      //setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        open={open}
        closable={false}
        onCancel={handleClose}
        okButtonProps={{ danger: true, loading: loading, disabled: loading }}
        onOk={handleAction}
        okText={t("modal.delete")}
        cancelText={t("modal.close")}
      >
        <ModalTitleDivider title={t("tag_modal.title_delete")} />
        <span
          dangerouslySetInnerHTML={{
            __html: t("modal.delete_tag_description", {
              title: data?.title,
            }),
          }}
        />
      </Modal>
    </>
  );
};

export default TagsDelete;
