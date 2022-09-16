import axios from 'axios';
const request = axios.create({
  baseURL: 'https://6323f15bbb2321cba9215166.mockapi.io/api/',
  timeout: 2000,
});
const videoApi = axios.create({
  baseURL: '',
  timeout: 2000,
});
export const getvideo = async path => {
  const videoApi = await videoApi.get(path);
  return videoApi.data;
};
export const get = async path => {
  const response = await request.get(path);
  return response.data;
};
export const post = async (path, option) => {
  const response = await request.post(path, option);
  return response.request;
};
export const put = async (path, option) => {
  const response = await request.post(path, option);
  return response.request;
};
export const delet = async (path, option) => {
  const response = await request.post(path, option);
  return response.request;
};
