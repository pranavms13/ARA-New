import uuid from 'react-native-uuid';
const API = 'https://stage1.uidai.gov.in/onlineekyc';

export const getOtp = async (uid) => {
    try {
        const ntxnId = uuid.v4();
        const response = await fetch(`${API}/getOtp/`, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "uid": uid,
                "txnId": ntxnId
            })
        })
        return {resp : response.json(), txnId : ntxnId};
    } catch (error) {
        return console.log(error);
    }
}

export const getEkyc = async (uid, otp, txnId) => {
    try {
        const response = await fetch(`${API}/getEkyc/`, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "uid": uid,
                "otp": otp,
                "txnId": txnId
            })
        })
        return response.json();
    } catch (error) {
        return console.log(error)
    }
}