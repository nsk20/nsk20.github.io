import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';


const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Customer Churn Prediction Analysis',
      description: 'A comprehensive analysis of customer churn using machine learning techniques. This project involves data preprocessing, visualization, and the development of a predictive model using PySpark and scikit-learn.',
      image: "https://github.com/nsk20/nsk20.github.io/blob/main/src/assets/cca.jpg?raw=true",
      technologies: ['PySpark', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      category: 'data-science',
      links: {
        github: 'https://github.com/nsk20/Churn-Analysis',
        live: null
      }
    },
    {
      title: 'GlobalMart E-Commerce Analysis',
      description: 'Advanced analysis of 100K+ order dataset from Brazilian e-commerce platform.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['BigQuery', 'SQL', 'Data Modeling', 'RFM Analysis'],
      category: 'data-analysis',
      links: {
        github: 'https://github.com/nsk20/GlobalMart-Ecommerce-Analysis',
        live: null
      }
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      category: 'frontend',
      links: {
        github: 'https://github.com/nsk20/nsk20.github.io',
        live: 'https://nsk20.github.io/'
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-12 relative inline-block">
        Projects
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
      </h2>

      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-900 p-1 rounded-lg">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-sm ${
              filter === 'all' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('data-science')}
            className={`px-4 py-2 rounded-md text-sm ${
              filter === 'data-science' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Data Science
          </button>
          <button
            onClick={() => setFilter('data-analysis')}
            className={`px-4 py-2 rounded-md text-sm ${
              filter === 'data-analysis' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Data Analysis
          </button>
          <button
            onClick={() => setFilter('data-engineer')}
            className={`px-4 py-2 rounded-md text-sm ${
              filter === 'data-engineer' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Data Engineering
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-md text-sm ${
              filter === 'frontend' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Frontend
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 group hover:border-gray-700 transition-colors">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;