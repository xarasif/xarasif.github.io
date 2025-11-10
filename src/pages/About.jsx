import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';

const AboutUs = () => {
  const handleImageHover = (e, scale = 1.05) => {
    e.currentTarget.style.transform = `scale(${scale})`;
  };

  // Hero Image Slideshow Logic
  const heroImages = [
    '/images/residential/dream_signature/Picture3.jpg',
    '/images/residential/saraswati_heights/Picture1.jpg',
    '/images/residential/orchid_aarambh/Picture2.jpg',
    '/images/about/1.jpg',
    '/images/villas/washivali/Picture2.jpg',
    '/images/residential/tripitak/Picture2.jpg',    
    '/images/residential/monik/Picture1.jpg',
    '/images/residential/monik/Picture3.jpg',
    '/images/residential/roohi_solitaire/Picture3.jpg',
    '/images/residential/satara_vatsala/Picture1.jpg',
    
  ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const totalSlides = heroImages.length + 1; // +1 for clone

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsTransitioning(true);
  }, 3000); // Slide every 2 seconds

  return () => clearInterval(interval);
}, []);


const handleTransitionEnd = () => {
  if (currentIndex === heroImages.length) {
    // We reached the cloned image — reset without animation
    setIsTransitioning(false);
    setCurrentIndex(0);
  }
};

useEffect(() => {
  if (!isTransitioning) {
    // Re-enable transition immediately after resetting
    requestAnimationFrame(() => {
      setIsTransitioning(true);
    });
  }
}, [isTransitioning]);




  return (
    <div className="font-sans text-[#333]">
      {/* Hero Section */}
        <section className="overflow-hidden relative h-[70vh]">
          <div
            className="flex h-full"
            style={{
              transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
              transform: `translateX(-${(currentIndex % totalSlides) * (100 / totalSlides)}%)`,
              width: `${totalSlides * 100}%`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {[...heroImages, heroImages[0]].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover flex-shrink-0"
                style={{ width: `${100 / totalSlides}%` }}
              />
            ))}
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-black/0 z-10"></div>
        </section>



      {/* Who We Are */}
      <section className="py-16 px-5 text-center">
        <h2 className="text-3xl font-bold mb-5">Who We Are</h2><br></br>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Founded in 2014, we are a young and enthusiastic Architecture and Interior Design firm with experience across a variety of projects ranging from Residential Projects, Institutional, Commercial Buildings to Residential & Commercial Interiors.
          Each of our projects are strategicaly and meticulously planned, ensuring complete value to our clients. Our team comprises of extremely dedicated professionals ensuring diligent planning, timely execution and overseeing every project with detail, care and utmost personal attention. 

        </p>
      </section>

      {/* ✅ Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 text-center px-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0c2d57]">60+</h2>
            <div className="w-20 border-t border-gray-300 my-3 mx-auto"></div>
            <p className="text-gray-700">PROJECTS</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0c2d57]">20</h2>
            <div className="w-20 border-t border-gray-300 my-3 mx-auto"></div>
            <p className="text-gray-700">TEAM SIZE</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0c2d57]">25+</h2>
            <div className="w-20 border-t border-gray-300 my-3 mx-auto"></div>
            <p className="text-gray-700">CLIENTELE</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0c2d57]">10 MN+</h2>
            <div className="w-60 border-t border-gray-300 my-3 mx-auto"></div>
            <p className="text-gray-700">SQFT. DESIGN STAGE+ APPROVALS</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0c2d57]">3 MN+</h2>
            <div className="w-60 border-t border-gray-300 my-3 mx-auto"></div>
            <p className="text-gray-700">SQFT. UNDER CONSTRUCTION</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0c2d57]">1.5 MN+</h2>
            <div className="w-60 border-t border-gray-300 my-3 mx-auto"></div>
            <p className="text-gray-700">SQFT. COMPLETED</p>
          </div>
        </div>
      </section>

      {/* Company Heads */}
      <section className="py-16 px-5 text-center bg-[#f9f9f9]">
        <h2 className="text-3xl font-bold mb-12">Company Heads</h2><br></br>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              name: 'Abuzar Plasterwala',
              role: 'Design Director',
              qualification: 'B.Arch, M.Arch',
              img: '/team/founder.jpg'
            },
            {
              name: 'Tanash Shah',
              role: 'Design Director',
              qualification: 'B.Des',
              img: '/team/co_founder2.jpg'
            },
            {
              name: 'Asif Syed',
              role: 'Design Director',
              qualification: 'B.Arch, M.Arch',
              img: '/team/co-founder.jpg'
            },
            {
              name: 'Shruti Mahimture',
              role: 'Design Director',
              qualification: 'B.Arch, M.Arch',
              img: '/team/shruti_mahimtura.jpg'
            },
          ].map((person, i) => (
            <div key={i} className="text-center max-w-[300px] flex-1">
              <img
                src={person.img}
                alt={person.name}
                className="rounded-xl shadow-lg transition-transform duration-300 h-60 w-full max-w-[200px] mx-auto object-cover"
                onMouseEnter={(e) => handleImageHover(e)}
                onMouseLeave={(e) => handleImageHover(e, 1)}
              />
              <h3 className="mt-2 font-bold">{person.name}</h3>
              <p>{person.qualification}</p>
              <p className="italic">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div id="people" className="my-4"></div>

        {/* Meet the Team */}
        <section className="py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2><br />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 max-w-7xl mx-auto">
            {[
              { name: 'Pravin Galande', role: 'Project Coordinator', img: '/team/pravin_galande.png' },
              { name: 'Sohel Khokar', role: 'Project Coordinator', img: '/team/sohel_khokar.jpg' },
              { name: 'Ismail Plasterwala', role: 'Project Cordinator', img: '/team/ismail_plasterwala.jpg' },
              { name: 'Sampada Shivalkar', role: 'Project Architect', img: '/team/sampada_shivalkar.png' },
              { name: 'Harshali Shivalkar', role: 'Project Architect', img: '/team/harshali_pawar.png' },
              { name: 'Imran Shaikh', role: 'Project Architect', img: '/team/imran_shaikh.jpg' },
              { name: 'Yusuf Tanwar', role: 'CAD Technician', img: '/team/yusuf_tanwar.png' },
              { name: 'Sandeep Dongare', role: 'CAD Technician', img: '/team/sandeep_dongare.jpg' },             
              { name: 'Bhumika Panchal', role: 'Project Architect', img: '/team/dummy.jpeg' },
              { name: 'Jamshed Shaikh', role: 'Junior Designer', img: '/team/jamshed_shaikh.jpg' },
              { name: 'Irfan Shaikh', role: 'Accounts', img: '/team/dummy.jpeg' },
            ].map((member, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="mx-auto w-40 h-40 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 object-cover"
                />
                <h3 className="mt-4 font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>


      <div id="clients" className="my-4"></div>

      {/* Clients */}
      <section className="py-16 px-5 text-center">
        <h2 className="text-3xl font-bold mb-10">Clients</h2><br></br>
        <div className="flex flex-wrap justify-center gap-6 max-w-[1000px] mx-auto">
          {[
            'Picture1.png','Picture2.png','Picture3.png','Picture4.png','Picture5.jpg','Picture6.png','Picture7.jpg','Picture8.png','Picture9.png','Picture10.jpg',
            'Picture11.png','Picture13.png','Picture14.png','Picture15.png','Picture16.png','Picture17.png','Picture18.png'
          ].map((logo, index) => (
            <img
              key={index}
              src={`/clientlogo/${logo}`}
              alt={`Client ${index + 1}`}
              className="h-[90px] w-full max-w-[150px] object-contain filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105 cursor-pointer"
            />
          ))}
        </div>
      </section>

      <div id="collaborators" className="my-4"></div>
      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
