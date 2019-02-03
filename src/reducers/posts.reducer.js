import { SAVE_USERS_POSTS } from '../constants';

const initialState = {
    userPosts: [],
}

const saveUserPosts = (state, { posts }) => ({ ...state, userPosts: posts });

const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_USERS_POSTS:
        return saveUserPosts(state, action);

        default: return state;
    }
};

export default postReducer;
