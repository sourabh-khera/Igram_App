import {
  SAVE_USER_TOKEN,
  CLEAR_USER_TOKEN,
  SAVE_USER_SIGN_UP_STATUS,
  SAVE_USER_LOGIN_STATUS,
} from '../constants';

const initialState = {
    authenticated: false,
    token: '',
    userAdded: false,
}

const saveToken = (state, { token }) => {
    return {...state, token}
};

const saveSignupStatus = (state, { userAdded }) => {
  return {...state, userAdded}
};

const saveLoginStatus = (state, { authenticated }) => {
  return {...state, authenticated}
};

const clearToken = state => {
    return initialState;
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_TOKEN:
      return saveToken(state, action);
    case CLEAR_USER_TOKEN:
      return clearToken(state);
    case SAVE_USER_SIGN_UP_STATUS:
      return saveSignupStatus(state);
    case SAVE_USER_LOGIN_STATUS:
      return saveLoginStatus(state);
      
    default: return state;
}
};

export default userReducer;
  