import * as actionTypes from '../actions/actionTypes';

const initialState = {
    profile: null,
    profiles: null,
    loading: false,
    errors: null
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PROFILE_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_PROFILE:
            return {
                ...state,
                loading: false,
                profile: action.profile
            }
        case actionTypes.GET_PROFILE_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.errors
            }
        case actionTypes.CREATE_PROFILE:
            return {
                ...state,
                loading: false,
                profile: action.profile
            }
        case actionTypes.CREATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.errors
            }
        case actionTypes.CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                loading: false,
                profile: null
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;