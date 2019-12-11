import createDataContext from './createDataContext';
import {AsyncStorage} from 'react-native';
import trackerApi from '../api/tracker';
import {navigate} from '../helper/navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'addError':
            return {...state, errorMessage: action.payload};
        case 'clearMessage':
            return {...state, errorMessage: ''};
        case 'updateToken':
            return {errorMessage: '', token: action.payload};
        case 'signout':
            return {errorMessage: '', token: null};
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clearMessage'});
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'updateToken', payload: token});
        navigate('TrackList');
    } else {
        navigate('Signin');
    }
};

const signup = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'updateToken', payload: response.data.token});
        navigate('TrackList');
    } catch (error) {
        console.log(error);
        dispatch({type: 'addError', payload: 'An error occured creating your account.'});
    }
};

const signin = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'updateToken', payload: response.data.token});
        navigate('TrackList');
    } catch (error) {
        console.log(error.response);
        dispatch({type: 'addError', payload: 'An error occured creating your account.'});
    }
};

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('Signin');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage: '' }
);