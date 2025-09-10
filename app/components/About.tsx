'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Target, label: '50+ Projects Completed', value: '50+' },
    { icon: Shield, label: '99.9% Uptime Rate', value: '99.9%' },
    { icon: Users, label: '24/7 Support Level', value: '24/7' },
    { icon: CheckCircle, label: 'Client Success Rate', value: '100%' }
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Every Project is a Boss Fight.
              <br />
              Every Deployment, a Victory.
            </motion.h2>

            <motion.div 
              className="prose prose-lg max-w-none text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-6 leading-relaxed">
                Bravoo started as a one-player campaign. With mastery in Python, MERN, Next.js, AI integrations, and AWS, I've already cleared levels like AI-enabled LMS, SaaS EMS, and enterprise cloud deployments.
              </p>
              <p className="leading-relaxed">
                With the right strategy (and a bit of gamer instinct), Bravoo is scaling into a full guild ready to take on any challenge.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-black mx-auto mb-3" />
                  <div className="text-2xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <motion.div 
              className="bg-gray-100 border-2 border-gray-200 rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Abstract Illustration */}
              <div className="aspect-square bg-gradient-to-br from-black to-gray-600 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">⚔️</div>
                  <div className="text-xl font-bold">Digital Weapons</div>
                  <div className="text-sm text-gray-300 mt-2">Crafted for Victory</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 bg-white border-2 border-gray-200 rounded-lg p-3 shadow-lg"
              >
                <div className="text-2xl">🎮</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 bg-white border-2 border-gray-200 rounded-lg p-3 shadow-lg"
              >
                <div className="text-2xl">⚡</div>
              </motion.div>
            </motion.div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full"
            >
              <div className="text-center">
                <div className="text-sm font-semibold">⭐ Level: Expert</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;