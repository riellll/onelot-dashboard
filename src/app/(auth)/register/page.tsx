import RegisterForm from '@/components/auth_components/RegisterForm';
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
      <div className="flex flex-col items-center justify-center space-y-1.5 pb-6">
        <h3 className="tracking-tight text-2xl font-semibold text-gray-900 dark:text-white">Create Account</h3>
        <p className="text-sm text-gray-600 dark:text-gray-200">Join our community!</p>
      </div>
     <RegisterForm/>
    </div>
  </main>
  )
}

export default page