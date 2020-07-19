// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-alExhoV8yjA-AdOSZV9xcHRUDLfkLbM",
  authDomain: "siliconvalley-6fb89.firebaseapp.com",
  databaseURL: "https://siliconvalley-6fb89.firebaseio.com",
  projectId: "siliconvalley-6fb89",
  storageBucket: "siliconvalley-6fb89.appspot.com",
  messagingSenderId: "427428515615",
  appId: "1:427428515615:web:b04009af6ab40e1236aa2a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages'); 


document.getElementById('loginForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();


  var name = getInputVal('name');
  var degree = getInputVal('degree');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  saveMessages(name, degree, email, phone, message);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';

  },3000);
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessages(name, degree, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    degree: degree,
    email: email,
    phone: phone,
    message: message
  })
}
