import React from 'react';
import { Link } from 'react-router-dom';
import ClassificationTabs from '../../components/projects/classificationTabs';

const projectsData = [
  {
    name: 'Balaji Ventures',
    location: 'Mira Road, Mumbai',
    image: '/images/commercial/balaji_ventures/Picture1.jpg',
    link: '/data/commercial/balaji_ventures'
  },
  {
    name: 'Arihant Asalpha',
    location: 'Asalpha, Mumbai',
    image: '/public/images/commercial/arihant_asalpha/Picture1.jpg',
    link: '/data/commercial/arihant'
  },
  {
    name: 'Dream India',
    location: 'Oshiwara, Mumbai',
    image: '/public/images/commercial/dream_india/Picture1.jpg',
    link: '/data/commercial/dream_india'
  },
  {
    name: 'Commercial Space',
    location: 'Andheri, Mumbai',
    image: '/public/images/commercial/k_hemani/Picture1.png',
    link: '/data/commercial/k_hemani'
  },
];

const Commercial = () => {
  return (
    <div className="pt-[120px] px-[120px] pb-[60px] font-sans text-[#222]">
      <h1 className="text-[40px] font-bold text-center mb-[40px]">Commercial</h1>

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

export default Commercial;
