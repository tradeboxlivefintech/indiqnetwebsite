'use client'
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch min-h-[60vh] sm:min-h-[80vh]">
          
          {/* Image Section - Mobile First */}
          <div className="relative group h-full flex order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500 w-full h-[400px] sm:h-full">
              <Image 
                src="/p5.png" 
                alt="Indeqnet Private Limited - Market Experts"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Experience Badge - Mobile Responsive */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl transform rotate-3 z-10">
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold">75+</div>
                <div className="text-xs sm:text-sm font-medium">Combined Years</div>
              </div>
            </div>

            {/* Pattern Decoration - Hidden on mobile */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-400/10 rounded-full hidden sm:block"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/10 rounded-full hidden sm:block"></div>
          </div>

          {/* Content Section - Mobile First */}
          <div className="space-y-6 sm:space-y-8 flex flex-col justify-center h-full order-1 lg:order-2">
            {/* Header Section */}
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 bg-green-50 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-green-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  About us
                </h3>
              </div>
              
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Market
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Participants Through Knowledge
                </span>
              </h1>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                <span className="font-bold text-blue-600">Indeqnet Private Limited (IPL)</span> is dedicated to bridging the knowledge gap in the investor education ecosystem with premium, knowledge-driven experiences.
              </p>
              
              <p>
                Founded by three visionary leaders with <span className="font-bold text-blue-600">over 75 years of combined experience</span> in the Indian equity market, we offer transformative learning that empowers market participants to navigate with confidence.
              </p>
              
              <p>
                Our mission is to create accessible platforms featuring <span className="font-bold text-green-600">SEBI Certified Research Analysts</span>, providing insightful strategies, practical expertise, and invaluable networking opportunities.
              </p>
              
              <p className="text-lg sm:text-xl font-semibold text-gray-900 italic border-l-4 border-green-400 pl-3 sm:pl-4 py-2">
                Join us in transforming your financial future through knowledge and innovation!
              </p>
            </div>

            {/* Features Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm sm:text-base">✓</span>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">75+ Years Combined</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm sm:text-base">✓</span>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">SEBI Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm sm:text-base">✓</span>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Investor Education</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm sm:text-base">✓</span>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Market Insights</span>
              </div>
            </div>

            {/* CTA Buttons - Mobile Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button onClick={()=> router.push('/contactUS')} className="bg-gradient-to-r cursor-pointer from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                Contact Us
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;