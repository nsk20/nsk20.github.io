import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Data Engineer Associate certificate',
      issuer: 'DataCamp',
      date: 'December 2024 - December 2026',
      description: 'Certified as an Associate Data Engineer, demonstrating proficiency in data management and exploratory analysis through various exams and practical assessments.',
      credentialId: 'DEA0011117016817',
      credentialURL: 'https://www.datacamp.com/certificate/DEA0011117016817'
    }
    //,
    // {
    //   title: 'Google Professional Cloud Developer',
    //   issuer: 'Google Cloud',
    //   date: 'August 2023',
    //   description: 'Demonstrates ability to build scalable and highly available applications using Google Cloud.',
    //   credentialId: 'GCP-PCD-67890',
    //   credentialURL: 'https://www.credential.net/example'
    // },
    // {
    //   title: 'Meta Frontend Developer Professional Certificate',
    //   issuer: 'Meta (Facebook)',
    //   date: 'May 2023',
    //   description: 'Comprehensive program covering React, JavaScript, and modern frontend development practices.',
    //   credentialId: 'META-FE-54321',
    //   credentialURL: 'https://www.coursera.org/account/accomplishments/example'
    // },
    // {
    //   title: 'Certified Kubernetes Administrator (CKA)',
    //   issuer: 'Cloud Native Computing Foundation',
    //   date: 'February 2023',
    //   description: 'Validates skills, knowledge and competence to perform the responsibilities of Kubernetes administrators.',
    //   credentialId: 'CKA-1234-5678-9012',
    //   credentialURL: 'https://www.credly.com/badges/example'
    // }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-12 relative inline-block">
        Certifications
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex items-start gap-4">
              <div className="hidden sm:block">
                <Award className="text-purple-500" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-purple-400 mb-2">{cert.issuer}</p>
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Credential ID: {cert.credentialId}
                  </div>
                  <a
                    href={cert.credentialURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;