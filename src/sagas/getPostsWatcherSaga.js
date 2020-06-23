import { call, put, takeLatest } from 'redux-saga/effects'
import {
    GET_POSTS_REQUEST,
    GET_POSTS_REQUEST_FAILED,
    GET_POSTS_REQUEST_SUCCESS
} from '../actions'
import axios from 'axios'

const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    } catch (error) {
        return error.message
    }
}

function* getPostsWorkerSaga() {
    try {
        const posts = yield call(getPosts)
        yield put({
            type: GET_POSTS_REQUEST_SUCCESS,
            payload: { posts }
        })
    } catch (error) {
        yield put({ type: GET_POSTS_REQUEST_FAILED })
    }
}

export function* getPostsWatcherSaga() {
    yield takeLatest(GET_POSTS_REQUEST, getPostsWorkerSaga)
}