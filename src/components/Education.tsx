import React from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'San Jose State University',
      degree: 'Master of Science in Computer Engineering',
      period: '2022 - 2024',
      description: 'Specialized in Data Science.',
      courses: ['Machine Learning', 'Data Mining', 'Big Data Engineering and Analytics', 'Enterprise Software Platforms', 'Software Quality Assurance and Testing'],
      icon: <Award className="text-purple-500" size={36} />
    },
    {
      institution: 'Institute of Technical Education and Research',
      degree: 'Bachelor of Technology in Computer Science and Information Technology',
      period: '2016 - 2020',
      description: 'Active member of the Computer Science Student Association.',
      courses: ['Introduction to Databases', 'Algorithm Design', 'Design of Operating Systems', 'Linux System Administration', 'Probability & Statistics', 'Introductory Graph Theory'],
      icon: <BookOpen className="text-blue-500" size={36} />
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-12 relative inline-block">
        Education
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
      </h2>

      <div className="space-y-10">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:block">{edu.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;