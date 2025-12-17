'use client'
import React from 'react'
import { useRouter } from "next/navigation"
import { ArrowRight, Shield, BookOpen, Users, Target, BarChart3, Brain, TrendingUp, ChevronRight, Award, Eye, Check, Clock, GraduationCap, Calendar, FileText, Scale, Building, Briefcase, Target as TargetIcon, Layers, Globe, Lightbulb, Heart } from 'lucide-react'

const AboutPage = () => {
  const router = useRouter();

  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                ABOUT INDIA EQUITY NETWORK
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Built on three decades of market wisdom, driven by ethics, and committed to authentic learning
            </p>
            <div className="w-24 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-8"></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Our Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="sticky top-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Journey & Ethos
                </h2>
                <div className="w-16 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-8"></div>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">30+ Years</h3>
                    <p className="text-gray-600">of market engagement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <span className="text-emerald-600 font-bold">India Equity Network (Indeqnet Private Limited)</span> was founded after more than 30 years of deep engagement with Indian equity markets.
                </p>
                
                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 rounded-xl border-l-4 border-emerald-500 mb-8">
                  <p className="text-gray-800 text-xl font-semibold italic">
                    "Over this journey, one truth emerged clearly: There is no shortage of market information. There is a shortage of structured, ethical, and practical learning."
                  </p>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  To bridge this gap, IEN was created as a quiet, principled ecosystem built around:
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "SEBI-compliant research",
                    "Real-world market skill development", 
                    "Values-driven community learning"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-gray-800 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-700 text-lg font-semibold mb-4">
                    We do not believe in noise, hype, shortcuts, or inflated claims.
                  </p>
                  <p className="text-gray-700 text-lg">
                    We believe in clarity, discipline, and character as the foundation of long-term market practice.
                  </p>
                </div>
              </div>
            </div>
          </div>

         

          {/* Our Divisions */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                OUR DIVISIONS
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Three integrated divisions working together to create a complete ecosystem for market participants
              </p>
              <div className="w-20 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* MarketgAInz */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">MarketgAInz</h3>
                <p className="text-emerald-600 font-medium mb-4">SEBI Registered Research Analyst Division</p>
                <p className="text-gray-600 mb-6">
                  The regulated advisory arm providing SEBI-compliant, framework-based research and analysis.
                </p>
                <button 
                  onClick={() => router.push('/important/marketgainz')}
                  className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-emerald-100 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>

              {/* ISSMA */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ISSMA</h3>
                <p className="text-blue-600 font-medium mb-4">Integrated School of Stock Markets & Analytics</p>
                <p className="text-gray-600 mb-6">
                  The educational division focused on practical market skill development and financial literacy.
                </p>
                <button 
                  onClick={() => router.push('/important/issma')}
                  className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-cyan-100 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Programs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>

              {/* India Elite Summit */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">India Elite Summit</h3>
                <p className="text-purple-600 font-medium mb-4">Community Events & Annual Gathering</p>
                <p className="text-gray-600 mb-6">
                  The community division facilitating values-driven networking and learning among thoughtful practitioners.
                </p>
                <button 
                  onClick={() => router.push('/important/indiasubmit')}
                  className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-100 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Discover Summit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-3xl p-12 border border-emerald-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Guiding Principles
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The values that define our approach to markets and education
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Ethics First",
                  desc: "Integrity as the foundation of all decisions"
                },
                {
                  icon: <Layers className="w-8 h-8" />,
                  title: "Depth Over Hype",
                  desc: "Substance over sensationalism"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Discipline Driven",
                  desc: "Systems over impulsive actions"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Community Focus",
                  desc: "Collective growth over individual gain"
                }
              ].map((principle, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-emerald-600">
                      {principle.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h4>
                  <p className="text-gray-600 text-sm">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button 
              onClick={() => router.push('/contactUS')}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg">Connect With Our Team</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <p className="text-gray-600 mt-4">
              Ready to embark on your journey with ethical market guidance?
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage