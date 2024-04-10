// const { initializeApp } = require('firebase/app')
// const { getAuth } = require('firebase/auth');
// const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
// require('dotenv').config()

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// const firebaseConfig = {
//     apiKey: "AIzaSyBLlurReuIKx6Y0Q5xvoz4RJv4JzzGHTxU",
//     authDomain: "kham-pha-van-hoa-viet-nam.firebaseapp.com",
//     projectId: "kham-pha-van-hoa-viet-nam",
//     storageBucket: "kham-pha-van-hoa-viet-nam.appspot.com",
//     messagingSenderId: "535111501851",
//     appId: "1:535111501851:web:90e38c906603d620aa50be",
//     measurementId: "G-GHXX27NLY2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// console.log(process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

// const signIn = async () => await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)


// createUserWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)
// .then((userCredential) => {
//     // Signed in 
//         const user = userCredential.user;
//         console.log(user);
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });
    
//     signIn()
// // console.log(auth)
// auth.onAuthStateChanged(user => {
//     if (user) {
//         console.log('User is signed in');
//     } else {
//         console.log('User is signed out');
//     }
// });

// module.exports = {
//     auth
// }
