"use client"
import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'
import {redirect} from "next/navigation"
import { useRouter } from 'next/router'
//make sure to go to http://localhost:3000/feed

function Login() {
  const {data: session, status} = useSession()
  const router = useRouter()

  if (status === "authenticated"){
    router.push("/feed")
  }

  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  )
}

export default Login