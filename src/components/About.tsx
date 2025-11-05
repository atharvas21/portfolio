'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Focused',
      description: 'Creating beautiful user interfaces',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Performance',
      description: 'Optimizing for speed and efficiency',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working effectively in teams',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-teal-600 dark:to-emerald-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Crafting Digital Experiences
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              I&apos;m a passionate developer with a keen eye for design and a
              love for creating seamless user experiences. With several years
              of experience in web development, I specialize in building
              modern, responsive applications.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              My journey in tech started with a curiosity for how things work,
              which evolved into a career focused on building innovative
              solutions. I constantly stay updated with the latest technologies
              and best practices.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={2000}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass p-6 rounded-xl shadow-lg h-full"
                >
                  <div className="text-orange-600 dark:text-teal-400 mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
