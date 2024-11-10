import { ScrollView, SafeAreaView} from 'react-native'
import CustomerDetails from '../features/Customer/index';

const CustomerDetailsScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomerDetails />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CustomerDetailsScreen; 

//pulls form component into its return
//pulls data from the store and passes it to the form component
//edits the data and pushes new data to the store