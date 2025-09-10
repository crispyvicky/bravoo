'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Working with Bravoo felt like having a senior developer who actually cares about your success. The AI integration they built saved us 15 hours per week.",
      name: "Sarah Mitchell",
      title: "CTO",
      company: "TechFlow Solutions",
      initials: "SM",
      color: "bg-blue-500"
    },
    {
      quote: "The 'gaming mindset' isn't just marketing - they really do approach problems like strategists. Our SaaS platform now handles 10x the traffic with zero downtime.",
      name: "Marcus Chen",
      title: "Founder",
      company: "DataVault Inc",
      initials: "MC",
      color: "bg-green-500"
    },
    {
      quote: "Bravoo turned our legacy system into something that feels modern and exciting. Employees actually enjoy using our internal tools now!",
      name: "Emily Rodriguez",
      title: "Operations Director",
      company: "GlobalRetail Co",
      initials: "ER",
      color: "bg-purple-500"
    },
    {
      quote: "Their cloud deployment expertise saved us from a complete infrastructure nightmare. Professional, fast, and incredibly reliable.",
      name: "James Thompson",
      title: "Lead DevOps",
      company: "CloudFirst Systems",
      initials: "JT",
      color: "bg-orange-500"
    },
    {
      quote: "The gamified dashboard they created increased our team productivity by 35%. It's like they turned work into an engaging RPG.",
      name: "Lisa Wang",
      title: "Product Manager",
      company: "InnovateLabs",
      initials: "LW",
      color: "bg-pink-500"
    },
    {
      quote: "Vignesh and his team don't just deliver code - they deliver business victories. Our ROI was positive within the first month.",
      name: "David Kumar",
      title: "CEO",
      company: "StartupForge",
      initials: "DK",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="bg-white py-20">
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
            Players Around the World Love Bravoo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real victories
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gray-300 mb-4" />
              
              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Join the Winners' Circle?
            </h3>
            <p className="text-gray-600 mb-6">
              Your success story could be featured here next. Let's turn your vision into a victory.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Start Your Quest
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;