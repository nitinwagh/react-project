import { call, put, takeLatest } from 'redux-saga/effects'
import {
    ADD_POST_REQUEST,
    ADD_POST_REQUEST_SUCCESS,
    ADD_POST_REQUEST_FAILED
} from '../actions'
import axios from 'axios'

const addPost = async (data) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        return response.data
    } catch (error) {
        return error.message
    }
}

function* addPostWorkerSaga(action) {
    try {
        const post = yield call(addPost, action.payload)
        yield put({
            type: ADD_POST_REQUEST_SUCCESS,
            payload: {
                post: {
                    title: post.title,
                    body: post.description
                }
            }
        })
    } catch (error) {
        yield put({ type: ADD_POST_REQUEST_FAILED })
    }
}

export function* addPostWatcherSaga() {
    yield takeLatest(ADD_POST_REQUEST, addPostWorkerSaga)
}