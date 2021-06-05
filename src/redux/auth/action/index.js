import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUserByAddress = async (requestBody) => {
  const apiURL = `${process.env.REACT_APP_API_PATH}/api/v1/auth/login`;
  return axios.post(apiURL, requestBody);
};
const userLogin = async (requestBody) => {
  const apiURL = `${process.env.REACT_APP_API_PATH}/api/v1/auth/register`;
  return axios.post(apiURL, requestBody);
};

export const setAddress = createAsyncThunk(
  "setAddress",
  async () =>
    await window.ethereum.request({
      method: "eth_requestAccounts",
    })
);

export const getUser = createAsyncThunk("getUser", async () => {
  const accounts = await window.ethereum.request({ method: "eth_accounts" });

  const body = {
    address: accounts[0],
  };
  if (!accounts[0]) {
    const emptyUser = {
      avatar: "",
      banner: "",
      name: "",
      address: "",
    };
    return {
      user: emptyUser,
      tokens: {
        accessToken: {
          token: "",
        },
      },
    };
  }
  const response = await getUserByAddress(body);
  return response.data.content;
});

export const login = createAsyncThunk("login", async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const body = {
    address: accounts[0],
  };
  const emptyUser = {
    avatar:
      "https://www.seekpng.com/png/detail/245-2454602_tanni-chand-default-user-image-png.png",
    banner: "",
    name: "",
    address: "",
  };
  if (!accounts[0]) {
    return {
      user: emptyUser,
      tokens: {
        accessToken: {
          token: "",
        },
      },
    };
  }
  const response = await userLogin(body);
  if(response.data.content.errors)
    return {
      user: emptyUser,
      tokens: {
        accessToken: {
          token: "",
        },
      },
    };
  return response.data.content;
});

export const uploadAvatar = createAsyncThunk("uploadAvatar", async (params) => {
  const data = new FormData();
  data.append("file", params.file);
  data.append("address", params.address);
  const res = await axios.post(
    process.env.REACT_APP_API_PATH + "/api/v1/upload/avatar",
    data,
    {
      "Content-Type": "multipart/form-data",
    }
  );
  return res.data.result;
});

export const uploadBanner = createAsyncThunk("uploadBanner", async (params) => {
  const data = new FormData();
  data.append("file", params.file);
  data.append("address", params.address);
  const res = await axios.post(
    process.env.REACT_APP_API_PATH + `/api/v1/upload/${params.type}`,
    data,
    {
      "Content-Type": "multipart/form-data",
    }
  );
  return res.data.result;
});

export const updateSettings = createAsyncThunk(
  "updateSettings",
  async (params) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_PATH}/api/v1/private/edit`,
      params,
    );
    return res.data.content.user;
  }
);

export const logoutUser = createAsyncThunk(
  "logoutUser",
  async () => {
    
  }
)