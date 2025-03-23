import React from 'react';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Angular', 'JavaScript', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'SQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Webpack', 'CI/CD'] },
    { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Qdrant'] },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {skill.category}
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;