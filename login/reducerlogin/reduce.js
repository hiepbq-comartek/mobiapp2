import {
  Getemaillogin,
  Getpasslogin,
  Getnameregister,
  Getpassregister,
  Getemailregister,
  Getemailconfigpass,
  Getpassconfig,
} from '../../reducer/variabale';
export const Reduce = (state, action) => {
  let data = '';
  switch (action.type) {
    case Getemaillogin: {
      return {
        ...state,
        emaillogin: action.data,
      };
    }
    case Getpasslogin: {
      return {
        ...state,
        passlogin: action.data,
      };
    }
    case Getnameregister: {
      return {
        ...state,
        nameregister: action.data,
      };
    }
    case Getpassregister: {
      return {
        ...state,
        emailregister: action.data,
      };
    }
    case Getemailregister: {
      return {
        ...state,
        passregister: action.data,
      };
    }
    case Getemailconfigpass: {
      return {
        ...state,
        emailconfigpass: action.data,
      };
    }
    case Getpassconfig: {
      return {
        ...state,
        passconfig: action.data,
      };
    }
  }
  return data;
};
