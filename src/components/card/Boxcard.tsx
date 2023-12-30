import React from "react";

const Boxcard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
      <a href="#">
        <img className="rounded-lg w-full" src="/sample-img.PNG" alt="" />
      </a>
      <div className="pt-3">
        <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
          Cars & Truck
        </span>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ABS1234
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest.
        </p>
      </div>
    </div>
  );
};

export default Boxcard;
