import CONSTANTS from './../../Constants'
const initialState = {
    authError: null
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ACTION.LOGIN_SUCCESS:
            return {
                ...state,
                authError: null
            }
        case CONSTANTS.ACTION.LOGIN_ERROR:
            return {
                ...state,
                authError: action.error
            }
        case CONSTANTS.ACTION.LOGOUT_SUCCESS:
            return state;
        case CONSTANTS.ACTION.LOGOUT_ERROR:
            return state;
        case CONSTANTS.ACTION.SIGNUP_SUCCESS:
            return {
                ...state,
                authError: null
            };
        case CONSTANTS.ACTION.SIGNUP_ERROR:
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state
    }
}
export default authReducer;