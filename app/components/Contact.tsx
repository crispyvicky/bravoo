'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock, Shield, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    projectDetails: '',
    budget: ''
  });

  const projectTypes = [
    'AI & Automation',
    'SaaS & Web Platforms',
    'Cloud & DevOps',
    'Mobile App Development',
    'Enterprise Integrations',
    'Custom Solutions',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Prefer to discuss'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Mission Starts Here
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Looking for a teammate who can turn your vision into a weaponized app? Let's co-op and build something legendary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white text-black rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  >
                    <option value="">Select your quest type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range (Optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    required
                    rows={5}
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-vertical"
                    placeholder="Describe your project, goals, and any specific requirements. The more details, the better we can help you!"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  ⚡ Join the Campaign
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-300" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="font-medium">vicky@bravoo.in</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-gray-300" />
                  <div>
                    <div className="text-sm text-gray-400">WhatsApp</div>
                    <div className="font-medium">WhatsApp Ready</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gray-300" />
                  <div>
                    <div className="text-sm text-gray-400">Response Time</div>
                    <div className="font-medium">2-4 hours</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-gray-300" />
                  <div>
                    <div className="text-sm text-gray-400">Privacy</div>
                    <div className="font-medium">Protected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Why Choose Bravoo?</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Projects Completed</span>
                  <span className="font-bold">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="font-bold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Timeline</span>
                  <span className="font-bold">2-8 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Support Level</span>
                  <span className="font-bold">24/7</span>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <div className="font-medium">Discovery Call</div>
                    <div className="text-sm text-gray-400">We analyze your challenge</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <div className="font-medium">Strategy Design</div>
                    <div className="text-sm text-gray-400">Custom battle plan created</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <div className="font-medium">Build & Deploy</div>
                    <div className="text-sm text-gray-400">Your digital weapon is crafted</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                  <div>
                    <div className="font-medium">Victory Celebration</div>
                    <div className="text-sm text-gray-400">Launch and ongoing support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;