import { all } from 'redux-saga/effects';
import { watchCreateCustomer } from './create';
import { watchLoadCustomers } from './load';
import { watchEditCustomer } from './edit';
import { watchDeleteCustomer } from './delete';


export default function* form() {
    yield all([
        watchCreateCustomer(),
        watchLoadCustomers(),
        watchEditCustomer(),
        watchDeleteCustomer(), 
    ]);
}