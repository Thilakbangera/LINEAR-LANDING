import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 py-4 backdrop-blur-md bg-black/80"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center space-x-2 text-white text-lg font-semibold">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-white to-gray-500" />
          <span>Lumina</span>
        </div>

        <nav className="hidden md:flex px-6 py-2 bg-black/60 rounded-full border border-white/10 shadow-lg backdrop-blur-lg text-white text-sm font-medium space-x-8">
          <a href="#hero" className="hover:text-white text-white/90 transition">Overview</a>
          <a href="#features" className="hover:text-white text-white/90 transition">Features</a>
          <a href="#faq" className="hover:text-white text-white/90 transition">FAQ</a>
          <a href="#pricing" className="hover:text-white text-white/90 transition">Pricing</a>
        </nav>

        <a
          href="#overview"
          className="ml-4 px-5 py-2 bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 rounded-full text-sm font-semibold text-white shadow-md hover:scale-105 transition-all flex items-center gap-2"
        >
          Get Started <span className="text-white">→</span>
        </a>
      </div>
    </motion.header>
  );
}
