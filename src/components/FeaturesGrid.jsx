import React from "react";
import { motion } from "framer-motion";

const featuresList = [
  "Unlimited Projects",
  "No credit card required",
  "Publish for free",
  "120 free credits",
  "Custom AI copy",
  "80+ design styles",
  "Free Lumina.run domain"
];

export default function FeaturesGrid() {
  return (
    <section
      id="features-grid"
      className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-white"
    >
      {[...featuresList, ...featuresList].map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass p-6 rounded-xl flex items-center space-x-4 shadow-lg"
        >
        
          <svg
            className="w-6 h-6 text-purple-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold">{feature}</span>
        </motion.div>
      ))}
    </section>
  );
}
