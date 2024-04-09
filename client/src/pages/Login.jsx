import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div class="flex w-full items-center px-4 py-6">
      <div class="w-full max-w-sm mx-auto space-y-4">
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div class="flex flex-col p-6 space-y-1">
            <p class="whitespace-nowrap tracking-tight text-3xl font-bold">
              Login
            </p>
            <p class="text-sm text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="m@example.com"
                  required=""
                />
              </div>
              <div class="space-y-2">
                <div class="flex items-center">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                  >
                    Password
                  </label>
                  <Link
                    class="ml-auto inline-block text-sm underline"
                    to="#"
                    rel="ugc"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <input
                  type="password"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  required=""
                />
              </div>
              <Button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Login
              </Button>
              <Button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                Login with Google
              </Button>
            </div>
            <div class="mt-4 text-center text-sm">
              Don't have an account?
              <Link class="underline" to="/signup" rel="ugc">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
