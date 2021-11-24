import React from 'react'
import { Text, View, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#81b90d" }}>
            <Button title='My Tea' color='green' onPress={() => {
                navigation.navigate('Profile', {name: 'Sean'})
            }} />
        </View>
    )
}

export default HomeScreen