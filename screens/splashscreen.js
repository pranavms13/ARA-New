import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';

import LoginScreen from './login';

export default function SplashScreen(props) {
    const [clicked, setClicked] = React.useState(false);
    return (
        <View style={styles.maincontainer}>
            {!clicked ?
                <View style={styles.container}>
                    <Image source={require('../assets/login_logo.png')} style={styles.loginlogo} />
                    <TouchableOpacity style={styles.button} onPress={() => {setClicked(true)}}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.buttontext}>
                                <Text style={styles.buttontext}>Get Started</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.bottomView}>
                        <Image source={require('../assets/silhoutte.png')} style={styles.silhoutte} />
                    </View>
                </View>
                :
                <LoginScreen setLoggedin={props.setLoggedin}/>
            }
            <StatusBar backgroundColor='#37C584' barStyle='light-content'/>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        width: '100%',
        height: '100%',
    },
    silhoutte: {
        width: '150%',
        height: 300,
    },
    bottomView: {
        width: '100%',
        height: 300,
        // backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    container: {
        fontFamily: 'Ubuntu-Regular',
        flex: 1,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#37C584',
        justifyContent: 'center',
    },
    loginlogo: {
        height: 150,
        width: 150,
    },
    button: {
        paddingTop: '5%',
        paddingHorizontal: '8%',
        marginBottom: '15%',
        marginTop: '15%',
        borderRadius: 18,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 200,
        alignItems: 'center',
        backgroundColor: "transparent",
        padding: 20,
    },
    buttontext: {
        fontFamily: 'Ubuntu-Regular',
        fontWeight: '800',
        fontSize: 20,
        color: '#ffffff',
        lineHeight: 25,
    },
});