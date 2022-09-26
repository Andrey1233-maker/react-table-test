import { call, put } from "redux-saga/effects";
import { getNodes } from "../../../api/requests/getNodes";
import { setErrorActionCreator, setNodesToReduxActionCreator } from "../../action/actionCreators";


export function* workerGetNodesSaga(action) {
    try{
        const nodes = yield call(getNodes, action)
        yield put(setNodesToReduxActionCreator(nodes))
    }
    catch(e) {
        yield put(setErrorActionCreator('Записи не загружены'))
        throw e
    }
}