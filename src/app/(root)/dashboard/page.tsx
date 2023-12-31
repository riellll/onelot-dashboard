import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FaUpload } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import Linechart from "@/components/dashboard_comp/Linechart";
import Barchart from "@/components/dashboard_comp/Barchart";
import { carData } from "@/lib";
import TableCard from "@/components/card/TableCard";
import Smallcard from "@/components/dashboard_comp/Smallcard";


const page = async () => {
  const session = await getServerSession(options);
  if (!session) redirect("/login");
  return (
    <div className=" pt-5">
      <p className="mb-2 text-lg font-medium text-gray-700 lg:text-xl dark:text-gray-400">
        Welcome Back,
      </p>


      <div className="flex gap-5 flex-wrap justify-between">
      <h1 className="text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-white">
        {session?.user?.name}
      </h1>
      <div className='flex gap-3'>
      <button type="button" className="text-white space-x-4 bg-violet-700 hover:bg-violet-800 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center me-2 dark:bg-violet-600 dark:hover:bg-violet-700">
      <FaUpload />
      <span className="hidden sm:block">Upload Product </span>
      </button> 
      
       <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
      </div>
      
      <button type="button" className="text-violet-700 border border-violet-700 hover:bg-violet-700 hover:text-white font-medium rounded-full text-sm p-3 text-center inline-flex items-center dark:border-violet-500 dark:text-violet-500 dark:hover:text-white dark:hover:bg-violet-500">
      <span><FaBell /></span>
      </button>
      </div>
      </div>


      <div className="flex flex-col-reverse lg:flex-row gap-5">
      <Linechart/>
      <div className="flex lg:flex-col flext-wrap sm:w-96 lg:space-y-5 mt-10">
      <Smallcard/>
      </div>
      </div>

      <Barchart/>
      <TableCard carData={carData}/>
    </div>
  );
};

export default page;
