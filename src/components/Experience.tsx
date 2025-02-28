import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);


  const experiences = [
    {
      company: 'Accion Labs',
      position: 'Associate Software Engineer',
      period: 'Janaury 2021 – Febaury 2022',
      location: 'Hyderabad, Telangana, India',
      description: [
        'Developed and maintained reports and dashboards using Business Intelligence tools.',
        'Coordinated with development teams to ensure that database design was optimized for application performance.',
        'Validated features and metric calculations, flow, and performance of new tool before release.',
        'Successfully found and fixed over 100 bugs in the reporting workflows. AndWorked with a team of engineers to improve reporting accuracy.'
      ],
      technologies: ['SQL', 'Python', 'Power BI', 'SQL Server', 'Excel', ]
    },
    {
      company: 'Commonwealth Bank',
      position: 'Data Engineer',
      period: 'Janaury 2025',
      location: 'Online',
      description: [
        'Completed a job simulation involving Data Management skills for Commonwealth Bank’s Data Science team.',
        'Demonstrated proficiency in creating data engineering pipelines to aggregate and extract valuable insights from datasets, optimizing data-driven decision-making.',
        'Acquired skills in anonymizing personal data within datasets, ensuring compliance with data privacy regulations.',
        'Proposed effective data analysis approaches, particularly related to social media, and demonstrated the ability to design well-structured databases for efficient information management.'
      ],
      technologies: ['SQL', 'Excel', 'Python', 'Twitter API']
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-12 relative inline-block">
        Experience
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs */}
        <div className="md:w-1/4">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-1 pb-4 md:pb-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === index
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-900'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4 bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="mb-6">
            <h3 className="text-xl font-bold">
              {experiences[activeTab].position}{' '}
              <span className="text-purple-500">@ {experiences[activeTab].company}</span>
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2 text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{experiences[activeTab].period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{experiences[activeTab].location}</span>
              </div>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {experiences[activeTab].description.map((item, index) => (
              <li key={index} className="flex gap-2 text-gray-300">
                <span className="text-purple-500 font-bold">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <h4 className="text-sm uppercase text-gray-500 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {experiences[activeTab].technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;