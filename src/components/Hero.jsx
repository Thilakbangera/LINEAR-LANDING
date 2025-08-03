import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="text-center py-24 px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Supercharge your productivity with <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">AI-powered workflows</span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          AI-first design that helps teams move faster with intelligent suggestions and sleek design.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg text-white font-semibold"
        >
          Try Free
        </motion.button>
      </motion.div>
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}
