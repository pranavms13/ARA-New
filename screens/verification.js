import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, PermissionsAndroid } from 'react-native';

import {
    initialize,
    subscribeOnPeersUpdates,
    subscribeOnConnectionInfoUpdates,
    subscribeOnThisDeviceChanged,
    startDiscoveringPeers,
    connect,
    unsubscribeFromConnectionInfoUpdates,
    unsubscribeFromPeersUpdates,
    unsubscribeFromThisDeviceChanged,
} from 'react-native-wifi-p2p';

const connectToFirstDevice = () => {
    console.log('Connect to: ', this.state.devices[0]);
    connect(this.state.devices[0].deviceAddress)
        .then(() => console.log('Successfully connected'))
        .catch(err => console.error('Something gone wrong. Details: ', err));
};

export default class VerificationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [],
        }
        this.handleNewPeers = this.handleNewPeers.bind(this);
        this.handleNewInfo = this.handleNewInfo.bind(this);
        this.handleThisDeviceChanged = this.handleThisDeviceChanged.bind(this);
    }
    async componentDidMount() {
        try {
            await initialize();
            // since it's required in Android >= 6.0
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Access to wi-fi P2P mode',
                    'message': 'ACCESS_FINE_LOCATION'
                }
            );

            console.log(granted === PermissionsAndroid.RESULTS.GRANTED ? "You can use the p2p mode" : "Permission denied: p2p mode will not work");

            subscribeOnPeersUpdates(this.handleNewPeers);
            subscribeOnConnectionInfoUpdates(this.handleNewInfo);
            subscribeOnThisDeviceChanged(this.handleThisDeviceChanged);

            const status = await startDiscoveringPeers();
            console.log('startDiscoveringPeers status: ', status);
        } catch (e) {
            console.error(e);
        }
    }

    async componentWillUnmount() {
        unsubscribeFromConnectionInfoUpdates(this.handleNewInfo);
        unsubscribeFromPeersUpdates(this.handleNewPeers);
        unsubscribeFromThisDeviceChanged(this.handleThisDeviceChanged)
    }

    handleNewInfo = (info) => {
        console.log('OnConnectionInfoUpdated', info);
    };

    handleNewPeers = ({ devices }) => {
        console.log('OnPeersUpdated', devices);
        this.setState({ devices: devices });
    };

    handleThisDeviceChanged = (groupInfo) => {
        console.log('THIS_DEVICE_CHANGED_ACTION', groupInfo);
    };

    connectToFirstDevice = () => {
        console.log('Connect to: ', this.state.devices[0]);
        connect(this.state.devices[0].deviceAddress)
            .then(() => console.log('Successfully connected'))
            .catch(err => console.error('Something gone wrong. Details: ', err));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{`Place your Device\nClose to the Verifier`}</Text>
                <Image source={require('../assets/radar.png')} style={{ marginTop: '10%', width: 325, height: 325 }} />

                <View style={styles.buttoncontainer}>
                    <View style={styles.info} onPress={() => props.navigation.navigate('Home')}>
                        <Text style={styles.infotext}>{`Waiting for Verification...`}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Ubuntu-Regular',
        height: '100%',
        backgroundColor: '#37C584',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appbar: {
        width: '100%',
        height: 100,
        paddingTop: '15%',
    },
    buttoncontainer: {
        paddingTop: '25%',
    },
    title: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 20,
        width: '100%',
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 30,
        paddingVertical: '5%',
        marginTop: '5%'
    },
    info: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 18,
    },
    infotext: {
        color: '#37C584',
        fontFamily: 'Ubuntu-Medium',
        fontSize: 16,
    }
});