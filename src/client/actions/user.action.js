import {
   SAVE_USER_TOKEN, 
   CLEAR_USER_TOKEN,
   SAVE_USER_LOGIN_STATUS,
   SAVE_USER_SIGN_UP_STATUS,
} from '../constants';

export const saveUserToken = token => ({type: SAVE_USER_TOKEN, token});

export const userSignupStatus = userAdded => ({type: SAVE_USER_SIGN_UP_STATUS, userAdded});

export const userLoginStatus = authenticated => ({type: SAVE_USER_LOGIN_STATUS, authenticated});

export const clearToken = () => ({type: CLEAR_USER_TOKEN});