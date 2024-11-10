import { ScrollView, SafeAreaView} from 'react-native'
import DeleteCustomer from '../features/Customer/delete.js'; 

const DeleteCustomerScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <DeleteCustomer />
            </ScrollView>
        </SafeAreaView>
    )
};

export default DeleteCustomerScreen;
