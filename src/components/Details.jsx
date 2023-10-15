import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data?.filter((d) => d.id.toString() === id);
        setData(filteredData);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="mx-[20px] md:mx-[70px] mt-20">
      {data &&
        data.map((d) => (
          <div key={d.id} className="flex flex-col md:flex-row gap-[40px]">
            <div className="w-full lg:w-2/5">
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-4xl font-bold">{d.name}</p>
                  <Link to="/">
                    <ClearIcon style={{ color: "red" }} />
                  </Link>
                </div>
                <p className="text-md font-semibold text-gray-700 py-7 lg:pr-[50px]">
                  {d.intro} I am here to provide my expertise in{" "}
                  {d.about.services[0]}, {d.about.services[1]} and{" "}
                  {d.about.services[2]}, all to assist you effectively.
                </p>
                <div className="flex">
                  <img src="/icons/rating.png" />
                  <p className="text-[rgb(0,118,206)] font-bold ml-2">
                    {d.rating}
                  </p>
                  <p className="text-gray-600 font-semibold ml-1">
                    ({d.reviewCount})
                  </p>
                </div>
              </div>
              <div className="px-5 mt-8 py-8 rounded-xl shadow-2xl mb-10">
                <div className="flex justify-between mb-7">
                  <p className="text-lg md:text-2xl text-gray-600 font-semibold">
                    {d.taskComplexity}
                  </p>
                  <p className="text-lg md:text-2xl font-bold">{d.price}</p>
                </div>
                <div className="flex mb-7">
                  <img src="/icons/calendar.png" className="mr-2" />
                  <p className="text-xl text-gray-600 font-semibold">
                    {d.deliveryTime}
                  </p>
                </div>
                <div className="flex justify-between gap-10">
                  <button className="w-1/2 bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold">
                    Request Proposal
                  </button>
                  <button className="w-1/2 text-blue-400 bg-white py-3 rounded-lg border-2 border-blue-400 text-lg font-semibold">
                    Chat with me
                  </button>
                </div>
              </div>
              <div className="px-5 mt-8 py-8 rounded-xl shadow-2xl mb-10">
                <p className="text-lg md:text-3xl text-gray-600 font-bold py-2">
                  What people say?
                </p>
                <p className="py-1 text-gray-600 text-md font-semibold">
                  I cannot express enough gratitude for the support {d.name} has
                  provided in managing my personal finances. Their attention to
                  detail and deep understanding of financial markets has ensured
                  that my investments are in safe hands. I highly recommend
                  their services to anyone seeking financial guidance.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <div>
                <img
                  src={d.image}
                  onError={(e) => {
                    e.target.src = "/images/profile.png";
                  }}
                  alt="profile-picture"
                  className="w-full mb-[50px] rounded-xl"
                />
              </div>
              <div className="mb-8">
                <p className="text-3xl md:text-4xl font-bold mb-5">
                  About {d.name}
                </p>
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="flex sm:flex-col items-center gap-5">
                    <p className="text-lg text-gray-400 font-bold py-2">FROM</p>
                    <p className="text-gray-600 font-semibold">
                      {d.about.from}
                    </p>
                  </div>
                  <div className="flex sm:flex-col items-center gap-5">
                    <p className="text-lg text-gray-400 font-bold py-2">
                      PARTNER SINCE
                    </p>
                    <p className="text-gray-600 font-semibold">
                      {d.about.partnerSince}
                    </p>
                  </div>
                  <div className="flex sm:flex-col items-center gap-5">
                    <p className="text-lg text-gray-400 font-bold py-2">
                      AVERAGE RESPONSE TIME
                    </p>
                    <p className="text-gray-600 font-semibold">
                      {d.about.averageResponseTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-lg text-gray-400 font-bold py-4">ABOUT</p>
                <p className="text-gray-600 text-lg font-semibold">
                  {d.about.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <p className="text-lg text-gray-400 font-bold py-2">
                    SERVICES I OFFER
                  </p>
                  <div className="ml-[20px]">
                    <ul className="list-disc">
                      {d.about.services.map((service, i) => (
                        <div key={i}>
                          <li className="text-gray-600 text-lg font-semibold">
                            {service}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-400 font-bold py-2">
                    WHY ME?
                  </p>
                  <div>
                    <ul className="list-disc ml-[20px]">
                      {d.about.benefits.map((benefit, i) => (
                        <div key={i}>
                          <li className="text-gray-600 text-lg font-semibold">
                            {benefit}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Details;
