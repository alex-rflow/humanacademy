
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAESVvYC6JrJqZWlgA3NuuOXXRkzv-Vhjo",
    authDomain: "human-design-rflow.firebaseapp.com",
    databaseURL: "https://human-design-rflow.firebaseio.com",
    projectId: "human-design-rflow",
    storageBucket: "human-design-rflow.appspot.com",
    messagingSenderId: "177006005130"
  };
  var count = 0;
  var counta = 0;
  var county = 1;
  var counts = -1;
  var countss = 0;
  var countsin = -1;
  var countsins = 0;

  firebase1 = firebase.initializeApp(config);
  var provider = new firebase.auth.GoogleAuthProvider();
  var username,luser,admin ;

firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;

      // ...
    }
    // The signed-in user info.
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
      luser = firebase.auth().currentUser.uid;
      admin_test = firebase.database().ref('admin/' + luser);
      admin_test.once('value', function(snapshot) {

        console.log(snapshot.val())
        if (snapshot.val() == true) {
          admin = true
  testurl2 = firebase.database().ref('/user');
  testurl2.once('value', function(snapshot) {
    username3 = snapshot.val()
    for (var k in username3) {
          if (username3.hasOwnProperty(k)) {
            $('.users').append('<li><a href="../?id='+Object.keys(username3)[count]+'"><img src="'+(username3[Object.keys(username3)[count]]['ava'] || "../img/ava.png") +'"><p>'+(username3[Object.keys(username3)[count]]['name'] || 'Имя не выбрано')+'</p></a></li>')
            ++count;
          }
        }
        $('#loading').css('display','none');
        $('.users').css('display','block');
   })
  }})}})

window.onload = function() {
  document.getElementById('file').addEventListener('change', handleFileSelect, false);

}
function login() {
  firebase.auth().signInWithRedirect(provider);
}