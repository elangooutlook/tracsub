
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

  var inno = await req.json()
  await prisma.innovations.create({
    data:{
        title:inno.title,
        hash:inno.hash,
        author: inno.author,
        pass: inno.pass,
        date: inno.date,
        chain: inno.chain

    }
  })
  

  return new Response("OK")
  
}
