import {
  IS_AUTHENTICATED,
  CLEAR_USER_TOKEN,
} from '../constants';

const initialState = {
    authenticated: false,
    token: '',
}

const saveToken = (state, { token }) => {
    return {...state, token}
};

const clearToken = state => {
    return {...state, token: ''}
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
  