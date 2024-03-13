import { AxiosInstance } from "axios";

const getAllDevices = async (axiosClient: AxiosInstance) => {
  try {
    const res = await axiosClient.get("/devices");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const devicesService = { getAllDevices };

export default devicesService;
