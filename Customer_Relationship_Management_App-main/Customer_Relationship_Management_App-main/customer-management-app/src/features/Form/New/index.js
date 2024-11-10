import React from 'react';
import Form from '../../../components/Form';
import { useCreateCustomer } from '../hooks';

const NewForm = () => {
    const { onSubmit } = useCreateCustomer();

    return (
        <Form 
            handleSubmit={onSubmit}
        />
    );
};

export default NewForm;