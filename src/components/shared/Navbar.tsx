import Link from 'next/link';
import React from 'react'
import { BiLogoMicrosoft } from "react-icons/bi";
import ProfileLogo from './ProfileLogo';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import Mobile_Sidebar from './Mobile_Sidebar';
const Navbar = async () => {
  const session = await getServerSession(options);
  // console.log(session)


  return (
    
<nav className="fixed top-0 start-0 w-full z-30 bg-white border-gray-300 border-b dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
    <div className='flex gap-3 items-center'>
      <div className='md:hidden text-3xl text-center'>
      <Mobile_Sidebar/>
      </div>
      <Link href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
      <span className='text-2xl text-white rotate-45 bg-violet-600 p-2 rounded-full'><BiLogoMicrosoft /></span>
      <span className="self-center text-violet-600 text-3xl font-bold whitespace-nowrap dark:text-white">OneLot</span>
  </Link>
    </div>

  <div className="flex items-center gap-4">
    
    {session ? <ProfileLogo/> : <Link href={'/login'} className="text-white bg-violet-700 hover:bg-violet-800  font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-violet-600 dark:hover:bg-violet-700">
    Sign in
    <svg className="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/ svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"     d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    </Link>}
  </div>
  </div>
</nav>

  )
}

export default Navbar