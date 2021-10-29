import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';

import { IconHistory } from '../assets/icons';

export default function ActivityScreen() {
    let rows = []
    for (let i = 0; i < 10; i++) {
        rows.push(
            <>
                <View style={styles.activity}>
                    <View style={styles.activityicon}>
                        <IconHistory />
                    </View>
                    <Text style={styles.activitylisttext}>
                        <Text style={styles.maintext}>Registered to Aadhaar</Text>
                        <View style={{ paddingVertical: 5 }}>
                            <Text style={styles.subtext}>24/10/2021 • 10:00 AM</Text>
                        </View>
                    </Text>
                </View>
                <View
                    style={{
                        borderBottomColor: '#EFEFEF',
                        borderBottomWidth: 1,
                        marginHorizontal: 20,
                    }}
                />
            </>
        );
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Aadhaar_Background.png')} style={styles.appbar}>
                <Text style={styles.title}>Your Activity</Text>
            </ImageBackground>
            <ScrollView style={{ height: '100%', width: '100%', paddingTop: 20, marginBottom: 5, backgroundColor: '#F5F5F5' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.activitylist}>
                    {rows}
                </View>
            </ScrollView>
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
    activitylist: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    activity: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderRadius: 10,
    },
    activityicon: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',

    },

    activitylisttext: {
        flex: 7,
        flexDirection: 'column',
    },
    maintext: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 18,
        marginBottom: 10,
        color: '#073042'
    },
    subtext: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 14,
        color: '#BBBBBB',
    }
});