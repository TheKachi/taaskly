import functions = require("firebase-functions");
import admin = require("firebase-admin");
admin.initializeApp();

exports.userFirstTimeCreation = functions.auth.user().onCreate((user) => {
  // for background triggers you must return a value/promise
  return admin.firestore().collection("users").doc(user.uid).set({
    id: user.uid,
    email: user.email,
    phone: "",
    student: false,
    address: "",
    DOB: "",
    verified: false,
    level: 0,
    tasker_rating: 0,
    runner_rating: 0,
    desc: "",
  }).then(() => {
    admin.firestore().collection("users").doc(user.uid).collection("Tasks");
    admin.firestore().collection("users").doc(user.uid).collection("Runs");
  });
});

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
