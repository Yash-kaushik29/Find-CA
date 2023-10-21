import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recommendations = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data?.filter((d) => d.id.toString() !== id);
        const limitedData = filteredData.slice(0, 3);
        setData(limitedData);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row w-full items-center gap-10">
      {data.map((d) => (
        <div key={d.id} className="w-full sm:w-[70%] md:w-[80%] rounded-xl shadow-2xl hover:shadow-xl">
          <div>
            <img
              src={d.image}
              onError={(e) => {
                e.target.src = "/images/profile.png";
              }}
              alt="profile-picture"
              className="w-full h-[200px] rounded-xl"
            />
          </div>
          <div>
            <div className="flex justify-between space-x-1 px-4 py-2">
              <p className="text-xl font-bold">{d.name}</p>
              <p className="text-xl font-bold">{d.price}</p>
            </div>
            <p className="px-4 font-semibold text-gray-600">
              I will do business evaluation and corporate services
            </p>
            <div className="px-4 py-2 flex ">
              <img src="/icons/rating.png" />
              <p className="text-[rgb(0,118,206)] font-bold ml-2">{d.rating}</p>
              <p className="text-gray-600 font-semibold ml-1">
                ({d.reviewCount})
              </p>
            </div>
          </div>
          <div className="px-4 mt-4 mb-5">
            <button className="bg-blue-500 px-4 py-2 w-full text-white font-bold rounded-lg">
              View services
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
