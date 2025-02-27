import React from 'react';
import { Code, Palette, Cpu, Globe, Database, BarChart, Cloud, ClipboardList } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Languages',
      icon: <Code size={20} />,
      items: ['SQL', 'Python (Pandas, NumPy, Matplotlib, Scikit-learn)', 'PySpark']
    },
    {
      category: 'Databases',
      icon: <Database size={20} />,
      items: ['PostgreSQL', 'MySQL']
    },
    {
      category: 'Data Tools',
      icon: <BarChart size={20} />,
      items: ['Excel', 'Google Sheets', 'Power BI', 'Power Query']
    },
    {
      category: 'Cloud Technologies',
      icon: <Cloud size={20} />,
      items: ['AWS (EC2, S3, Redshift, QuickSight)', 'Snowflake', 'Google BigQuery', 'Cloud Firestore']
    },
    {
      category: 'Methodologies',
      icon: <ClipboardList size={20} />,
      items: ['Agile', 'Statistical Analysis','Hypothesis Testing', 'Time Series Analysis', 'A/B Testing', 'Regression Analysis']
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-12 relative inline-block">
        About Me
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a dedicated data analyst and engineer with a strong foundation in computer science and data science.
            My journey in tech began with a Bachelor's degree in Computer Science and Information Technology, where
            I developed a passion for databases and algorithm design. This led me to pursue a Master's in
            Computer Engineering with a focus on Data Science at San Jose State University.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            With experience at Accion Labs as both a Data Analyst and Data Engineer, I've honed my skills
            in automating workflows, optimizing data pipelines, and developing financial models that drive
            business insights. My work has significantly improved data accuracy, reduced processing times,
            and enhanced financial planning efficiency.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I specialize in leveraging tools like Python, PySpark, SQL, and cloud technologies such as AWS
            and Snowflake to build scalable data solutions. My academic project on customer churn prediction
            showcases my ability to apply machine learning techniques to solve real-world problems.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Outside of work, I enjoy exploring new technologies and continuously learning through courses
            and certifications. I'm always eager to take on new challenges and collaborate on
            innovative projects.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-200">Skills & Technologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-purple-500">{skillGroup.icon}</span>
                  <h4 className="font-medium">{skillGroup.category}</h4>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
