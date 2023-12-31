import Boxcard from '@/components/card/Boxcard'
import FilterButton from '@/components/vehicles_components/FilterButton';
import InputSearch from '@/components/vehicles_components/InputSearch';
import ListBox from '@/components/vehicles_components/ListBox';
import Link from 'next/link';

type Props = {
    params: { search: string }
    searchParams: { [key: string]: string | undefined } 
  }
const page = ({ params, searchParams }: Props) => {
  return (
    <div>
    <div className='flex flex-col gap-5 pt-5'>
        <p>Vehicles</p>
        <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>{searchParams.filter === 'car-loan' ? 'Car Loan' : 'Vehicles'}</h1>
        <div className='flex gap-5'>
        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700">New Vehicles</button>
         <FilterButton list={searchParams.list}/>
        </div>
        </div>
        <div className="flex items-center gap-20 sm:gap-52 lg:gap-96">   
    <div className="relative w-full">
    <InputSearch filter={searchParams.filter} list={searchParams.list}/>
    </div>
    <div className='flex gap-5'>
    <ListBox filter={searchParams.filter} list={searchParams.list} search={searchParams.search}/>
    </div>
       </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-5 items-center justify-between min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:mb-10 min-[320px]:mt-7">
        <Boxcard/>
        <Boxcard/>
        <Boxcard/>
        <Boxcard/>
        <Boxcard/>
        <Boxcard/>
        <Boxcard/>
    </div>
    </div>
  )
}

export default page