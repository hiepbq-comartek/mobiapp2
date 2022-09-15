import {Addpost, Setimg, Setchangtext} from './variable';
export const AddPost = data => {
  return {
    type: Addpost,
    data,
  };
};
export const SetImg = data => {
  return {
    type: Setimg,
    data,
  };
};
export const SetChangtext = data => {
  return {
    type: Setchangtext,
    data,
  };
};
