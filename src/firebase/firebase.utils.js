import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {    
        apiKey: "AIzaSyD-kDab6VLIITwmevXu-c5Qiajnp-iDy5U",
        authDomain: "sam-clothing.firebaseapp.com",
        databaseURL: "https://sam-clothing.firebaseio.com",
        projectId: "sam-clothing",
        storageBucket: "sam-clothing.appspot.com",
        messagingSenderId: "727022607123",
        appId: "1:727022607123:web:f59ac3f6f53c35d41518e6",
        measurementId: "G-W9GQF1LWRT"      
}

firebase.initializeApp(config);

export const createUserProfileDoc =  async (userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                email,
                createdAt,
                displayName,
                ...additionalData
            })
        }catch(e){
            alert('Error Creating User')
        }
    }

    return userRef;
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;


