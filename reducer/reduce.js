import {
  Numbercomment,
  Addcommnet,
  Numberlike,
  Addimg,
  Adduser,
  CheckLike,
  Checkcomment,
  CheckFollow,
  Setcomment,
  Setauthor,
  Setpost,
  Addpost,
} from './variabale';

export default Reduce = (state, action) => {
  let newSate = '';
  switch (action.type) {
    case Setauthor: {
      return (newprofile = {
        ...state,
        setauthor: action.payload,
      });
    }
    case Setcomment: {
      return (newSate = {
        ...state,
        setcomment: action.payload,
      });
    }
    case Addcommnet: {
      return (newSate = {
        ...state,
        setcomment: '',
        // jobs: [...state.jobs, action.payload],
      });
    }
    case Setpost: {
      return (newSate = {
        ...state,
        setcomment: '',
        // jobs: [...state.jobs, action.payload],
      });
    }
    case Addpost: {
      return (newSate = {
        ...state,
        setcomment: '',
        // jobs: [...state.jobs, action.payload],
      });
    }
    case CheckLike: {
      return (newSate = {
        ...state,
        checklike: action.payload,
      });
    }
    case CheckFollow: {
      return (newSate = {
        ...state,
        checkFollow: action.payload,
      });
    }
    case Adduser: {
      return (newSate = {
        ...state,
        author: action.payload,
      });
    }
    case Addimg: {
      return (newSate = {
        ...state,
        addImg: action.payload,
      });
    }
    case Numberlike: {
      return (newSate = {
        ...state,
        numberlike: action.payload,
      });
    }
    case Numbercomment: {
      return (newSate = {
        ...state,
        numbercomment: action.payload,
      });
    }
    case Checkcomment: {
      return (newSate = {
        ...state,
        Checkcomment: action.payload,
      });
    }
  }
  return newSate;
};
