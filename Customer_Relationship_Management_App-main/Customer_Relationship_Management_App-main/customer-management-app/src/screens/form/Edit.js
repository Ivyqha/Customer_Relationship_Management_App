import { ScrollView, SafeAreaView} from 'react-native'
import EditForm from '../../features/Form/Edit/index'

const EditFormScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <EditForm />
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditFormScreen; 

//pulls form component into its return
//pulls data from the store and passes it to the form component
//edits the data and pushes new data to the store