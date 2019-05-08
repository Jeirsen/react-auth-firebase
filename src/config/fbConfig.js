import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAEGKI2_NUFKpXFdzWfY_fjRIHJV70NkOQ",
    authDomain: "react-mario-projects.firebaseapp.com",
    databaseURL: "https://react-mario-projects.firebaseio.com",
    projectId: "react-mario-projects",
    storageBucket: "react-mario-projects.appspot.com",
    messagingSenderId: "348735906824",
    appId: "1:348735906824:web:3d87755da82457aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;