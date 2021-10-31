import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, ToastAndroid } from 'react-native';
import Storage from '../assets/helpers/storage';

const storager = new Storage();

import {
    initialize,
    startDiscoveringPeers,
    stopDiscoveringPeers,
    unsubscribeFromPeersUpdates,
    unsubscribeFromThisDeviceChanged,
    unsubscribeFromConnectionInfoUpdates,
    subscribeOnConnectionInfoUpdates,
    subscribeOnThisDeviceChanged,
    subscribeOnPeersUpdates,
    connect,
    cancelConnect,
    createGroup,
    removeGroup,
    getAvailablePeers,
    sendFile,
    receiveFile,
    getConnectionInfo,
    getGroupInfo,
    receiveMessage,
    sendMessage,
} from 'react-native-wifi-p2p';

export default class VerificationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false,
            verifier: null,
            userxml : null
        }
    }
    async componentDidMount() {
        try {
            storager.getItem('ARA:ekycdata').then(res => {
                this.setState({ userxml: JSON.parse(res) })
            }).catch(err => {
                console.log(err)
            })
            await initialize();
            // since it's required in Android >= 6.0
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Access to wi-fi P2P mode',
                    'message': 'ACCESS_COARSE_LOCATION'
                }
            );

            console.log(granted === PermissionsAndroid.RESULTS.GRANTED ? "You can use the p2p mode" : "Permission denied: p2p mode will not work");

            subscribeOnPeersUpdates(this.handleNewPeers);
            subscribeOnConnectionInfoUpdates(this.handleNewInfo);
            subscribeOnThisDeviceChanged(this.handleThisDeviceChanged);

            removeGroup();
            const status = await startDiscoveringPeers();
            console.log('startDiscoveringPeers status: ', status);
        } catch (e) {
            console.error(e);
        }
    }

    componentWillUnmount() {
        unsubscribeFromConnectionInfoUpdates(this.handleNewInfo);
        unsubscribeFromPeersUpdates(this.handleNewPeers);
        unsubscribeFromThisDeviceChanged(this.handleThisDeviceChanged)
    }

    handleNewInfo = (info) => {
        console.log('OnConnectionInfoUpdated', info);
        // if ((info.groupFormed === true) && (info.isGroupOwner === false)) {
        //     this.beforeSend()
        // }
    };

    beforeSend = () => {
        setTimeout(() => {
            sendMessage("hello World");
        }, 4000);
    }

    handleNewPeers = ({ devices }) => {
        console.log('OnPeersUpdated', devices);
        this.setState({ devices: devices });
        if (devices.length > 0) {
            this.state.connected ? null : connect(devices[0].deviceAddress).then(() => {
                this.setState({ connected: true, verifier: devices[0].deviceName });
            })
        }
        // this.state.connected ? null : this.connectToFirstDevice();
    };

    handleThisDeviceChanged = (groupInfo) => {
        console.log('THIS_DEVICE_CHANGED_ACTION', groupInfo);
    };

    // connsetter = (v) => {
    //     this.setState({ connected: v });
    // }

    onSendMessage = async () => {
        getConnectionInfo().then(info => {
            console.log("Connection Info : " + JSON.stringify(info));
            console.log(info.groupFormed);
            sendMessage(this.state.userxml).then((info) => {
                console.log("Message Sent : " + JSON.stringify(info));
            }).catch(err => {
                console.log("Message Error : " + err);
            });
        })
    }

    // connectToFirstDevice = () => {
    //     console.log('Connect to: ', this.state.devices[0]);
    //     connect(this.state.devices[0].deviceAddress)
    //         .then(() => {
    //             this.setState({ connected: true, verifier:  });
    //             console.log('Successfully connected')
    //         })
    //         .catch(err => console.error('Something gone wrong. Details: ', err));
    // };

    onGetConnectionInfo = () => {
        getConnectionInfo()
            .then(info => console.log('getConnectionInfo', info));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.connected?`Connected to ${this.state.verifier}`:`Place your Device\nClose to the Verifier`}</Text>
                <Image source={require('../assets/radar.png')} style={{ marginTop: '10%', width: 325, height: 325 }} />

                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.info} onPress={() => { this.onSendMessage() }} disabled={!this.state.connected}>
                        <Text style={styles.infotext}>{this.state.connected ? `Continue Verification` : `Waiting for Verification...`}</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.info} onPress={() => { this.onSendMessage() }}>
                        <Text style={styles.infotext}>{`Send`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.info} onPress={() => { getConnectionInfo().then(info => console.log("Connection Info : " + JSON.stringify(info))) }}>
                        <Text style={styles.infotext}>{`Get Connection Info`}</Text>
                    </TouchableOpacity> */}
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