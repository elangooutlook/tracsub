"use client"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import * as React from 'react';
import {
  useSendTransaction,
  useWaitForTransaction,
  useAccount,
} from 'wagmi';
import { utils } from 'ethers';




export default function Ppost ({data,hsh,completion,setCompletion,work}) {
  const { address, connector, isConnected } = useAccount()


// data , sethsh,completion,setcomple,work
    
      const { tdata, sendTransaction } = useSendTransaction({
        to: address, // Your address here
        value: utils.parseEther('0.05'),
        data: data,
        nonce:12,
        onSuccess(tdata) {
          console.log('Success', tdata.hash)
          hsh(tdata.hash)
          setCompletion(true)
        },
      });
    
      const { isLoading, isSuccess } = useWaitForTransaction({
        hash: tdata?.hash,
        
        
      });

  


  
  
        
    
    

  return (
    <div className='flex bg-[#DADADA] hover:bg-[#c8c8c8] justify-center items-center p-2 cursor-pointer' onClick={(e) => {
      if (!isConnected){
        alert("Connect a Wallet and conntinue")

      }else{

        if (!completion && work){
        sendTransaction?.();
      }}
      
    }}>
      <button className="text-[#282828] hover:text-[#272727] ">

  {isLoading
    ? 'Uploading'
    : isSuccess
    ? 'Uploaded'
    : 'Upload'}
</button>
      <FaArrowRight className="text-[#282828] hover:text-[#272727]"/>
    </div>
  );
};