import { LOGIN_SUCCESS } from '../actions/authActions';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;