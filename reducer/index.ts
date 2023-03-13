type User = {
  name: string;
  [key: string]: any;
};

type Post = {};

type InitialState = {
  user: {
    isLoggedIn: boolean;
    signUpData: any;
    loginData: any;
    user: User;
  };
  post: {
    mainPost: any;
  };
};

const initialState: InitialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPost: [],
  },
};

type ACTION_TYPE = {
  type: string;
  data?: any;
};

export const loginAction = (data: any) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutAction = (data?: any) => {
  return {
    type: 'LOG_OUT',
  };
};

const rootReducer = (state = initialState, action: ACTION_TYPE) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
  }
};

export default rootReducer;
