import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT, USER_PROFILE, UPDATE_PROFILE} from '../actions/action';

const initialState = {
  loginError: null,
  userProfile: "",
  userConnected : Boolean(localStorage.getItem('token') || sessionStorage.getItem('token')),
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
        userConnected : state.userConnected
      };
    case USER_LOGOUT:
        return {
          ...state,
        }
        case USER_PROFILE : 
        return {
          ...state,
          userProfile : action.payload,
          userConnected : true
        }
        case UPDATE_PROFILE:
          return {
            ...state,
            userProfile : action.payload,
          }
    default:
      return state;
  }
};

export default userReducer;