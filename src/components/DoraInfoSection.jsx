import React from "react";
import { motion } from "framer-motion";

// Dummy 3D Blob SVG (abstract shape)
const Blob = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="url(#grad)"
    style={{ filter: "blur(12px)" }}
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#818cf8" />
      </linearGradient>
    </defs>
    <path
      d="M48.6,-62.7C62.6,-52.9,70.8,-35.7,70.9,-20.7C71,-5.7,63,6.2,56.8,17.9C50.5,29.6,46,41.1,36.9,48.7C27.8,56.3,14,60,-0.1,60C-14.2,60,-28.3,56.3,-39.4,48.8C-50.5,41.4,-58.7,30.2,-60.6,18.2C-62.5,6.2,-58.2,-6.6,-52,-18.4C-45.9,-30.2,-37.9,-41.2,-27,-52.2C-16.2,-63.3,-8.1,-74.3,4.4,-79.6C16.8,-84.9,33.5,-84.5,48.6,-62.7Z"
      transform="translate(100 100)"
    />
  </svg>
);

const timelineSteps = [
  { label: "Shipped in Beta" },
  { label: "Text to website" },
  { label: "Text to website" },
  { label: "The first, but hardest step!" },
  { status: "In progress for 1.0" },
];

const features = [
  {
    title: "AI-generated 3D",
    desc: "Generate true 3D sites with 3D assets.",
  },
  {
    title: "AI-generated animations",
    desc: "Generation of interactive site animations.",
  },
];

export default function DoraInfoSection() {
  return (
    <section className="max-w-5xl mx-auto p-6 md:p-12 font-sans text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-3xl mx-auto md:mx-0">
          The first AI that <span className="text-purple-400">truly truly</span> understands websites.
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto md:mx-0">
          Generating sites for any topic, in any style.
        </p>
      </motion.div>

      <div className="relative md:flex md:space-x-20">
        <div className="hidden md:block absolute left-10 top-4 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-indigo-400 rounded-full"></div>

        <div className="flex flex-col space-y-10 md:w-1/3 relative z-10">
          {timelineSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-16"
            >
              
              <div className="absolute left-4 top-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full border-2 border-white shadow-lg"></div>

              
              {step.label && (
                <div className="glass p-4 rounded-lg shadow-lg text-sm font-semibold text-purple-300">
                  {step.label}
                </div>
              )}
              {step.status && (
                <div className="glass p-4 rounded-lg shadow-lg text-sm text-white/70 italic">
                  {step.status}
                </div>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: timelineSteps.length * 0.15, duration: 0.6 }}
            className="mt-8"
          >
            <button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl font-bold text-lg shadow-lg
                hover:scale-105 hover:brightness-110 transition-transform duration-300"
            >
              Generate now
            </button>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-0 md:w-2/3 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map(({ title, desc }, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl relative overflow-hidden shadow-lg"
              >
                <Blob className="absolute top-0 right-0 w-24 h-24 opacity-30 pointer-events-none" />

                <div className="mb-4">
                  <svg
                    className="w-10 h-10 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-white/70">{desc}</p>
              </div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-purple-300 text-center md:text-left font-semibold cursor-pointer hover:underline"
          >
            ... and much more! See full roadmap
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-xl text-center md:text-left shadow-lg bg-gradient-to-r from-purple-700 to-indigo-700/90"
          >
            <h5 className="font-semibold text-lg mb-2">
              Your support is vital.
            </h5>
            <p className="text-white/70 max-w-xl mx-auto md:mx-0">
              With every subscription, you fund the R&D of Lumina AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass p-6 rounded-xl text-center md:text-left shadow-lg border border-purple-600 max-w-md mx-auto md:mx-0"
          >
            <h5 className="font-semibold text-lg mb-2">Got questions?</h5>
            <button className="mt-2 px-6 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition text-white font-semibold">
              Visit FAQ
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
