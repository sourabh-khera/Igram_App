import { saveUserToken } from '../../actions/user.action';
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

        if (response.status === 200) {
            if (json.userCreated) {
                await AsyncStorage.setItem('token', json.token);
                dispatch(saveUserToken(json.token));
            } else {
                saveUserToken('');
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}
