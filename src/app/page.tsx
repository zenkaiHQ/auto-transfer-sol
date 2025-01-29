'use client'
import { Button } from "@/components/ui/button";
import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const { login } = useLogin();
  const { logout } = useLogout();
  const handleLogin = () => {
    login();
    if (authenticated) {
      router.push("/dashboard");
    }
  }
  console.log(user)
  console.log(ready, "Authentication state", authenticated)
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {/* <button onClick={login}>Login</button> */}
        {
          (authenticated) ?
            <Button onClick={logout} className="">Logout</Button>
            : <Button onClick={handleLogin} className="">Login</Button>
        }
      </div>
    </>
  )
}
