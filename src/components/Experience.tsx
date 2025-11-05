'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const experience = {
    title: 'Associate Software Engineer',
    company: 'Siemens SISW',
    location: 'Pune, India',
    period: 'July 2023 - Present',
    description:
      'Delivered features and worked on improvements on Teamcenter - Siemens Flagship Product',
    responsibilities: [
      'Delivered features directly to customers in Bill of Materials area',
      'Worked on internal tools to improve team productivity by more than 50%',
      'Collaborated with designers and product owners to deliver 20+ customer-centric features',
      'Wrote clean, maintainable code following best practices and coding standards',
      'Participated in code reviews and mentored junior team members',
    ],
    achievements: [
      { title: 'Performance Optimization', description: 'Improved team productivity by 50%' },
      { title: 'Report Automation', description: 'Automation Report generation helping scrum masters' },
      { title: 'Team Mentality', description: 'Worked in cross-team features, mentored 3 juniors' },
    ],
    technologies: ['C++', 'Javascript', 'Selenium', 'CucumberJs'],
  };

  return (
    <section
      id="experience"
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
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-teal-600 dark:to-emerald-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Company Header */}
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-teal-600 dark:to-emerald-600 rounded-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-xl text-orange-600 dark:text-teal-400 font-semibold">
                      {experience.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 ml-16 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-xl leading-relaxed">
              {experience.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-pink-500 dark:from-teal-600 dark:to-emerald-600 rounded"></div>
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-lg"
                  >
                    <span className="text-orange-600 dark:text-teal-400 mt-1 text-xl">•</span>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="text-yellow-500" size={24} />
                Key Achievements
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {experience.achievements.map((achievement, index) => (
                  <Tilt
                    key={index}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1.05}
                    transitionSpeed={2000}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="glass p-4 rounded-lg shadow-md h-full"
                    >
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1 text-lg">
                        {achievement.title}
                      </h5>
                      <p className="text-base text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-pink-500 dark:from-teal-600 dark:to-emerald-600 rounded"></div>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-teal-900 dark:to-emerald-900 text-orange-700 dark:text-teal-300 rounded-full text-base font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
