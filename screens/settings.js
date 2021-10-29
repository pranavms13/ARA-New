import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { IconLogout } from '../assets/icons';

export default function SettingsScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Aadhaar_Background.png')} style={styles.appbar}>
                <Text style={styles.title}>Settings</Text>
            </ImageBackground>
            <View style={{ width: '90%', paddingVertical: 25 }}>
                <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', paddingHorizontal: 25, borderRadius: 10 }}>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <IconLogout/>
                    </View>
                    <View style={{ flex: 8, alignItems: 'flex-start', justifyContent: 'center', width: '100%', }}>
                        <TouchableOpacity style={styles.button} onPress={() => props.route.params.setLoggedin(false)}>
                            <Text style={styles.buttontext}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Ubuntu-Regular',
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    appbar: {
        width: '100%',
        height: 70,
        paddingTop: '5%',
        // resizeMode: 'cover',
    },
    title: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 25,
        color: '#FFFFFF',
        paddingHorizontal: '5%',
    },
    button: {
        width: '100%',
        height: 75,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttontext: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 20,
        color: '#073042'
    }
});