import React from 'react';
import { Link } from 'react-router-dom';
import ClassificationTabs from '../../components/projects/classificationTabs';

const projectsData = [
  {
    name: 'Umang Kenia',
    location: 'Borivali, Mumbai',
    image: '/images/interior/umang_kenia/1.jpg',
    link: '/data/interior/umang_kenia'
  },
  {
    name: 'Sanjay Vora',
    location: 'Mulund, Mumbai',
    image: '/images/interior/sanjay_vora/25.jpg',
    link: '/data/interior/sanjay_vora'
  },
  {
    name: 'Rustomjee Crown',
    location: 'Borivali, Mumbai',
    image: '/images/interior/rustomjee_crown/5.JPG',
    link: '/data/interior/rustomjee_crown'
  },
  {
    name: 'Mayur Kadakia',
    location: 'Borivali, Mumbai',
    image: '/images/interior/mayur_kadakia/9.jpg',
    link: '/data/interior/mayur_kadakia'
  },
  {
    name: 'Rina Patel',
    location: 'Mumbai',
    image: '/images/interior/rina_patel/1.JPG',
    link: '/data/interior/rina_patel'
  },
  {
    name: 'Patel House',
    location: 'Mumbai',
    image: '/images/interior/patel_house/ground/7.jpg',
    link: '/data/interior/patel_house'
  },
];

const InteriorDesign = () => {
  return (
    <div className="pt-[120px] px-[120px] pb-[60px] font-sans text-[#222]">
      <h1 className="text-[40px] font-bold text-center mb-[40px]">Interior Design</h1>

      {/* Tabs */}
      <ClassificationTabs />

      {/* Grid */}
      <div className="grid gap-[30px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center">
        {projectsData.map((project, index) => (
          <Link key={index} to={project.link} className="no-underline">
            <div className="relative overflow-hidden rounded-[10px] cursor-pointer group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[350px] object-cover block transition-transform duration-400 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <div className="text-[20px] font-semibold text-center">
                  {project.name}
                </div>
                <div className="text-[14px] mt-1">{project.location}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InteriorDesign;
