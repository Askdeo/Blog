import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    user: null,
    errors: null,
    token: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state
            }
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.LOGIN_SUCCESS:
        return {
            ...state,
            token: action.token,
            isAuthenticated: true
        }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null
            }
        case actionTypes.AUTH_FAIL:
        return {
            ...state,
            errors: action.error,
            isAuthenticated: false
        }

        default:
            return {
                ...state
            }
    }
}

export default reducer;