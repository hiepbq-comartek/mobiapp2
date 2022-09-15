import * as request from '../until/request';
export const Searchservices = async () => {
  try {
    const res = await request.get('');
    return res.data;
  } catch (error) {}
};
