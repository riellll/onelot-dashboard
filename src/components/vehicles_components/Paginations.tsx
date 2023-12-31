"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
type Props = {
  filter: string | undefined;
  list: string | undefined;
  search: string | undefined;
  totalPage: number | undefined;
  currentPage: number | undefined;
};
const Paginations = ({ filter, list, search, totalPage, currentPage }: Props) => {
  const router = useRouter();
   console.log(totalPage)
   console.log(list)
   console.log(search)
  const handleChange = (page: number) => {
    if(filter && list && search){
       router.push(`/vehicles?list=${list}&filter=${filter}&search=${search}&page=${page}`)
   }else if(filter && list){
       router.push(`/vehicles?list=${list}&filter=${filter}&page=${page}`)
   }else if(filter && search){
       router.push(`/vehicles?filter=${filter}&search=${search}&page=${page}`)
   }else if(list && search){
          router.push(`/vehicles?list=${list}&search=${search}&page=${page}`)
   }else if(filter){
        router.push(`/vehicles?filter=${filter}&page=${page}`)
   }else if(search){
          router.push(`/vehicles?search=${search}&page=${page}`)
   }else if(list){
          router.push(`/vehicles?list=${list}&page=${page}`)
   }else{
          router.push(`/vehicles?page=${page}`)
   }
   }

   const numberArray: number[] = Array(totalPage).fill(undefined).map((_, index) => index + 1);

  return (

<div>
  <ul className="flex items-center -space-x-px h-8 text-sm">
    <li>
      <button onClick={() => {
        if(currentPage === 1 || !currentPage) return
        handleChange(currentPage - 1)
      }}
      disabled={currentPage === 1 || !currentPage ? true : false} 
      className={`flex ${currentPage === 1 || !currentPage ? 'text-gray-300 dark:text-gray-600' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white'} items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 rounded-e-lg  dark:bg-gray-800 dark:border-gray-700`}>
        <span className="sr-only">Previous</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
      </button>
    </li>
    {Array(totalPage).fill(undefined).map((_, index: number) => (
    <li>
      <button onClick={() => {
        if(currentPage === index+1) return
        handleChange(index + 1)
      }}
      key={index}
      disabled={currentPage === index+1 ? true : false} 
      className={`flex ${currentPage === index+1 ? 'text-blue-600 border border-blue-400 bg-blue-50' : 'text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-700 border-gray-300'} items-center justify-center px-3 h-8 leading-tight bg-white border hover:bg-gray-100 dark:bg-gray-800`}>
        {index + 1}
        </button>
    </li>
    ))}
    <li>
      <button onClick={() => {
        if(currentPage === totalPage) return
        handleChange(Number(currentPage) + 1)
      }} 
      disabled={currentPage === totalPage ? true : false}
      className={`flex ${currentPage === totalPage ? 'text-gray-300 dark:text-gray-600' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white'} items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 rounded-e-lg  dark:bg-gray-800 dark:border-gray-700`}>
        <span className="sr-only">Next</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </button>
    </li>
  </ul>
</div>
  );
};

export default Paginations;

    {/* <Pagination
      showControls
      onChange={(p: number) => {
        if(filter){
             router.push(`/vehicles?filter=${filter}&page=${p}`)
        }else if(search){
               router.push(`/vehicles?search=${search}&page=${p}`)
        }else if(list){
               router.push(`/vehicles?list=${list}&page=${p}`)
        }else{
              router.push(`/vehicles?page=${p}`)
     }
      }}
      total={totalPage || 0}
      // page={3}
      initialPage={Number(currentPage) || 1}
      variant={"flat"}
      color={"success"}
    /> */}