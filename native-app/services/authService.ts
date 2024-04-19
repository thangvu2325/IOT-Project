import config from "@/config";
import axios from "axios";
const registerReq = async (data: userRegister) => {
  try {
    const res = await axios.post(config.baseUrl + "/auth/register", data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const authService = {
  registerReq,
};
export default authService;
