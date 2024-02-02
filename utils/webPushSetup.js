// utils/webPushSetup.js
import webpush from "web-push";

const vapidKeys = {
  publicKey: process.env.VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY,
};

webpush.setVapidDetails(
  "mailto:elangovan.21ad@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

export default webpush;
