import React from 'react';
import CryImage from '../assets/images/cry-classification.png';
import Gazette from '../assets/images/gazette-scraper.png';
import Sheria from '../assets/images/sheria.png';

const Projects = () => {
  const projects = [
    { title: 'Infant cry classification model', desc: 'A ML model using python to classify reasons for a baby crying', img: CryImage },
    { title: 'Gazettes Web Scraping Script', desc: 'A scraping script that scrapes publically available gazettes and extracts the metadata', img: Gazette },
    { title: 'Project Sheria', desc: 'A fullstack React JS website where users can view the latest gazettes published in kenya', img: Sheria },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;