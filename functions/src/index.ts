import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
// import sgMail from '@sendgrid/mail';

// const API_KEY = functions.config().sendgrid.key;
// const TEMPLATE_ID = functions.config().sendgrid.template;

// sgMail.setApiKey(API_KEY as string);

    // const msg = {
    //   to: req.body.emailID,
    //   from: { email: "YOUR_SENDGRID_SENDER_EMAIL", name: "Suraj" }, 
    //   //put your sendgrid sender in email
    //   //field and custom name in name field
    //   subject: "Firebase Auth OTP",
    //   text: "OTP for signin/signup",
    //   html: `Your OTP for Firebase Auth with email ::: ${otp}`,
    // };

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
    .onCreate(async (snap: any) => {
      const oldValues = snap.data();
      admin.auth().setCustomUserClaims(oldValues.id, {hasUpdatedProfile: true});
    });

exports.updateVerificationLevel = functions.region("us-central1").https.onCall((data: any, context: any) => {
  const level = data.level;
  const uid = context?.auth?.uid;

  if (!(typeof level === "number") || level > 2) {
    throw new functions.https.HttpsError("invalid-argument", "The function must be called with " +
      "one arguments \"level\" containing the level number");
  }


  if (!context.auth) {
    throw new functions.https.HttpsError("failed-precondition", "The function must be called " +
      "while authenticated.");
  }


  return admin.firestore().collection("users").doc(uid as string).update({verifiedLevel: level}).then(() => {
    return {level: `Verification level updated to ${level} successfully`};
  });
});

// exports.setVerificationLevel = functions.firestore
//     .document("users/{userId}")
//     .onCreate(async (snap) => {
//       const oldValues = snap.data();
//       admin.auth().setCustomUserClaims(oldValues.id, {verificationLevel: 0});
//     });

