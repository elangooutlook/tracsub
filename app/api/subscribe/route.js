import { NextResponse } from 'next/server'

import webpush from "web-push";
import dotenv from "dotenv";

dotenv.config();

const vapidKeys = {
    publicKey: 'BEvm8uwPLY2mscEIyBTGpi2PfNQRa4UX8yqBKHb1h0k3nPK92gvYJK1ZN51vxYsrluE2lgEeXnQXCxzLgC3sx4A',
    privateKey: "Z_G7QijOzaUGorhNMVcOpuqCsDFqJKB65CtqadHlDZY",
  };

  webpush.setVapidDetails(
    "mailto:elangovan.21ad@gmail.com",
    vapidKeys.publicKey,
    vapidKeys.privateKey
  )

  let subscriptions = [];

  

export async function POST(req) {

  var subscription = await req.json()
  subscriptions.push(subscription);
  console.log(subscriptions)

  return new Response("OK")}





  export async function GET(req, res) {

    const notificationPayload = {
      title: "Subscription Reminder",
      body: "You have a upcoming subscription payment",
      icon:"https://picsum.photos/200/300",
      data: {
        url: "https://tracsub.vercel.app/",
      },
  };

  Promise.all(
    subscriptions.map((subscription) =>
      webpush.sendNotification(subscription, JSON.stringify(notificationPayload))
    )
  )
   return Response.json("Notification -->")
   




  
}