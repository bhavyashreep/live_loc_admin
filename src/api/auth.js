import { post, get } from "./base";

const user_token = localStorage.getItem("user_token");

export const login = (params) => {
  return post("/api/user/login", params);
};

export const signUp = (params) => {
  console.log("params",params);
  return post("/api/user/register", params);
};

export const logOut = (params) => {
  return get("/api/logout", params);
};

export const getList = (params) => {
  console.log("params");
  return get("/api/admin/user/list");
};
export const locUpdate = (params) => {
  console.log("params",params);
  return post("/api/update", params);
};
