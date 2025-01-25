'use client'
import { Button } from "@/components/ui/button";
import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";
export default function Home() {
  const { ready, authenticated } = usePrivy();
  const { login } = useLogin();
  console.log(ready, "Authentication state", authenticated)
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {/* <button onClick={login}>Login</button> */}
        <Button onClick={login} className="">Login</Button>
      </div>
    </>
  )
}
