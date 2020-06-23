import {
    GET_POSTS_REQUEST,
    GET_POSTS_REQUEST_FAILED,
    GET_POSTS_REQUEST_SUCCESS,
    ADD_POST_REQUEST,
    ADD_POST_REQUEST_SUCCESS,
    ADD_POST_REQUEST_FAILED
} from '../actions'

const initialState = {
    posts: [],
    isLoading: false
}

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_POSTS_REQUEST_SUCCESS:
            return {
                ...state,
                posts: action.payload.posts,
                isLoading: false
            }
        case GET_POSTS_REQUEST_FAILED:
            return {
                ...state,
                isLoading: false
            }
        case ADD_POST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADD_POST_REQUEST_SUCCESS:
            return {
                ...state,
                posts: [
                    {...action.payload.post},
                    ...state.posts
                ],
                isLoading: false
            }
        case ADD_POST_REQUEST_FAILED:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default PostsReducer;