import { ScrollView, SafeAreaView, View, StyleSheet, Text} from 'react-native'
import ListMain from '../features/ListMain/index'

const ListMainScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <ListMain />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ListMainScreen; 