import axiosInstance from "./axiosInstance";

const getTags = async () => {
  try {
    const response = await axiosInstance.get("/get-tags");
    if (response.data && response.data.tags) {
      localStorage.setItem("tags", JSON.stringify(response.data.tags));
      return response.data.tags;
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

const addTag = async (title, color) => {
  try {
    const response = await axiosInstance.post("/add-tag", {
      title,
      color,
    });

    if (response.data && response.data.tag) {
      const newTag = response.data.tag;
      const updatedTags = [...JSON.parse(localStorage.getItem("tags")), newTag];
      localStorage.setItem("tags", JSON.stringify(updatedTags));
      return updatedTags;
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

const editTag = async (tagId, title, color) => {
  try {
    const response = await axiosInstance.put("/edit-tag/" + tagId, {
      title,
      color,
    });

    if (response.data && response.data.tag) {
      const newTag = response.data.tag;
      const updatedTags = [...JSON.parse(localStorage.getItem("tags")), newTag];
      localStorage.setItem("tags", JSON.stringify(updatedTags));
      return updatedTags;
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

const deleteTag = async (tagId) => {
  try {
    const response = await axiosInstance.delete("/delete-tag/" + tagId);

    if (response.data && response.data.error === false) {
      const existingTags = JSON.parse(localStorage.getItem("tags")) || [];
      const updatedTags = existingTags.filter((tag) => tag._id !== tagId);

      localStorage.setItem("tags", JSON.stringify(updatedTags));
      return { success: true };
    } else {
      throw new Error("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    }
  }
};

const searchTags = async (query) => {
  try {
    const response = await axiosInstance.get("/search-tags/", {
      params: query,
    });
    if (response.data && response.data.tags) {
      return { success: true, tags: response.data.tags };
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    }
  }
};

const tagService = {
  getTags,
  addTag,
  editTag,
  deleteTag,
  searchTags,
};

export default tagService;
