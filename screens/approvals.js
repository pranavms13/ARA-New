import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';

import { IconCheck } from '../assets/icons';

export default function ApprovalsScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Aadhaar_Background.png')} style={styles.appbar}>
                <Text style={styles.title}>Approvals</Text>
            </ImageBackground>
            <View style={{ height: '100%', width: '100%', paddingTop: 25, marginBottom: 5, backgroundColor: '#F5F5F5', alignItems: 'center' }}>
                <View style={styles.trackcard}>
                    <ImageBackground source={require('../assets/track_bg.png')} style={{ width: '100%', height: 180 }} />
                </View>
                <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: '8%', paddingVertical: '5%' }}>
                    <Text style={{ color: '#073042', fontFamily: 'Ubuntu-Medium', fontSize: 20 }}>Approval Status</Text>
                </View>

                <View style={{ height: 400, width: '100%' }}>
                    <ScrollView contentContainerStyle={{ alignItems: 'center' }} >
                        <View style={styles.trackcard}>
                            <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: '5%', paddingVertical: '5%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 8 }}>
                                        <Text style={{ color: '#073042', fontFamily: 'Ubuntu-Medium', fontSize: 18 }}>Insurance Verification</Text>
                                        <Text style={styles.subtext}>Identity Verified</Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                                        <IconCheck />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.trackcard}>
                            <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: '5%', paddingVertical: '5%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 8 }}>
                                        <Text style={{ color: '#073042', fontFamily: 'Ubuntu-Medium', fontSize: 18 }}>Insurance Verification</Text>
                                        <Text style={styles.subtext}>Identity Verified</Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                                        <IconCheck />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.trackcard}>
                            <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: '5%', paddingVertical: '5%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 8 }}>
                                        <Text style={{ color: '#073042', fontFamily: 'Ubuntu-Medium', fontSize: 18 }}>Insurance Verification</Text>
                                        <Text style={styles.subtext}>Identity Verified</Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                                        <IconCheck />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.trackcard}>
                            <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: '5%', paddingVertical: '5%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 8 }}>
                                        <Text style={{ color: '#073042', fontFamily: 'Ubuntu-Medium', fontSize: 18 }}>Insurance Verification</Text>
                                        <Text style={styles.subtext}>Identity Verified</Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                                        <IconCheck />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.trackcard}>
                            <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: '5%', paddingVertical: '5%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 8 }}>
                                        <Text style={{ color: '#073042', fontFamily: 'Ubuntu-Medium', fontSize: 18 }}>Insurance Verification</Text>
                                        <Text style={styles.subtext}>Identity Verified</Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                                        <IconCheck />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.trackcard}>
                            <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: '5%', paddingVertical: '5%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 8 }}>
                                        <Text style={{ color: '#073042', fontFamily: 'Ubuntu-Medium', fontSize: 18 }}>Insurance Verification</Text>
                                        <Text style={styles.subtext}>Identity Verified</Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                                        <IconCheck />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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
        height: '100%',
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
    trackcard: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        // padding: 10,
        elevation: 2,
        marginBottom: 10,
    },
    subtext: {
        paddingTop: 10,
        paddingBottom: 5,
        fontFamily: 'Ubuntu-Medium',
        // fontWeight: '800',
        color: '#37C584',
        fontSize: 14,
    },
});