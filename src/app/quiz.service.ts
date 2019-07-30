import { Injectable } from '@angular/core';

import  * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  database = firebase.database();
  userId
  userEmail
  userAge
  userGender
  Cat_data
  cName
  QName
  cid

  new_id

  constructor() { }
private Cat =[];
private que =[];

login(email,password){
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }).then((categories) => {



  });
}

getData(){
  return this.Cat;
}

signUp(email,password,name,age,gender){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }).then((user) => {
    console.log("User details " + user);

    //console.log("user is registered");
      console.log(user['user'].uid);
      console.log(user['user'].email);
     // console.log(user['user'].name);

      this.userId = user['user'].uid;
      this.userEmail = user['user'].email;

    firebase.database().ref('User/' + this.userId).set({
    name:name,
    email:this.userEmail,
    age:age,
    gender:gender,

}, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Data is Saved')
  }
})


  });
}

getID(list){
  this.new_id =list;
}
Return_ID(){
  return this.new_id
}




}

