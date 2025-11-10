import React from "react";

const ArihantNivara = () => {
  return (
    <div className="font-sans m-0 p-0">
      {/* Background Image Section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/residential/arihant_nivara/Picture1.png')",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-12 py-12 max-w-[1200px] mx-auto bg-white shadow-lg rounded-xl mt-[-50px] relative z-10">
        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src="/images/residential/arihant_nivara/Picture2.png"
              alt="Ashar Titan Interior"
              className="w-full h-[600px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start min-w-[300px]">
            {/* Description Headers */}
            <div className="flex flex-col items-center mb-6">
              <p className="border-b-2 border-black pb-1 text-[20px] font-semibold">
                Arihant Nivara
              </p>
            </div>

            {/* Paragraph */}
            <p className="flex justify-center">
              <ul className="text-[20px] leading-[3] text-gray-800 list-disc list-inside text-left">
              <li>Location: Eastern Express Highway, BKC Connecter</li>
              <li>Area: 2 Lac Sq.Ft.</li>
              <li>Stage: Finishing Stage</li>
              <li>Client: Dream Arihant</li>
              </ul>
            </p>
          </div>
        </div>
        
        {/*Image Section */}
        <div className="mt-12">
          <img
            src="/images/residential/arihant_nivara/Picture4.png"
            alt="Additional View"
            className="w-full h-auto max-h-[700px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ArihantNivara;
