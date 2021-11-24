import React from 'react'
import { AllTea } from './Seed';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const TeaList = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }} >
                {AllTea.map(tea => {
                    return (
                        <TouchableOpacity key={tea.id} onPress={() => {
                            navigation.navigate('TeaView', tea)
                        }}>
                            <View style={{ flexDirection: 'row', padding: 5, margin: 5, borderRadius: 100, alignItems: 'center', backgroundColor: 'whitesmoke' }}>
                                <Image source={require('./Media/me.jpg')} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                <Text style={{ flex: 2, textAlign: 'center', fontSize: 20 }}>{tea.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Button title='Home' onPress={() => {
                    navigation.navigate('Home')
                }} />
            </View>
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

export default TeaList