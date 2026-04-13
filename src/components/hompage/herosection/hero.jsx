"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Shield,
  BookOpen,
  Users,
  Target,
  BarChart3,
  Brain,
  TrendingUp,
  ChevronRight,
  Award,
  Eye,
  Check,
  Clock,
  GraduationCap,
  Calendar,
  FileText,
  Scale,
  Building,
  Briefcase,
  AlertTriangle,
} from "lucide-react";

const HomePage = () => {
  const router = useRouter();

  // Hero: founders' photos and descriptions (one per slide)
  const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const slides = [
      {
        name: "NS Fidai",
        image: "/Picture 1.png",
        description: "Founder of Analyse India is a veteran banker and market guru with an unparalleled track record of success. With 13 years of banking experience and over 33 years of navigating the Indian Equity markets (since 1991). NS Fidai's expertise in Technical Analysis has earned him widespread recognition as one of the top analysts in the field and he is known as \"Master of Moving Averages\". For over 20 years, Fidai has shared his knowledge and insights with thousands of aspiring traders and investors, mentoring and training them in the art of Technical Analysis.",
        x: "@nsfidai"
      },
      {
        name: "Rajeev Jhunjhunwala",
        image: "/Picture 2.png",
        description: "With over three decades of experience in the Indian capital markets, Rajeev Jhunjhunwala has established himself as a seasoned broker, disciplined investor, and respected market voice. Having navigated multiple economic cycles, regulatory reforms, and structural transitions within India's financial ecosystem, he brings a long-term, systems-oriented understanding of markets grounded in capital discipline and risk awareness. He has been featured on leading business platforms including CNBC Awaaz and prominent Bengali business channels, where he has shared perspectives on market direction, Union Budget implications, sectoral outlooks, and macroeconomic developments. His insights have also been published in respected regional financial publications such as Dainik Vishwamitra. He believes markets are not merely platforms for profit, but structured systems of ownership, capital allocation, and long-term wealth creation. His vision is centered on building informed and independent market participants who approach opportunity and risk with equal seriousness and discipline.",
        x: " "
      },
      {
        name: "RAMACHANDRAN CHITHAMBARAN",
        image: "/Picture 3.png",
        description: "Ram is a seasoned finance professional with over three decades of experience driving significant business growth. Armed with an MBA in Finance (NMIMS), a Diploma in Cyber Law, and SEBI Research Analyst registration, he specializes in establishing new ventures and implementing robust control and monitoring systems. Ram functions as a strategic advisor to CEOs and a key operational resource for cross-functional teams, consistently leveraging a people-centric approach, optimized processes, and technology to cultivate impactful business partnerships. He possesses a proven track record across diverse business models and multicultural teams, and is an active mentor to start-ups.",
        x: "https://x.com/Ram_Iyer572"
      }
    ];

    useEffect(() => {
      if (isHovered) return;
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % slides.length);
          setFade(true);
        }, 500);
      }, 3000);
      return () => clearInterval(interval);
    }, [slides.length, isHovered]);
    
    const handleNext = () =>{
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }
    
    const currentSlide = slides[currentIndex];

    return (
      <div
        className="relative min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8 py-6 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle gradient accents */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-cyan-500/30" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left: name + short description + CTAs + stats */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-3">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-semibold text-xs tracking-wider uppercase">
                  Founders
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {currentSlide.name}
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-5 leading-relaxed">
                {currentSlide.description}
              </p>
             

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                
              </div>
            </div>
            
          </div>

          {/* Right: founder photo with X icon below */}
          <div
            className={`flex-1 w-full max-w-md transition-all duration-1000 ${
              fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <div className="relative w-full aspect-[4/5] max-h-[380px] mx-auto rounded-xl overflow-hidden border-2 border-white/20 shadow-xl bg-gray-800">
              <Image
                src={currentSlide.image}
                alt={currentSlide.name}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
            
            {/* X icon below image */}
            {currentSlide.x && currentSlide.x.trim() !== "" && (
              <div className="mt-4 text-center">
                <a 
                  href={currentSlide.x.startsWith('@') ? `https://x.com/${currentSlide.x.substring(1)}` : currentSlide.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-black/60 rounded-full border border-white/20 text-white transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-sm font-medium">
                    {currentSlide.x.startsWith('@') ? currentSlide.x : 'Follow on X'}
                  </span>
                </a>
              </div>
            )}
          </div>
          
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setFade(true);
                }, 200);
              }}
              className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-emerald-400 scale-125 shadow-lg shadow-emerald-400/50"
                  : "bg-white/40 hover:bg-white/80"
              }`}
            >
              {index === currentIndex && (
                <span className="absolute -inset-0.5 rounded-full border-2 border-emerald-400/50 animate-ping" />
              )}
            </button>
          ))}
        </div>
        <ArrowRight onClick={handleNext} className="w-5 hover:scale-110 transition-all duration-300 hover:text-emerald-400 cursor-pointer absolute top-1/2 right-4 h-5 text-white" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-emerald-500/30 rounded-full flex justify-center">
              <div className="w-1 h-2.5 bg-emerald-400/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced About Section
  const AboutSection = () => {
    const achievements = [
      { icon: <Shield />, value: "SEBI Registered", label: "INH000024930" },
      {
        icon: <GraduationCap />,
        value: "500+",
        label: "Trained Professionals",
      },
      {
        icon: <Briefcase />,
        value: "75+ Years",
        label: "Cumulative Market Experience",
      },
      { icon: <Users />, value: "1000+", label: "Community Members" },
    ];

    return (
      <section className="relative py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-5">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 font-semibold rounded-full text-lg mb-6 border border-emerald-100 shadow-sm">
              ABOUT INDIA EQUITY NETWORK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built on{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Principles & Experience
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A multi-division market ecosystem built on principled learning,
              regulated research, and thoughtful market participation.
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
                      <span className="text-emerald-600 font-bold">
                        {" "}
                        India Equity Network
                      </span>{" "}
                      brings together regulated research, practical education,
                      and values-driven community learning.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 rounded-xl border-l-4 border-emerald-500">
                    <p className="text-gray-800 text-xl font-semibold">
                      “We exist to simplify the markets for India&apos;s next
                      generation of investors and traders”
                    </p>
                  </div>

                  <button
                    onClick={() => router.push("/important/about")}
                    className="group w-full sm:w-auto bg-gradient-to-r from-gray-900 to-gray-800 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <span className="flex items-center justify-center gap-3 text-lg">
                      Discover Our Story
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
                    <div className="text-emerald-600">{item.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {item.value}
                  </div>
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
        title: "Advisory",
        subtitle: "SEBI Registered Research Analyst (INH000024930)",
        description:
          "The regulated advisory division providing SEBI-compliant, framework-based equity research focused on clarity, documentation, and disciplined analysis.",
        icon: <Shield className="w-10 h-10" />,
        color: "from-emerald-500 to-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        buttonText: "Read More",
        route: "/important/Advisory",
        disclaimer:
          "SEBI RA Registration No: INH000024930. No guaranteed returns. Market risks apply.",
      },
      {
        title:
          "Training",
        subtitle: "Integrated School of Stock Markets & Analytics",
        description:
          "The learning and training division delivering structured market education, financial literacy, and skill-building rooted in real market practice.",
        icon: <BookOpen className="w-10 h-10" />,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        buttonText: "Read More",
        route: "/important/trainings",
        disclaimer:
          "ISSMA offers education only. No stock tips, calls, or advisory.",
      },
      {
        title: "Events",
        subtitle: "Community Events Division",
        description:
          "A quiet, invitation-only gathering for thoughtful market practitioners designed for reflection, learning, and alignment — not promotion.",
        icon: <Users className="w-10 h-10" />,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        buttonText: "Read More",
        route: "/important/events",
        disclaimer:
          "Values-driven environment for ethical networking and framework refinement.",
      },
    ];

    return (
      <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden min-h-0">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm text-emerald-300 font-semibold rounded-full text-sm mb-3 border border-emerald-500/30">
              OUR DIVISIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Three Integrated Verticals,{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                One Shared Vision
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-3xl mx-auto">
              Distinct divisions serving unique needs, united by our commitment
              to ethics, education, and community.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {verticals.map((vertical, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Glow effect — pointer-events-none so it never blocks clicks */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon with glow */}
                <div
                  className={`relative w-14 h-14 bg-gradient-to-br ${vertical.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-all duration-300`}
                >
                  <div className="text-white [&>svg]:w-7 [&>svg]:h-7">
                    {vertical.icon}
                  </div>
                  <div
                    className={`pointer-events-none absolute -inset-3 bg-gradient-to-br ${vertical.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{vertical.title}</h3>
                <p className="text-emerald-300 font-medium text-sm mb-3">
                  {vertical.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {vertical.description}
                </p>

                {/* CTA — Link for reliable App Router navigation */}
                <Link
                  href={vertical.route}
                  className="relative z-10 flex w-full items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 py-3 px-4 text-sm font-semibold text-white transition-all duration-300 hover:from-emerald-600 hover:to-cyan-600 mb-4 rounded-xl group/btn"
                >
                  {vertical.buttonText}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                </Link>

                {/* Disclaimer */}
                <div className="pt-4 border-t border-gray-700/50">
                  <p className="text-gray-500 text-xs italic">
                    {vertical.disclaimer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Enhanced Philosophy Section
  const PhilosophySection = () => {
    const coreValues = [
      {
        title: "Ethics First",
        description:
          "Decisions grounded in integrity, transparency, and responsibility — the foundation of all our work.",
        icon: <Shield className="w-8 h-8" />,
      },
      {
        title: "Depth Over Noise",
        description:
          "We prioritize structured understanding, long-term clarity, and thoughtful analysis over fast opinions or market chatter.",
        icon: <BarChart3 className="w-8 h-8" />,
      },
      {
        title: "Systems Over Emotion",
        description:
          "A commitment to rule-based, algorithmic, and behavior independent frameworks that reduce bias and improve decision quality.",
        icon: <Brain className="w-8 h-8" />,
      },
      {
        title: "Intelligence Through Data",
        description:
          "Using analytical thinking, practical models, and responsible use of technology including AI to extract clarity from complexity.",
        icon: <TrendingUp className="w-8 h-8" />,
      },
    ];

    const services = [
      "SEBI-Registered Equity Research (MarketgAInz)",
      "Practical Market Education (ISSMA)",
      "Community Learning Events (India Elite Summit)",
      "Financial Literacy Programs",
      "Research & Analytics Platform (coming soon)",
      "Framework-based Investment Training",
    ];

    return (
      <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden min-h-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Quote Section */}
          <div className="text-center mb-6 max-w-4xl mx-auto">
            <div className="relative inline-block">
              <div className="absolute -top-3 -left-3 w-6 h-6 text-emerald-400 text-2xl">
                "
              </div>
              <div className="text-2xl md:text-3xl font-light text-gray-800 italic mb-4 leading-relaxed">
                In markets and in life, ethics & discipline are the ultimate
                edge.
              </div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 text-emerald-400 text-2xl transform rotate-180">
                "
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
              <span className="text-emerald-600 font-bold text-lg">
                — NS Fidai
              </span>
              <span className="text-gray-900 font-extrabold text-base">
                #NoCapitalNoCapitalMarkets
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-6">
            <div className="text-center mb-5">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Our Core Values
              </h3>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                The principles that guide every decision and action we take
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-5 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 [&>div>svg]:w-6 [&>div>svg]:h-6">
                    <div className="text-emerald-600">{value.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Snapshot */}
          <div className="relative bg-gradient-to-br from-emerald-50 via-white to-cyan-50 rounded-2xl p-6 border border-emerald-200 shadow-xl">
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 text-center">
                What We Do
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm">
                        {service}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // SEBI mandatory disclosures (Research Analyst)
  const SEBIDisclosuresSection = () => (
    <section className="relative py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/80 to-white border-t border-amber-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <Shield className="w-5 h-5 text-amber-600" />
          <span className="text-amber-800 font-bold text-sm uppercase tracking-wider">
            SEBI Mandatory Disclosures
          </span>
          <span className="text-amber-600 text-xs">(Research Analyst)</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-sm">
            <p className="text-amber-800 font-semibold text-xs uppercase mb-1">
              Principal Officer
            </p>
            <p className="text-gray-900 font-bold">Mr. RAMACHANDRAN CHITHAMBARAN</p>
            <div className="mt-1 space-y-1 text-sm text-gray-700">
              <p>
                SEBI RA Reg. No.:{" "}
                <span className="font-mono font-bold text-gray-900">
                  INH000024930
                </span>
              </p>
              <p>
                BSE Enlistment No.:{" "}
                <span className="font-mono font-bold text-gray-900">6932</span>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-sm">
            <p className="text-amber-800 font-semibold text-xs uppercase mb-1">
              SEBI RA Compliance
            </p>
            <p className="text-gray-700 text-sm mb-3">
              We comply with SEBI (Research Analyst) Regulations, 2014.
            </p>
            <button
              onClick={() => router.push("/compliance")}
              className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1 hover:underline"
            >
              View compliance details <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-sm">
            <p className="text-amber-800 font-semibold text-xs uppercase mb-1">
              Financial Interest
            </p>
            <p className="text-gray-700 text-sm">
              The Research Analyst or its associates may have financial interest
              in securities mentioned in research. Investors should do their own
              due diligence.
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-amber-200 shadow-sm flex flex-col">
            <p className="text-amber-800 font-semibold text-xs uppercase mb-1">
              Grievance Redressal
            </p>
            <p className="text-gray-700 text-sm mb-3 flex-1">
              Complaints or grievances can be raised with our Grievance Officer.
              Resolution within 30 days.
            </p>
            <button
              onClick={() => router.push("/important/GrievanceOfficer")}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-4 rounded-lg text-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <AlertTriangle className="w-4 h-4" /> Grievance Officer &amp;
              Redressal
            </button>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs mt-4">
          Registration granted by SEBI does not guarantee performance. Market
          risks apply.
        </p>
      </div>
    </section>
  );

  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutSection />
      <VerticalsSection />
      <PhilosophySection />
      <SEBIDisclosuresSection />
    </main>
  );
};

export default HomePage;
