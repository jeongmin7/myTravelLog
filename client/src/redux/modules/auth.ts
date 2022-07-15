const LOGINCHECK = "logincheck";
const LOGOUTCHECK = "logoutcheck";

export const loginCheck = () => {
  return {
    type: LOGINCHECK,
  };
};

export const logoutClickevent = () => {
  return {
    type: LOGOUTCHECK,
  };
};

const initialStore = { isLogin: false };

export const changeLoginStatus = (
  state = initialStore,
  action: { type: any }
) => {
  switch (action.type) {
    case LOGINCHECK:
      return { ...state, isLogin: true };
    case LOGOUTCHECK:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

//!아이디 유지하는 isLogin 관리
