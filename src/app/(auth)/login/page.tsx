import { options } from '@/app/api/auth/[...nextauth]/options';
import LoginForm from '@/components/auth_components/LoginForm';
import { getServerSession } from 'next-auth';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'
import { BiLogoMicrosoft } from "react-icons/bi";
type Props = {
  searchParams: { [key: string]: string | undefined };
};
const page = async ({ searchParams }: Props) => {
  const session = await getServerSession(options);
  if(session) redirect('/')

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
    <LoginForm err={searchParams.error}/>
  </div>
</main>
  )
}

export default page