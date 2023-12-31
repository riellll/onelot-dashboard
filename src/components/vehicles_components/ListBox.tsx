import Link from "next/link";
import React from "react";
import { BiLogoMicrosoft } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
type Props = {
  filter: string | undefined;
  list: string | undefined;
  search: string | undefined;
};

const ListBox = ({ filter, list, search }: Props) => {
  const selectLink = () => {
    if(filter && search){
      return (`/vehicles?list=select&filter=${filter}&search=${search}`)
  }else if(filter){
      return (`/vehicles?list=select&filter=${filter}`)
  }else if(search){
      return (`/vehicles?list=select&search=${search}`)
  }else{
      return (`vehicles?list=select`)
  }
  }
  const boxLink = () => {
    if(filter && search){
      return (`/vehicles?list=box&filter=${filter}&search=${search}`)
  }else if(filter){
      return (`/vehicles?list=box&filter=${filter}`)
  }else if(search){
      return (`/vehicles?list=box&search=${search}`)
  }else{
      return (`vehicles?list=box`)
  }
  }
  return (
    <>
      <Link
        href={selectLink()}
        className={`${
          list === "select"
            ? "text-gray-900"
            : "text-gray-300 hover:text-gray-600"
        } text-2xl`}
      >
        <IoListSharp />
      </Link>
      <Link
        href={boxLink()}
        className={`${
          list === "box" ? "text-gray-900" : `${!list ? 'text-gray-900' :'text-gray-300 hover:text-gray-600'}`
        } text-2xl`}
      >
        <BiLogoMicrosoft />
      </Link>
    </>
  );
};

export default ListBox;
