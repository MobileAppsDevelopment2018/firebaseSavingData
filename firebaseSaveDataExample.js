//Important reading: https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html



var database = firebase.database()

//database object reference
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


//push data to the database and catch errors
ref.push(data, function(error) {
  if (error) {
    console.log("Data could not be saved." + error);
  } else {
    console.log("Data saved successfully.");
    
  }
  
  
  
  //other code samples for creating references and child objects
  /*
   function addStore(){
  var rootRef = firebase.database().ref();
  var storesRef = rootRef.child('app/cars');
  var newStoreRef = storesRef.push();


newStoreRef.set({
    name: "Cars",
    "pageId": "23",
    "storeURL": "/app/cars/gallery"
  });

  var newCarRef = newStoreRef.child('gallery').push();
  newCarRef.set({
    title: 'Mercedes',
    img: 'http://'
  });


}//close function

addStore();

*/
  
  
  
  
  
