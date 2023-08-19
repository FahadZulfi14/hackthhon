
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzmIcyfr-4HRakxgQIrYfmIxNRT1Pn3sU",
    authDomain: "signup-fahad.firebaseapp.com",
    projectId: "signup-fahad",
    storageBucket: "signup-fahad.appspot.com",
    messagingSenderId: "189246209527",
    appId: "1:189246209527:web:5f16158dcd3750ed4f42f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



















let logout = document.getElementById('logout');

logout.addEventListener('click', () => {

    const auth = getAuth();
    signOut(auth).then((res) => {
        console.log(res)
        // Sign-out successful.
        window.location.replace('index.html')

    }).catch((error) => {
        // An error happened.
    });


})

let deleteUserData = document.getElementById('deleteUser');

deleteUserData && deleteUserData.addEventListener('click', () => {
    const user = auth.currentUser;
    const id = auth.currentUser.uid;


    deleteUser(user).then(async () => {
        console.log("User deleted")
        await deleteDoc(doc(db, "user", id));
        window.location.replace('index.html')
        // User deleted.

    }).catch((error) => {
        console.log(error)

        // An error ocurred
        // ...
    });
})

