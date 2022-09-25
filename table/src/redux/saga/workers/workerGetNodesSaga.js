import { call, put } from "redux-saga/effects";
import { getNodes } from "../../../api/requests/getNodes";
import { setNodesToReduxActionCreator } from "../../action/actionCreators";


export function* workerGetNodesSaga() {
    try{
        const nodes = yield call(getNodes)
        yield put(setNodesToReduxActionCreator(nodes))
    }
    catch(e) {
        console.error('flkshdlfhkjsdfhk')
    }
}