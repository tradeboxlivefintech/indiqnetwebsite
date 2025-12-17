'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import { ArrowRight,XCircle, Users, Calendar, MapPin, Ticket, Coffee, Utensils, Hotel, Shield, Brain, Target, MessageSquare, TrendingUp, Heart, Zap, Globe, Lock, Award, Star, Quote, Clock, CheckCircle, ChevronRight, Mail, Phone, MessageCircle, Users as UsersIcon, BookOpen, Lightbulb, Network } from 'lucide-react'

const IndiaEliteSummitPage = () => {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);

  const whatToExpect = [
    { icon: <Heart className="w-6 h-6" />, title: "Values-driven environment", desc: "Ethical discussions in a principled setting" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Case-based learning", desc: "Real-world scenarios and practical applications" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Conversations beyond charts & screens", desc: "Deep discussions on market philosophy and ethics" },
    { icon: <UsersIcon className="w-6 h-6" />, title: "Grounded wisdom from real practitioners", desc: "Insights from experienced market participants" },
    { icon: <Brain className="w-6 h-6" />, title: "Shared refinement of systems & frameworks", desc: "Collaborative improvement of trading and investment approaches" },
    { icon: <Network className="w-6 h-6" />, title: "Ethical networking", desc: "Meaningful connections based on shared values" }
  ];

  const eventDetails = [
    { icon: <Calendar className="w-6 h-6" />, title: "Dates", value: "21–22 June, 2025", color: "from-purple-500 to-pink-500" },
    { icon: <MapPin className="w-6 h-6" />, title: "Venue", value: "Hotel Karl Residency, Mumbai", color: "from-blue-500 to-cyan-500" },
    { icon: <Ticket className="w-6 h-6" />, title: "Ticket", value: "₹5000 (breakfast & lunch included)", color: "from-emerald-500 to-green-500" },
    { icon: <Hotel className="w-6 h-6" />, title: "Stay", value: "Optional", color: "from-amber-500 to-orange-500" }
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-gray-800 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Title */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-lg border border-purple-500/20 mb-6">
                <Lock className="w-4 h-4 text-purple-300" />
                <span className="text-purple-300 font-medium text-sm">INVITATION-ONLY GATHERING</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">India Elite</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Summit 2025
                </span>
              </h1>
              
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                A Quiet Gathering for Thoughtful Market Practitioners
              </p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Closed-Group</div>
                    <div className="text-purple-300 text-sm">Immersive Experience</div>
                  </div>
                </div>
                
                <div className="h-10 w-px bg-gray-700"></div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Values-Driven</div>
                    <div className="text-pink-300 text-sm">Ethical Focus</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Key Message */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Not a Typical Event</h3>
                    <p className="text-purple-300">Beyond the Ordinary</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-900/30 rounded-xl">
                    <p className="text-gray-200 text-lg italic">
                      "The India Elite Summit is not a typical market event."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-pink-900/30 rounded-xl">
                    <p className="text-gray-200">
                      It is an invitation-only gathering centered around ethics, clarity, and deep reflection.
                    </p>
                  </div>
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* EVENT DETAILS */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                EVENT DETAILS
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventDetails.map((detail, index) => (
                <div key={index} className="relative group">
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${detail.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                  <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                    <div className={`w-14 h-14 bg-gradient-to-br ${detail.color} rounded-xl flex items-center justify-center mb-4`}>
                      <div className="text-white">
                        {detail.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{detail.title}</h3>
                    <p className="text-gray-700 font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-3 rounded-full">
                <Coffee className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Breakfast & Lunch Included</span>
                <Utensils className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-gray-600 text-sm mt-2">Format: Closed-group, immersive two-day experience</p>
            </div>
          </div>

          {/* WHAT TO EXPECT */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                WHAT TO EXPECT
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                An experience designed for depth, reflection, and meaningful connection
              </p>
              <div className="w-20 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatToExpect.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-purple-600">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHY THIS SUMMIT MATTERS */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="sticky top-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  WHY THIS SUMMIT MATTERS
                </h2>
                <div className="w-16 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8"></div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Purpose</h3>
                  </div>
                  <p className="text-gray-700">
                    Collective refinement over commercial validation
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-purple-500">
                    <p className="text-gray-800 text-xl font-semibold">
                      This meet is a quiet test of frameworks, ideas, and community-building initiatives.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Not For</h4>
                      <p className="text-gray-700">Commercial validation or promotional agendas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-pink-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">But For</h4>
                      <p className="text-gray-700">Collective refinement and shared growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIGNATURE QUOTE */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                SIGNATURE QUOTE
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-12 text-white shadow-2xl">
                <div className="text-center max-w-3xl mx-auto">
                  <Quote className="w-16 h-16 text-purple-300 mx-auto mb-8" />
                  
                  <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
                    "In markets and in life, ethics & discipline are the ultimate edge."
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <div className="text-center">
                      <div className="text-xl font-bold">— NS Fidai</div>
                      <div className="text-purple-300 text-sm">Founder, India Equity Network</div>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Modal */}
          {isRegistering && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Invitation</h3>
                  <p className="text-gray-600">Fill in your details for invitation consideration</p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Professional Background</label>
                    <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" rows="3"></textarea>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setIsRegistering(false)}
                        className="flex-1 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

         
        </div>
      </section>
    </main>
  )
}

export default IndiaEliteSummitPage