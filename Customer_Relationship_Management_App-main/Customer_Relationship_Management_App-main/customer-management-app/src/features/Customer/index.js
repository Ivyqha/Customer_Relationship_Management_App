import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';
import CustomButton from '../../components/Button';
import stylesFn from './styles';

const CustomerDetails = () => {
    const {params} = useRoute();
    const { selectedCustomer } = params;
    const navigation = useNavigation();
    const styles = stylesFn();

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.detail}>
                    <Text style={styles.header}>First Name: </Text>
                    <Text style={styles.value}> {selectedCustomer.first_name}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.header}>Last Name: </Text>
                    <Text style={styles.value}> {selectedCustomer.last_name}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.header}>Customer ID: </Text>
                    <Text style={styles.value}> {selectedCustomer.id}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.header}>Active/In-Active </Text>
                    <Text style={styles.value}> {selectedCustomer.active}</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <CustomButton 
                    onPress={() => navigation.navigate('Delete', {deleteCustomer: selectedCustomer.id})}
                    title='Delete Customer'
                    style={styles.btn}
                />
                <CustomButton 
                    onPress={() => navigation.navigate('Edit Customer', { editCustomer: selectedCustomer.id })}
                    title='Edit Customer'
                    style={styles.btn}
                />
            </View>
        </View>
    );
}

export default CustomerDetails;