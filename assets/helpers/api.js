import uuid from 'react-native-uuid';

const APIURL = 'https://stage1.uidai.gov.in/onlineekyc/'

export const getOTP = async (uid) => {
    try {
        let ntxnid = uuid.v4();
        const response = await fetch(APIURL + 'getOtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "uid": uid,
                "txnId": ntxnid,
            })
        })
        return {response : response.json(), txnId : ntxnid}
    } catch (error) {
        return console.log(error)
    }
}

export const getEkyc = async (uid, otp, txnid) => {
    try {
        const response = await fetch(APIURL + 'getEkyc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "uid": uid,
                "otp": otp,
                "txnId": txnid,
            })
        })
        return response.json();
    } catch (error) {
        return console.log(error)
    }
}