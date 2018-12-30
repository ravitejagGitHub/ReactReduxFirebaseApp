const intialState = {
    posts : [
        {id:"1", title: 'Politics', body: 'litics content here...'},
        {id:"2", title: 'Cinema', body: 'Cinema content here...'},
        {id:"3", title: 'Sports', body: 'Sports content here...'}
    ]
}
const rootReducer = (state = intialState, action)=> {
    switch(action.type) {
        case 'DELETE_POST':
            let newPosts= state.posts.filter(post=> post.id!==action.id)
            return {
                ...state,
                posts: newPosts
            }
        default:
            return state
    }
}

export default rootReducer;