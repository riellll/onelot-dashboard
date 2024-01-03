
import Link from 'next/link';
import { BiLogoMicrosoft } from "react-icons/bi";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
<Link href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
      <span className='text-4xl text-white rotate-45 bg-violet-600 p-2 rounded-full'><BiLogoMicrosoft /></span>
      <span className="self-center text-violet-600 text-6xl font-bold whitespace-nowrap dark:text-white">OneLot</span>
  </Link>
    </div>
  )
}
