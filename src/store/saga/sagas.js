import {call, put, takeEvery, all} from 'redux-saga/effects';
import axios from 'axios';

export function* loadTask() {
  try {
    yield put({type: 'IS_FETCHING'});
    const response = yield call(
      axios.get,
      'https://5f63fae1363f0000162d93b5.mockapi.io/items',
    );
    yield put({type: 'LOAD_SUCCESSED', listTodo: response.data});
  } catch (err) {
    yield put({type: 'LOAD_FAIL'}, err.message);
  }
}

export function* watchTodo() {
  yield takeEvery('LOAD_TASK', loadTask);
}

export default function* rootSaga() {
  yield all([watchTodo()]);
}
