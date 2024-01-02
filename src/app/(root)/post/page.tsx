import { options } from '@/app/api/auth/[...nextauth]/options';
import PostCard from '@/components/card/PostCard'
import Paginations from '@/components/vehicles_components/Paginations';
import { getCarData, getPostData } from '@/lib/getCarData';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
type Props = {
  searchParams: { [key: string]: string | undefined };
};

const page = async ({ searchParams }: Props) => {
  const session = await getServerSession(options);
  if(!session) redirect('/login')
  const { page } = searchParams
  const { postsData, totalItem, totalPage } = getPostData({page});
  return (
    <div>
   <div>
    <h1 className='text-4xl mt-3 font-extrabold dark:text-white'>{"Explore Our Company's Updates"}</h1>
    <p className='my-4 text-lg text-gray-500'>{"Follow us for the latest updates and insights into our company's journey!"}</p>
   </div>
   <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-5 items-center justify-between  gap-3 mb-10 mt-7'>
   {postsData.map((item, index) => (
    <PostCard key={index} imageUrl={item.imageUrl} content={item.content}/>
    ))}
   </div>
   <div className="flex justify-between pb-5">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">1</span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">8</span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalItem}
          </span>{" "}
          Entries
        </span>
        <Paginations
          filter={''}
          list={''}
          search={''}
          totalPage={totalPage}
          currentPage={Number(page) || 1}
        />
      </div>
    </div>
  )
}

export default page