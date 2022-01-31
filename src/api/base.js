// import { message } from "antd";
import { message } from "antd";
import axios from "axios";


message.config({
  maxCount: 1,
});

const user_token = localStorage.getItem("user_token");
console.log(user_token,"token in api");

const baseURL = process.env.REACT_APP_API_BASE_URL;


const base = (options, headerOptions) => {


  return axios({
    baseURL,
    headers: {
      Accept: "application/json",
      Authorization: user_token ? `Bearer ${user_token}` : null,
      ...headerOptions,
    },
    ...options,
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log("err", err);
      if(err?.response?.status === 200 || err?.response?.status === 406 || err?.response?.status === 422){
        console.log("not 500");
      message.warning(err?.response?.data?.message);
      }else{
        console.log("500 error");
        message.warning("Internal Server Error");
      }
      throw new Error(err);
    });
};

export const get = (url, params) => {
  const options = {
    method: "get",
    url,
    params,
  };
  return base(options);
};

export const patch = (url, data) => {
  const options = {
    method: "patch",
    url,
    data,
  };
  return base(options);
};

export const post = (url, data, headerOptions) => {
  const options = {
    method: "post",
    url,
    data,
  };
  return base(options, headerOptions);
};

export const put = (url, data) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options);
};

export const del = (url, data) => {
  const options = {
    method: "delete",
    url,
    data,
  };
  return base(options);
};
