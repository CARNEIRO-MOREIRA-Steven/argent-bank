import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE} from '../actions/action';

const initialState = {
  loginError: null,
  userProfile: '',
  userConnected : false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginError: null,
        userConnected : !state.userConnected
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;