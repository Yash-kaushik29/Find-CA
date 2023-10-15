import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data?.slice(0, 6);
        //   console.log(filteredData);
        setData(filteredData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {data.length &&
        data?.map((d, i) => (
            <div key={d.id} className="w-[90%] shadow-2xl mb-[80px] rounded-2xl cursor-default hover:shadow-xl">
            <div className="w-[50px] h-[50px] bg-gradient-to-r from-blue-800 to-purple-700 text-center relative top-[-10px] left-[-10px] rounded-xl">
                <p className="text-2xl text-white font-bold pt-1">{i+1}</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-center">{d.name}</h1>
              <p className="text-lg text-gray-500 font-semibold text-center">
                {d.about.description}
              </p>
            </div>
            <div className="flex flex-row mt-7 bg-gray-100 space-x-5 w-[70%] ml-[50px] mb-8 rounded-xl">
              <div className="text-center">
                <p className="text-lg font-bold text-blue-400 py-2">Delivery time</p>
                <p className="text-lg text-gray-500 font-semibold py-2">
                  {d.deliveryTime}
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-red-400 py-2">Price</p>
                <p className="text-lg text-gray-500 font-semibold py-2 ">
                  {d.price} per month
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Cards;
