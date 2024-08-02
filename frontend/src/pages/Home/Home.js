import React from "react";
import NoteCard from "../../components/NoteCard";
import { MdAdd } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="dashboard-content">
        <NoteCard
          title="Note Board Test Title"
          date={1722599696}
          content="Bu deneme contenti için yazılmış bir yazıdır. Bu deneme contenti için yazılmış bir yazıdır."
          tags={["test", "todo"]}
          isPinned={true}
          handlePinNote={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
        <NoteCard
          title="Note Board Test Title"
          date={1722599696}
          content="Bu deneme contenti için yazılmış bir yazıdır. Bu deneme contenti için yazılmış bir yazıdır."
          tags={["test", "todo"]}
          isPinned={true}
          handlePinNote={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
        <NoteCard
          title="Note Board Test Title"
          date={1722599696}
          content="Bu deneme contenti için yazılmış bir yazıdır. Bu deneme contenti için yazılmış bir yazıdır."
          tags={["test", "todo"]}
          isPinned={true}
          handlePinNote={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
        <NoteCard
          title="Note Board Test Title"
          date={1722599696}
          content="Bu deneme contenti için yazılmış bir yazıdır. Bu deneme contenti için yazılmış bir yazıdır."
          tags={["test", "todo"]}
          isPinned={true}
          handlePinNote={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
        <NoteCard
          title="Note Board Test Title"
          date={1722599696}
          content="Bu deneme contenti için yazılmış bir yazıdır. Bu deneme contenti için yazılmış bir yazıdır."
          tags={["test", "todo"]}
          isPinned={true}
          handlePinNote={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
        <NoteCard
          title="Note Board Test Title"
          date={1722599696}
          content="Bu deneme contenti için yazılmış bir yazıdır. Bu deneme contenti için yazılmış bir yazıdır."
          tags={["test", "todo"]}
          isPinned={true}
          handlePinNote={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
      </div>
      <div className="dashboard-content-add">
        <MdAdd size={30} />
      </div>
    </>
  );
};

export default Home;
