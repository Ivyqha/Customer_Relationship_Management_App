//this is the main skeleton to show the list of users within a region 
import { ScrollView, SafeAreaView, View, StyleSheet, Text} from 'react-native'
import RegionDetail from '../../features/RegionDetail/index'

const RegionDetailScreen = () => {
    return (
        <SafeAreaView>
            {/* <ScrollView> */}
                <RegionDetail />
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default RegionDetailScreen; 