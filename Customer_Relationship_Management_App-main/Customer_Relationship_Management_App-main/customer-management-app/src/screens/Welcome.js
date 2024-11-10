import { ScrollView, SafeAreaView, View, StyleSheet, Text} from 'react-native'
import Welcome from '../features/Welcome/index'

const WelcomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Welcome />
            </ScrollView>
        </SafeAreaView>
    )
}

export default WelcomeScreen;