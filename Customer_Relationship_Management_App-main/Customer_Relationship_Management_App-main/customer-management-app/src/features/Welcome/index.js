import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Pressable } from 'react-native';
import stylesFn from './styles'

const Welcome = () => {
    const styles = stylesFn();
    const navigation = useNavigation(); 

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.screen}>
                    <View style={styles.message}>
                        <Text style={styles.h1}>Customer-Relations</Text>
                    </View>
                    <View style={styles.subtext}>
                        <Text style={styles.text}>Welcome to the Customer-Relationship Management App!</Text>
                    </View>
                    <View style={styles.subtext}>
                        <Text style={styles.text}>This is an app designed to help your experience as a Sales Representative to boost your chance of success </Text>
                    </View>
                    <View>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Main')}>
                            <Text>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Welcome;