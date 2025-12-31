'use client'
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  FileText,
  Scale,
  Users,
  Building,
  Info
  ,BlendIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const mandatoryLinks = [
    { 
      name: "Privacy Policy", 
      href: "/important/PrivacyPolicy",
      icon: <Shield className="w-4 h-4" />
    },
    { 
      name: "Terms and Conditions", 
      href: "/important/termsandconditions",
      icon: <FileText className="w-4 h-4" />
    },
    { 
      name: "Investor Charter", 
      href: "/important/investercharter",
      icon: <Scale className="w-4 h-4" />
    },
    { 
      name: "Code of Conduct", 
      href: "/important/codeofconduct",
      icon: <Users className="w-4 h-4" />
    },
    { 
      name: "Blogs", 
      href: "/",
      icon: <BlendIcon className="w-4 h-4" />
    },{ 
      name: "Grienvance officer", 
      href: "/important/Grienvanceofficer",
      icon: <BlendIcon className="w-4 h-4" />
    },{ 
      name: "Refund & Cancelation Policy", 
      href: "/important/refundandcancelationpolicy",
      icon: <BlendIcon className="w-4 h-4" />
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white border-t border-blue-800">
      {/* Main Footer Content - Compact */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Logo & Main Info */}
          <div className="md:col-span-2 flex items-start space-x-4">
            <div 
              onClick={() => router.push('/')} 
              className='w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex-shrink-0'
            >
              <Image 
                src={"/INlogo2.png"}
                width={40}
                height={40}
                alt="India Equity Network Logo"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-1">India Equity Network</h3>
              <p className="text-gray-300 text-sm mb-2">
                (CIN: ________)
              </p>
              
              <div className="space-y-1 text-xs text-gray-400">
                <p className="flex items-center gap-1">
                  <span className="text-green-400 font-medium">marketgAInz</span> – SEBI Registered Research Analyst (SEBI Reg No: ________)
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-blue-400 font-medium">ISSMA</span> – Integrated School of Stock Markets & Analytics
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-purple-400 font-medium">India Elite Summit</span> – Community Events Division
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info - Compact */}
          <div>
            <h4 className="text-green-400 font-semibold mb-3 text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a href="tel:+918828320113" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                <Phone className="w-3 h-3" />
                +918828320113
              </a>
              <a href="mailto:support@indeqnet.com" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                <Mail className="w-3 h-3" />
                support@indeqnet.com
              </a>
              <div className="text-gray-300 flex items-start gap-2">
                <Building className="w-3 h-3 mt-0.5" />
                <span>
    201, RADHAKRISHNA, RADHA RESIDENCY,
    SIDDHARTH NAGAR, BORIVALI - EAST,
    <br />
    MUMBAI, MAHARASHTRA - 400066
    <br />
    India
  </span>
              </div>
            </div>
          </div>

          {/* Legal Links - Compact */}
          <div>
            <h4 className="text-green-400 font-semibold mb-3 text-sm flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Legal
            </h4>
            <div className="space-y-2">
              {mandatoryLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-green-400 text-xs transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                    {link.icon}
                  </div>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* SEBI & ISSMA Disclaimers - Compact */}
        <div className="mt-6 pt-4 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* SEBI Disclaimer */}
            <div className="bg-blue-900/30 p-3 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-yellow-400 mt-0.5" />
                <div>
                  <h5 className="text-yellow-400 font-bold text-xs mb-1">SEBI Disclosure</h5>
                  <p className="text-gray-300 text-xs leading-tight">
                    Registration granted by SEBI does not guarantee performance. 
                    Market risks apply. Past performance ≠ future results.
                  </p>
                </div>
              </div>
            </div>

            {/* ISSMA Disclaimer */}
            <div className="bg-gray-800/30 p-3 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                <div>
                  <h5 className="text-blue-400 font-bold text-xs mb-1">ISSMA - Education Only</h5>
                  <p className="text-gray-300 text-xs leading-tight">
                    Provides education only. No stock tips, recommendations, or advisory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-gray-900/80 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Copyright */}
            <div className="text-gray-400 text-xs order-2 md:order-1">
              © {currentYear} India Equity Network 
            </div>

            {/* Compact Legal Links */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400 order-1 md:order-2">
              {mandatoryLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Developer Credit - Smaller */}
            <div className="text-gray-300 text-xs order-3">
              Crafted by <span className="text-green-400 font-semibold">TradeBox</span>
            </div>
          </div>
          
          {/* Final Compact Disclaimer */}
          <div className="mt-3 pt-3 border-t border-gray-800/50 text-center">
            <p className="text-gray-500 text-[10px] leading-tight">
              All investments carry market risks. No guaranteed returns. Perform due diligence before investing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;