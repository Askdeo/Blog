import axios from 'axios';

import * as actionTypes from './actionTypes';

// Get current profile

export const setProfileLoading = () => {
    return {
        type: actionTypes.PROFILE_LOADING
    };
};

export const getCurrentProfileSuccess = (profile) => {
    return {
        type: actionTypes.GET_PROFILE,
        profile: profile
    };
}; 

export const getCurrentProfileFail = (error) => {
    return {
        type: actionTypes.GET_PROFILE_FAIL,
        errors: error
    }
}; 

export const getCurrentProfile = () => {
    return dispatch => {
        dispatch(setProfileLoading());
        axios.get('http://localhost:5000/api/profile')
            .then(res => {
                dispatch(getCurrentProfileSuccess(res.data))
            })
            .catch(err => {
                dispatch(getCurrentProfileFail(err))
            });
    };
};


export const createCurrentProfileSuccess = (profile) => {
    return {
        type: actionTypes.CREATE_PROFILE,
        profile: profile
    };
}; 

export const createCurrentProfileFail = (error) => {
    return {
        type: actionTypes.CREATE_PROFILE_FAIL,
        errors: error
    }
}; 

export const createCurrentProfile = (profile) => {
    return dispatch => {
        dispatch(setProfileLoading());
        axios.post('http://localhost:5000/api/profile', profile )
            .then(res => {
                dispatch(createCurrentProfileSuccess(res.data))
            })
            .catch(err => {
                dispatch(createCurrentProfileFail(err))
            });
    };
}

export const clearProfile = () => {
    return {
        type: actionTypes.CLEAR_CURRENT_PROFILE,
    };
};