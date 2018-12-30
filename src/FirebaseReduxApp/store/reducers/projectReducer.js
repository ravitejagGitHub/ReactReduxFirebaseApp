import CONSTANTS from './../../Constants';

const initialState = {
    projects: [
        { id: 1, title: 'Happy Bday', content: 'fafdsasfafsfcvzvzvzzxvzvzvvzv', createdAt: '24th Jan, 2019' },
        { id: 2, title: 'Get Together', content: 'treteteteegdfgjnyhgb', createdAt: '2nd Mar, 2019' }
    ]
};
const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ACTION.CREATE_PROJECT:
            console.log(action.project);
            return state;
        case CONSTANTS.ACTION.CREATE_PROJECT_ERROR:
            console.log("Error" , action.error );
            return state;            
        default:
        return state;
    }
    
}
export default projectReducer;