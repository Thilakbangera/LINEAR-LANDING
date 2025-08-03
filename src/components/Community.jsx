import React from "react";
import { motion } from "framer-motion";

export default function Community() {
  return (
    <section
      id="community"
      className="max-w-4xl mx-auto p-6 md:p-12 my-20 glass rounded-xl bg-gradient-to-r from-purple-800/70 to-indigo-900/70 text-white shadow-lg text-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-2"
      >
        Got questions?
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-6 text-lg text-white/80"
      >
        Join the community.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-8 max-w-xl mx-auto text-white/70"
      >
        Our Discord community and staff are here to help! Your feedback will help Lumina AI improve in future versions.
      </motion.p>

      <motion.a
        href="https://discord.gg/dora" // Replace with your Discord link
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold shadow-lg"
      >
        Join Discord
      </motion.a>
    </section>
  );
}
