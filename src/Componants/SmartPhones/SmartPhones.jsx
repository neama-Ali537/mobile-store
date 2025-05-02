import React from "react";
import { useContext } from "react";
import { DataContext } from "../DataContext/DataContextProvider";

export default function SmartPhones() {
  const { data } = useContext(DataContext);
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-700 text-center p-5">
        Latest Products
      </h1>
      <div className=" container mx-auto px-4 py-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 dark:bg-zinc-800 bg-gray-200  shadow-md p-4 rounded-lg">
        {data &&
          Array.isArray(data) &&
          data.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col items-center rounded-xl bg-white p-4 shadow-lg transition duration-300 hover:shadow-xl dark:bg-gray-600 w-full"
            >
              <img
              aria-label="product"
                loading="lazy"
                
                className="h-40 rounded-sm mb-2 object-cover"
                src={item.images[0]}
                alt={item.brand}
              />
              <p className="text-lg font-semibold text-black dark:text-gray-100">
                {item.brand}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {item.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {item.rating}
              </p>
              <button className="mt-2 px-4 py-2 bg-gray-100 hover:bg-purple-100 dark:bg-gray-50 dark:hover:bg-gray-300 rounded-md font-semibold text-cyan-950 dark:text-black"
              aria-label="price"
            >
                {item.price}$
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
