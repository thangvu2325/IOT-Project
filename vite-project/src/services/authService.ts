/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "@/redux/slices/authSlice";
import { loginType, registerType } from "@/type/auth";
import { Dispatch } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

const register = async (
  axiosClient: AxiosInstance,
  data: registerType,
  dispatch: Dispatch
) => {
  try {
    dispatch(registerStart());
    const res = await axiosClient.post("/auth/register", data);
    dispatch(registerSuccess());
    return res.data;
  } catch (error) {
    dispatch(registerFailed());
    console.log(error);
    throw error;
  }
};
const login = async (
  axiosClient: AxiosInstance,
  data: loginType,
  dispatch: Dispatch
) => {
  try {
    dispatch(loginStart());
    const res = await axiosClient.post("/auth/login", data);
    dispatch(loginSuccess(res.data));
    return res.data;
  } catch (error: any) {
    dispatch(loginFailed(error.response.data.message));
    console.log(error);
    throw error;
  }
};
export const logOut = async (
  axiosClient: AxiosInstance,
  userId: string,
  dispatch: Dispatch
) => {
  dispatch(logOutStart());
  try {
    await axiosClient.post(
      "http://localhost:3001/auth/logout",
      { id: userId },
      {
        withCredentials: true,
      }
    );
    dispatch(logOutSuccess());
  } catch (err) {
    dispatch(logOutFailed());
  }
};

const authService = { register, login, logOut };

export default authService;
