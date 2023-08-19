import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

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
const user = auth.currentUser;
const db = getFirestore(app);



































const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const fistForm = document.getElementById('form1');
const secondForm = document.getElementById('form2');
const container = document.querySelector('.container');

window.onload = function () {
  container.classList.remove('right-panel-active');

};

signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

fistForm.addEventListener('submit', (e) => e.preventDefault());
secondForm.addEventListener('submit', (e) => e.preventDefault());





submi.addEventListener('click', () => {

  let name = document.getElementById('signUp-name');
  let lastName = document.getElementById('signUp-lastName');
  let email = document.getElementById('signUp-email');
  let password = document.getElementById('signUp-pass');
  let submi = document.getElementById('submi');
  let infoMsg = document.getElementById('info');

  let userData = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  }
  // console.log(userData)




  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      container.classList.remove('right-panel-active');
      // ...
      

      //...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      infoMsg.innerHTML = errorCode;


      // ..
    });
    name.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
})





let signInEmail = document.getElementById('signInEmail');
let signInPasword = document.getElementById('signInPasword');
let submitSign = document.getElementById('submitSign');
let msgInfo = document.getElementById('msgInfo');


submitSign.addEventListener('click', () => {

  signInWithEmailAndPassword(auth, signInEmail.value, signInPasword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      msgInfo.innerHTML = user;

      console.log(user)
      window.location.replace('dashboard.html')

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      msgInfo.innerHTML = errorCode;
      console.log(errorMessage)

    });


})


onAuthStateChanged(auth, (user) => {
  if (user) {
    
    window.location.replace('dashboard.html')

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    
    const uid = user.uid;
    console.log(user)
    
    
  } else {
    // User is signed out
    console.log("not sign in")
    // ...
  }
});