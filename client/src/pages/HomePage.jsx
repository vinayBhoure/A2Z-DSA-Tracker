import React from 'react'
import Button from '../components/Button'
import { useUserContext } from '../context/context'

export default function HomePage() {
  const {authUser} = useUserContext();
  return (
    <section className="flex justify-center w-full py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              The future of DSA Tracking System
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              The only platform you need to track your progress and revision.
            </p>
          </div>
          {authUser ? (<div className="w-full max-w-sm py-1 flex flex-col sm:flex-row items-center justify-center gap-3">
              
              <Button link={"/dashboard"} >DashBoard</Button>
              <Button link={"/problems"} >Problems</Button>
          </div>) : 
          (<div className="w-full max-w-sm py-1 flex items-center justify-center gap-3">
              
              <Button link={"/login"}>Log In</Button>
              <Button link={"/signup"}>Sign Up</Button>
          </div>)}
        </div>
      </div>
    </section>
  )
}
