'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

type Props = {
    filter: string | undefined;
    list: string | undefined;
  };
  
const InputSearch = ({filter,list}: Props) => {
    const router = useRouter()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
     if(filter && list){
        router.push(`/vehicles?list=${list}&filter=${filter}&search=${e.target.value}`)
    }else if(filter){
        router.push(`/vehicles?filter=${filter}&search=${e.target.value}`)
    }else if(list){
        router.push(`/vehicles?list=${list}&search=${e.target.value}`)
    }else{
        router.push(`/vehicles?search=${e.target.value}`)
    }
    }
  return (
    <input
      type="search"
      onChange={(e) => handleChange(e)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search for vehicles"
    />
  );
};

export default InputSearch;
