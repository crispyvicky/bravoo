'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "VisionTech LMS",
      status: "✅ Completed",
      achievement: "+40% Student Engagement Boost",
      description: "AI-powered learning management system with personalized paths",
      tech: ["Python", "AI/ML", "React", "AWS"],
      image: "📚",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "EasyGo EMS",
      status: "✅ Completed",
      achievement: "Productivity Buff: Reports automated in real-time",
      description: "Enterprise management system with automated workflows",
      tech: ["MERN Stack", "Node.js", "MongoDB"],
      image: "⚡",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AWS Cloud Deployments",
      status: "✅ Completed",
      achievement: "Servers Conquered: Global uptime 99.9%",
      description: "Scalable cloud infrastructure for multiple enterprises",
      tech: ["AWS", "Docker", "CI/CD", "Monitoring"],
      image: "☁️",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="portfolio" className="bg-white py-20">
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
            Missions Completed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Victory Screenshots from the Digital Battlefield
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Visual */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-80">{project.image}</span>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Completed
                  </span>
                </div>

                {/* View Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                
                {/* Achievement Badge */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="text-green-800 font-semibold text-sm">
                    🏆 {project.achievement}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full border-2 border-black text-black px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                  View Mission Details
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to see your project featured in our victory collection?
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            Start Your Campaign
            <ExternalLink className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;