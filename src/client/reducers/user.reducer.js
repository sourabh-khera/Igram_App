import {
  SAVE_USER_TOKEN,
  CLEAR_USER_TOKEN,
  SAVE_USER_SIGN_UP_STATUS,
  SAVE_USER_LOGIN_STATUS,
  RESET_USER_STATUS,
} from '../constants';

const initialState = {
    authenticated: true,
    token: '',
    userAdded: true,
}

const saveToken = (state, { token }) => ({...state, token});

const saveSignupStatus = (state, { userAdded }) => ({...state, userAdded});

const saveLoginStatus = (state, { authenticated }) => ({...state, authenticated});

const clearToken = state => (initialState);

const resetStatus = state => ({userAdded: true, authenticated: true});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_TOKEN:
      return saveToken(state, action);
    case CLEAR_USER_TOKEN:
      return clearToken(state);
    case SAVE_USER_SIGN_UP_STATUS:
      return saveSignupStatus(state, action);
    case SAVE_USER_LOGIN_STATUS:
      return saveLoginStatus(state, action);
    case RESET_USER_STATUS:
      return resetStatus(state);
      
    default: return state;
  }
};

export default userReducer;
  