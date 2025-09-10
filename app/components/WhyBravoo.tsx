'use client'

import React from 'react';
import { motion } from 'framer-motion';

const WhyBravoo: React.FC = () => {
  const advantages = [
    {
      icon: "⚔️",
      title: "Speedrun Development",
      description: "Faster builds without bugs. We've optimized our development process like a perfectly executed speedrun."
    },
    {
      icon: "🛡️",
      title: "Future-Proof Tech",
      description: "From AI to cloud, always ahead of the patch notes."
    },
    {
      icon: "🧠",
      title: "Gamer's Mindset",
      description: "Strategy, adaptability, and problem-solving hardwired."
    },
    {
      icon: "🎯",
      title: "Precision Delivery",
      description: "Zero fluff, just results that score high."
    },
    {
      icon: "🔄",
      title: "Continuous Updates",
      description: "Like your favorite game, we keep adding features and improvements."
    },
    {
      icon: "🏆",
      title: "Achievement Unlocked",
      description: "Every project milestone celebrated like a level completion."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            What Makes Us OP
            <br />
            <span className="text-gray-600">(Overpowered)</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The secret weapons that make Bravoo different
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-black text-white rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">⚡</div>
              <div className="text-2xl font-bold mb-1">2x</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🎯</div>
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-gray-300">Project Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🛡️</div>
              <div className="text-2xl font-bold mb-1">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🚀</div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-gray-300">Support Level</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBravoo;