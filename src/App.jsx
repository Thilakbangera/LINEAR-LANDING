import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DoraInfoSection from "./components/DoraInfoSection";
import Features from "./components/Features";
import FeaturesGrid from "./components/FeaturesGrid";
import FAQ from "./components/FAQ";
import Community from "./components/Community";
import CTA from "./components/CTA";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <DoraInfoSection />
      <Features />
      <FeaturesGrid />
      <FAQ />
      <Community />
      <CTA />
      <Pricing />
      <Footer />
    </div>
  );
}
