import React, { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import NoteCardModal from "../../components/NoteCard/NoteCardModal";
import authService from "../../services/authService";
import Header from "../../components/Header";
import noteService from "../../services/noteService";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import NoData from "../../components/NoData/NoData";
import { MdAdd } from "react-icons/md";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({});
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [noData, setNoData] = useState(false);

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

  const pinNote = async (item) => {
    try {
      await noteService.updatePinNote(item);
      getNotes();
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
      <Header
        userData={userData}
        setNotes={setNotes}
        setError={setError}
        getNotes={getNotes}
        setNoData={setNoData}
      />
      <div>{error && error}</div>
      <div className="flex items-start justify-around flex-wrap gap-5 pt-5">
        {notes?.length > 0 ? (
          notes?.map((item) => (
            <NoteCard
              key={item?._id}
              title={item?.title}
              inserttime={item?.inserttime}
              content={item?.content}
              tags={item?.tags}
              isPinned={item?.isPinned}
              handlePinNote={() => {
                pinNote(item);
              }}
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
        ) : noData ? (
          <NoData />
        ) : (
          <EmptyCard />
        )}
      </div>
      <div
        className="fixed bottom-5 right-5 flex justify-center items-center w-16 h-16 bg-palette_light rounded-full text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
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
