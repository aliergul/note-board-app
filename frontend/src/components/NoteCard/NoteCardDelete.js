import React from "react";
import { useTranslation } from "react-i18next";
import noteService from "../../services/noteService";
import { Modal } from "antd";
import ModalTitleDivider from "../../helpers/modalTitleDivider";

const NoteCardDelete = ({ open, setOpen, data, getNotes }) => {
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = async () => {
    try {
      await noteService.deleteNote(data._id);
      getNotes();
      handleClose();
    } catch (err) {
      console.error("Not silme sırasında hata oluştu:", err.message);
      //setError(err.message);
    }
  };

  return (
    <>
      <Modal
        open={open}
        closable={false}
        onCancel={handleClose}
        okButtonProps={{ danger: true }}
        onOk={handleAction}
        okText={t("modal.delete")}
        cancelText={t("modal.close")}
      >
        <ModalTitleDivider title={t("modal.title_delete")} />
        <span
          dangerouslySetInnerHTML={{
            __html: t("modal.delete_description", {
              title: data?.title,
            }),
          }}
        />
      </Modal>
    </>
  );
};

export default NoteCardDelete;
