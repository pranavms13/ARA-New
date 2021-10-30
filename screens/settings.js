import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { parse } from 'fast-xml-parser';
import { IconLogout, IconDownload, IconSync, IconFAQ } from '../assets/icons';

import { parseXML } from '../assets/helpers/xmler';
import Storage from '../assets/helpers/storage';

const storager = new Storage();

export default function SettingsScreen(props) {
    const [userdetails, setUserDetails] = React.useState();
    const [username, setUsername] = React.useState('');
    const [uid, setUid] = React.useState('');

    const [userimg, setUserImg] = React.useState(null);

    const imagesetter = (img) => {
        let b64 = 'data:image/png;base64,' + img;
        setUserImg(b64);
    }

    useEffect(() => {
        storager.getItem('ARA:ekycdata').then(res => {
            console.log(res)
            var xml = parse(JSON.parse(res));
            setUsername(parseXML(JSON.parse(res)).children[1].children[0].attributes.name)
            let uid = parseXML(JSON.parse(res)).children[1].attributes.uid
            uid = uid.replace(/\d(?=\d{4})/g, "X");
            setUid(uid)
            // console.log(parseXML(JSON.parse(res)).children[1].children[0].attributes.name);
            imagesetter(xml.KycRes.UidData.Pht);
            setUserDetails(JSON.parse(res));
        }).catch(err => {
            console.log(err)
        });
    }, []);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Aadhaar_Background.png')} style={styles.appbar}>
                <Text style={styles.title}>Settings</Text>
            </ImageBackground>
            <View style={{ width: '90%', paddingVertical: 25 }}>
                <View style={{ backgroundColor: '#ffffff', paddingVertical: 25, paddingHorizontal: 25, borderRadius: 10, alignItems: 'center' }}>
                    <View style={styles.userimgcontainer}>
                        <Image source={{ uri: userimg }} resizeMode={"cover"} style={styles.userimage} />
                    </View>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.uid}>{uid}</Text>
                    <View style={{ width: '70%' }}>
                        <TouchableOpacity style={styles.downloadbutton}>
                            <View style={{ flex: 7 }}>
                                <Text style={styles.downloadbuttontext}>Download Aadhaar</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <IconDownload />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', paddingHorizontal: 25, borderRadius: 10, marginTop: 15 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <IconSync />
                    </View>
                    <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center', width: '100%', }}>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttontext}>Aadhaar Sync</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', paddingHorizontal: 25, borderRadius: 10, marginTop: 15 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <IconFAQ />
                    </View>
                    <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center', width: '100%', }}>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttontext}>FAQ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', paddingHorizontal: 25, borderRadius: 10, marginTop: 15 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <IconLogout />
                    </View>
                    <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center', width: '100%', }}>
                        <TouchableOpacity style={styles.button} onPress={() => {props.route.params.setLoggedin(false)}}>
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
        fontSize: 18,
        color: '#073042'
    },
    userimgcontainer: {
        // width: 165,
        // height: 165,
        borderRadius: 165 / 2,
        borderWidth: 15,
        borderColor: '#F5F5F5',
    },
    userimage: {
        width: 125,
        height: 125,
        // borderWidth: 15,
        // borderColor: '#F5F5F5', 
        borderRadius: 125/2,
        overflow: "hidden"
    },
    username: {
        color: '#073042',
        fontFamily: 'Ubuntu-Medium',
        fontSize: 20,
        marginTop: 10,
    },
    uid: {
        color: '#BBBBBB',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 16,
        marginTop: 5,
    },
    downloadbutton: {
        marginTop: 20,
        backgroundColor: '#37C584',
        paddingVertical: 15,
        paddingLeft: 25,
        paddingRight: 15,
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'center'
    },
    downloadbuttontext: {
        color: '#FFFFFF',
        fontFamily: 'Ubuntu-Medium',
        fontSize: 18,
    }
});