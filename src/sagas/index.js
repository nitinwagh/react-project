import { all } from 'redux-saga/effects'
import { getPostsWatcherSaga } from './getPostsWatcherSaga'
import { addPostWatcherSaga } from './addPostWatcherSaga'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
    // config.baseURL = 'https://jsonplaceholder.typicode.com/'
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';
    config.headers['Accept'] = 'application/json';
  
    return config;
  }, function (error) {
    return Promise.reject(error);
});


export default function* rootSaga() {
    yield all([
        getPostsWatcherSaga(),
        addPostWatcherSaga()
    ])
}