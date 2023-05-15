"use client"

import ThemeToggle from "@/components/custom/themeToggle"
import Image from "next/image"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {

  const {status, data} = useSession()

  return (
    <main className="flex flex-col items-center min-h-screen justify-center">
      <ThemeToggle />
        <p>login</p>
        <Image src={"http://localhost:8090/api/files/avatars/eos8cdr3a8sep4d/wallp_twC1QTZ2FS.jpg"}
          width={200}
          height={200}
          alt="avatar"
        />
        <button onClick={() => signIn("google")}>Sign in</button>
        <button onClick={() => signOut()}>Sign out</button>
        <p>{status}</p>
    </main>
  )
}
