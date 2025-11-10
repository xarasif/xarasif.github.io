import React from "react";

const PatelHouse = () => {
  // ✅ Define your floors/sections and their respective images
  const gallerySections = [
    {
      title: "Ground Floor",
      images: [
        "/images/interior/patel_house/ground/5.jpg",
        "/images/interior/patel_house/ground/10.jpg",
        "/images/interior/patel_house/ground/13.jpg",
        "/images/interior/patel_house/ground/14.jpg",
        "/images/interior/patel_house/ground/15.jpg",
        "/images/interior/patel_house/ground/7.jpg",
      ],
    },
    {
      title: "1st Floor",
      images: [
        "/images/interior/patel_house/1floor/8.jpg",
        "/images/interior/patel_house/1floor/6.jpg",
        "/images/interior/patel_house/1floor/5.jpg",
        "/images/interior/patel_house/1floor/1.jpg",
        "/images/interior/patel_house/1floor/4.jpg",
        "/images/interior/patel_house/1floor/2.jpg",
      ],
    },
    {
      title: "2nd Floor",
      images: [
        "/images/interior/patel_house/2floor/1.jpg",
        "/images/interior/patel_house/2floor/2.jpg",
        "/images/interior/patel_house/2floor/3.jpg",
        "/images/interior/patel_house/2floor/4.jpg",
        "/images/interior/patel_house/2floor/5.jpg",
        "/images/interior/patel_house/2floor/6.jpg",
      ],
    },
  ];

  return (
    <div className="font-sans m-0 p-0">
      {/* Background Image Section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/interior/patel_house/ground/7.jpg')",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-12 py-12 max-w-[1200px] mx-auto bg-white shadow-lg rounded-xl mt-[-50px] relative z-10">
        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src="/images/interior/patel_house//ground/9.jpg"
              alt="Saraswati Height"
              className="w-full h-[600px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start min-w-[300px]">
            <div className="flex flex-col items-center mb-6">
              <p className="border-b-2 border-black pb-1 text-[20px] font-semibold">
                Saraswati Height
              </p>
              <p className="mt-2 text-[16px] text-gray-700 font-medium">
                Construction Area
              </p>
            </div>

            <p className="text-[16px] leading-[1.8] text-gray-800 text-justify">
              Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project.
            </p>
          </div>
        </div>

        {/* ✅ Dynamic Gallery with custom section headers */}
        <div className="space-y-12">
          {gallerySections.map((section, index) => (
            <div key={index}>
              {/* Section Header */}
              <h2 className="text-3xl font-semibold text-center mb-6  border-gray-800 inline-center">
                {section.title}
              </h2>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {section.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${section.title} - Image ${i + 1}`}
                    className="w-full h-[450px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default PatelHouse;
