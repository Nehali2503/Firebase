

import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyB3nciGdpx-kiu4U-nUEu-9uBenpebOEII",
    authDomain: "my-firebase-project-f24a9.firebaseapp.com",
    databaseURL: "https://my-firebase-project-f24a9.firebaseio.com",
    projectId: "my-firebase-project-f24a9",
    storageBucket: "my-firebase-project-f24a9.appspot.com",
    messagingSenderId: "276384195681",
    appId: "1:276384195681:web:a31064aba47882dbd67620",
    measurementId: "G-V2X7RZLWFG"
  };

  
class Firebase {
    constructor()
    { app.initializeApp(firebaseConfig);

        this.auth =app.auth();
        this.db = app.database();
    }

    doCreateUserWithEmailAndPassword =(email ,Password) =>
     this.auth.createUserWithEmailAndPassword(email,Password);

    doSignInWithEmailAndPassword =(email ,Password) =>
     this.auth.SignInWithEmailAndPassword(email,Password);

    doSignOut =() => this.auth.signOut();

    doPasswordReset =email =>this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate=password =>
    this.auth.currentUser.updatePassword(password);
}

let user = uid => this.db.ref('users/${uid}');
let users =() => this.db.ref('users');

export default Firebase;