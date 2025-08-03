import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="max-w-4xl mx-auto p-6 md:p-12 my-20 glass rounded-xl bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center shadow-lg"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-8"
      >
        Your next big idea&apos;s just one prompt away.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold shadow-lg"
      >
        Get Started
      </motion.button>
    </section>
  );
}
