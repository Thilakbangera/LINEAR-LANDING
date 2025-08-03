import React from "react";
import { motion } from "framer-motion";

const footerLinks = {
  Explore: [
    "Templates",
    "From Figma to Lumina",
    "Lumina AI BETA",
    "Lumina AI - Figma Plugin"
  ],
  Resources: [
    "Updates",
    "Help Center",
    "Pricing",
    "Contact",
    "Lumina Community",
    "Become an Ambassador",
    "Educational Discounts"
  ],
  Company: ["Terms & Conditions", "Privacy"]
};

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white text-sm p-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
        {Object.entries(footerLinks).map(([title, links]) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="font-semibold mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center text-white/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Lumina.run Ltd © 2024. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
