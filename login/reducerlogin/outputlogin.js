import {
  Getemaillogin,
  Getpasslogin,
  Getnameregister,
  Getpassregister,
  Getemailregister,
  Getemailconfigpass,
  Getpassconfig,
} from '../../reducer/variabale';

export const GetEmaillogin = data => {
  return {
    type: Getemaillogin,
    data,
  };
};
export const GetPasslogin = data => {
  return {
    type: Getpasslogin,
    data,
  };
};
export const GetNameregister = data => {
  return {
    type: Getnameregister,
    data,
  };
};
export const GetPassregister = data => {
  return {
    type: Getpassregister,
    data,
  };
};
export const GetEmailregister = data => {
  return {
    type: Getemailregister,
    data,
  };
};
export const GetEmailconfigpass = data => {
  return {
    type: Getemailconfigpass,
    data,
  };
};
