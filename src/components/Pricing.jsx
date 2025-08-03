import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
      <div className="absolute -top-10 -left-10 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-10">
          <div className="glass px-4 py-2 rounded-full flex space-x-4 text-sm font-medium">
            <button className="text-white">Monthly</button>
            <button className="text-gray-400">Yearly</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PricingCard
            title="Free Plan"
            subtitle="Basic tools for individuals"
            price="$0"
            features={[
              'Unlimited Projects',
              'AI Copy Suggestions',
              'Publish to Lumina.run subdomain',
              '120 free credits',
            ]}
            buttonText="Start Free"
          />
          <PricingCard
            title="Pro Plan"
            subtitle="Everything + priority support"
            price="$19/mo"
            features={[
              'All Free Plan features',
              'Custom domain',
              'Premium 3D templates',
              'AI animation generation',
              '24/7 support',
            ]}
            buttonText="Upgrade"
            bestValue
          />
        </div>
      </div>
    </section>
  );
}
