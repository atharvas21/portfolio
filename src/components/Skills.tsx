'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiJenkins,
  SiCplusplus,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB', level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000', level: 85 },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', level: 88 },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', level: 92 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 87 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C', level: 85 },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', level: 83 },
        { name: 'Python', icon: <SiPython />, color: '#3776AB', level: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 82 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', level: 78 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <SiGit />, color: '#F05032', level: 90 },
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED', level: 75 },
        { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939', level: 72 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-teal-600 dark:to-emerald-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    className="group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="text-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
