import React from "react";

const SanjayVora = () => {
  return (
    <div className="font-sans m-0 p-0">
      {/* Background Image Section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/interior/sanjay_vora/24.jpg')",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-12 py-12 max-w-[1200px] mx-auto bg-white shadow-lg rounded-xl mt-[-50px] relative z-10">
        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src="/images/interior/sanjay_vora/team.jpg"
              alt="Umang Kenia"
              className="w-full h-[600px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start min-w-[300px]">
            {/* Description Headers */}
            <div className="flex flex-col items-center mb-6">
              <p className="border-b-2 border-black pb-1 text-[20px] font-semibold">
                Saraswati Height
              </p>
              <p className="mt-2 text-[16px] text-gray-700 font-medium">
                Construction Area
              </p>
            </div>

            {/* Paragraph */}
            <p className="text-[16px] leading-[1.8] text-gray-800 text-justify">
              High end residences often incorporate marble for flooring, countertops, wall cladding and more.
              Often adding a touch of luxury and elegance. This project actually made us realise that not every project needs a wooden panelling.
              Residences can be done timeless in marbles too. Where we took entire 12 months to complete this entire marble clad house with area of 1400 sqft.
              A 4 bhk converted to 3 bhk. Where every wall and floor talks about endless use of marble. On floor we have used Swiss white and on to wall we have used white and gold bianco.
              The entire color palette is been kept warm hues of white beige and ivory.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <img
            src="/images/interior/sanjay_vora/1.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 2 */}
          <img
            src="/images/interior/sanjay_vora/4.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 3 */}
          <img
            src="/images/interior/sanjay_vora/6.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 4 */}
          <img
            src="/images/interior/sanjay_vora/7.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 5 */}
          <img
            src="/images/interior/sanjay_vora/12.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 6 */}
          <img
            src="/images/interior/sanjay_vora/13.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 7 */}
          <img
            src="/images/interior/sanjay_vora/19.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 8 */}
          <img
            src="/images/interior/sanjay_vora/21.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 9 */}
          <img
            src="/images/interior/sanjay_vora/23.jpg"
            alt="Umang Kenia"
            className="w-full h-[500px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Image 10 */}
          <img
            src="/images/interior/sanjay_vora/25.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 11 */}
          <img
            src="/images/interior/sanjay_vora/18.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 12 */}
          <img
            src="/images/interior/sanjay_vora/15.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 13 */}
          <img
            src="/images/interior/sanjay_vora/11.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 14 */}
          <img
            src="/images/interior/sanjay_vora/10.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Image 15 */}
          <img
            src="/images/interior/sanjay_vora/3.jpg"
            alt="Umang Kenia"
            className="w-full h-[350px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
         
        </div>
      </div>
    </div>
  );
};

export default SanjayVora;
