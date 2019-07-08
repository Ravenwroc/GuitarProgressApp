import firebase from "firebase";
const config = {
    apiKey: "AIzaSyDdsLMm0x4owv9ynojFNgq4d30HGF3W8PM",
    authDomain: "guitarprogress-29c42.firebaseapp.com",
    databaseURL: "https://guitarprogress-29c42.firebaseio.com",
    projectId: "guitarprogress-29c42",
    storageBucket: "guitarprogress-29c42.appspot.com",
    messagingSenderId: "1095074git541355",
    appId: "1:1095074541355:web:7c8c501fe97c2f6c"
};
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

export {db}
export default firebase;