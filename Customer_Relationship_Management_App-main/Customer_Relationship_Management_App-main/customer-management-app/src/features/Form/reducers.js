import { createSlice } from '@reduxjs/toolkit';
import { PENDING, REQUESTING, SUCCESS, ERROR } from '../../utilities/helpers';

const name = 'form'

const initialState = {
    form: {
        fields: {
            first_name: null,
            last_name: null,
        },
    },
    list:{
        customers: [],
        status: PENDING,
    },
    create:{
        status: PENDING,
    },
    load: {
        status: PENDING,
    },
    error: {
        message: 'Action failed. Please try again'
    }, 
    edit: {
        status: PENDING,
    },
    delete:{
        status: PENDING,
    }
};

const reducers = {
    createCustomer: (state) => {
        state.create.status = REQUESTING;
    },
    createCustomerResult: (state, { payload }) => {
        state.list.customers = payload; // Update customer list
        state.form.fields = initialState.form.fields; // Reset form fields 
        state.create.status = SUCCESS; // Update status on success
        state.create = initialState.create
    },
    createCustomerError: (state, { payload }) => {
        state.list.error = payload; // Handle error
        state.list.status = ERROR; // Update status on error
        state.form.fields = initialState.form.fields
    },
    editCustomer:(state) => {
        state.edit.status = REQUESTING; 
    },
    editCustomerResult: (state, { payload }) => {
        state.list.customers = payload; 
        state.form.fields = initialState.form.fields; 
        state.edit.status = SUCCESS;
        state.edit = initialState.edit;
    },
    editCustomerError: (state, { payload }) => {
        state.error.message = payload;
        state.edit.status = ERROR;
        state.form.fields = initialState.form.fields;
    },
    editCustomerStatus: (state, { payload }) => {
        state.edit.status = payload
    },
    loadCustomers: (state) => {
        state.load.status = REQUESTING;
    },
    loadCustomersResult: (state, { payload }) => {
        state.list.customers = payload; 
        state.load.status = SUCCESS;
    },
    loadCustomersError: (state, { payload }) => { // Added for handling load errors
        state.error.message = payload; // Assuming an error field in the state for consistency
        state.load.status = ERROR;
    },
    deleteCustomer: (state, {payload}) => {
        const customer = state.list.customers.find(a => a.id === payload);
        if (customer) {
            state.delete.status = REQUESTING;
        } else {
            state.error.message = `could not find customer with id: ${payload}`;
        }
    },
    deleteCustomerResult: (state, { payload }) => {
        state.list.customers = state.list.customers.filter(customer => customer.id !== payload);
        state.delete.status = SUCCESS;
        state.delete = initialState.delete;
    },
    // deleteCustomerResult: (state, { payload }) => {
    //     return {
    //         ...state,
    //         list: {
    //             ...state.list,
    //             customers: state.list.customers.filter(a => a.id !== payload)
    //         },
    //         delete: {
    //             ...initialState.delete,
    //             status: SUCCESS
    //         }
    //     };
    // },
    deleteCustomerError: (state, { payload }) => {
        state.error.message = payload;
        state.delete.status = ERROR;
    },
    setForm: (state, { payload }) => {
        const customer = state.list.customers.find(a => a.id === payload)

        if (customer) {
            state.form.fields = customer
        } else {
            state.error.message = `could not find customer with id: ${payload}`
        }
    },
    setFormField: (state, {payload}) => {
        const current = state.form.fields;
        const {field, value} = payload;

        const fields = {
            ...current,
            [field]: value
        };

        state.form.fields = fields;
    }
};

const slice = createSlice({
    name, 
    initialState,
    reducers,
});

export const {
    createCustomer,
    createCustomerResult,
    createCustomerError,
    loadCustomers,
    loadCustomersResult,
    loadCustomersError,
    editCustomer,
    editCustomerResult,
    editCustomerError,
    editCustomerStatus,
    deleteCustomer,
    deleteCustomerResult,
    deleteCustomerError,
    setForm,
    setFormField,
} = slice.actions

export default slice.reducer;