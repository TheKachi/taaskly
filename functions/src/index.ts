import functions = require("firebase-functions");
import admin = require("firebase-admin");
admin.initializeApp();

exports.userFirstTimeCreation = functions.auth.user().onCreate(async (user) => {
  // for background triggers you must return a value/promise
  await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("Tasks")
      .doc("start").set({onCreated: new Date()});
  await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("Runs")
      .doc("start").set({onCreated: new Date()});
  return admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({
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
      });
});

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
