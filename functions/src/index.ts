import functions = require("firebase-functions");
import admin = require("firebase-admin");
admin.initializeApp();
import sgMail = require('@sendgrid/mail');

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;

sgMail.setApiKey(API_KEY as string);


exports.userFirstTimeCreation = functions.auth.user().onCreate(async (user) => {
  const msg = {
    to: user.email,
    from: 'anthony@taaskly.xyz',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      "subject": "Welcome to Taaskly !!!",
      "name": user.displayName ? user.displayName.split(' ')[0] : user.email,
    },
  };

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
  await admin.firestore().collection("users").doc(user.uid).set({
    id: user.uid,
    email: user.email,
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    student: false,
    address: "",
    dob: "",
    verified: false,
    level: 0,
    tasker_rating: 0,
    runner_rating: 0,
    desc: "",
  });

  return sgMail.send(msg);
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
