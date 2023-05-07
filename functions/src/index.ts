import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// import { randomUUID } from "crypto";
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.unenrollInEvent = functions.https.onCall((data : any, context : any) => {
  //get the app instance
  try{
    admin.initializeApp();
  } catch (e) {
    functions.logger.info(e);
  }
  functions.logger.info("data")
  console.log (data);
  console.log (data.eventId);
  //check if the user is enrolled in the event
  return admin.database().ref('/users/' + context.auth.uid + "/enrolledEvents/" + data.eventId)
  .once('value').then((snapshot) => {
    //if the user is not enrolled, enroll them
    functions.logger.info("snapshot.val() " + snapshot.val());
    if(snapshot.val() != null){
      admin.database().ref('/users/' + context.auth.uid + "/enrolledEvents/" + data.eventId).remove();
      // admin.database().ref('/events/' + data.eventId + "/enrolledUsers/" + context.auth.uid).remove();
      return {isEnrolled: false};
    }
    return {isEnrolled: false};
  });
});

exports.enrollInEvent = functions.https.onCall((data : any, context : any) => {
  //get the app instance
  try{
    admin.initializeApp();
  } catch (e) {
    functions.logger.info(e);
  }
  functions.logger.info("data")
  console.log (data);
  console.log (data.eventId);
  //check if the user is enrolled in the event
  return admin.database().ref('/users/' + context.auth.uid + "/enrolledEvents/" + data.eventId)
  .once('value').then((snapshot) => {
    //if the user is not enrolled, enroll them
    functions.logger.info("snapshot.val() " + snapshot.val());
    if(snapshot.val() == null){
      admin.database().ref('/users/' + context.auth.uid + "/enrolledEvents/" + data.eventId).set(data.eventId);
      // admin.database().ref('/events/' + data.eventId + "/enrolledUsers/" + context.auth.uid).set(context.auth.uid);
      return true;
    }
    return false;
  });
  
});

exports.signUp = functions.https.onCall((data : any, context : any) => {
  //get the app instance
  try{
    admin.initializeApp();
  } catch (e) {
    functions.logger.info(e);
  }

  
  return admin.database().ref('/users/' + context.auth.uid)
  .once('value').then((snapshot) => {
    //check if the user already exists
    if(snapshot.val() == null){
      //if the user does not exist, create them
      admin.database().ref('/users/' + context.auth.uid).set({
        name: data.email.split("@")[0],
        profilePicture: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=100",
        uwid: "",
        hostedEvents: null,
        enrolledEvents: null,
      });
      return true;
    }
    return false;
  });
  
});
