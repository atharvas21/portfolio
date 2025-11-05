'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const ThemeTransition = () => {
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState<'dark' | 'light' | null>(null);

  useEffect(() => {
    // Trigger animation when theme changes
    if (theme === 'dark') {
      setTransitionType('dark');
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 3500);
    } else {
      setTransitionType('light');
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 3500);
    }
  }, [theme]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {transitionType === 'dark' && (
            // Sliding window for dark mode
            <motion.div
              initial={{ y: '-100%', opacity: 1 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                y: {
                  duration: 1.2,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
                opacity: {
                  duration: 1.5,
                  delay: 1.5,
                  ease: 'easeOut',
                }
              }}
              className="fixed inset-0 z-[9999] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a0a 100%)',
              }}
            >
              {/* Stars effect */}
              <div className="absolute inset-0">
                {[...Array(80)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
                    transition={{
                      duration: 2.5,
                      delay: Math.random() * 1.5,
                      repeat: 0,
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)',
                    }}
                  />
                ))}
              </div>

              {/* Moon at profile photo position (top center area) */}
              <motion.div
                initial={{ scale: 0, opacity: 0, y: -100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                className="absolute left-1/2 top-[20vh] -translate-x-1/2"
              >
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl shadow-blue-400/30">
                  {/* Moon craters */}
                  <div className="absolute w-8 h-8 bg-gray-300 rounded-full top-6 left-8 opacity-60"></div>
                  <div className="absolute w-6 h-6 bg-gray-300 rounded-full top-16 left-20 opacity-40"></div>
                  <div className="absolute w-10 h-10 bg-gray-300 rounded-full top-20 left-10 opacity-50"></div>
                  <div className="absolute w-5 h-5 bg-gray-300 rounded-full top-10 right-8 opacity-45"></div>
                  {/* Moon glow */}
                  <div className="absolute inset-0 rounded-full bg-blue-200 blur-2xl opacity-20"></div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {transitionType === 'light' && (
            // Rising sun for light mode
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: {
                  duration: 1.5,
                  ease: 'easeOut',
                }
              }}
              className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
              style={{
                background: 'radial-gradient(circle at center, #FFE4B5 0%, #87CEEB 60%, #4A90E2 100%)',
              }}
            >
              {/* Sun rising from bottom center to profile photo position */}
              <motion.div
                initial={{ y: '100vh', x: '-50%', scale: 0.8, opacity: 0 }}
                animate={{ 
                  y: ['100vh', '20vh', '20vh'],
                  x: '-50%',
                  scale: [0.8, 1.2, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  times: [0, 0.6, 1],
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className="absolute left-1/2 bottom-0"
              >
                <div className="relative">
                  {/* Sun circle */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ 
                      scale: [0.8, 1.2, 1, 0.95],
                    }}
                    transition={{ 
                      duration: 3,
                      times: [0, 0.5, 0.8, 1],
                      ease: 'easeOut' 
                    }}
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 shadow-2xl shadow-yellow-400/40"
                  >
                    {/* Sun glow */}
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-yellow-300 blur-2xl opacity-50"
                      animate={{
                        opacity: [0.3, 0.6, 0.3, 0]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.5, 0.8, 1]
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-yellow-200 blur-3xl opacity-30 scale-150"
                      animate={{
                        opacity: [0.2, 0.4, 0.2, 0]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.5, 0.8, 1]
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Birds randomly in top half */}
              {[...Array(5)].map((_, i) => {
                const randomTop = 10 + Math.random() * 40; // 10-50% (more dispersed in top half)
                const randomLeft = 5 + Math.random() * 90; // 5-95% (dispersed horizontally)
                const randomDelay = Math.random() * 0.5;
                const randomDuration = 1.5 + Math.random() * 1; // Faster: 1.5-2.5s
                const direction = i % 3 === 0 ? 1 : i % 3 === 1 ? -1 : Math.random() > 0.5 ? 1 : -1;
                
                return (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: direction > 0 ? '-10%' : '110%',
                      y: 0,
                      opacity: 0 
                    }}
                    animate={{ 
                      x: direction > 0 ? '110%' : '-10%',
                      y: [0, -15, 0, 15, 0],
                      opacity: [0, 1, 1, 1, 0],
                    }}
                    transition={{
                      x: {
                        duration: randomDuration,
                        delay: randomDelay,
                        ease: 'linear',
                      },
                      y: {
                        duration: 0.6,
                        repeat: Math.floor(randomDuration / 0.6),
                        ease: 'easeInOut',
                      },
                      opacity: {
                        duration: randomDuration,
                        delay: randomDelay,
                      }
                    }}
                    className="absolute text-xl"
                    style={{
                      top: `${randomTop}%`,
                      left: `${randomLeft}%`,
                      transform: direction < 0 ? 'scaleX(-1)' : 'scaleX(1)',
                    }}
                  >
                    🐦
                  </motion.div>
                );
              })}

              {/* Clouds dispersed across top half */}
              {[...Array(8)].map((_, i) => {
                const randomTop = 10 + Math.random() * 40; // 10-50% (same as birds)
                const randomLeft = 5 + Math.random() * 90; // 5-95% (dispersed horizontally)
                const randomDelay = Math.random() * 0.8;
                const randomDuration = 3 + Math.random() * 2;
                const direction = Math.random() > 0.5 ? 1 : -1;
                
                return (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: direction > 0 ? '-15%' : '115%',
                      opacity: 0 
                    }}
                    animate={{ 
                      x: direction > 0 ? '115%' : '-15%',
                      opacity: [0, 1, 1, 1, 0] 
                    }}
                    transition={{
                      duration: randomDuration,
                      delay: randomDelay,
                      ease: 'linear',
                    }}
                    className="absolute"
                    style={{
                      top: `${randomTop}%`,
                      left: `${randomLeft}%`,
                    }}
                  >
                    <div className="relative w-28 h-14">
                      <div className="absolute bottom-0 left-0 w-18 h-9 bg-white/70 rounded-full"></div>
                      <div className="absolute bottom-2 left-10 w-22 h-11 bg-white/70 rounded-full"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-8 bg-white/70 rounded-full"></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default ThemeTransition;
