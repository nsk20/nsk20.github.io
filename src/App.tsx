// import React, { useState } from 'react';
// import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
// import Home from './components/Home';
// import About from './components/About';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Projects from './components/Projects';
// import Certifications from './components/Certifications';

// function App() {
//   const [activeSection, setActiveSection] = useState('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const sections = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'education', label: 'Education' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'certifications', label: 'Certifications' },
//   ];

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'home':
//         return <Home />;
//       case 'about':
//         return <About />;
//       case 'experience':
//         return <Experience />;
//       case 'education':
//         return <Education />;
//       case 'projects':
//         return <Projects />;
//       case 'certifications':
//         return <Certifications />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Header */}
//       <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
//             Portfolio
//           </h1>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:block">
//             <ul className="flex space-x-8">
//               {sections.map((section) => (
//                 <li key={section.id}>
//                   <button
//                     onClick={() => setActiveSection(section.id)}
//                     className={`py-2 relative ${
//                       activeSection === section.id
//                         ? 'text-white'
//                         : 'text-gray-400 hover:text-gray-200'
//                     }`}
//                   >
//                     {section.label}
//                     {activeSection === section.id && (
//                       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></span>
//                     )}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <nav className="md:hidden bg-gray-900 border-b border-gray-800">
//             <ul className="container mx-auto px-4 py-2">
//               {sections.map((section) => (
//                 <li key={section.id} className="py-2">
//                   <button
//                     onClick={() => {
//                       setActiveSection(section.id);
//                       setMobileMenuOpen(false);
//                     }}
//                     className={`${
//                       activeSection === section.id
//                         ? 'text-white font-medium'
//                         : 'text-gray-400'
//                     }`}
//                   >
//                     {section.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         )}
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 pt-24 pb-16">
//         {renderSection()}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800 py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 mb-4 md:mb-0">
//               © {new Date().getFullYear()} My Portfolio. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a
//                 href="https://github.com/nsk20"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/nalluri-shyam-kumar-96196b183/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="mailto:shyamnalluri97@gmail.com"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Mail size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onViewWorkClick={() => setActiveSection('projects')} />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      default:
        return <Home onViewWorkClick={() => setActiveSection('projects')} />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`py-2 relative ${
                      activeSection === section.id
                        ? 'text-white'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {section.label}
                    {activeSection === section.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-gray-900 border-b border-gray-800">
            <ul className="container mx-auto px-4 py-2">
              {sections.map((section) => (
                <li key={section.id} className="py-2">
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`${
                      activeSection === section.id
                        ? 'text-white font-medium'
                        : 'text-gray-400'
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/nsk20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shyam-kumar-16575a348/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shyamnalluri97@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;