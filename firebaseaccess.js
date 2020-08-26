var firebaseConfig = {
    apiKey: "AIzaSyDZOBj2kH_Dz7t9J6yq7dYxCJS1SfdfRRM",
    authDomain: "connectiontofirebase-8c037.firebaseapp.com",
    databaseURL: "https://connectiontofirebase-8c037.firebaseio.com",
    projectId: "connectiontofirebase-8c037",
    storageBucket: "connectiontofirebase-8c037.appspot.com",
    messagingSenderId: "498093164665",
    appId: "1:498093164665:web:81a827b2f4c94ecfa2aca8",
    measurementId: "G-0315K3WJLB"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function register(){
    var firstName=document.getElementById("firstName");
    var lastName=document.getElementById("lastName");
    var email=document.getElementById("email");
    var password=document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e => alert(e.message));
      alert("Successfully Registration!");
}
