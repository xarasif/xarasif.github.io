import React from "react";

const SaiSwarop = () => {
  return (
    <div className="font-sans m-0 p-0">
      {/* Background Image Section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/residential/sai_swarop/Picture1.jpeg')",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-12 py-12 max-w-[1200px] mx-auto bg-white shadow-lg rounded-xl mt-[-50px] relative z-10">
        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src="/images/residential/sai_swarop/Picture1.jpeg"
              alt="Ashar Titan Interior"
              className="w-full h-[600px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start min-w-[300px]">
            {/* Description Headers */}
            <div className="flex flex-col items-center mb-6">
              <p className="border-b-2 border-black pb-1 text-[20px] font-semibold">
                Sai Swaroop
              </p>
              
            </div>

           {/* Paragraph */}
            <p className="flex justify-center">
              <ul className="text-[20px] leading-[3] text-gray-800 list-disc list-inside text-left">
              <li>Location: Chembur</li>
              <li>Area: 1.65 Lac Sq.Ft.</li>
              <li>Stage: Under Construction</li>
              <li>Client: Concrete Developers</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaiSwarop;
