import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  sepolia,arbitrum,avalanche,bscTestnet,bsc,polygonMumbai,polygon,mainnet,avalancheFuji,filecoin
} from "wagmi/chains";


import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { ConnectButton } from '@rainbow-me/rainbowkit';

import {useState, useEffect } from 'react';

import { useNetwork } from 'wagmi'

import Sende from "./Sende"



const { chains, publicClient } = configureChains(
  [polygon, filecoin,polygonMumbai, sepolia
  ],
  [
    alchemyProvider({ apiKey: process.env.ALC_API_KEY  }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "POI",
  projectId: "28f4be6376c23dfbeeb7ef1dd2908f10",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function Adfs(){
    const [hsh,sethsh]=useState("")
    const [completion,setCompletion] = useState("")
    const rawdata = "Hello from sub trac"

    const convertToHex = (str) => str.split('').map(c => c.charCodeAt(0).toString(16)).join('');

var data = "0x"+convertToHex(rawdata)

    return(

        <div>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider theme={darkTheme({
      accentColor: '#DADADA',
      accentColorForeground: 'black',
      borderRadius: 'small',
      fontStack: 'rounded',
      overlayBlur: 'small',
    })} chains={chains}>

<div className="flex flex-row gap-2">
<ConnectButton/>

<Sende data={data} hsh={sethsh} completion={completion} setCompletion={setCompletion} work={true}/>

</div>
</RainbowKitProvider>
</WagmiConfig>
</div>

    )
}

