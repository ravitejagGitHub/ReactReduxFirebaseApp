import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var config = {
    apiKey: "AIzaSyD8MXZaXuSp53gH5N7E14GTvoTU3Njv_R0",
    authDomain: "reactreduxfirebase-bc501.firebaseapp.com",
    databaseURL: "https://reactreduxfirebase-bc501.firebaseio.com",
    projectId: "reactreduxfirebase-bc501",
    storageBucket: "reactreduxfirebase-bc501.appspot.com",
    messagingSenderId: "30194089459"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  
  export default firebase;