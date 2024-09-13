import React, { useEffect, useState } from "react";
import AllPageBackdrop from "../../helpers/backdrop";
import TagsHeader from "../../components/Header/TagsHeader";
import tagService from "../../services/tagService";
import { MdAdd } from "react-icons/md";
import TagsModal from "../../components/Tags/TagsModal";

const Tags = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [modalType, setModalType] = useState("add");
  const [openModal, setOpenModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  const getTags = async () => {
    try {
      setLoading(true);
      const tags = await tagService.getTags();
      setTags(tags);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div>
      <AllPageBackdrop loading={loading} />
      <TagsHeader />
      <div>{error}</div>
      <div className="flex items-start justify-around flex-wrap gap-5 pt-5">
        {tags.length > 0
          ? tags.map((tag, index) => (
              <div key={index}>
                {tag.title} --- {tag.color}
                <button
                  onClick={() => {
                    setSelectedTag(tag);
                    setModalType("delete");
                    setOpenModal(true);
                  }}
                >
                  sil
                </button>
              </div>
            ))
          : null}
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
      <TagsModal
        open={openModal}
        setOpen={setOpenModal}
        type={modalType}
        getTags={getTags}
        tag={selectedTag}
      />
    </div>
  );
};

export default Tags;
