import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "H I, I AM ANTHONY"; //Issue displaying the 2nd character
  const typingSpeed = 150;
  const indexRef = useRef(0); // Use a ref to track the index

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(indexRef.current));
        indexRef.current++; // Increment the ref
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
        {displayText}
      </h1>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Software Engineer & AI Researcher
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        Building robust and scalable applications with modern technologies
      </p>
    </section>
  );
};

export default Hero;