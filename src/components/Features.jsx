import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "AI-Powered Task Suggestions",
    desc: "Let AI auto-complete, label, and assign issues as you type."
  },
  {
    title: "Instant Loading & Transitions",
    desc: "Blazing-fast transitions with no visual lag — ever."
  },
  {
    title: "Built for Teams",
    desc: "Create, comment, and close issues collaboratively in real time."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 text-center">
      <h3 className="text-3xl font-semibold mb-12">Features</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-2">{feat.title}</h4>
            <p className="text-white/70">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
