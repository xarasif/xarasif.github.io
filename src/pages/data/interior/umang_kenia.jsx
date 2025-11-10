import React from "react";

const UmangKenia = () => {
  return (
    <div className="font-sans m-0 p-0">
      {/* Background Image Section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/interior/umang_kenia/3.jpg')",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-12 py-12 max-w-[1200px] mx-auto bg-white shadow-lg rounded-xl mt-[-50px] relative z-10">
        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src="/images/interior/umang_kenia/team.jpg"
              alt="Umang Kenia"
              className="w-full h-[600px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start min-w-[300px]">
            {/* Description Headers */}
            <div className="flex flex-col items-center mb-6">
              <p className="border-b-2 border-black pb-1 text-[20px] font-semibold">
                Umang Kenia
              </p>
              
            </div>

            {/* Paragraph */}
            <p className="text-[16px] leading-[1.8] text-gray-800 text-justify">
              Livingroom: A dream project completed in 7 months of time frame.
              This 2,000sqft luxury residential apartment had the most significant change which was conversion to an open layout concept.
              And rightly so, as the walls were removed to create a seamless flow between the living, dining and kitchen areas.
              This change not only enhanced the sense of space but also facilitated the connectivity and better interaction,
               aligning with the theme of classical home by allowing the different elements to interact freely.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <img
            src="/images/interior/umang_kenia/1.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 2 */}
          <img
            src="/images/interior/umang_kenia/10.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 3 */}
          <img
            src="/images/interior/umang_kenia/13.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 4 */}
          <img
            src="/images/interior/umang_kenia/18.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 5 */}
          <img
            src="/images/interior/umang_kenia/22.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 6 */}
          <img
            src="/images/interior/umang_kenia/23.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 7 */}
          <img
            src="/images/interior/umang_kenia/30.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 8 */}
          <img
            src="/images/interior/umang_kenia/31.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 9 */}
          <img
            src="/images/interior/umang_kenia/32.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 10 */}
          <img
            src="/images/interior/umang_kenia/8.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 11 */}
          <img
            src="/images/interior/umang_kenia/14.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 12 */}
          <img
            src="/images/interior/umang_kenia/16.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 13 */}
          <img
            src="/images/interior/umang_kenia/20.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 14 */}
          <img
            src="/images/interior/umang_kenia/27.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 15 */}
          <img
            src="/images/interior/umang_kenia/28.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          
          
        </div>
      </div>
    </div>
  );
};

export default UmangKenia;
