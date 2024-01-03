
import Link from 'next/link';
import { BiLogoMicrosoft } from "react-icons/bi";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-10 px-5 sm:px-24 pt-24">
<div className="flex items-center space-x-2 rtl:space-x-reverse">
      <span className='text-4xl text-white rotate-45 bg-violet-600 p-2 rounded-full'><BiLogoMicrosoft /></span>
      <span className="self-center text-violet-600 text-6xl font-bold whitespace-nowrap dark:text-white">OneLot</span>
  </div>
  <p className='text-md font-semibold text-gray-500'>We enable dealers to buy more cars through our inventory loan solutions and sell cars more efficiently through our Dealership Management System with its inventory management&#44; marketing solutions and market insights</p>
    </div>
  )
}
