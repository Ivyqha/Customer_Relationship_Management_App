import { takeLatest, put, delay, select } from 'redux-saga/effects';
import * as actions from '../reducers'

//using asyncStorage so that the data saves even if the app is closed
import {set} from '../../../utilities/asyncStorage';


//saga function generator 
//this function listens to when the createCustomer action is dispatched
export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), createCustomerSaga);
};

//when action is dispatched, this callback function is called
//this the fetch request to the api
export function* createCustomerSaga() {
    console.log('starting fetch request to api for creating');

    try {
        const fields = yield select(state => state.form.form.fields); 
        const customers = yield select(state => state.form.list.customers);

        const allCustomers = yield select(state => state.form.list.customers);
        let newId = customers.length + 1; 
        const customerIds = customers.map(customer => customer.id);

        // Increment newId until a unique ID is found
        while (customerIds.includes(newId)) {
            newId += 1;
        }

        const customer = {
            id: newId,
            ...fields,
        }

        //pretend call to API 
        yield delay(500)

        const result = [customer, ...customers] //add new customer to list of customers
        
        yield set('CUSTOMERS_KEY', result); //save customers to async storage
        yield put(actions.createCustomerResult(result)); //saves customers in redux state and dispatches action to reducer
    } catch (error) {
        yield put(actions.createCustomerError(error.toString()));
    }
};
