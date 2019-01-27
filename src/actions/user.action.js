import {
   IS_AUTHENTICATED, 
   CLEAR_USER_TOKEN,
} from '../constants';

export const saveUserToken = auth => ({type: IS_AUTHENTICATED, auth});

export const clearToken = () => ({type: CLEAR_USER_TOKEN});