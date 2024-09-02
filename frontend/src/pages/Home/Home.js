import React, { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import { MdAdd } from "react-icons/md";
import NoteCardModal from "../../components/NoteCard/NoteCardModal";
import authService from "../../services/authService";
import Header from "../../components/Header";
import noteService from "../../services/noteService";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({});
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const getUser = async () => {
    try {
      const user = await authService.getUser();
      setUserData(user);
    } catch (err) {
      setError(err.message);
    }
  };

  const getNotes = async () => {
    try {
      const allNotes = await noteService.getNotes();
      setNotes(allNotes);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
  };

  useEffect(() => {
    getUser();
    getNotes();
  }, []); // eslint-disable-line

  return (
    <>
      <Header userData={userData} />
      <div>{error && error}</div>
      <div className="dashboard-content">
        {notes?.map((item) => (
          <NoteCard
            key={item?._id}
            title={item?.title}
            inserttime={item?.inserttime}
            content={item?.content}
            tags={item?.tags}
            isPinned={item?.isPinned}
            handlePinNote={() => {}}
            handleEdit={() => {
              handleEdit(item);
            }}
            handleDelete={() => {}}
            setType={setModalType}
            setOpen={setOpenModal}
          />
        ))}
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
        noteCard={selectedNote}
        getNotes={getNotes}
      />
    </>
  );
};

export default Home;
