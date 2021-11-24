import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { TeaList } from './TeaList';
import { TeaView } from './TeaView'
import { Text, View, Button } from 'react-native';


const Stack = createNativeStackNavigator();

const YourApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Profile' component={TeaList} />
                <Stack.Screen name='TeaView' component={TeaView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default YourApp;