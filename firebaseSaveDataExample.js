var database = firebase.database()

var ref = database.ref('groups/');

//get data from current logged in user

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
}


var data = {

name:setGroupName,
uid: uid

}

//ref.push(data);

//check data-onsuccess

ref.push(data, function(error) {
  if (error) {
    console.log("Data could not be saved." + error);
  } else {
    console.log("Data saved successfully.");
    //document.getElementById('groupNameStatus').textContent = 'Set successfully!';
    //document.getElementById('setGroupNameBtn').disabled = true;
    //document.getElementById('readyToPlayBtn').disabled = false;


    //lets take the user into the dashboard
    //changeAppPage("dashboard");
  }
