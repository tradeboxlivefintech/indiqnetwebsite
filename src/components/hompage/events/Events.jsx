'use client'
import React from "react";
import { Calendar, Construction } from "lucide-react";

const Events = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Events
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Events
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl mt-2">
              Coming Soon
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Our events section is currently under development. Check back soon!
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-200">
          <div className="text-center">
            
            {/* Construction Icon */}
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Exciting Events Coming Soon
            </h2>
            
            <p className="text-gray-700 mb-6 max-w-md mx-auto">
              We're preparing exclusive workshops, seminars, and networking events featuring market experts.
            </p>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full mt-4">
              <Calendar className="w-5 h-5" />
              <span className="font-bold">Launching Soon</span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;