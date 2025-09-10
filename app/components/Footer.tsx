'use client'

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Founder', href: '/founder' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'AI & Automation', href: '#services' },
        { name: 'SaaS Development', href: '#services' },
        { name: 'Cloud & DevOps', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'Enterprise Integration', href: '#services' },
        { name: 'Custom Solutions', href: '#services' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Compliance', href: '#' }
      ]
    },
    contact: {
      title: 'Contact',
      links: [
        { name: 'vicky@bravoo.in', href: 'mailto:vicky@bravoo.in' },
        { name: 'WhatsApp', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'Twitter', href: '#' }
      ]
    }
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">{footerSections.company.title}</h3>
            <ul className="space-y-2">
              {footerSections.company.links.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">{footerSections.services.title}</h3>
            <ul className="space-y-2">
              {footerSections.services.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">{footerSections.legal.title}</h3>
            <ul className="space-y-2">
              {footerSections.legal.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">{footerSections.contact.title}</h3>
            <ul className="space-y-2">
              {footerSections.contact.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Top Section - Logo and CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-gray-800">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-3xl font-bold hover:text-gray-300 transition-colors">
              BRAVOO
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Crafting digital weapons for businesses ready to dominate their markets.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-4">Ready to start your quest?</p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Launch Campaign
            </button>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Bravoo. Built for digital champions.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
            <span className="text-gray-600">|</span>
            <span>Made with ⚔️ by Vignesh Yadav</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;