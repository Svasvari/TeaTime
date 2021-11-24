import React from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { Timer } from './Timer'

export const TeaView = ({ navigation, route }) => {
    return (
        <View style={[styles.container, { alignItems: 'center' }]}>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('./Media/me.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                <Text>{route.params.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 5, margin: 5, borderRadius: 100, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
                <Image source={require('./Media/temp_icon.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
                <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>
                    {route.params.temp}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 5, margin: 5, borderRadius: 100, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
                <Image source={require('./Media/time_icon.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
                <Text style={{ flex: 1, textAlign: 'center', fontSize: 20 }}>
                    {route.params.time}
                </Text>
            </View>
            <Timer startTime={route.params.time}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        backgroundColor: '#81b90d'
    }
})

export default TeaView