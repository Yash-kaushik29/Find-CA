import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Details from "../components/Details";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";

const DetailsPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Details />
      </div>

      <div className="mt-10 mx-[20px] md:mx-[70px]">
        <p className="text-4xl font-bold pb-10 text-center md:text-start">Recommended for you</p>
        <div>
          <Recommendations />
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

export default DetailsPage;
