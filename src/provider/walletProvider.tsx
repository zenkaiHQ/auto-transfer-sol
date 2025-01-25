'use client'
import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";

export default function WalletProvider({ children }: { children: React.ReactNode }) {
    return (
        <PrivyProvider
            // clientId=""
            appId="clvpi8pq200th8loizd3u63xs"
        >
            {children}
        </PrivyProvider>
    )
}