import React from "react";

const Nepeancy = () => {
  return (
    <div className="font-sans m-0 p-0">
      {/* Background Image Section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/residential/nepeancy_road/Picture4.jpg')",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-12 py-12 max-w-[1200px] mx-auto bg-white shadow-lg rounded-xl mt-[-50px] relative z-10">
        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src="/images/residential/nepeancy_road/Picture1.jpg"
              alt="Ashar Titan Interior"
              className="w-full h-[600px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start min-w-[300px]">
            {/* Description Headers */}
            <div className="flex flex-col items-center mb-6">
              <p className="border-b-2 border-black pb-1 text-[20px] font-semibold">
               Proposed Redevelopment
              </p>
              
            </div>

            {/* Paragraph */}
            <p className="flex justify-center">
              <ul className="text-[20px] leading-[3] text-gray-800 list-disc list-inside text-left">
              <li>Location:  Napean Sea Road</li>
              <li>Area: N/A </li>
              <li>Stage: Concept</li>
              <li>Client: N/A</li>
              </ul>
            </p>
          </div>
        </div>

        {/*Image Section */}
        <div className="mt-12">
          <img
            src="/images/residential/nepeancy_road/Picture3.jpg"
            alt="Additional View"
            className="w-full h-auto max-h-[800px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Nepeancy;
