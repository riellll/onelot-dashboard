import Boxcard from "@/components/card/Boxcard";
import FilterButton from "@/components/vehicles_components/FilterButton";
import InputSearch from "@/components/vehicles_components/InputSearch";
import ListBox from "@/components/vehicles_components/ListBox";
import Link from "next/link";
import { carData } from "@/lib/index";
import { FaPlus } from "react-icons/fa6";
import Paginations from "@/components/vehicles_components/Paginations";
type Props = {
  searchParams: { [key: string]: string | undefined };
};
const page = ({ searchParams }: Props) => {
  const { filter, list, search, page} = searchParams;
  const category = filter === 'car-loan' ? 'Car Loan' : "Cars & Truck";
  const totalPage = Math.ceil(carData.filter(item => item.category === category).length / 8)
  const startIndex = (Number(page) - 1 || 0) * 8;
  const endIndex = startIndex + 8;
  return (
    <div>
      <div className="flex flex-col gap-5 pt-5">
        <p>Vehicles</p>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">
            {filter === "car-loan" ? "Car Loan" : "Vehicles"}
          </h1>
          <div className="flex gap-5">
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700"
            >
              <div className="flex gap-2">
                <span className="text-lg">
                  <FaPlus />
                </span>
                <span className="hidden sm:block">New Vehicle</span>
              </div>
            </button>
            <FilterButton list={list} />
          </div>
        </div>
        <div className="flex items-center gap-20 sm:gap-52 lg:gap-96">
          <div className="relative w-full">
            <InputSearch
              filter={filter}
              list={list}
            />
          </div>
          <div className="flex gap-5">
            <ListBox
              filter={filter}
              list={list}
              search={search}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 sm:gap-5 items-center justify-between min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:mb-10 min-[320px]:mt-7">
        {carData
        .filter(item => {
          if(search === ''){
              return item
            }else if(item.licensePlate.toLowerCase().includes(search || '') ||
            item.companyName.toLowerCase().includes(search || '') ||
            item.carDetails.toLowerCase().includes(search || '')){
              return item
            }
        })
        .filter(item => item.category === category)
        .slice(startIndex, endIndex)
        .map((item) => (
          <Boxcard
            key={item.licensePlate}
            licensePlate={item.licensePlate}
            companyName={item.companyName}
            category={item.category}
            carDetails={item.carDetails}
            model={item.model}
            mileage={item.mileage}
            buyingPrice={item.buyingPrice}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      <div className="flex justify-between pb-5">
      <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">8</span> of <span className="font-semibold text-gray-900 dark:text-white">{carData.length}</span> Entries
     </span>
        <Paginations
          filter={filter}
          list={list}
          search={search}
          totalPage={totalPage}
          currentPage={Number(page) || 1}
        />
      </div>
    </div>
  );
};

export default page;
