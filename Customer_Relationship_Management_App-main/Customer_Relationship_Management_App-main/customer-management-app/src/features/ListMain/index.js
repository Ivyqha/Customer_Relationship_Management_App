import { SafeAreaView, ScrollView, Text, View, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Notification from '../Form/notifications';
import CustomButton from '../../components/Button';
import stylesFn from './styles'

const ListMain = () => {
    const styles = stylesFn();
    const navigation = useNavigation();
    const regions = ['South West', 'North West', 'South East', 'North East', 'Mid West'];

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomButton onPress={() => navigation.navigate('New')} title="Create a New Customer" style={styles.btnNew}/>
                <View style={styles.container}>
                    <Text style={styles.title}>List of Regions</Text>
                    <Text>Select a Region:</Text>
                    {regions.map((region) => (
                        <View key={region}>
                            <CustomButton onPress={() => navigation.navigate('RegionDetail', { region })} title={region} style={styles.region}/>
                        </View>
                    ))}
                </View>
                <Notification />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ListMain;