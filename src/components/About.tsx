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
            I'm a passionate data engineer and analyst with a robust background in database systems and SQL development. 
            My journey began with a Bachelor's degree in Computer Science and Information Technology, where I cultivated 
            expertise in databases, algorithm design, and Linux system administration. Driven by my curiosity for data-driven 
            solutions, I’m currently pursuing a Master’s in Computer Engineering with a Data Science focus at San Jose State University.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            At Action Labs, I worked as an Associate Software Engineer, optimizing database designs for application performance 
            and automating reporting workflows to improve accuracy. My contributions included resolving over 100 bugs in reporting 
            systems and collaborating with cross-functional teams to validate metrics and tool performance. Additionally, I completed 
            a data science simulation with Commonwealth Bank, where I engineered pipelines to anonymize data and extract actionable insights.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I specialize in SQL, Python, and cloud technologies like Azure, Snowflake, and Google Big Query to build scalable 
            data pipelines and ETL workflows. My academic projects, such as the customer churn prediction model using PySpark 
            and machine learning, highlight my ability to apply advanced analytics to real-world challenges. I also hold certifications 
            in SQL, cloud platforms, and data engineering, reflecting my commitment to continuous learning.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Beyond technical work, I thrive on exploring emerging tools and methodologies in data engineering. Whether it’s 
            diving into new courses or experimenting with cloud-based solutions, I’m always eager to tackle complex data problems 
            and collaborate on innovative projects that drive meaningful impact.
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
