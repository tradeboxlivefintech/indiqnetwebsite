'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight, Shield, BookOpen, Users, Target, BarChart3, Brain, TrendingUp, ChevronRight, Award, Eye, Check, Clock, GraduationCap, Calendar, FileText, Scale, Building, Briefcase } from 'lucide-react'

const HomePage = () => {
  const router = useRouter();
  
  // Updated Hero Component with enhanced design
  const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fade, setFade] = useState(true)

    const slides = [
      {
        image: '/p1.png',
        quote: "In markets and in life, ethics & discipline are the ultimate edge."
      },
      {
        image: '/p2.png',
        quote: "Depth over noise. Systems over emotion. Intelligence through data."
      },
      {
        image: '/p3.png',
        quote: "Your authentic partner for Indian Equity Markets"
      }
    ]

    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % slides.length)
          setFade(true)
        }, 500)
      }, 4000)

      return () => clearInterval(interval)
    }, [slides.length])

    const currentSlide = slides[currentIndex]

    return (
      <div className="relative min-h-screen flex items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
        {/* Background Image with parallax effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src={currentSlide.image}
            alt="Market analysis background"
            fill
            className={`object-cover object-center transition-all duration-1000 ${
              fade ? 'opacity-100 scale-100' : 'opacity-70 scale-105'
            }`}
            priority
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          {/* Animated gradient lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-cyan-500/20"></div>
          </div>
        </div>

        {/* Text Content with better spacing */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center lg:text-left">
          <div className={`transition-all duration-1000 ${
            fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Main Headline with badge */}
            <div className="flex flex-col items-center lg:items-start mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20 mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
                  Ethical Research • Practical Education • Real Community
                </span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  Your Authentic Partner
                </span>
                <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent mt-4">
                  For Indian Equity Markets
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-gray-200 text-lg sm:text-xl md:text-2xl max-w-3xl mb-10 leading-relaxed">
                India Equity Network brings together regulated research, practical education, 
                and values-driven community learning, built on three decades of real market experience.
              </p>
            </div>

            {/* Primary CTA Buttons with enhanced design */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-10">
              <button 
                onClick={() => router.push('/india-elite-summit')} 
                className="group relative w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center gap-3 text-lg">
                  Explore India Elite Summit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              
              <button 
                onClick={() => router.push('/marketgainz')}
                className="group relative w-full sm:w-auto bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-emerald-400/50 hover:border-emerald-300 hover:bg-emerald-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-3 text-lg">
                  View marketgAInz (SEBI-Registered RA)
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Stats and Experience */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-xl">30+ Years</div>
                  <div className="text-gray-400 text-sm">Real Market Experience</div>
                </div>
              </div>
              
              <div className="hidden sm:flex items-center gap-3 px-4 py-3 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-xl">SEBI RA</div>
                  <div className="text-gray-400 text-sm">Registered Research Analyst</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Slide - Enhanced design */}
        <div className="hidden lg:block absolute right-8 bottom-32 z-10 max-w-sm">
          <div className={`transition-all duration-1000 transform ${
            fade 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-4'
          }`}>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/30 shadow-2xl">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">"</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                  <span className="text-emerald-300 text-xl">"</span>
                </div>
                <div>
                  <p className="text-gray-100 text-lg font-light leading-relaxed mb-4 italic">
                    {currentSlide.quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                    <div className="text-right">
                      <span className="text-emerald-300 font-medium block">— NS Fidai</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setFade(false)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setFade(true)
                }, 200)
              }}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-emerald-400 scale-125 shadow-lg shadow-emerald-400/50' 
                  : 'bg-white/40 hover:bg-white/80'
              }`}
            >
              {index === currentIndex && (
                <span className="absolute -inset-1 rounded-full border-2 border-emerald-400/50 animate-ping"></span>
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-emerald-500/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-emerald-400/70 rounded-full mt-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Enhanced About Section
  const AboutSection = () => {
    const achievements = [
      { icon: <Shield />, value: "SEBI Registered", label: "Regulatory Compliance" },
      { icon: <GraduationCap />, value: "500+", label: "Trained Professionals" },
      { icon: <Briefcase />, value: "30+ Years", label: "Collective Experience" },
      { icon: <Users />, value: "1000+", label: "Community Members" }
    ];

    return (
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 font-semibold rounded-full text-lg mb-6 border border-emerald-100 shadow-sm">
              ABOUT INDIA EQUITY NETWORK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built on <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Principles & Experience</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A multi-division market ecosystem built on principled learning, regulated research, and thoughtful market participation.
            </p>
            <div className="w-24 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      Who We Are
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      India Equity Network <span className="text-emerald-600 font-bold">(Indeqnet Private Limited)</span> brings together regulated research, practical education, and values-driven community learning.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 rounded-xl border-l-4 border-emerald-500">
                    <p className="text-gray-800 text-xl font-semibold">
                      "Our ethos is grounded in quiet depth, discipline, and long-term clarity — not noise or hype."
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => router.push('/important/about')}
                    className="group w-full sm:w-auto bg-gradient-to-r from-gray-900 to-gray-800 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <span className="flex items-center justify-center gap-3 text-lg">
                      Discover Our Full Story
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-emerald-600">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                  <div className="text-gray-600 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          
        </div>
      </section>
    );
  };

  // Enhanced Verticals Section
  const VerticalsSection = () => {
    const verticals = [
      {
        title: "marketgAInz",
        subtitle: "SEBI Registered Research Analyst",
        description: "The regulated advisory division providing SEBI-compliant, framework-based equity research focused on clarity, documentation, and disciplined analysis.",
        icon: <Shield className="w-10 h-10" />,
        color: "from-emerald-500 to-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        buttonText: "View Advisory Services",
        route: "/marketgainz",
        disclaimer: "SEBI RA Registration No: ______. No guaranteed returns. Market risks apply."
      },
      {
        title: "ISSMA",
        subtitle: "Integrated School of Stock Markets & Analytics",
        description: "The learning and training division delivering structured market education, financial literacy, and skill-building rooted in real market practice.",
        icon: <BookOpen className="w-10 h-10" />,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        buttonText: "Explore ISSMA Programs",
        route: "/issma",
        disclaimer: "ISSMA offers education only. No stock tips, calls, or advisory."
      },
      {
        title: "India Elite Summit",
        subtitle: "Community Events Division",
        description: "A quiet, invitation-only gathering for thoughtful market practitioners designed for reflection, learning, and alignment — not promotion.",
        icon: <Users className="w-10 h-10" />,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        buttonText: "Explore Summit",
        route: "/india-elite-summit",
        disclaimer: "Values-driven environment for ethical networking and framework refinement."
      }
    ]

    return (
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm text-emerald-300 font-semibold rounded-full text-lg mb-6 border border-emerald-500/30">
              OUR DIVISIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Three Integrated Verticals, <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">One Shared Vision</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Distinct divisions serving unique needs, united by our commitment to ethics, education, and community.
            </p>
            <div className="w-24 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {verticals.map((vertical, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon with glow */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${vertical.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-all duration-300`}>
                  <div className="text-white">
                    {vertical.icon}
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br ${vertical.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{vertical.title}</h3>
                <p className="text-emerald-300 font-medium text-lg mb-6">{vertical.subtitle}</p>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {vertical.description}
                </p>

                {/* Button */}
                <button 
                  onClick={() => router.push(vertical.route)}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 mb-6 group/btn"
                >
                  <span className="flex items-center justify-center gap-3 text-lg">
                    {vertical.buttonText}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>

                {/* Disclaimer */}
                <div className="pt-6 border-t border-gray-700/50">
                  <p className="text-gray-500 text-sm italic">
                    {vertical.disclaimer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Enhanced Philosophy Section
  const PhilosophySection = () => {
    const coreValues = [
      {
        title: "Ethics First",
        description: "Decisions grounded in integrity, transparency, and responsibility — the foundation of all our work.",
        icon: <Shield className="w-8 h-8" />
      },
      {
        title: "Depth Over Noise",
        description: "We prioritize structured understanding, long-term clarity, and thoughtful analysis over fast opinions or market chatter.",
        icon: <BarChart3 className="w-8 h-8" />
      },
      {
        title: "Systems Over Emotion",
        description: "A commitment to rule-based, algorithmic, and behavior independent frameworks that reduce bias and improve decision quality.",
        icon: <Brain className="w-8 h-8" />
      },
      {
        title: "Intelligence Through Data",
        description: "Using analytical thinking, practical models, and responsible use of technology including AI to extract clarity from complexity.",
        icon: <TrendingUp className="w-8 h-8" />
      }
    ]

    const services = [
      "SEBI-Registered Equity Research (MarketgAInz)",
      "Practical Market Education (ISSMA)",
      "Community Learning Events (India Elite Summit)",
      "Financial Literacy Programs",
      "Research & Analytics Platform (coming soon)",
      "Framework-based Investment Training"
    ]

    return (
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Quote Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="relative inline-block">
              <div className="absolute -top-4 -left-4 w-8 h-8 text-emerald-400 text-4xl">"</div>
              <div className="text-3xl md:text-4xl font-light text-gray-800 italic mb-8 leading-relaxed">
                In markets and in life, ethics & discipline are the ultimate edge.
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 text-emerald-400 text-4xl transform rotate-180">"</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
              <span className="text-emerald-600 font-bold text-xl">— NS Fidai</span>
              <span className="text-gray-600 text-lg">#NoCapitalNoCapitalMarkets</span>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The principles that guide every decision and action we take
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-emerald-600">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Snapshot */}
          <div className="relative bg-gradient-to-br from-emerald-50 via-white to-cyan-50 rounded-3xl p-12 border border-emerald-200 shadow-2xl">
            {/* Decorative elements */}
          
            
            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
                What We Do
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ChevronRight className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-800 font-semibold text-lg">{service}</span>
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutSection />
      <VerticalsSection />
      <PhilosophySection />
    </main>
  )
}

export default HomePage