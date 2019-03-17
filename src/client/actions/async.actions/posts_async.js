import { saveUserPosts } from '../posts.action';
import {
   requestAPI,
   receiveAPI, 
} from '../common.action';

export const fetchUsersPosts = () => async (dispatch) => {
    dispatch(requestAPI());
    try {
        const response = await fetch('https://api.myjson.com/bins/ebrsc', {
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
        });
        dispatch(receiveAPI());
        const json = await response.json();
        if(response.status === 200 && json.length){
            dispatch(saveUserPosts(json));
        }
    }
    catch(error) {
        console.log(error);
    }
   
};


export const addNewUserPost = (token, uri) => async (dispatch) => {
    console.log("token---", token, "uri----", uri);
    dispatch(requestAPI());
    try {
        const response = await fetch('http://localhost:3000/api/v1/createPost', {
            method: 'post',
            headers: { 
              'Content-Type': 'application/json',             
              'authorization': token,
            },
            body: JSON.stringify({uri})
        });
        dispatch(receiveAPI());
        console.log(response, "response-----")
        // const json = await response.json();
        // if(response.status === 200 && json.length){
        //     dispatch(saveUserPosts(json));
        // }
    }
    catch(error) {
        console.log(error);
    }
   
};