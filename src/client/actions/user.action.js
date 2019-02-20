import {
   IS_AUTHENTICATED, 
   CLEAR_USER_TOKEN,
} from '../constants';

export const saveUserToken = token => ({type: IS_AUTHENTICATED, token});

export const clearToken = () => ({type: CLEAR_USER_TOKEN});