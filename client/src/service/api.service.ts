import { globalaxiosInstance } from "./axiosSetup";

export const getDownloads = (url: any) => {
  return globalaxiosInstance.get(`/download?url=${url}`);
};
