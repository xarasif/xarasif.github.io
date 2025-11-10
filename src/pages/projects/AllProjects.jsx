import React from 'react';
import { Link } from 'react-router-dom';
import ClassificationTabs from '../../components/projects/classificationTabs';

const projectsData = [
  {
    name: 'Arihant Nivara',
    location: 'Mumbai',
    image: '/images/residential/arihant_nivara/Picture3.png',
    link: '/data/residential/arihant_nivara'
  },
  {
    name: 'Dream Signature',
    location: 'Oshiwara, Mumbai',
    image: '/images/residential/dream_signature/Picture1.jpg',
    link: '/data/residential/dream_signature'
  },
  {
    name: 'Roohi Solitaire',
    location: 'Vile Parle, Mumbai',
    image: '/images/residential/roohi_solitaire/Picture2.jpg',
    link: '/data/residential/roohi_solitaire'
  },
  {
    name: 'Shreeji LifeSpaces',
    location: 'Bhandup, Mumbai',
    image: '/images/residential/minnat_group/Picture1.jpg',
    link: '/data/residential/minnat'
  },
  {
    name: 'Saraswati Heights',
    location: 'Mulund, Mumbai',
    image: '/images/residential/saraswati_heights/Picture2.jpg',
    link: '/data/residential/saraswati_height'
  },
   {
    name: 'Balaji Ventures',
    location: 'Mumbai',
    image: '/images/commercial/balaji_ventures/Picture1.jpg',
    link: '/data/commercial/balaji_ventures'
  },
  {
    name: 'Arihant Asalpha',
    location: 'Mumbai',
    image: '/public/images/commercial/arihant_asalpha/Picture1.jpg',
    link: '/data/commercial/arihant'
  },
  {
    name: 'Dream India',
    location: 'Mumbai',
    image: '/public/images/commercial/dream_india/Picture1.jpg',
    link: '/data/commercial/dream_india'
  },
  {
    name: 'Andheri',
    location: 'Mumbai',
    image: '/public/images/commercial/k_hemani/Picture1.png',
    link: '/data/commercial/k_hemani'
  },
  {
    name: 'Indamer',
    location: 'Mumbai',
    image: '/images/industrial/indamer/Picture1.jpg',
    link: '/data/industrial/indamer'
  },
  {
    name: 'Dharavi Sports Complex',
    location: 'Dharavi',
    image: '/images/recreational/dharavi/Picture1.jpg',
    link: '/data/recreational/dharavi'
  },
  {
    name: 'Dream Sports Academy',
    location: 'Bandra, Mumbai',
    image: '/images/recreational/dream_sports/Picture2.jpg',
    link: '/data/recreational/dream_sports'
  },
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
 {
    name: 'Sai Rydam',
    location: 'Naigaon, Mumbai',
    image: '/images/residential/monik/Picture2.jpg',
    link: '/data/residential/monik'
  },
  {
    name: 'Tripitak',
    location: 'Andheri, Mumbai',
    image: '/images/residential/tripitak/Picture1.jpg',
    link: '/data/residential/tripitak'
  },
    {
    name: 'Arihant Nivara',
    location: 'BKC Connector, Mumbai',
    image: '/images/residential/arihant_nivara/Picture3.png',
    link: '/data/residential/arihant_nivara'
  },  
  {
    name: 'Napean Sea Road',
    location: 'Mumbai',
    image: '/images/residential/nepeancy_road/Picture2.jpg',
    link: '/data/residential/nepeancy_road'
  },

  {
    name: 'Hitesh Heights',
    location: 'Dadar, Mumbai',
    image: '/images/residential/hitesh_heights/Picture1.jpg',
    link: '/data/residential/hitesh_heights'
  },
  {
    name: 'Proposed Redevelopment',
    location: 'Kurla, Mumbai',
    image: '/images/residential/firdous_apartment/Picture1.jpeg',
    link: '/data/residential/firdous_apartment'
  },
  {
    name: 'Metro Sarvashramik',
    location: 'Kanjurmarg, Mumbai',
    image: '/images/residential/metro_sarvashramik/Picture1.jpg',
    link: '/data/residential/metro_sarvashramik'
  },
  {
    name: 'Proposed Redevelopment',
    location: 'Prabhadevi, Mumbai',
    image: '/images/residential/proposed_redevelopment_1/Picture1.jpg',
    link: '/data/residential/proposed_redevelopment_1'
  },
  
  {
    name: 'Orchid Aarambh',
    location: 'Andheri, Mumbai',
    image: '/images/residential/orchid_aarambh/Picture1.jpg',
    link: '/data/residential/orchid_aarambh'
  },
  
  {
    name: 'Rakshi Group',
    location: 'Goregaon, Mumbai',
    image: '/images/residential/rakshi_group/Picture1.jpg',
    link: '/data/residential/rakshi_group'
  },
  {
    name: 'Ram Tekadi',
    location: 'Chembur, Mumbai',
    image: '/images/residential/ram_tekadi/Picture1.jpg',
    link: '/data/residential/ram_tekadi'
  },
  {
    name: 'Bay View',
    location: 'Bandra, Mumbai',
    image: '/images/residential/bay_view/Picture1.jpg',
    link: '/data/residential/bay_view'
  },
  {
    name: 'Satara Vatsala',
    location: 'Chembur, Mumbai',
    image: '/images/residential/satara_vatsala/Picture1.jpg',
    link: '/data/residential/satara_vatsala'
  },
  {
    name: 'Panchshil',
    location: 'Mulund, Mumbai',
    image: '/images/residential/anil_pandit/Picture1.jpg',
    link: '/data/residential/anil_pandit'
  },
  {
    name: 'Saraswati Paradise',
    location: 'Mulund, Mumbai',
    image: '/images/residential/saraswati_paradise/Picture1.jpg',
    link: '/data/residential/saraswati_paradise'
  },
  
  {
    name: 'Dream Aspire',
    location: 'Andheri, Mumbai',
    image: '/images/residential/dream_aspire/Picture2.jpg',
    link: '/data/residential/dream_aspire'
  },
  {
    name: 'Sai Swarop',
    location: 'Chembur, Mumbai',
    image: '/images/residential/sai_swarop/Picture1.jpeg',
    link: '/data/residential/sai_swarop'
  },
  {
    name: 'Shankeshwar Heights',
    location: 'BKC Connector, Mumbai',
    image: '/images/residential/shankeshwar_heights/Picture1.png',
    link: '/data/residential/shankeshwar_heights'
  },
  {
    name: 'Saraswati Sky Terrace',
    location: 'Mulund, Mumbai',
    image: '/images/residential/saraswati_sky_terrace/Picture1.jpg',
    link: '/data/residential/saraswati_sky_terrace'
  },
  {
    name: 'Neelam Group',
    location: 'Mulund, Mumbai',
    image: '/images/residential/neelam_group/Picture2.jpg',
    link: '/data/residential/neelam_group'
  },
  {
    name: 'IRA Insignia',
    location: 'Dombivli, Mumbai',
    image: '/images/residential/ira_insignia/Picture1.jpg',
    link: '/data/residential/ira_insignia'
  },
  {
    name: 'Grace Fludic',
    location: 'Khar, Mumbai',
    image: '/images/residential/grace_fludic/Picture1.jpg',
    link: '/data/residential/grace_fludic'
  },
  
  {
    name: 'Metro Crown',
    location: 'Vikhroli, Mumbai',
    image: '/images/residential/metro_crown/Picture1.jpg',
    link: '/data/residential/metro_crown'
  },
  
];

const Projects = () => {
  return (
    <div className="pt-[120px] px-[120px] pb-[60px] font-sans text-[#222]">
      <h1 className="text-[40px] font-bold text-center mb-[40px]">All Projects</h1>

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

export default Projects;
