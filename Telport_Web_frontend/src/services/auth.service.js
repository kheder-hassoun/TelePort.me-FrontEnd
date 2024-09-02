import axios from "axios";

const API_URL = "http://localhost:9090/api/v1/auth/";

const register = (userName, password) => {
  return axios.post(API_URL + "signup", {
    userName,
  
    password, 
  }) .then((response) => {
    if (response.data.userName) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const login = (userName, password) => {
  return axios
    .post(API_URL + "signin", {
      userName,
      password,
    })
    .then((response) => {
      if (response.data.userName) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
