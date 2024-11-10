import React from 'react'
import { View, Text, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import stylesFn from './styles'

const Row = ({ item }) => {
    const styles = stylesFn(); 
    const navigation = useNavigation();
    const borderColor = item.active === 'active' ? 'green' : 'red';

    const container = {
        ...styles.container,
        borderColor: borderColor,
    };

    return (
        <View key={item.id} style={container}>
            <Pressable onPress={() => navigation.navigate('Customer Details', { selectedCustomer: item})} >
                <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
                <View style={styles.detail}>
                    <Text style={styles.header}>ID: </Text>
                    <Text style={styles.text}> {item.id}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.header}>Active/In-Active: </Text>
                    <Text style={styles.text}> {item.active}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default Row;