import firebase from "firebase/app"
import "firebase/auth"
const app = firebase.initializeApp({
    apiKey: "AIzaSyDIypSHzyhm3ltZmjux4n4WgWmdLCJjX8Y",
    authDomain: "doc-service-4f4e1.firebaseapp.com",
    projectId: "doc-service-4f4e1",
    storageBucket: "doc-service-4f4e1.appspot.com",
    messagingSenderId: "757409506218",
    appId: "1:757409506218:web:0d960b62555a6f7e9c41d3"
})

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const auth = app.auth()
export default app

  