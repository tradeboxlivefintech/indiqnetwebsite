'use client'
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
  Shield,
  Award,
  Users,
  FileText,
  Scale
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const legalLinks = [
    { 
      name: "Investor Charter", 
      href: "/important/investercharter",
      icon: <FileText className="w-4 h-4" />
    },
    { 
      name: "Code of Conduct", 
      href: "/important/codeofconduct",
      icon: <Scale className="w-4 h-4" />
    },
    { 
      name: "Disclaimer", 
      href: "/ptd",
      icon: <Shield className="w-4 h-4" />
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+91 ",
      href: "tel:+919999999999"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "indequitynetwork@gmail.com",
      href: "mailto:indequitynetwork@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "MUMBAI, MAHARASHTRA- 400066",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      name: "Twitter"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      name: "Facebook"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      name: "LinkedIn"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "#",
      name: "YouTube"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Brand Section - Now takes more space */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center  mb-6">
              <div className="w-24 h-12 shadow-lg rounded-full flex items-center justify-center">
                <div 
                  onClick={() => router.push('/')} 
                  className='w-8 h-8 bg-white lg:w-14 lg:h-14 rounded  flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer'
                >
                  <Image 
                    src={"/INlogo2.png"}
                    width={60}
                    height={60}
                    alt="IPL Logo"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  INDEQNET PRIVATE LIMITED
                </h3>
                <p className="text-green-400 text-sm font-semibold">SEBI Certified Research Analyst</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Empowering market participants through knowledge and innovation. 
              With over 75 years of combined experience, we provide expert analysis 
              and transformative learning experiences in the Indian equity market.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center gap-2 group py-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:w-4 group-hover:bg-green-400 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            
          </div>

          {/* Legal & Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Legal Documents
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center gap-2 group py-2"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-800/30"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300 group-hover:rotate-12">
                    {contact.icon}
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Newsletter for desktop */}
           
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm order-2 md:order-1">
              © {currentYear} INDEQNET PRIVATE LIMITED. All rights reserved.
              <p className="text-xs text-gray-500 mt-1">
                SEBI Registration No. ________________
              </p>
            </div>

            {/* Developer Credit */}
            <div className="text-gray-300 text-base font-bold order-1 md:order-2">
              Crafted by <span className="text-green-400">TradeBox</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 order-3">
              <a href="#" className="hover:text-green-400 transition-colors duration-300 flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300 flex items-center gap-1">
                <Scale className="w-4 h-4" />
                Terms of Service
              </a>
              <Link 
                href="/ptd"
                className="hover:text-green-400 transition-colors duration-300 flex items-center gap-1"
              >
                <Shield className="w-4 h-4" />
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;