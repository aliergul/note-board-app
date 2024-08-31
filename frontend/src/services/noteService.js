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

const noteService = {
  getNotes,
};

export default noteService;
