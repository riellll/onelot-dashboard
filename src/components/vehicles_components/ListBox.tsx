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
  const filterLink = () => {
    
  }
  return (
    <>
      <Link
        href={filter ? `?list=select&filter=${filter}` : "?list=select"}
        className={`${
          list === "select"
            ? "text-gray-900"
            : "text-gray-300 hover:text-gray-600"
        } text-2xl`}
      >
        <IoListSharp />
      </Link>
      <Link
        href={filter ? `?list=box&filter=${filter}` : "?list=box"}
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
