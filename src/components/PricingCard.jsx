import React from 'react';
import { motion } from 'framer-motion';

export default function PricingCard({
  title,
  subtitle,
  price,
  features,
  buttonText,
  bestValue = false,
}) {
  return (
    <motion.div
      className="glass p-8 rounded-2xl relative backdrop-blur-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {bestValue && (
        <div className="absolute top-4 right-4 bg-pink-600 text-xs text-white px-3 py-1 rounded-full shadow-sm">
          Best Value
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-6">{subtitle}</p>

      <div className="text-4xl font-extrabold mb-6">{price}</div>

      <ul className="space-y-3 text-sm mb-8">
        {features.map((feat, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-200">
            <span className="text-green-400">✓</span> {feat}
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 10px rgba(255,255,255,0.2)',
        }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 transition-all"
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
