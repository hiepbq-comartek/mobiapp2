import {Addpost, Setimg, Setchangtext} from './variable';
export const reduce = (state, action) => {
  switch (action.type) {
    case Setimg: {
      return {
        ...state,
        Setimg: action.data,
      };
    }
    case Setchangtext: {
      return {
        ...state,
        SetChangtext: action.data,
      };
    }
    case Addpost: {
      return {
        ...state,
        Addpost: [...state.Addpost, action.data],
      };
    }
  }
};
