import axiosInstance from "../utils/axiosInstance";

const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      email: email,
      password: password,
    });

    if (response.data && response.data.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
      return { success: true };
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
};

const authService = {
  login,
};

export default authService;
