import functions from "firebase-functions";
import admin from "firebase-admin";
admin.initializeApp();
import sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
// const TEMPLATE_ID = functions.config().sendgrid.template;

sgMail.setApiKey(API_KEY as string);


// exports.userFirstTimeCreation = functions.auth.user().onCreate(async (user) => {
//   const msg = {
//     to: user.email,
//     from: 'Taaskly <anthony@taaskly.xyz>',
//     templateId: TEMPLATE_ID,
//     dynamic_template_data: {
//       "subject": "Welcome to Taaskly !!!",
//       "name": user.displayName ? user.displayName.split(' ')[0] : user.email,
//     },
//   };

//   await admin
//       .firestore()
//       .collection("users")
//       .doc(user.uid)
//       .collection("Tasks")
//       .doc("start")
//       .set({onCreated: new Date()});
//   await admin
//       .firestore()
//       .collection("users")
//       .doc(user.uid)
//       .collection("Runs")
//       .doc("start")
//       .set({onCreated: new Date()});
//   return sgMail.send(msg);
// });


exports.userFirstTimeProfileUpdate = functions.firestore
    .document("users/{userId}")
    .onCreate(async (snap) => {
      const oldValues = snap.data();
      admin.auth().setCustomUserClaims(oldValues.id, {hasUpdatedProfile: true});
    });

exports.updateVerificationLevel = functions.https.onCall((data, context) => {
  const level = data.level;
  const uid = context?.auth?.uid || null;
});

// exports.setVerificationLevel = functions.firestore
//     .document("users/{userId}")
//     .onCreate(async (snap) => {
//       const oldValues = snap.data();
//       admin.auth().setCustomUserClaims(oldValues.id, {verificationLevel: 0});
//     });

