import { takeLatest, put, delay, select } from 'redux-saga/effects';
import * as actions from '../reducers';
import {get, set} from '../../../utilities/asyncStorage';

export function* watchDeleteCustomer() {
    yield takeLatest(actions.deleteCustomer.toString(), deleteCustomerSaga);
};

export function* deleteCustomerSaga(action) {
    console.log('Starting fetch request to API -- DELETE');
    const selectedCustomer= action.payload;
    console.log('ID:', selectedCustomer)
    try {
        // Retrieve the list of customers from AsyncStorage
        const customers = yield get('CUSTOMERS_KEY');
        const customerIndex = customers.findIndex(customer => customer.id === selectedCustomer);

        if (customerIndex === -1) {
            throw new Error(`Customer with ID ${selectedCustomer} not found.`);
        }

        // Remove the selected customer from the list
        customers.splice(customerIndex, 1);

        // Save the updated list back to AsyncStorage
        yield set ('CUSTOMERS_KEY', customers);

        // Dispatch deleteCustomerResult with the ID of the deleted customer
        yield put(actions.deleteCustomerResult(selectedCustomer));
    } catch (error) {
        yield put(actions.deleteCustomerError(error.toString()));
    }
};