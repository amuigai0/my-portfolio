import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
          Feel free to reach out for opportunities, collaborations, or just to say hi!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <a
            href="mailto:amuigai0@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Anthony,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20collaboration."
            className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <FaEnvelope className="mr-2" /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-gitonga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://github.com/amuigai0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;