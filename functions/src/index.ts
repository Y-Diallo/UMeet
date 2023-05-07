import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { randomUUID } from "crypto";
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
    //if the user is not enrolled, do nothing
    functions.logger.info("snapshot.val() " + snapshot.val());
    if(snapshot.val() != null){
      admin.database().ref('/users/' + context.auth.uid + "/enrolledEvents/" + data.eventId).remove();
      // admin.database().ref('/events/' + data.eventId + "/enrolledUsers/" + context.auth.uid).remove();
      // decrement the number of enrolled users on the event
      admin.database().ref('/events/' + data.eventId + "/attendees").transaction((currentValue) => {
        return currentValue - 1;
      });
      //remove the user from the event's enrolled users
      admin.database().ref('/events/' + data.eventId + "/enrolledUsers/" + context.auth.uid).remove();
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
      // increment the number of enrolled users on the event
      admin.database().ref('/events/' + data.eventId + "/attendees").transaction((currentValue) => {
        return currentValue + 1;
      });
      //add the user to the event's enrolled users
      admin.database().ref('/events/' + data.eventId + "/enrolledUsers/" + context.auth.uid).set(context.auth.uid);
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

exports.createEvent = functions.https.onCall((data : any, context : any) => {
  //get the app instance
  try{
    admin.initializeApp();
  } catch (e) {
    functions.logger.info(e);
  }
  const newId = randomUUID();
  admin.database().ref('/events/' + newId).set({
    id: newId,
    title: data.event.title,
    hostId: context.auth.uid,
    attendees: 0,
    maxAttendees: data.event.maxAttendees,
    image: data.event.image,
    image2: data.event.image2,
    location: data.event.location,
    startDate: data.event.startDate,
    endDate: data.event.endDate,
    description: data.event.description,
    enrolledUsers: {
      [context.auth.uid]: context.auth.uid,
    },
  });
  //add the event to the user's hosted events
  admin.database().ref('/users/' + context.auth.uid + "/hostedEvents/" + newId).set(newId);
  //add the event to the user's enrolled events
  admin.database().ref('/users/' + context.auth.uid + "/enrolledEvents/" + newId).set(newId);
  //increment the number of users enrolled in the event
  admin.database().ref('/events/' + newId + "/attendees").transaction((currentValue) => {
    return currentValue + 1;
  });
  return data;

});

exports.deleteEvent = functions.https.onCall((data : any, context : any) => {
  //get the app instance
  try{
    admin.initializeApp();
  } catch (e) {
    functions.logger.info(e);
  }


  
  //remove the event from the user's hosted events
  admin.database().ref('/users/' + context.auth.uid + "/hostedEvents/" + data.eventId).remove();
  //remove the event from all users enrolled events
  //get all the users enrolled in the event
  admin.database().ref('/events/' + data.eventId + "/enrolledUsers").once('value').then((snapshot) => {
    //for each user enrolled in the event
    snapshot.forEach((childSnapshot) => {
      //remove the event from the user's enrolled events
      admin.database().ref('/users/' + childSnapshot.key + "/enrolledEvents/" + data.eventId).remove();
    });
  });
  admin.database().ref('/event/' + data.eventId).remove();
  
  return true;

});
