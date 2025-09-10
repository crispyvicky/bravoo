'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = {
    tier1: {
      title: "TIER 1 - Core Combat Skills",
      subtitle: "🔥 Foundation Level",
      services: [
        {
          icon: "⚡",
          title: "AI & Automation",
          description: "Smart workflows, chatbots, and prediction engines that feel like future DLC.",
          tags: ["Python", "AI/ML", "OpenAI", "RPA"]
        },
        {
          icon: "🛠️",
          title: "SaaS & Web Platforms",
          description: "Enterprise-level dashboards and SaaS apps with zero downtime.",
          tags: ["MERN", "Next.js", "React", "Node.js"]
        },
        {
          icon: "☁️",
          title: "Cloud & DevOps",
          description: "AWS deployments, scaling servers, and infra that never lags.",
          tags: ["AWS", "Docker", "CI/CD", "Kubernetes"]
        }
      ]
    },
    tier2: {
      title: "TIER 2 - Advanced Abilities",
      subtitle: "🚀 Professional Level",
      services: [
        {
          icon: "🎨",
          title: "UI/UX & Motion Design",
          description: "GSAP-powered visuals that hit like critical damage.",
          tags: ["GSAP", "Figma", "3D", "Animation"]
        },
        {
          icon: "🎮",
          title: "Gamified Applications",
          description: "Turn boring processes into engaging quests — XP, levels, rewards.",
          tags: ["Progress Tracking", "XP Systems", "Achievements"]
        },
        {
          icon: "📱",
          title: "Mobile App Development",
          description: "Cross-platform apps powered by React Native/Next.js, connected with AI.",
          tags: ["React Native", "iOS", "Android", "PWA"]
        },
        {
          icon: "🔐",
          title: "Cybersecurity & Privacy",
          description: "Fortified systems with security audits, encryption, and zero exploits.",
          tags: ["Security", "Encryption", "GDPR", "Audits"]
        }
      ]
    },
    tier3: {
      title: "TIER 3 - Elite Skills",
      subtitle: "🛡️ Expert Level",
      services: [
        {
          icon: "🌐",
          title: "Digital Marketing Tech",
          description: "Landing pages, SEO, analytics dashboards, and ad automation tools.",
          tags: ["SEO", "Analytics", "Automation", "CRO"]
        },
        {
          icon: "🖥️",
          title: "Enterprise Integrations",
          description: "Connecting CRMs, payment gateways, APIs — so businesses run like co-op squads.",
          tags: ["APIs", "CRM", "Payments", "Integrations"]
        },
        {
          icon: "🧩",
          title: "Custom Solutions",
          description: "Have a final boss problem? We'll build the exact weapon to beat it.",
          tags: ["Custom Dev", "Problem Solving", "Consulting"]
        }
      ]
    },
    tier4: {
      title: "TIER 4 - Legendary",
      subtitle: "🧠 Master Level",
      services: [
        {
          icon: "🧠",
          title: "AI R&D & Prototypes",
          description: "Experimental projects — from AI tutors to smart assistants — for businesses who want to stay ahead of the meta.",
          tags: ["R&D", "Prototypes", "Innovation", "AI Research"]
        },
        {
          icon: "🌟",
          title: "Emerging Tech Integration",
          description: "Blockchain, IoT, AR/VR — because the future waits for no one.",
          tags: ["Blockchain", "Web3", "IoT", "AR/VR"]
        }
      ]
    }
  };

  const ServiceCard = ({ service, index, delay }: { service: any, index: number, delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + (index * 0.1), duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full text-2xl text-white mb-4 group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag: string, tagIndex: number) => (
          <span
            key={tagIndex}
            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="bg-gray-50 py-20">
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
            Choose Your Power-Ups
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete Arsenal Unlocked - From AI automation to enterprise integrations
          </p>
        </motion.div>

        {/* Tier 1 */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-black mb-2">{services.tier1.title}</h3>
            <p className="text-lg text-gray-600">{services.tier1.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.tier1.services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} delay={0.2} />
            ))}
          </div>
        </div>

        {/* Tier 2 */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-black mb-2">{services.tier2.title}</h3>
            <p className="text-lg text-gray-600">{services.tier2.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.tier2.services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} delay={0.4} />
            ))}
          </div>
        </div>

        {/* Tier 3 */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-black mb-2">{services.tier3.title}</h3>
            <p className="text-lg text-gray-600">{services.tier3.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.tier3.services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} delay={0.6} />
            ))}
          </div>
        </div>

        {/* Tier 4 */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-black mb-2">{services.tier4.title}</h3>
            <p className="text-lg text-gray-600">{services.tier4.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.tier4.services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} delay={0.8} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;