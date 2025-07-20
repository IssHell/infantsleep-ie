import React from 'react';
import { Heart, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-r from-warm-800 to-warm-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-warm-300 to-warm-100 bg-clip-text text-transparent mb-4">
              Sleep Solutions
            </div>
            <p className="text-warm-200 leading-relaxed mb-6">
              Helping families achieve peaceful, restorative sleep through gentle, evidence-based methods. Transform your nights, transform your life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-warm-300">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-warm-200 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-warm-300">Contact</h3>
            <div className="space-y-2 text-warm-200">
              <p>hello@sleepsolutions.com</p>
              <p>(555) 123-4567</p>
              <p>Virtual Consultations</p>
              <p>Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-700 mt-8 pt-8 text-center">
          <p className="text-warm-200 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-400" /> for better sleep
          </p>
          <p className="text-warm-300 text-sm mt-2">
            © 2024 Sleep Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;