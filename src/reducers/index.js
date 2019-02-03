import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import postReducer from './posts.reducer';
import commonReducer from './common.reducer';

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    commonReducer,
});

export default rootReducer;
