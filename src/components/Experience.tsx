import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Accion Labs',
      position: 'Data Analyst',
      period: 'August 2021 – July 2022',
      location: 'Hyderabad, Telangana, India',
      description: [
        'Automated monthly reporting workflows using Python and Power Query, reducing processing time by 40% and increasing data accuracy by 30%.',
        'Led initiative to identify and analyze KPIs for a new advertising product launch, streamlining reporting processes by 20% and providing data-driven insights to stakeholders.',
        'Conducted A/B testing on different advertising campaign strategies, analyzing metrics such as click-through rates and conversion rates to identify optimal approaches that resulted in a 15% improvement in revenue forecasting accuracy.',
        'Partnered with product and engineering teams to implement a dynamic budgeting and forecasting system, improving the efficiency of financial planning by 30%.',
        'Collaborated with Finance and Product teams to develop financial data models that streamlined the annual budgeting process by 20% and improved reporting efficiency, simplifying decision-making for senior stakeholders.'
      ],
      technologies: ['SQL', 'Python', 'AWS Redshift', 'AWS QuickSight', 'Statistical Analysis','A/B Testing']
    },
    {
      company: 'Accion Labs',
      position: 'Data Engineer',
      period: 'May 2020 – July 2021',
      location: 'Hyderabad, Telangana, India',
      description: [
        'Restructured and maintained efficient ETL pipelines for processing large-scale data, achieving a reduction in manual intervention by 75%, thereby freeing up valuable resources for high-impact analytical tasks.',
        'Utilized AWS Redshift and S3 to build scalable data warehousing solutions, enabling real-time performance monitoring for 50+ financial KPIs.',
        'Assisted in migrating legacy ETL pipelines to Apache Airflow, reducing runtime by 25%.',
        'Wrote Python scripts to automate data validation checks, ensuring 99% accuracy in client reports.',
        'Collaborated with senior engineers to optimize Snowflake queries, cutting cloud costs by 15%.',
        'Enhanced the performance of SQL queries for data modeling and reporting, reducing execution time by 20% .'
      ],
      technologies: ['SQL', 'Python', 'ETL', 'Apache Airflow', 'Dockers', 'AWS EC2', 'S3 Bucket', 'Terraform']
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
                {exp.position} @ {exp.company}
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