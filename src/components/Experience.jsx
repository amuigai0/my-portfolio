import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Researcher',
      company: 'Kiende Research Labs',
      date: 'Aug 2024 - Present',
      desc: [
        'Designed and implemented a Web Scraping tool using LangGraph Agents and API calls', 
        'Integrated Google Developer APIs to build a feature allowing clients to upload custom',
        'Developed a custom website using React JS to showcase products, supporting successful application for Google Cloud’s startup fund program',
        'Debugged and resolved software bugs in the main codebase'
      ],
    },
    {
      title: 'IT Intern',
      company: 'New Kenya Cooperative-Creameries ',
      date: 'Jan 2023 - April 2023',
      desc: [
        'Delivered technical support to 50+ employees, resolving hardware/software issues with a 95% satisfaction rate and streamlining software installation processes',
        'Conducted regular backups of critical data, ensuring 100% data recovery readiness during system audits',
        'Managed user accounts, email setups, and access permissions, assisting 100+ users with password updates and account configurations while escalating complex issues',
        'Collaborated with IT team to troubleshoot network issues, reducing downtime by 25% across departments.'
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.company} | {exp.date}
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                {exp.desc.map((item, idx) => (
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

export default Experience;