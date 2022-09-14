import {
  Numbercomment,
  Setauthor,
  Numberlike,
  Addimg,
  AddJob,
  Adduser,
  CheckLike,
  Checkcomment,
  CheckFollow,
  Setcomment,
  Setpost,
  Addpost,
} from "./variabale";

export const SetAuthor = (payload) => {
  return {
    type: Setauthor,
    payload,
  };
};
export const SetPost = (payload) => {
  return {
    type: Setpost,
    payload,
  };
};
export const AddPostuse = (payload) => {
  return {
    type: Addpost,
    payload,
  };
};
export const SetComment = (payload) => {
  return {
    type: Setcomment,
    payload,
  };
};
export const Addcommnet = (payload) => {
  return {
    type: AddJob,
    payload,
  };
};
export const Checklike = (payload) => {
  return {
    type: CheckLike,
    payload,
  };
};
export const Checkfollow = (payload) => {
  return {
    type: CheckFollow,
    payload,
  };
};
export const CheckComment = (payload) => {
  return {
    type: Checkcomment,
    payload,
  };
};
export const AddUser = (payload) => {
  return {
    type: Adduser,
    payload,
  };
};
export const AddImg = (payload) => {
  return {
    type: Addimg,
    payload,
  };
};
export const NumberLike = (payload) => {
  return {
    type: Numberlike,
    payload,
  };
};
export const NumberComment = (payload) => {
  return {
    type: Numbercomment,
    payload,
  };
};
