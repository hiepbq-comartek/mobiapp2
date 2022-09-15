import axios from 'axios';
import * as request from '../until/request';
export const Login = async () => {
  try {
    const res = await request.post('');
    return res.data;
  } catch (error) {}
};
