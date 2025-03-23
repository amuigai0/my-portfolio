import React from 'react';
import profileImage from '../assets/images/my-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="text-gray-600 dark:text-gray-300">
              <p className="mb-4 text-lg">
                I am a software engineer with expertise in full-stack development.
                I excel in creating efficient, scalable, and user-friendly applications that solve real-world problems.
              </p>
              <p className="text-lg">
                With a strong foundation in both frontend, backend and AI technologies,
                I strive to build robust solutions that make a difference.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">2+ Years</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Projects</h3>
                <p className="text-gray-600 dark:text-gray-300">10+ Completed</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-64 object-cover"
                />
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;