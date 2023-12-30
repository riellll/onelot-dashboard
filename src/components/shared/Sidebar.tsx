import React from 'react'
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
import Link from 'next/link';
const Sidebar = () => {
  return (
    <aside className="fixed top-14 left-0 z-10 w-56 h-screen border-gray-300 border-r transition-transform -translate-x-full sm:translate-x-0">
   <div className="h-full px-3 pt-5 py-4 overflow-y-auto  dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <p className='text-2xl text-cyan-400'><AiFillHome /></p>
               <span className="ms-3">Home</span>
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
        <Link href={'?haha=lol'} >
          <AccordionContent className='px-12 py-2 hover:bg-gray-100 rounded-lg text-gray-900 text-md'>
           Vehicles
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
        <Link href={'?haha=lohhl'} >
          <AccordionContent className='px-12 py-2 font-medium hover:bg-gray-100 rounded-lg text-gray-900 text-md'>
           Posts
          </AccordionContent>
        </Link>
         </AccordionItem>
        </Accordion>
         </li>
         <li>
            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <p className='text-2xl text-cyan-400'><IoPersonSharp /></p>
               <span className="ms-3">Dashboard</span>
            </Link>
         </li>
      </ul>
   </div>
</aside>

  )
}

export default Sidebar