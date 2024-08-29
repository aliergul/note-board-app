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

const getUser = async () => {
  try {
    const response = await axiosInstance.get("/get-user");
    if (response.data && response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Kullanıcı bilgilerini localStorage'a kaydediyoruz
      return response.data.user;
    } else {
      throw new Error("Kullanıcı bilgileri alınamadı.");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Yetkisiz erişim. Lütfen giriş yapın.");
    } else if (
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    }
  }
};

const authService = {
  login,
  getUser,
};

export default authService;
