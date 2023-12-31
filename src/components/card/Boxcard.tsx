import React from "react";
type Props = {
  licensePlate: string | undefined;
  companyName: string | undefined;
  category: string | undefined;
  carDetails: string | undefined;
  model: string | undefined;
  mileage: number | undefined;
  buyingPrice: number | undefined;
  imageUrl: string | undefined;
}
const Boxcard = ({
  licensePlate,
  companyName,
  category,
  carDetails,
  model,
  mileage,
  buyingPrice,
  imageUrl
}: Props) => {
  return (
    <div key={licensePlate} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
      <a href="#">
        <img className="rounded-lg w-full h-36" src={imageUrl} alt="" />
      </a>
      <div className="pt-3">
        <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
          {category}
        </span>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {licensePlate}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {`${companyName}, ${model}`}
        </p>
      </div>
    </div>
  );
};

export default Boxcard;
