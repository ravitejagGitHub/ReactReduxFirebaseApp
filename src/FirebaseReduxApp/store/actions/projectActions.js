import CONSTANTS from './../../Constants';

export const createProject = (project) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const uid = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        const firestore = getFirestore();
        try {
            await firestore.collection('projects').add({
                ...project,
                authFirstName: profile.firstName,
                authLastName: profile.lastName,
                uid: uid,
                createdAt: new Date()
            })
            dispatch({
                type: CONSTANTS.ACTION.CREATE_PROJECT,
                project
            })
            
        } catch (error) {
            dispatch({
                type: CONSTANTS.ACTION.CREATE_PROJECT_ERROR,
                error
            })
        }

    }
}