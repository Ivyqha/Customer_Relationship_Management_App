import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useEditCustomer, useEditCustomerStatus} from '../hooks';

import Form from '../../../components/Form';

const EditForm = () => {
    const { params } = useRoute();
    const { editCustomer } = params;
    const { status, onSubmit} = useEditCustomer(editCustomer); 

    return (
        <Form editCustomer={editCustomer} handleSubmit={onSubmit} status={status}/>
    );
}

export default EditForm; 