import React, { useState } from "react";
import DashboardHeader from "../../components/Header/DashboardHeader";
import NoteCard from "../../components/NoteCard/NoteCard";
import NoData from "../../components/NoData/NoData";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import NoteCardModal from "../../components/NoteCard/NoteCardModal";
import { MdAdd } from "react-icons/md";
import noteService from "../../services/noteService";
import AllPageBackdrop from "../../helpers/backdrop";

const Dashboard = ({
  getNotes,
  setError,
  loading,
  userData,
  setNotes,
  error,
  notes,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [selectedNote, setSelectedNote] = useState(null);
  const [noData, setNoData] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

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

  return (
    <div>
      <AllPageBackdrop loading={loading || isSearching} />
      <DashboardHeader
        userData={userData}
        setNotes={setNotes}
        setError={setError}
        getNotes={getNotes}
        setNoData={setNoData}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
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
        className="fixed bottom-5 right-5 flex justify-center items-center w-16 h-16 bg-color4 rounded-full text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
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
    </div>
  );
};

export default Dashboard;
