import Link from 'next/link'
import React from 'react'
import { BiLogoMicrosoft } from "react-icons/bi";

const page = () => {
  return (
<main className="flex justify-center items-center h-screen bg-gray-100">
  <div
    className="rounded-lg border text-card-foreground shadow-lg max-w-md w-full space-y-6 bg-white dark:bg-gray-800 p-8"
    data-v0-t="card"
  >
    <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
      <span className='text-2xl text-white rotate-45 bg-violet-600 p-2 rounded-full'><BiLogoMicrosoft /></span>
      <span className="self-center text-violet-600 text-3xl font-bold whitespace-nowrap dark:text-white">OneLot</span>
      </div>
    <div className="flex flex-col space-y-1.5 p-6">
      <h3 className="tracking-tight text-2xl font-semibold text-gray-900 dark:text-white">Login</h3>
      <p className="text-sm text-gray-600 dark:text-gray-200">Welcome back!</p>
    </div>
    <div className="p-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
            id="email"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-gray-900 dark:text-white"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
            id="password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white">
          Login
        </button>
        <Link href={'/register'} className='text-blue-600 hover:text-blue-400'>Create Account &#8594;</Link>
      </div>
    </div>
  </div>
</main>
  )
}

export default page