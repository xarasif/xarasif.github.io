import React, { useState, useEffect } from "react";

const images = [

    '/images/residential/satara_vatsala/Picture2.jpg',
    '/images/residential/arihant_nivara/Picture1.png',
    '/images/residential/dream_signature/Picture3.jpg',
    '/images/residential/saraswati_heights/Picture1.jpg',
    '/images/residential/tripitak/Picture2.jpg',    
    '/images/residential/bay_view/Picture3.jpg',
    '/images/commercial/balaji_ventures/Picture1.jpg',
    '/images/commercial/dream_india/Picture3.jpg',
    '/images/recreational/dharavi/Picture1.jpg',
    '/images/recreational/dream_sports/Picture2.jpg',
    'images/villas/house_for_mr.patel/Picture4.jpg',
    'images/interior/umang_kenia/8.jpg',
    'images/interior/sanjay_vora/24.jpg',
    'images/interior/rustomjee_crown/26.jpg',
    'images/interior/rustomjee_crown/1.JPG',
    'images/interior/patel_house/ground/7.jpg',
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change this if your navbar height is different
  const navbarHeight = 100; // in pixels (h-20 in Tailwind)

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: `calc(100vh - ${navbarHeight}px)`,
      }}
    >
      {/* Fade Transition Images */}
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-3 drop-shadow-lg">
          Your Vision, Our Design
        </h1>
      </div>

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-15 h-20 flex items-center justify-center text-4xl transition-all duration-300"
      >
        ‹
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-15 h-20 flex items-center justify-center text-4xl transition-all duration-300"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
