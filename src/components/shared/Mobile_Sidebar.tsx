'use client'

import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link";
import { BiLogoMicrosoft } from "react-icons/bi";
import { PiListBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


const Mobile_Sidebar = () => {
  return (
    <Sheet>
  <SheetTrigger><PiListBold /></SheetTrigger>
  <SheetContent side={"left"}>
    <SheetHeader>
      <SheetTitle>
    <Link href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
      <span className='text-2xl text-white rotate-45 bg-violet-600 p-2 rounded-full'><BiLogoMicrosoft /></span>
      <span className="self-center text-violet-600 text-3xl font-bold whitespace-nowrap dark:text-white">OneLot</span>
     </Link>
     </SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
    <div className="h-full pt-5 py-4 overflow-y-auto  dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="/">
                <SheetClose className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <p className='text-2xl text-cyan-400'><AiFillHome /></p>
               <span className="ms-3">Home</span>
               </SheetClose>
            </Link>
         </li>
         <li>
         <Accordion type="single" collapsible>
         <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"> 
          <div className="flex">
          <p className='text-2xl text-cyan-400'><FaTruck /></p>
          <span className="ms-3">Fleet</span>
          </div>
        </AccordionTrigger>
        <Link href={'/vehicles'} >
          <AccordionContent className="hover:bg-gray-100 rounded-lg text-gray-900 text-md">
        <SheetClose className='px-12 py-2 w-full text-start'>
           Vehicles
        </SheetClose>
          </AccordionContent>
        </Link>
         </AccordionItem>
         <AccordionItem value="item-2" className='mt-2'>
          <AccordionTrigger className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"> 
          <div className="flex">
          <p className='text-2xl text-cyan-400'><HiSpeakerphone /></p>
          <span className="ms-3">Marketing</span>
          </div>
        </AccordionTrigger>
        <Link href={'/post'}>
          <AccordionContent className='font-medium hover:bg-gray-100 rounded-lg text-gray-900 text-md'>
          <SheetClose className='px-12 py-2 w-full text-start'>
           Posts
           </SheetClose>
          </AccordionContent>
        </Link>
         </AccordionItem>
        </Accordion>
         </li>
         <li>
            <Link href="/dashboard">
               <SheetClose className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <p className='text-2xl text-cyan-400'><IoPersonSharp /></p>
               <span className="ms-3">Dashboard</span>
               </SheetClose>
            </Link>
         </li>
      </ul>
   </div>
  </SheetContent>
</Sheet>
  )
}

export default Mobile_Sidebar