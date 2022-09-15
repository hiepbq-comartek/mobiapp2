import * as request from '../until/request';
export const Videoservice = async () => {
  try {
    const res = await request.getvideo('');
    return res.data;
  } catch (error) {}
};
