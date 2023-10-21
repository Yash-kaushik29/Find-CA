import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Intro = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleClick = async () => {
    await fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const matchedData = data.filter((d) =>
          d.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(matchedData);
      })
      .catch((error) => console.log(error));
    console.log(data);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 p-5">
      <div className="lg:w-2/3 lg:ml-10 flex flex-col">
        <p className="text-5xl sm:text-7xl font-bold mb-4">
          Find{" "}
          <span className="bg-gradient-to-tl from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent">
            Partners
          </span>{" "}
          (CAs) available online
        </p>
        <p className="text-gray-600 text-md sm:text-lg mb-4">
          <span className="text-lg font-semibold">CONNECT</span> with us where
          your services are listed and visible to a myriad of businesses seeking
          CA’s for compliance support
        </p>
        <div className="mt-10 mb-20 flex flex-col lg:flex-row">
          <div className="flex flex-col mx-auto lg:mx-0">
            <input
              name="search"
              placeholder="Search by name"
              className="w-full sm:w-[450px] h-12 lg:h-[56px] px-4 lg:px-5 border-2 rounded-lg border-gray-400 mb-4 lg:mb-0"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {data.length > 0 ? (
              <div className="w-full sm:w-[450px] lg:text-left bg-white px-4 relative bottom-4 lg:bottom-0 mb-5 rounded-lg">
                {data.map((d) => (
                  <div key={d.id}>
                    <Link to={`ca/${d.id}`}>
                    <div
                      className="flex flex-row justify-between items-center"
                    >
                      <p className="text-xl text-gray-700 font-semibold py-2">
                        {d.name}
                      </p>
                      <SearchIcon style={{ color: "rgb(0,118,206)" }} />
                    </div>
                  </Link>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <button
            className="bg-[#0076ce] w-[120px] h-[56px] mx-auto lg:mx-0 text-white px-8 py-4 rounded-lg relative right-3"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>

      <div className="mx-auto lg:w-1/2 lg:mr-10 lg:mt-0 lg:ml-2 flex lg:flex-row sm:space-x-6 lg:space-x-4 mb-5 lg:mb-0">
        <img
          src="images/img1.png"
          alt="image"
          className="w-[150px] lg:w-1/3 h-[220px] lg:h-[300px] relative top-8"
        />
        <img
          src="images/img2.png"
          alt="image"
          className="w-[150px] lg:w-1/3 h-[220px] lg:h-[300px] relative bottom-8"
        />
        <img
          src="images/img3.png"
          alt="image"
          className="w-[150px] lg:w-1/3 h-[220px] lg:h-[300px] relative "
        />
      </div>
    </div>
  );
};

export default Intro;
