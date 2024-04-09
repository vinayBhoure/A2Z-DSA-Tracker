import React from "react";
import Button from "../components/Button";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = (e) => { 
    setShowPassword(!showPassword);
  }


  return (
    <div className="w-full py-12 ">
      <div className="mx-auto max-w-md p-8 space-y-4 border-2 rounded-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">Create an account</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <div className="grid max-w-md gap-4 mx-auto">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="username"
            >
              Username
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="username"
              placeholder="johndoe"
              required=""
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="full-name"
            >
              Full name
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="full-name"
              placeholder="John Doe"
              required=""
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="m@example.com"
              required=""
              type="email"
            />
          </div>
          <div className="flex gap-4">
            <div className="space-y-2 relative">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                required=""
                type={showPassword ? "text" : "password"}
              />
              <div className="absolute top-0 right-0" onClick={(e) => showPasswordHandler(e)}>
              { showPassword ? (<RxEyeOpen />) : <GoEyeClosed /> }
              </div>
            </div>
            <div className="space-y-2 relative">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="confirm-password"
                required=""
                type={showPassword ? "text" : "password"}
              />
               <div className="absolute top-0 right-0" onClick={() => showPasswordHandler(e)}>
               { showPassword ? (<RxEyeOpen />) : <GoEyeClosed /> }
              </div>
            </div>
          </div>
          <Button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            type="submit"
            css="[object Object]"
          >
            Sign Up
          </Button>
          <div className="flex items-center">

          <div className="h-[0.125rem] grow bg-slate-200 mx-2"></div>
          <div className="flex grow-0 font-base text-slate-400">OR</div>
          <div className="h-[0.125rem] grow bg-slate-200 mx-2"></div>
          </div>
          <div className="w-full">
            <Button >
              Sign up with Google
            </Button>
          </div>
          <div class="mt-4 text-center text-sm">
              Already have an account?
              <Link class="underline" to="/login" rel="ugc">
                Log in
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
