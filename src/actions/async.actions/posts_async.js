import { saveUserPosts } from '../posts.action';
import {
   requestAPI,
   receiveAPI, 
} from '../common.action';

export const fetchUsersPosts = () => async (dispatch) => {
    dispatch(requestAPI());
    const response = await fetch('https://api.myjson.com/bins/1e3a3g', {
        method: 'get',
        headers: { 'Content-Type': 'application/json'},
    });
    dispatch(receiveAPI());
    const json = await response.json();
    if(response.status === 200 && json.length){
        saveUserPosts(json);
    }
};