'use client';

import { useEffect, useState } from 'react';

const AnimatedBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-orange-300/20 to-pink-300/20 dark:from-teal-500/10 dark:to-emerald-500/10 rounded-full blur-3xl animate-blob"
        style={{
          top: '10%',
          left: '10%',
          animation: 'blob 7s infinite',
        }}
      />
      
      {/* Blob 2 */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-pink-300/20 to-purple-300/20 dark:from-emerald-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-blob"
        style={{
          top: '60%',
          right: '10%',
          animation: 'blob 9s infinite 2s',
        }}
      />
      
      {/* Blob 3 */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 dark:from-teal-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-blob"
        style={{
          bottom: '10%',
          left: '50%',
          animation: 'blob 11s infinite 4s',
        }}
      />
    </div>
  );
};

export default AnimatedBlobs;
