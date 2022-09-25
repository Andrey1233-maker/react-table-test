import {all, takeEvery } from 'redux-saga/effects'
import { REQUEST_NODES_FROM_SERVER_ACTION } from '../action/actionTypes'
import { workerGetNodesSaga } from './workers/workerGetNodesSaga'

export function* saga() {
    yield all([
        takeEvery(REQUEST_NODES_FROM_SERVER_ACTION, workerGetNodesSaga)
    ])
}
