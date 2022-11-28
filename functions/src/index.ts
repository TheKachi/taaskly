import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {IncomingWebhook} from '@slack/webhook';
// .IncomingWebhook;
admin.initializeApp();
import sgMail = require('@sendgrid/mail');

exports.userFirstTimeProfileUpdate = functions
	.runWith({secrets: ['SENDGRID_KEY', 'SLACK_WEBHOOK_URL']})
	.firestore.document('users/{userId}')
	.onCreate(async (snap: any) => {
		const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
		const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL as string);
		const oldValues = snap.data();
		const user_name = oldValues.first_name ?
			oldValues.first_name :
			oldValues.email;
		const SENDGRID_KEY = process.env.SENDGRID_KEY;
		sgMail.setApiKey(SENDGRID_KEY as string);

		const msg = {
			to: oldValues.email,
			from: 'Taaskly <anthony@taaskly.xyz>',
			subject: 'Welcome to Taaskly !!!',
			text: `Hello ${user_name}, Welcome to Taaskly !!! <br> <br> At Taaskly we are trying to create new ways for you get your tasks done and also earn money with ease. <br> <br> We are currently in beta and we would love to hear your feedback. <br> <br> Please feel free to reach out to us at <a href="mailto:anthony@taaskly.xyz"> anthony@taaskly.xyz </a> or <a href="https://wa.me/+2348115222468?" target="_blank" rel="noopener noreferrer">+2348115222468</a> <br> <br> Thanks, <br> <br>  Taaskly Team`,
			html: `Hello ${user_name}, Welcome to Taaskly !!! <br> <br> At Taaskly we are trying to create new ways for you get your tasks done and also earn money with ease. <br> <br> We are currently in beta and we would love to hear your feedback. <br> <br> Please feel free to reach out to us at <a href="mailto:anthony@taaskly.xyz"> anthony@taaskly.xyz </a> or <a href="https://wa.me/+2348115222468?" target="_blank" rel="noopener noreferrer">+2348115222468</a> <br> <br> Thanks, <br> <br>  Taaskly Team`,
		};

		await admin
			.auth()
			.setCustomUserClaims(oldValues.id, {hasUpdatedProfile: true});
		await webhook.send({
			icon_emoji: ':male-police-officer:',
			text: `Hi admins, ${user_name} with the ID of ${oldValues.id} just signed up`,
		});
		return sgMail.send(msg);
	});

exports.updateVerificationLevel = functions
	.region('us-central1')
	.https.onCall(async (data: any, context: any) => {
		const level = data.level;
		const uid = context?.auth?.uid;
		const name = context?.auth?.token?.name;
		// const email = context?.auth?.token?.email;
	const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
		const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL as string);
		if (!(typeof level === 'number') || level > 2) {
			throw new functions.https.HttpsError(
				'invalid-argument',
				'The function must be called with ' +
					'one arguments "level" containing the level number'
			);
		}

		if (!context.auth) {
			throw new functions.https.HttpsError(
				'failed-precondition',
				'The function must be called ' + 'while authenticated.'
			);
		}
	await webhook.send({
			icon_emoji: ':male-police-officer:',
			text: `Hi admins,  user ${name} with ID of ${uid} is requesting to be verified`,
		});
		return admin
			.firestore()
			.collection('users')
			.doc(uid as string)
			.update({verifiedLevel: level})
			.then(() => {
				return {level: `Verification level updated to ${level} successfully`};
			});
	});
