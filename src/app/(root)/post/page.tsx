import { options } from '@/app/api/auth/[...nextauth]/options';
import PostCard from '@/components/card/PostCard'
import {postData} from '@/lib/index'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await getServerSession(options);
  if(!session) redirect('/login')
  return (
    <div>
   <div>
    <h1 className='text-4xl mt-3 font-extrabold dark:text-white'>{"Explore Our Company's Updates"}</h1>
    <p className='my-4 text-lg text-gray-500'>{"Follow us for the latest updates and insights into our company's journey!"}</p>
   </div>
   <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-5 items-center justify-between  gap-3 mb-10 mt-7'>
   {postData.map((item, index) => (
    <PostCard key={index} imageUrl={item.imageUrl} content={item.content}/>
    ))}
   </div>
    </div>
  )
}

export default page