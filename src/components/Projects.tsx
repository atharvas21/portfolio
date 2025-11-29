'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const projects = [
    {
      title: 'Saladelicious',
      description:
        'A full-stack salad delivery with payment integration, admin dashboard, and real-time inventory management.',
      image: '/project-placeholder-1.jpg',
      tags: ['React', 'SpringBoot', 'MySQL'],
      github: 'https://github.com/atharvas21/freshsalad-ecommerce',
      demo: 'https://saladelicious.vercel.app/',
    },
    {
      title: 'Neighbourhood Events Platform',
      description:
        'GeoSpatial event platform connecting local communities with real-time event discovery and social features.',
      image: '/project-placeholder-2.jpg',
      tags: ['PostgreSQL', 'Supabase', 'React', 'TypeScript'],
      github: '',
      demo: '',
    },
    {
      title: 'ExpenseFlow- Expense Tracker',
      description:
        'Personal expense tracking application with budgeting, analytics, and multi-device sync.',
      image: '/project-placeholder-3.jpg',
      tags: ['Next.js', 'React', 'TailwindCSS', 'Supabase'],  
      github: 'https://github.com/yourusername/project3',
      demo: 'https://expense-tracker-lemon-two.vercel.app/',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full"
              >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <span className="text-6xl">🖼️</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 to-pink-600/90 dark:from-teal-600/90 dark:to-emerald-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Github className="text-gray-900" size={24} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <ExternalLink className="text-gray-900" size={24} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange-100 dark:bg-teal-900 text-orange-600 dark:text-teal-300 text-base rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
