import Boxcard from "@/components/card/Boxcard";
import FilterButton from "@/components/vehicles_components/FilterButton";
import InputSearch from "@/components/vehicles_components/InputSearch";
import ListBox from "@/components/vehicles_components/ListBox";

import { FaPlus } from "react-icons/fa6";
import Paginations from "@/components/vehicles_components/Paginations";
import TableCard from "@/components/card/TableCard";
import { getCarData } from "@/lib/getCarData";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

type Props = {
  searchParams: { [key: string]: string | undefined };
};



const page = async ({ searchParams }: Props) => {
  const { filter, list, search, page } = searchParams;
  const { carsData, totalItem, totalPage } = getCarData({
    filter,
    search,
    page,
  });
  const session = await getServerSession(options);
  if (!session) redirect("/login");

  return (
    <div className="max-w-screen-2xl">
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
            <InputSearch filter={filter} list={list} />
          </div>
          <div className="flex gap-5">
            <ListBox filter={filter} list={list} search={search} />
          </div>
        </div>
      </div>
      {list === "select" ? (
        <div>
          <TableCard carData={carsData} />
        </div>
      ) : (
        <div
          className={`grid ${
            filter === "car-loan"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          } sm:gap-5 items-center justify-between gap-3 mb-10 mt-7`}
        >
          {carsData.map((item) => (
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
      )}
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
