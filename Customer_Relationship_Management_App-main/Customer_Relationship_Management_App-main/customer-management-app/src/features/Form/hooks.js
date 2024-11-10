//this hook talks and triggers the reducer
//custom hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo }  from 'react';
import * as actions from './reducers';

export const useUpdateFields = (editCustomer = null) => {
    const dispatch = useDispatch() //access to redux store dispatch. used to send actions to the store
    const fields = useSelector(state => state.form.form.fields) //extracts data from the redux store state. Accessing the form slice of the state.
    const status = useSelector( state => state.form.edit.status) //extracts data from the redux store state. Accessing the edit slice of the state.
    //checking status of initial state of useUpdateFields() to check if field values are non-null

    useEffect(() => {
        if(editCustomer && status === 'PENDING') {
            dispatch(actions.setForm(editCustomer))
        }
    }, [editCustomer, status])

    return {
        fields,
        setFormField: (field, value) => {
            console.log(`Updating field ${field} to ${value}`)
            return dispatch(actions.setFormField({field, value})) // Dispatch the action correctly
        }
    };
};

export const useCreateCustomer = () => {
    const dispatch = useDispatch();
    return {
        onSubmit: () => {
            console.log('Dispatching CREATE_CUSTOMER action')
            dispatch(actions.createCustomer())
        }
    };
};

export const useListCustomers = (region) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.loadCustomers())
    }, [region]);
    const customers = useSelector(state => state.form.list.customers || []);

    // Memoize the filtered customers list
    const filteredCustomers = useMemo(() => {
    return customers.filter(customer => customer.region === region);
    }, [customers, region]);

    return filteredCustomers;
}; 

// export const useListCustomers = (region) => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(actions.loadCustomers(region));
//     }, [region]);
//     console.log('selected region:', region)
//     return useSelector(state => state.form.list.customers); 
// }; 

export const useEditCustomerStatus = () => {
    return useSelector(state => state.form.edit.status)
};
  
export const useEditCustomer = (editCustomer) => {
    const dispatch = useDispatch();
    const status = useEditCustomerStatus();

    return {
        onSubmit: () => {
            console.log('Dispatching EDIT_CUSTOMER action')
            dispatch(actions.editCustomer(editCustomer))
        },
    };
};

export const useDeleteCustomer = () => {
    const dispatch = useDispatch();
    return {
        onSubmit: (id) => {
            console.log('Dispatching DELETE_CUSTOMER action')
            dispatch(actions.deleteCustomer(id))
        }
    };
};