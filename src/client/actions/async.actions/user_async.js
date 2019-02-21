import isEmpty from 'lodash/isEmpty';
import { saveUserToken, userLoginStatus, userSignupStatus } from '../../actions/user.action';
import { receiveAPI, requestAPI } from '../common.action';
import { AsyncStorage } from 'react-native';

export const addUser = userInfo => async dispatch => {
    try {
        const response = await fetch('http://localhost:3000/api/v1/addUser', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        });
        const json = await response.json();
        if (response.status === 200 && !isEmpty(response)) {
            if (json.userCreated) {
                await AsyncStorage.setItem('token', json.token);
                dispatch(saveUserToken(json.token));
                dispatch(userSignupStatus(json.userCreated))
            } else {
                saveUserToken('');
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}


export const authenticateUser = userInfo => async dispatch => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/authenticateUser?userInfo=${JSON.stringify(userInfo)}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await response.json();
        console.log(json, "json---")
        if (response.status === 200 && !isEmpty(response)) {
            if (json.authenticated) {
                await AsyncStorage.setItem('token', json.token);
                dispatch(saveUserToken(json.token));
                dispatch(userLoginStatus(json.authenticated))
            } else {
                saveUserToken('');
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}