import React, { useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import { MdAdd } from "react-icons/md";
import NoteCardModal from "../../components/NoteCard/NoteCardModal";

const exampleData = {
  title: "Note Board Test Title",
  inserttime: 1722599696,
  modified_date: 1722956068,
  content:
    "Bu deneme contenti için yazılmış bir yazıdır. Bu deneme contenti için yazılmış bir yazıdır.",
  tags: [
    {
      tag_id: "1",
      name: "test",
      color: "#AF0909",
    },
    {
      tag_id: "2",
      name: "todo",
      color: "#14DB24",
    },
  ],
  isPinned: true,
};

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add");

  return (
    <>
      <div className="dashboard-content">
        <NoteCard
          title={exampleData?.title}
          inserttime={exampleData?.inserttime}
          content={exampleData?.content}
          tags={exampleData?.tags}
          isPinned={exampleData?.isPinned}
          handlePinNote={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
          setType={setModalType}
          setOpen={setOpenModal}
        />
      </div>
      <div
        className="dashboard-content-add"
        onClick={() => {
          setModalType("add");
          setOpenModal(true);
        }}
      >
        <MdAdd size={30} />
      </div>
      <NoteCardModal
        open={openModal}
        setOpen={setOpenModal}
        type={modalType}
        noteCard={exampleData}
      />
    </>
  );
};

export default Home;
