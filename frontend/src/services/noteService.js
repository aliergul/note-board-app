import axiosInstance from "../utils/axiosInstance";

const getNotes = async () => {
  try {
    const response = await axiosInstance.get("/get-notes");
    if (response.data && response.data.notes) {
      localStorage.setItem("notes", JSON.stringify(response.data.notes));
      return response.data.notes;
    } else {
      throw new Error("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
};

const addNote = async (title, content, tags) => {
  try {
    const response = await axiosInstance.post("/add-note", {
      title,
      content,
      tags,
    });

    if (response.data && response.data.note) {
      const newNote = response.data.note;
      const updatedNotes = [
        ...JSON.parse(localStorage.getItem("notes")),
        newNote,
      ];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    } else {
      throw new Error("Not eklenemedi. Lütfen tekrar deneyin.");
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    }
  }
};

const editNote = async (noteId, title, content, tags) => {
  try {
    const response = await axiosInstance.put("/edit-note/" + noteId, {
      title,
      content,
      tags,
    });

    if (response.data && response.data.note) {
      const newNote = response.data.note;
      const updatedNotes = [
        ...JSON.parse(localStorage.getItem("notes")),
        newNote,
      ];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    } else {
      throw new Error("Not eklenemedi. Lütfen tekrar deneyin.");
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    }
  }
};

const noteService = {
  getNotes,
  addNote,
  editNote,
};

export default noteService;
