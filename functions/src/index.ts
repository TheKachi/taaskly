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
      .doc("start")
      .set({onCreated: new Date()});
  await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("Runs")
      .doc("start")
      .set({onCreated: new Date()});
  return admin.firestore().collection("users").doc(user.uid).set({
    id: user.uid,
    email: user.email,
    username: "",
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

exports.userFirstTimeUpdate = functions.firestore.document("users/{userId}").onUpdate(async (snap, context) => {
  const oldValues = snap.before.data();
  admin.auth().setCustomUserClaims(oldValues.id, {hasUpdatedProfile: true});
});


// exports.addAdmin = functions.https.onRequest((req, res) => {
//   // get user and add custom claim
//   // return addVerifyProfileClaim(data);
//   console.log("it works sha");
//   admin.auth().getUserByEmail(req.query.email as string).then((user) => {
//     console.log(user);
//     admin.auth().setCustomUserClaims(user.uid, {moderator: true});
//     console.log(req.query.email);
//     res.send("Hello from Firebase!");
//   }).catch((err) => {
//     res.send({"Error": err});
//   });
// });

// const addVerifyProfileClaim = async (user:any): Promise<void> => {
//   return admin.auth().setCustomUserClaims(user.uid, {moderator: true});
// };
