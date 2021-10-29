import React, { useEffect } from 'react';
import { View, ImageBackground, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import { getOTP, getEkyc } from '../assets/helpers/api';
import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({name: 'sqlite.db', createFromLocation: 1}, () => {
    
}, (err) => {
    console.log('error: ', err)
});

export default function LoginScreen(props) {
    const [ano, setAno] = React.useState('');
    const [otpsent, setOtpsent] = React.useState(false);
    const [txnId, setTxnId] = React.useState('');
    const [otp, setOtp] = React.useState('');

    onSendOtpClick = () => {
        getOTP(ano).then(res => {
            setOtpsent(true);
            setTxnId(res.txnId);
        }).catch(err => {
            alert(err);
        });
    }

    onVerifyOtpClick = () => {
        getEkyc(ano, otp, txnId).then(res => {
            console.log(res);
            db.transaction(tx => {
                tx.executeSql(`INSERT INTO residentdetails (eKycString) VALUES (${res.eKycString})`)
            });
            // props.setLoggedin(true)
        }).catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        createTable();
    }, [])

    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS residentdetails (id INTEGER PRIMARY KEY AUTOINCREMENT, eKycString TEXT)');
        })
    }

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <View style={styles.container}>
                <Image source={require('../assets/login_logo.png')} style={{ width: 125, height: 125 }} />
                <ImageBackground source={require('../assets/silhoutte.png')} style={{ width: '100%', position: 'absolute', bottom: 0, height: 200 }}>
                </ImageBackground>
            </View>
            {!otpsent ?
                <>
                    <View style={styles.formcontainer}>
                        <Text style={styles.text}>Enter your Aadhaar Number</Text>
                        <TextInput style={styles.input} onChangeText={setAno} value={ano} placeholder="XXXX XXXX XXXX" placeholderTextColor="#BBBBBB" keyboardType='numeric' maxLength={12} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => onSendOtpClick()}>
                        <Text style={{ fontFamily: 'Ubuntu-Regular', color: '#ffffff' }}>Generate OTP</Text>
                    </TouchableOpacity>
                </>
                :
                <>
                    <View style={styles.otpformcontainer}>
                        <Text style={styles.text}>Please Enter OTP</Text>
                        <Text style={styles.small}>An OTP has been sent to the Mobile Number linked to your Aadhaar Number</Text>
                        <TextInput style={styles.input} onChangeText={setOtp} value={otp} placeholder="XXXXXX" placeholderTextColor="#BBBBBB" keyboardType='numeric' maxLength={6} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => { onVerifyOtpClick() }}>
                        <Text style={{ fontFamily: 'Ubuntu-Regular', color: '#ffffff' }} >Verify</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        paddingTop: 75,
        alignItems: 'center',
        backgroundColor: '#37C584',
        height: 375,
        width: '100%',
    },
    formcontainer: {
        marginTop: -35,
        marginHorizontal: 20,
        paddingVertical: 30,
        paddingHorizontal: 25,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 3,
        height: 150,
        width: '80%'
    },
    otpformcontainer: {
        marginTop: -35,
        marginHorizontal: 20,
        paddingVertical: 30,
        paddingHorizontal: 25,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 3,
        height: 175,
        width: '80%'
    },
    text: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 16,
        color: '#073042'
    },
    small: {
        marginTop: 10,
        lineHeight: 15,
        fontFamily: 'Ubuntu-Regular',
        fontSize: 12,
        color: '#979797'
    },
    input: {
        backgroundColor: '#EEEBE7',
        color: '#073042',
        fontFamily: 'Ubuntu-Regular',
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginTop: 15,
        borderRadius: 8,
        // height: 40
    },
    button: {
        marginTop: 35,
        backgroundColor: '#37C584',
        paddingVertical: 15,
        paddingHorizontal: 25,
        width: '50%',
        alignItems: 'center',
        borderRadius: 10,
    }
})