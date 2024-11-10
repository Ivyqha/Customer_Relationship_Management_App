import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';
import { useDeleteCustomer } from '../Form/hooks';
import CustomButton from '../../components/Button';
import stylesFn from './styles';

const DeleteCustomer = () => {
    const {params} = useRoute();
    const { deleteCustomer } = params; //id of the customer thats being deleted
    const navigation = useNavigation();
    const { onSubmit } = useDeleteCustomer();
    const styles = stylesFn();

    // Modified onPress to pass deleteCustomer ID to onSubmit
    const handlePress = () => {
        onSubmit(deleteCustomer);
        navigation.navigate('Home');
    }

    return(
        <View>
            <Text style={styles.delete}>Are you sure you want to delete this customer?</Text>
            <CustomButton onPress={handlePress} title='Confirm' style={styles.btn}/>
        </View>
    )
}

export default DeleteCustomer;