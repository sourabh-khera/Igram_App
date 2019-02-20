import {
    SAVE_USERS_POSTS,
} from '../constants';

export const saveUserPosts = posts => ({ type: SAVE_USERS_POSTS, posts });