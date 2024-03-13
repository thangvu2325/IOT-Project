/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from "@/config";
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
import { AppDispatch } from "@/redux/store";
import { loginType, registerType } from "@/type/auth";
import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { NavigateFunction } from "react-router";

const register = async (data: registerType, dispatch: Dispatch) => {
  try {
    dispatch(registerStart());
    const res = await axios.post(config.baseUrl + "/auth/register", data);
    dispatch(registerSuccess());
    return res.data;
  } catch (error) {
    dispatch(registerFailed());
    console.log(error);
    throw error;
  }
};
const login = async (
  data: loginType,
  dispatch: Dispatch,
  navigate: NavigateFunction
) => {
  try {
    dispatch(loginStart());
    const res = await axios.post(config.baseUrl + "/auth/login", data);
    dispatch(loginSuccess(res.data));
    navigate("/");
    return res.data;
  } catch (error: any) {
    dispatch(loginFailed(error.response.data.message));
    console.log(error);
    throw error;
  }
};
export const logOut = async (
  dispatch: AppDispatch,
  id: string,
  navigate: NavigateFunction,
  axiosClient: AxiosInstance
) => {
  dispatch(logOutStart());
  try {
    await axiosClient.post("/auth/logout", { id: id });
    dispatch(logOutSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
  }
};

const authService = { register, login, logOut };

export default authService;
