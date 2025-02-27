// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import profileImage from "../assets/profile.png";

// const Home = () => {
//   return (
//     <section className="min-h-[calc(100vh-12rem)] flex flex-col justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             <span className="block">Hi, I'm</span>
//             <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
//               Shyam Kumar Nalluri
//             </span>
//           </h1>
//           <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
//             Data Analyst & Engineer
//           </h2>
//           <p className="text-lg text-gray-400 mb-10 leading-relaxed">
//             I leverage data to drive insights and solutions, creating impactful analytics and engineering 
//             projects that enhance decision-making and optimize processes. With expertise in Python, SQL, 
//             and cloud technologies, I specialize in transforming raw data into actionable intelligence. 
//             My work focuses on solving real-world problems through data-driven strategies, ensuring 
//             accuracy, efficiency, and scalability in every project I undertake.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
//               }}
//               className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
//             >
//               View My Work <ArrowRight size={18} />
//             </a>
//             <a
//               href="mailto:shyamnalluri97@gmail.com"
//               className="px-6 py-3 bg-transparent border border-gray-700 rounded-lg font-medium hover:border-gray-500 transition-colors"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
        
//         <div className="hidden md:flex justify-center items-center">
//           <div className="relative">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-70"></div>
//             <div className="relative overflow-hidden rounded-full border-4 border-gray-800 w-80 h-80">
//               <img 
//                 src={profileImage} 
//                 alt="Profile" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"></div>
//             <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from "../assets/profile.png";

interface HomeProps {
  onViewWorkClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onViewWorkClick }) => {
  return (
    <section className="min-h-[calc(100vh-12rem)] flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Shyam Kumar Nalluri
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Data Analyst & Engineer
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            I leverage data to drive insights and solutions, creating impactful analytics and engineering 
            projects that enhance decision-making and optimize processes. With expertise in Python, SQL, 
            and cloud technologies, I specialize in transforming raw data into actionable intelligence. 
            My work focuses on solving real-world problems through data-driven strategies, ensuring 
            accuracy, efficiency, and scalability in every project I undertake.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onViewWorkClick}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              View My Work <ArrowRight size={18} />
            </button>
            <a
              href="mailto:shyamnalluri97@gmail.com"
              className="px-6 py-3 bg-transparent border border-gray-700 rounded-lg font-medium hover:border-gray-500 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-70"></div>
            <div className="relative overflow-hidden rounded-full border-4 border-gray-800 w-80 h-80">
              <img 
                src={profileImage}  
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;