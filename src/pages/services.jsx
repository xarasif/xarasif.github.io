import React, { useState } from 'react';
import Footer from '../components/footer';

const servicesData = [
  { 
    title: 'Architectural Design',
    image: '/images/services/1.jpg',
    content: `
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li><strong>Concept Design:</strong> Creating the initial concept and detailed designs for buildings and surrounding spaces. 
        This includes site evaluation and planning, and can also encompass interior and landscape design.</li>
        <li><strong>Construction Documents:</strong> Developing the technical drawings and specifications required for construction, such as plans, sections, elevations, 
        and details for materials like doors and windows.</li>
        <li><strong>Construction Administration:</strong> Overseeing the construction process to ensure it aligns with the design and specifications, 
        coordinating with contractors, and managing any issues that arise.</li>
      </ul>
    `,
  },
  {
    title: 'Urban Design',
    image: '/images/services/2.jpg',
    content: `Urban design services include the planning, development, and arrangement of urban areas, such as streets, public spaces, and transportation networks, to create functional, sustainable, and visually appealing cities.
    Key services include master planning, public space design, site planning, transportation planning, and community engagement.  
`,
  },
  {
    title: 'Interior Design',
    image: '/images/interior/sanjay_vora/team.jpg',
    content: `Interior design services encompass the art and science of enhancing indoor spaces to create a healthier, more aesthetically pleasing, and functional environment.
    These services can include everything from initial concept and space planning to material selection, project management, and the installation of furniture and fixtures.
    We specialize in residential, commercial, or office spaces, offering services such as modular kitchen design, turnkey solutions, and general interior decoration.  
`,
  },
  {
    title: 'Liasoning',
    image: '/images/services/Picture.jpg',
    content: `Building liaison services act as intermediaries between clients and government or regulatory bodies to navigate approvals for construction projects. 
    These services help clients secure necessary permissions, sanctions, and clearances by managing legal, technical, and procedural requirements.
     We specialize in areas like drawing approvals and permissions from various agencies, ensuring projects are compliant and efficient.  
`,
  },
  {
    title: 'Project Management',
    image: '/images/services/4.jpg',
    content: `Project management services involve expert help in planning, executing, and closing projects to ensure they are completed on time, within budget, and to scope.
     These services encompass a wide range of activities, including managing project initiation, scope, schedule, budget, resources, risk, and quality, as well as providing communication and stakeholder management.
      The ultimate goal is to achieve project objectives and exceed stakeholder expectations by streamlining processes and overcoming challenges.`,
  },
  {
    title: 'Feasibility Studies',
    image: '/images/services/3.jpg',
    content: `Conducting preliminary studies to assess the viability of a project. This includes massing studies and complete number crunching in the primary stages of the project.
`,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeImage, setActiveImage] = useState('/images/services/1.jpg'); // default image

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setActiveImage(servicesData[index].image); // 👈 change image on click
    }
  };

  return (
    <div>
      <div className="px-6 md:px-20 py-10 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={activeImage} // 👈 dynamically changes
              alt="Service Illustration"
              className="w-full h-[600px] rounded-xl shadow-md object-cover"
            />
          </div>

          {/* Right Accordion */}
          <div className="w-full md:w-1/2 space-y-4">
            {servicesData.map((service, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {service.title}
                  </h3>
                  <span className="text-2xl font-bold text-gray-600">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                {activeIndex === index && (
                  <div
                    className="text-gray-700 mt-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: service.content }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
