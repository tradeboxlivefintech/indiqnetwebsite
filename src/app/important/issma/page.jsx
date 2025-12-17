'use client'
import React from 'react'
import { useRouter } from "next/navigation"
import { ArrowRight, BookOpen, Users, Brain, Target, BarChart3, TrendingUp, ChevronRight, GraduationCap, Calendar, Clock, Zap, Shield, Award, FileText, Lightbulb, Layers, PieChart, LineChart, Database, Globe, Users as UsersIcon, Video, Book, Mail, CheckCircle, XCircle, AlertTriangle, Rocket } from 'lucide-react'

const ISSMApage = () => {
  const router = useRouter();

  const teachingPhilosophy = [
    { icon: <Layers className="w-6 h-6" />, title: "Depth over shortcuts", desc: "Comprehensive understanding over quick fixes" },
    { icon: <Target className="w-6 h-6" />, title: "Practical frameworks over theory", desc: "Actionable systems over abstract concepts" },
    { icon: <Brain className="w-6 h-6" />, title: "Behavior + risk + system design", desc: "Holistic approach integrating psychology, risk, and systems" },
    { icon: <Shield className="w-6 h-6" />, title: "Ethical, value-driven training", desc: "Education grounded in principles and integrity" },
    { icon: <Globe className="w-6 h-6" />, title: "Real-world market understanding", desc: "Practical insights from actual market experience" }
  ];

  const whatWeTeach = [
    { icon: <BookOpen className="w-6 h-6" />, title: "Market basics & financial literacy", desc: "Foundational knowledge for market participation" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Technical & Fundamental frameworks", desc: "Comprehensive analysis methodologies" },
    { icon: <Target className="w-6 h-6" />, title: "System design & execution", desc: "Creating and implementing trading systems" },
    { icon: <Database className="w-6 h-6" />, title: "Data-driven analysis", desc: "Making decisions based on empirical evidence" },
    { icon: <PieChart className="w-6 h-6" />, title: "Portfolio construction principles", desc: "Strategic asset allocation and management" },
    { icon: <Brain className="w-6 h-6" />, title: "Behavioral finance", desc: "Understanding psychological factors in markets" },
    { icon: <Zap className="w-6 h-6" />, title: "Psychology of discipline", desc: "Developing mental fortitude for consistent execution" },
    { icon: <UsersIcon className="w-6 h-6" />, title: "Practical implementation workshops", desc: "Hands-on application of learned concepts" }
  ];

  const programFormats = [
    { icon: <Calendar className="w-6 h-6" />, title: "Workshops", desc: "Focused, intensive learning sessions" },
    { icon: <Clock className="w-6 h-6" />, title: "Bootcamps", desc: "Comprehensive training programs" },
    { icon: <Users className="w-6 h-6" />, title: "Community learning sessions", desc: "Group-based interactive learning" },
    { icon: <Award className="w-6 h-6" />, title: "Masterclasses", desc: "Advanced sessions by experts" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Guest expert talks", desc: "Insights from industry practitioners" },
    { icon: <Video className="w-6 h-6" />, title: "Online modules & analytics tools", desc: "Digital learning platforms (Future)" }
  ];

  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-gray-800 to-cyan-900 text-white overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
  </div>
  
  <div className="relative max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Side */}
      <div className="lg:w-1/2">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 font-medium rounded-full text-sm border border-blue-500/30">
            DIVISION OF INDIA EQUITY NETWORK
          </span>
        </div>
        
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">ISS</span>
            <span className="text-cyan-400">MA</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
        </div>
        
        <p className="text-gray-300 text-xl mb-10 max-w-xl">
          Integrated School of Stock Markets & Analytics
        </p>
        
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div className="text-white font-bold">Education</div>
            <div className="text-blue-300 text-sm">Only</div>
          </div>
          
          <div className="h-12 w-px bg-gray-700"></div>
          
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="text-white font-bold">No Advisory</div>
            <div className="text-cyan-300 text-sm">Services</div>
          </div>
        </div>
      </div>
      
      {/* Right Side */}
      <div className="lg:w-1/2">
        <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
          <h2 className="text-2xl font-bold text-white mb-6">Our Educational Focus</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Market Skills</h3>
                <p className="text-gray-300">Practical skills for market understanding and analysis</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Financial Literacy</h3>
                <p className="text-gray-300">Building foundational knowledge for informed decisions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Structured Learning</h3>
                <p className="text-gray-300">Systematic approach to market education</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-blue-500/20">
            <p className="text-gray-400 text-sm italic">
              "No investment advice or stock recommendations. Pure education only."
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative Element */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-3">
        <div className="w-16 h-px bg-blue-500/30"></div>
        
        <div className="w-16 h-px bg-cyan-500/30"></div>
      </div>
    </div>
  </div>
</section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* WHAT ISSMA STANDS FOR */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                WHAT ISSMA STANDS FOR
              </h2>
              <div className="w-16 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8"></div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Purpose</h3>
                </div>
                <p className="text-gray-700">
                  Dedicated to teaching market skills, financial literacy, and structured learning without advisory or predictions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                ISSMA is India Equity Network's education and training vertical dedicated to teaching market skills, 
                financial literacy, and structured learning without advisory or predictions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-800 font-medium">Focus on skill development, not stock recommendations</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-cyan-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span className="text-gray-800 font-medium">Structured learning pathways for all levels</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-800 font-medium">Real-world application of market concepts</span>
                </div>
              </div>
            </div>
          </div>

          {/* OUR TEACHING PHILOSOPHY */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                OUR TEACHING PHILOSOPHY
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The principles that guide our educational approach
              </p>
              <div className="w-20 h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {teachingPhilosophy.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT WE TEACH */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                WHAT WE TEACH
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive curriculum covering all aspects of market understanding
              </p>
              <div className="w-20 h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whatWeTeach.map((item, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MANDATORY EDUCATION DISCLAIMER */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                MANDATORY EDUCATION DISCLAIMER
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-800">Important Notice</h3>
                  <p className="text-amber-700">Education Only - No Advisory Services</p>
                </div>
              </div>

              <div className="space-y-4 text-amber-800">
                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                  <XCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed">
                    ISSMA provides training and education only.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                  <XCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed">
                    ISSMA does NOT provide investment advice, stock recommendations,
                    model portfolios, buy/sell tips, or calls.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed">
                    All content is purely educational in nature.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* OUR PROGRAM FORMATS */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                OUR PROGRAM FORMATS
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Flexible learning options to suit different needs and preferences
              </p>
              <div className="w-20 h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programFormats.map((format, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-white">
                      {format.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{format.title}</h3>
                  <p className="text-gray-600 mb-4">{format.desc}</p>
                  
                  {format.title === "Online modules & analytics tools" ? (
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                      Coming Soon
                    </span>
                  ) : (
                    <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Explore Programs
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

         

          {/* Final CTA */}
         
        </div>
      </section>
    </main>
  )
}

export default ISSMApage