'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Calendar, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FounderPage() {
  const skills = {
    'Programming Languages': {
      'Python': 95,
      'JavaScript': 90,
      'TypeScript': 85,
      'Java': 75
    },
    'Frameworks & Libraries': {
      'React/Next.js': 95,
      'Node.js': 90,
      'MERN Stack': 95,
      'AI/ML Libraries': 85
    },
    'Cloud & DevOps': {
      'AWS': 90,
      'Docker': 85,
      'CI/CD': 85,
      'Kubernetes': 75
    },
    'Design & UX': {
      'UI/UX Design': 85,
      'GSAP Animation': 80,
      'Figma': 85,
      'Motion Design': 75
    }
  };

  const timeline = [
    { year: '2019', event: 'First Code Written', description: 'Started programming journey with Python - the beginning of an epic campaign' },
    { year: '2020', event: 'First Client Project', description: 'Completed first freelance project - learned that solving real problems feels better than any game achievement' },
    { year: '2021', event: 'AI Integration Mastery', description: 'Built first AI-powered system - discovered the superpower of machine learning' },
    { year: '2022', event: 'Enterprise Level Unlocked', description: 'Deployed first enterprise-scale solution - proved small teams can beat big challenges' },
    { year: '2023', event: 'Bravoo Founded', description: 'Launched Bravoo officially - transformed from solo player to guild leader' },
    { year: '2025', event: 'Current Achievement', description: 'Currently helping 50+ businesses level up their digital game' }
  ];

  const interests = [
    {
      icon: '🎮',
      title: 'Gaming',
      description: 'Strategy games, RPGs, and indie titles fuel my problem-solving creativity. Current favorites: Civilization VI, Baldur\'s Gate 3'
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Always reading about new tech, business strategy, and personal development. Knowledge is the ultimate power-up.'
    },
    {
      icon: '🌱',
      title: 'Innovation',
      description: 'Experimenting with emerging technologies and finding ways to apply them to real business problems.'
    },
    {
      icon: '🎯',
      title: 'Strategy',
      description: 'Chess, strategy games, and business case studies - anything that sharpens strategic thinking.'
    },
    {
      icon: '💡',
      title: 'Mentoring',
      description: 'Helping other developers level up their skills and start their own tech journeys.'
    },
    {
      icon: '🏃‍♂️',
      title: 'Fitness',
      description: 'Maintaining work-life balance through regular exercise and outdoor activities.'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Header />
      
      {/* Back to Home */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Bravoo Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Meet the Solo Player Behind Bravoo
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-6"
              >
                From One-Person Campaign to Digital Guild Leader
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 mb-8 text-lg leading-relaxed"
              >
                Hi, I'm Vignesh Yadav - the founder who started Bravoo as a solo mission and turned it into a weapon-crafting powerhouse for businesses worldwide.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Let's Connect
              </motion.button>
            </div>
            <div className="order-1 md:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-800 rounded-2xl p-8 text-center"
              >
                <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Vignesh Yadav</h3>
                <p className="text-gray-400">Founder & Lead Developer</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Every Legend Has an Origin Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">
                Like most great campaigns, Bravoo didn't start with a grand strategy. It began with a simple belief: that technology should feel like a superpower, not a struggle.
              </p>
              <p className="mb-6">
                I'm Vignesh Yadav, and I've been in the tech arena for 6+ years, mastering different skills like collecting achievements in an RPG. From learning Python as my first programming language to building AI-powered systems for enterprises, every project taught me something new.
              </p>
              <p className="mb-6">
                The 'gaming mindset' isn't just marketing speak for me - it's how I actually approach problems. When clients come to me with challenges, I see them as boss fights that need the right strategy, the right tools, and the right execution to defeat.
              </p>
              <p className="mb-8">
                What started as freelance projects became Bravoo when I realized I wasn't just building apps - I was crafting digital weapons that gave businesses unfair advantages in their markets.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {[
                { label: 'Years in Tech', value: '6+' },
                { label: 'Projects Completed', value: '50+' },
                { label: 'Client Success Rate', value: '99.9%' },
                { label: 'Countries Served', value: '12' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              My Skill Tree Evolution
            </h2>
            <p className="text-xl text-gray-600">From Beginner to Boss Level</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, skillSet], categoryIndex) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-black mb-6">{category}</h3>
                <div className="space-y-4">
                  {Object.entries(skillSet).map(([skill, percentage], index) => (
                    <div key={skill}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill}</span>
                        <span className="text-gray-600">{percentage}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          transition={{ delay: (categoryIndex * 0.1) + (index * 0.1), duration: 0.8 }}
                          className="skill-fill"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
              My Development Philosophy
            </h2>
            <blockquote className="text-3xl md:text-4xl font-bold text-black mb-16 leading-tight">
              "I don't just code solutions - I craft digital weapons. Every line of code should serve a purpose, every feature should solve a real problem, and every project should feel like a victory for the client."
            </blockquote>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { icon: '🎯', title: 'Strategy First', desc: 'Understand the boss fight before choosing weapons' },
                { icon: '⚡', title: 'Speed & Quality', desc: 'Fast development without cutting corners' },
                { icon: '🛡️', title: 'Future-Proof', desc: 'Build for tomorrow\'s challenges, not just today\'s' },
                { icon: '🎮', title: 'User Experience', desc: 'If it\'s not enjoyable to use, it\'s not done' },
                { icon: '🔄', title: 'Continuous Learning', desc: 'Always leveling up, always evolving' },
                { icon: '🏆', title: 'Victory Mindset', desc: 'Every project milestone celebrated like a level completion' }
              ].map((principle, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border border-gray-200 rounded-lg"
                >
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Achievement Unlocked: Career Milestones
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-black"></div>
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16 pb-12"
                >
                  <div className="timeline-dot"></div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-black">{item.event}</h3>
                      <span className="text-lg font-semibold text-gray-600">{item.year}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Beyond Code: The Player Behind the Professional
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="bg-black text-white py-20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Quest Together?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Whether you're facing a technical boss fight or planning your next digital campaign, I'm here to help. Let's connect and discuss how Bravoo can craft the perfect weapon for your business challenges.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Mail, label: 'Email', value: 'vignesh@bravoo.in', href: 'mailto:vignesh@bravoo.in' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'WhatsApp Ready', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: '#' },
                { icon: Twitter, label: 'Twitter', value: '@vigneshyadav', href: '#' },
                { icon: Calendar, label: 'Schedule Call', value: 'Book a Meeting', href: '#' }
              ].map((contact, index) => (
                <motion.a 
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 border border-gray-700 rounded-lg hover:border-white transition-colors group"
                >
                  <contact.icon className="w-6 h-6 mr-3 group-hover:text-white" />
                  <div className="text-left">
                    <div className="text-sm text-gray-400">{contact.label}</div>
                    <div className="font-medium">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                📧 Send Message
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                📅 Book a Call
              </motion.button>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mt-8"
            >
              ⚡ I typically respond within 2-4 hours
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}