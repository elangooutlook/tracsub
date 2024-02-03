
import { NextResponse } from 'next/server'
import prisma from "@/prisma/client"


export async function GET(req, res) {
    var ur = new URL(req.url)
    var ema = ur.searchParams.get('email')

  try {
    const userdata = await prisma.users.findUnique({
        where: {
            email: ema,
          }
    });

 var ddf = await userdata
 
    return NextResponse.json({ ddf })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


export async function POST(req) {

  const { email, subscription } = req.body;

  try {
   
    let user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
     
      user = await prisma.users.update({
        where: {
          email: email,
        },
        data: {
          subscriptions: subscription,
        },
      });
    } else {

      user = await prisma.users.create({
        data: {
          email: email,
          subscriptions: subscription,
        },
      });
    }

    return new Response("OK")
  } catch (error) {
    console.error('Error handling the request:', error.message);
   
  }

 
  
}