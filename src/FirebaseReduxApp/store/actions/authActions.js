import CONSTANTS from './../../Constants';

export const SignIn = (credentials) => {
    return async (dispatch, getState, { getFirebase }) => {
        try {
            const firebase = getFirebase();
            await firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            )
            dispatch({
                type: CONSTANTS.ACTION.LOGIN_SUCCESS,
            })
        }
        catch (error) {
            dispatch({
                type: CONSTANTS.ACTION.LOGIN_ERROR,
                error: 'Login Failed.'
            })
        }
    }
}
export const signOut = () => {
    return async (dispatch, getState, { getFirebase }) => {

        try {
            const firebase = getFirebase();
            await firebase.auth().signOut()
            dispatch({ type: CONSTANTS.ACTION.LOGOUT_SUCCESS })
        } catch (error) {
            dispatch({ type: CONSTANTS.ACTION.LOGOUT_ERROR, error: 'Logout Failed.' })
        }

    }
}

export const signUp = (newUser) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {

        try {
            const firebase = getFirebase();
            const firestore = getFirestore();
            const createResponse = await firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            )
            await firestore.collection('users').doc(createResponse.user.uid).set(
                {
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                }
            )
            dispatch({ type: CONSTANTS.ACTION.SIGNUP_SUCCESS })
        } catch (error) {
            dispatch({ type: CONSTANTS.ACTION.SIGNUP_ERROR, error })
        }

    }
}