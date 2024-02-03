"use client"

import { supabase } from "@/lib/supabase"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Session } from "@supabase/auth-helpers-nextjs";
import Spline from '@splinetool/react-spline';




export default function Home() {
  const [session, setSession] = useState<Session|null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession()
    .then(session => setSession(session.data.session ?? null))
    .catch(err => { console.log("ERROR GET SESSION: ", err) })
  },[])

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const handleServiceWorker = async () => {
        const register = await navigator.serviceWorker.register("/sw.js");
  
        const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: "BEvm8uwPLY2mscEIyBTGpi2PfNQRa4UX8yqBKHb1h0k3nPK92gvYJK1ZN51vxYsrluE2lgEeXnQXCxzLgC3sx4A",
        });
  
        const res = await fetch("/api/subscribe", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "content-type": "application/json",
          },
        });
  
        const data = await res.json();
        console.log(data);
      };
      handleServiceWorker();
    }
  }, []);
  
return (
  <div>
    <div className="w-screen overflow-hidden h-screen flex flex-row" >
<div className="w-1/2 h-screen bg-[#18181B] border-1 border-[#27272A]">

<div className="antialiased flex min-h-screen flex-col items- justify-start mt-[60vh] px-14">
      <div className=" gap-4 flex flex-col   ">
        <div className="max-w-1/2">
        <h1 className="font-semibold text-4xl overflow-wrap break-word text-[#fafafa]">Welcome, </h1>
        <p className="font-semibold overflow-wrap break-word text-[#fafafa] text-2xl overflow-wrap break-word">{session ? session.user.email : 'Guest!'}</p>
        </div>
        {session ? (
          <div className="flex gap-2 flex-row">
            {!loading && <><br/> <Link href={`/dashboard?email=${encodeURIComponent(session.user.email)}`}>
    <p className="p-2 bg-[#FAFAFA] text-[#27272A] rounded-md">Dashboard</p>
  </Link></>} 
          <button className="bg-[#09090B] border-1 border-[#27272A] font-semibold rounded px-4 py-2 text-[#FAFAFA]"
            onClick={async (e) => {
              e.preventDefault()
              setLoading(true);
              const { error } = await supabase.auth.signOut();
              setLoading(false);
              if (!error) setSession(null) 
            }}
            disabled={loading}>
            {loading ? 'Loading' : 'Logout'}
            
          </button>
          
          
          </div>
        ):(
          
          <Link href="/auth/login" 
            className="bg-[#fafafa] w-1/2 font-semibold rounded px-4 py-2 text-[#27272A]">
            Login
          </Link>
        )}        
      </div>
    </div>
    
</div>
<div className="w-1/2 h-screen flex flex-col items-center bg-[#09090B]">

<div className="w-full h-full mt-[20vh] ">
<Spline scene="https://prod.spline.design/ZoTAcxYSJVlf9OZp/scene.splinecode" /></div>
</div>

    </div>
   </div>
  )
}