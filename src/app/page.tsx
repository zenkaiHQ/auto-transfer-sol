'use client'
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Home() {
  const route = useRouter()
  const { connected, } = useWallet();
  useEffect(() => {
    async function checkConnection() {
      if (connected) {
        console.log("Connected successfully")
        Cookies.set('walletConnected', 'true')
        route.push('/dashboard')
      }
    }
    checkConnection();
  }, [connected])
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {connected ?
          <WalletDisconnectButton />
          : <WalletMultiButton />

        }
      </div>
    </>
  )
}
