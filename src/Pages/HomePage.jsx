import { useState } from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

const HomePage = () => {

  return (
    <div className="">
      <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-100 w-full">
        <div>
          <Navbar />
        </div>

        <div><Intro /></div>
      </div>

      <div className="mt-[120px]">
        <p className="text-6xl font-bold text-center">
          Want to{" "}
          <span className="bg-gradient-to-l from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent">
            Join
          </span>{" "}
          Us ?
        </p>
        <p className="text-gray-700 text-xl font-semibold text-center mt-5">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>

      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-[50px] cursor-pointer">
        <Cards />
      </div>
      
      <p className="text-md font-semibold text-gray-600 mx-[50px]">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="text-black font-bold">every day</span> until you file
        the form . There is no maximum penalty amount. So, if you don't file the
        form for a year, you will owe ₹73,000 per form
      </p>

      <div className="mt-[100px] lg:mt-[200px] flex flex-col lg:flex-row mx-[50px] justify-between ">
        <div className="lg:w-1/2">
          <p className="text-6xl font-bold">
            <span className="bg-gradient-to-l from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent">
              All-in-One
            </span>{" "}
            platform that makes easier
          </p>
          <p className="text-gray-700 text-lg font-semibold mt-5">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>

          <div className="flex flex-col mt-8">
            <div className="flex flex-col sm:flex-row my-5">
              <div className="sm:w-1/2 flex flex-row items-center">
                <img src="icons/icon1.png" />
                <p className="text-md text-gray-600 font-semibold ml-1">
                  <span className="text-lg font-bold text-black">Search</span>{" "}
                  for vital company information.
                </p>
              </div>
              <div className="sm:w-1/2 flex flex-row mt-6 sm:mt-0 items-center">
                <img src="icons/icon3.png" />
                <p className="text-md text-gray-600 font-semibold ml-1">
                  <span className="text-lg font-bold text-black">Connect</span>{" "}
                  with your resources to meet your business needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row my-5">
              <div className="sm:w-1/2 flex flex-row items-center">
                <img src="icons/icon2.png" />
                <p className="text-md text-gray-600 font-semibold ml-1">
                  <span className="text-lg font-bold text-black">Research</span>{" "}
                  and generate reports that drive growth.
                </p>
              </div>
              <div className="sm:w-1/2 flex flex-row mt-6 sm:mt-0 items-center">
                <img src="icons/icon4.png" />
                <p className="text-md text-gray-600 font-semibold ml-1">
                  <span className="text-lg font-bold text-black">Academy</span>{" "}
                  to give you the skills for success in your career.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="mx-auto mt-10 lg:mt-0 lg:ml-0 lg:mr-auto mb-4 lg:mb-0 flex flex-row">
            <div className="w-1/2 inline-block md:ml-20">
              <p className="bg-purple-200 text-md text-gray-700 font-semibold w-[100%] rounded-xl px-3 py-[2px] my-1">
                Hey, check out loreumipsum services.{" "}
              </p>
              <p className="bg-purple-200 text-md text-gray-700 font-semibold w-[100%] rounded-xl px-3 py-[2px] my-1">
                I learned from their videos, got my first job.
              </p>
              <p className="bg-purple-200 text-md text-gray-700 font-semibold w-[100%] rounded-xl px-3 py-[2px] my-1">
                You won't be disappointed with their services.
              </p>
            </div>
            <div className="w-1/2 ml-10">
              <img
                src="images/img4.png"
                className="h-[220px] lg:h-56 border bg-purple-200"
                style={{ borderRadius: "29% 71% 58% 42% / 44% 44% 56% 56%" }}
                alt="User Image"
              />
            </div>
          </div>
          <div className="mx-auto lg:ml-0 lg:mr-auto flex mt-5">
            <div>
              <img
                src="images/img5.png"
                className="h-[220px] lg:h-56 md:ml-[40%] lg:ml-[25%] border bg-blue-100"
                style={{ borderRadius: "43% 57% 80% 20% / 44% 73% 27% 56% " }}
                alt="User image"
              />
            </div>
            <div className="w-1/2 inline-block md:ml-20">
              <p className="bg-blue-100 text-md text-gray-700 font-semibold w-[100%] rounded-xl px-3 py-[2px] my-1">
                I got a perfect analysis report from them too.
              </p>
              <p className="bg-blue-100 text-md text-gray-700 font-semibold w-[100%] rounded-xl px-3 py-[2px] my-1">
                Oh, that's great.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-900 text-white pb-8">
        <Footer />
      </div>

      <div className="bg-black">
        <p className="text-white text-center py-4">Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default HomePage;
