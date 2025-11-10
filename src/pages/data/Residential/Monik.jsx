import React from "react";

const Monik = () => {
  return (
    <div className="font-sans m-0 p-0">
      {/* Background Image Section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/residential/monik/Picture3.jpg')",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-12 py-12 max-w-[1200px] mx-auto bg-white shadow-lg rounded-xl mt-[-50px] relative z-10">
        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src="/images/residential/monik/Picture2.jpg"
              alt="Ashar Titan Interior"
              className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start min-w-[300px]">
            {/* Description Headers */}
            <div className="flex flex-col items-center mb-6">
              <p className="border-b-2 border-black pb-1 text-[20px] font-semibold">
                Sai Rydam
              </p>
             
            </div>

           {/* Paragraph */}
            <p className="flex justify-center">
              <ul className="text-[20px] leading-[3] text-gray-800 list-disc list-inside text-left">
              <li>Location: Naigoan</li>
              <li>Area: 3 Lac Sq.Ft.</li>
              <li>Stage: Approval Stage</li>
              <li>Client: Sai Rydam Builders</li>
              </ul>
            </p>
          </div>
        </div>
        {/*Image Section */}
        <div className="mt-12">
          <img
            src="/images/residential/monik/Picture1.jpg"
            alt="Additional View"
            className="w-full h-auto max-h-[800px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Monik;
