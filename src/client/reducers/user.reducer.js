import {
  IS_AUTHENTICATED,
  CLEAR_USER_TOKEN,
} from '../constants';

const initialState = {
    authenticated: false,
}

const saveToken = (state, { auth }) => {
    return {...state, authenticated: auth}
};

const clearToken = state => {
    return {...state, authenticated: false}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case IS_AUTHENTICATED:
        return saveToken(state, action);
      case CLEAR_USER_TOKEN:
        return clearToken(state);
      
       
      default: return state;
}
};

export default userReducer;
  