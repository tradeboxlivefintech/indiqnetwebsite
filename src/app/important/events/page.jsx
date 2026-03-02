'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import { ArrowRight, XCircle, Users, Calendar, MapPin, Ticket, Coffee, Utensils, Hotel, Shield, Brain, Target, MessageSquare, TrendingUp, Heart, Zap, Globe, Lock, Award, Star, Quote, Clock, CheckCircle, ChevronRight, Mail, Phone, MessageCircle, Users as UsersIcon, BookOpen, Lightbulb, Network, Sparkles, Compass, BarChart3, LineChart, PieChart, Scale, AlertTriangle, TrendingDown, Activity, Eye, Layers, Filter, Database, FileText } from 'lucide-react'

const IndiaEliteSummitPage = () => {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);

  const discussionTopics = [
    { icon: <Shield className="w-6 h-6" />, title: "Risk Management", desc: "Understanding and navigating market uncertainties" },
    { icon: <Layers className="w-6 h-6" />, title: "Market Structure", desc: "Deep dive into market mechanics and dynamics" },
    { icon: <Award className="w-6 h-6" />, title: "Business Quality", desc: "Evaluating sustainable business models" },
    { icon: <Activity className="w-6 h-6" />, title: "Cycles", desc: "Understanding market and economic cycles" },
    { icon: <Brain className="w-6 h-6" />, title: "Behaviour", desc: "Psychology of markets and decision-making" },
    { icon: <Target className="w-6 h-6" />, title: "Long-term Sustainability", desc: "Building enduring market approaches" }
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
          <div className="text-center mb-12">
            <h1 className="text-5xl flex  justify-center sm:text-6xl md:text-7xl font-bold mb-8">
              <span className="block text-white">India Elite </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                 Summit
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A curated gathering of disciplined market participants, investors, and professionals who believe in structured thinking over speculation.
            </p>
          </div>

          {/* Platform Description */}
          <div className="max-w-8xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                It is a focused platform designed for meaningful dialogue, real market insights, and thoughtful exchange between individuals who take markets seriously.
              </p>
              
              <p>
                The summit brings together experienced practitioners, independent thinkers, and emerging talent to discuss what truly matters—risk management, market structure, business quality, cycles, behaviour, and long-term sustainability.
              </p>
              
              <p className="text-2xl font-light text-purple-300 italic border-l-4 border-purple-500 pl-6 py-2">
                India Elite Summit exists to elevate the standard of conversation in the capital markets space. It is where learning moves beyond screens, and understanding deepens through real interaction.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium">Risk Management</span>
              <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 text-sm font-medium">Market Structure</span>
              <span className="px-4 py-2 bg-rose-500/20 rounded-full text-rose-300 text-sm font-medium">Business Quality</span>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium">Cycles</span>
              <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 text-sm font-medium">Behaviour</span>
              <span className="px-4 py-2 bg-rose-500/20 rounded-full text-rose-300 text-sm font-medium">Sustainability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* SUMMIT PHILOSOPHY */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-10 text-white shadow-2xl">
                <Quote className="w-12 h-12 text-purple-300 mb-6" />
                <p className="text-2xl font-light italic leading-relaxed mb-6">
                  "Elevating the standard of conversation in the capital markets space."
                </p>
                <p className="text-purple-300">
                  Where learning moves beyond screens, and understanding deepens through real interaction.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Experienced Practitioners</h3>
                    <p className="text-gray-600">Learn from those who have navigated multiple market cycles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Independent Thinkers</h3>
                    <p className="text-gray-600">Connect with professionals who think for themselves</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Emerging Talent</h3>
                    <p className="text-gray-600">Fresh perspectives from the next generation of market participants</p>
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

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-100 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join the Conversation
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Be part of a gathering that's elevating the standard of market discourse
              </p>
              
              <button
                onClick={() => setIsRegistering(true)}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg">Request Invitation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <p className="text-gray-500 text-sm mt-4">
                Invitation-only gathering for serious market participants
              </p>
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
                    <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" rows="3" placeholder="Brief description of your market experience..."></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">What interests you most about the summit?</label>
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