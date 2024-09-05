import React, { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import { MdAdd } from "react-icons/md";
import NoteCardModal from "../../components/NoteCard/NoteCardModal";
import authService from "../../services/authService";
import Header from "../../components/Header";
import noteService from "../../services/noteService";
import EmptyCard from "../../components/EmptyCard/EmptyCard";

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

  const search = async (query) => {
    try {
      const searchData = await noteService.searchNotes(query);
      setNotes(searchData.notes);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
  };

  const handleDelete = (note) => {
    setSelectedNote(note);
  };

  useEffect(() => {
    getUser();
    getNotes();
  }, []); // eslint-disable-line

  return (
    <>
      <Header userData={userData} search={search} getNotes={getNotes} />
      <div>{error && error}</div>
      <div className="dashboard-content">
        {notes?.length > 0 ? (
          notes?.map((item) => (
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
              handleDelete={() => {
                handleDelete(item);
              }}
              setType={setModalType}
              setOpen={setOpenModal}
            />
          ))
        ) : (
          <EmptyCard />
        )}
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
