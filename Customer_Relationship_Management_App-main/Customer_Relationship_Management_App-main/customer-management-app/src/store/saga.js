import {all} from 'redux-saga/effects';
import form from '../features/Form/Sagas/index'

export default function* rootSaga() {
    yield all([
        form(),
    ]);
};