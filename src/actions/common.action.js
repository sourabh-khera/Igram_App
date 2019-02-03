import {
   RECEIVE_API,
   REQUEST_API, 
} from '../constants';

export const requestAPI = () => ({ type: REQUEST_API });
export const receiveAPI = () => ({ type: RECEIVE_API });