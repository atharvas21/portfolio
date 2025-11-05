'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 dark:from-teal-600 dark:to-emerald-600 bg-clip-text text-transparent">
                Atharva Savdekar
              </span>
            </h1>
            <div className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-6 h-24">
              <TypeAnimation
                sequence={[
                  'Web Development',
                  2000,
                  'DevOps',
                  2000,
                  'Problem Solving',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Passionate about creating elegant solutions to complex problems.
              I build exceptional digital experiences that make a difference.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-teal-600 dark:to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="px-8 py-3 border-2 border-orange-500 text-orange-600 dark:border-teal-400 dark:text-teal-400 rounded-full font-semibold hover:bg-orange-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
              >
                <ArrowDown size={20} />
                Download CV
              </motion.a>
            </div>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-teal-400"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://www.linkedin.com/in/atharva-savdekar-981886191/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="mailto:atharvasavdekar21@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-teal-400"
              >
                <Mail size={28} />
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-teal-600 dark:to-emerald-600 rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gray-200 dark:bg-gray-700">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <span className="text-6xl">👤</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-600 dark:text-gray-400"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
