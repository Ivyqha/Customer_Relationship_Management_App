import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './Welcome';
import ListMainScreen from './ListMain';
import NewFormScreen from './Form/New';
import EditFormScreen from './Form/Edit';
import RegionDetailScreen from './Region/RegionDetail';
import CustomerDetailsScreen from './Customers';
import DeleteCustomerScreen from './Delete';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'New') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={ListMainScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="New" component={NewFormScreen} options={{ title: "New Form" }} />
            {/* add more tabs here */}
        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Welcome'}>
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name='Main' component={TabNavigation} options={{headerShown: false}}/>
                <Stack.Screen name='RegionDetail' component={RegionDetailScreen} />
                <Stack.Screen name='Edit Customer' component={EditFormScreen} />
                <Stack.Screen name='Customer Details' component={CustomerDetailsScreen} />
                <Stack.Screen name='Delete' component={DeleteCustomerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

