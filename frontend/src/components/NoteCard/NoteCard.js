import React from "react";
import NoteCardHeader from "./NoteCardHeader";
import NoteCardContent from "./NoteCardContent";
import NoteCardButtons from "./NoteCardButtons";
import NoteCardTags from "./NoteCardTags/NoteCardTags";

const NoteCard = ({
  title,
  inserttime,
  endtime,
  content,
  tags,
  isPinned,
  handlePinNote,
  handleEdit,
  handleDelete,
  setType,
  setOpen,
}) => {
  return (
    <div className="bg-yellow-200 text-black p-5 rounded-lg w-96 transition-shadow duration-200 hover:shadow-lg hover:shadow-white border border-gray-300">
      <NoteCardHeader
        title={title}
        handlePinNote={handlePinNote}
        isPinned={isPinned}
        inserttime={inserttime}
      />
      <hr />
      <NoteCardContent content={content} />
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap">
          <NoteCardTags tags={tags} />
        </div>
        <div>
          <NoteCardButtons
            handleDelete={handleDelete}
            setOpen={setOpen}
            setType={setType}
            handleEdit={handleEdit}
            noteData={{ title, content, inserttime, tags }}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NoteCard;
