"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Users,
  Brain,
  Target,
  BarChart3,
  TrendingUp,
  ChevronRight,
  GraduationCap,
  Calendar,
  Clock,
  Zap,
  Shield,
  Award,
  FileText,
  Lightbulb,
  Layers,
  PieChart,
  LineChart,
  Database,
  Globe,
  Users as UsersIcon,
  Video,
  Book,
  Mail,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Rocket,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Gift,
  Flame,
  Crown,
  Clock3,
  Wallet,
  Star,
  Sparkles,
  Medal,
  Trophy,
  Gem,
  BookMarked,
  ScrollText,
  BadgeCheck,
  Workflow,
  GanttChart,
  CandlestickChart,
  LineChart as LineChartIcon,
  Activity,
  TrendingUp as TrendingUpIcon,
  BarChartBig,
  Network,
  Grid,
  List,
  Table2,
  Filter,
  Search,
  Eye,
  EyeOff,
  Layers3,
  Library,
  School,
  Binary,
  Sigma,
  Calculator,
  Gauge,
  LineChart as LineChart2,
  PieChart as PieChart2,
  TrendingUp as TrendingUp2,
  BarChart4,
  Presentation,
} from "lucide-react";
import Link from "next/link";

const ISSMApage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const teachingPhilosophy = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Depth over shortcuts",
      desc: "Comprehensive understanding over quick fixes",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Practical frameworks over theory",
      desc: "Actionable systems over abstract concepts",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Behavior + risk + system design",
      desc: "Holistic approach integrating psychology, risk, and systems",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ethical, value-driven training",
      desc: "Education grounded in principles and integrity",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Real-world market understanding",
      desc: "Practical insights from actual market experience",
    },
  ];

  const programFormats = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Workshops",
      desc: "Focused, intensive learning sessions",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Bootcamps",
      desc: "Comprehensive training programs",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community learning sessions",
      desc: "Group-based interactive learning",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Masterclasses",
      desc: "Advanced sessions by experts",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Guest expert talks",
      desc: "Insights from industry practitioners",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Online modules & analytics tools",
      desc: "Digital learning platforms (Future)",
    },
  ];

  const courseCategories = [
    { id: "all", name: "All Courses", icon: <Library className="w-4 h-4" /> },
    {
      id: "foundation",
      name: "Foundation",
      icon: <School className="w-4 h-4" />,
    },
    {
      id: "technical",
      name: "Technical Analysis",
      icon: <LineChart2 className="w-4 h-4" />,
    },
    {
      id: "fundamental",
      name: "Fundamental Analysis",
      icon: <PieChart2 className="w-4 h-4" />,
    },
    {
      id: "derivatives",
      name: "Futures & Options",
      icon: <Binary className="w-4 h-4" />,
    },
    {
      id: "internship",
      name: "Internship",
      icon: <Briefcase className="w-4 h-4" />,
    },
  ];

  const courses = [
    {
      id: 1,
      category: "advanced",
      level: "ANALYSIS THAT WORKS",
      title: "Recorded Master Program",
      shortTitle: "Master Program",
      subtitle: "Integrated Technical & Fundamental Market Learning",
      icon: <Crown className="w-8 h-8" />,
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
      lightGradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      badgeColor: "bg-indigo-100 text-indigo-700",
      duration: "150+ hours (54 recorded sessions)",
      format: "Recorded program with 6 query sessions over 3 months",
      fee: "₹49,999 + GST",
      students: "All Levels",
      rating: 4.9,
      image: "/issma/course8.png",
      comming:"",
      features: [
        "54 live recorded sessions with 150+ hours content",
        "Technical Analysis: price behaviour, market structure",
        "Speed Analysis: A–Z NSE chart scanning",
        "Fundamental Analysis: beyond surface numbers",
        "Off-balance sheet items and hidden risks",
        "Frameworks for spotting long-term wealth creators",
        "Options timing and risk management",
        "Trading psychology and behavioural biases",
      ],
      internship: {
        unpaid: "₹74,999 + GST (3 months unpaid internship)",
        paid: "₹1,49,999 + GST (3 months paid internship)",
      },
      assessment: "Self-paced with 6 query resolution sessions over 3 months",
    },
    {
      id: 2,
      category: "technical",
      level: "ANALYSIS THAT WORKS",
      title: "2-Day Classroom Training in Technical Analysis",
      shortTitle: "Technical Analysis Workshop",
      subtitle: "By NS Fidai",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "blue",
      gradient: "from-blue-600 to-indigo-600",
      lightGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      badgeColor: "bg-blue-100 text-blue-700",
      duration: "2 Days (Classroom Training)",
      format: "In-person classroom training",
      fee: "25,000 + GST",
      students: "Intermediate to..",
      rating: 5.0,
      comming:"",
      image: "/issma/course2.png",
      instructor: "NS Fidai",
      description: `A focused, in-person training designed to help participants study markets objectively, analyse charts effectively, and make structured trading & investment decisions based on the core principles of Technical Analysis.`,
      programStructure: {
        coreTechnicalTools: [
          "Dow Theory and market structure logic",
          "Price–Volume Action",
          "Candlesticks and Candlestick Patterns",
          "Oscillators and Indicators",
          "Moving Averages",
          "Fibonacci Applications",
          "Channels and Trendlines",
          "Technical Patterns that work in Indian markets",
          "Identifying strong trends",
        ],
        advancedApplication: [
          "Identifying fake breakouts and breakdowns — and how to use them",
          "Strategy frameworks and when to apply them",
          "Entry, exit, and stop-loss structures that remove guesswork",
          "Identifying high-probability setups before they fully develop",
          "Trailing profitable investments to maximise gains",
          "Exiting at the right time to protect capital",
        ],
        riskFramework: [
          "Trader Psychology",
          "Risk and Money Management",
          "What separates consistent traders from inconsistent ones",
          "How to remove bias and become an effective analyst",
        ],
      },
      features: [
        "Dow Theory and market structure logic",
        "Price–Volume Action analysis",
        "Candlesticks and Candlestick Patterns",
        "Oscillators and Indicators application",
        "Moving Averages strategies",
        "Fibonacci Applications",
        "Channels and Trendlines identification",
        "Technical Patterns that work in Indian markets",
        "Identifying strong trends",
        "Fake breakout and breakdown identification",
        "Strategy frameworks for different market conditions",
        "Entry, exit, and stop-loss structures",
        "High-probability setup identification",
        "Trailing profitable investments",
        "Trader Psychology and bias removal",
        "Risk and Money Management frameworks",
      ],
      outcome: "Study markets objectively, analyse charts effectively, and make structured trading & investment decisions",
    },
    {
      id: 3,
      category: "technical",
      level: "BASIC TECHNICAL ANALYSIS",
      title: "Price, Charts & Market Structure",
      shortTitle: "Basic Technical Analysis",
      subtitle: "Understanding How Price Moves",
      icon: <LineChart className="w-8 h-8" />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      lightGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      badgeColor: "bg-blue-100 text-blue-700",
      duration: "16 hours (4 hours/week × 4 weeks)",
      format: "Live/online sessions with recorded access",
      fee: "₹4,999 + GST",
      students: "Intermediate",
      comming:"Coming Soon",
      rating: 4.7,
      image: "/issma/course3.png",
      features: [
        "Study price movement using candlestick, bar, line, and Renko charts",
        "Read and interpret price behaviour across charts",
        "Application and interpretation of indicators and oscillators",
        "Understanding price and volume action together",
        "Core technical analysis tools and their limitations",
        "Structured and disciplined approach to reading charts",
      ],
      assessment: "Module-wise MCQ tests + Final assessment",
      outcome:
        "Read and interpret charts with clear understanding of price and volume behaviour",
    },
    {
      id: 4,
      category: "technical",
      level: "ADVANCED TECHNICAL ANALYSIS",
      title: "Strategies, Application & Systematic Thinking",
      shortTitle: "Advanced Technical Analysis",
      subtitle: "From Reading Charts to Using Technical Analysis",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      lightGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      badgeColor: "bg-purple-100 text-purple-700",
      duration: "24 hours (4 hours/week × 6 weeks)",
      format: "Live/online sessions with recorded access",
      fee: "₹29,999 + GST",
      students: "Advanced",
      comming:"Coming Soon",
      rating: 4.9,
      image: "/issma/course4.png",
      features: [
        "Converting technical concepts into practical trading strategies",
        "Applying indicators, price action, and volume in real scenarios",
        "Understanding strategy behaviour across market conditions",
        "Introduction to systematic and rule-based approaches",
        "Testing and refining strategies for consistency",
        "Elliott Wave Theory: market structure, impulse and corrective phases",
      ],
      combined: {
        with: "Course 2 (Basic Technical Analysis)",
        fee: "₹24,999 + GST",
      },
      assessment: "Module-wise assessments + Final MCQ evaluation",
    },
    {
      id: 5,
      category: "fundamental",
      level: "BASIC FUNDAMENTAL ANALYSIS",
      title: "Understanding Business Numbers",
      shortTitle: "Basic Fundamental Analysis",
      subtitle: "Familiarity with Financial Information",
      icon: <PieChart className="w-8 h-8" />,
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      lightGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      badgeColor: "bg-amber-100 text-amber-700",
      duration: "16 hours (4 hours/week × 4 weeks)",
      format: "Live online sessions with recorded access",
      fee: "₹4,999 + GST",
      students: "Intermediate",
      comming:"Coming Soon",
      rating: 4.6,
      image: "/issma/course5.png",
      features: [
        "What Fundamental Analysis is and where it's used",
        "How businesses report financial information",
        "Structure of P&L, Balance Sheet, Cash Flow Statement",
        "Common accounting terminology",
        "Introduction to financial ratios",
        "Understanding annual report presentation",
      ],
      assessment: "Module-wise MCQ tests + Final assessment",
      note: "Focus on terminology, structure, and familiarity, not interpretation",
    },
    {
      id: 6,
      category: "fundamental",
      level: "FUNDAMENTAL ANALYSIS",
      title: "Business Understanding & Portfolio Logic",
      shortTitle: "Advanced Fundamental Analysis",
      subtitle: "Analyzing Businesses Like Long-Term Investors",
      icon: <Database className="w-8 h-8" />,
      color: "red",
      gradient: "from-red-500 to-rose-500",
      lightGradient: "from-red-50 to-rose-50",
      borderColor: "border-red-200",
      badgeColor: "bg-red-100 text-red-700",
      duration: "36 hours (3 hours/week × 12 weeks)",
      format: "Live/online sessions with recorded access",
      fee: "₹29,999 + GST",
      students: "Advanced",
      comming:"Coming Soon",
      rating: 4.8,
      image: "/issma/course6.png",
      features: [
        "Assessing business quality, durability, and positioning",
        "Reading financial statements with analytical intent",
        "Understanding business and sector cyclicality",
        "Evaluating management quality and governance",
        "Core valuation concepts and their limitations",
        "Portfolio structuring and capital preservation",
        "Off-balance sheet items and hidden risks",
      ],
      combined: {
        with: "Course 4 (Basic Fundamental Analysis)",
        fee: "₹24,999 + GST",
      },
      assessment: "Module-wise assessments + Final evaluation",
    },
    {
      id: 7,
      category: "derivatives",
      level: "BASICS OF FUTURES & OPTIONS",
      title: "Clear, Simple Introduction to Derivatives",
      shortTitle: "Basics of F&O",
      subtitle: "Understanding What Derivatives Are",
      icon: <Zap className="w-8 h-8" />,
      color: "yellow",
      gradient: "from-yellow-500 to-amber-500",
      lightGradient: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
      badgeColor: "bg-yellow-100 text-yellow-700",
      duration: "8 hours (4 hours/day × 2 days)",
      format: "Live/online sessions with recorded access",
      fee: "₹4,999 + GST",
      students: "Intermediate",
      comming:"Coming Soon",
      rating: 4.5,
      image: "/issma/course7.png",
      features: [
        "What Futures and Options are and why they exist",
        "Difference between trading shares and derivatives",
        "Basic structure of F&O contracts",
        "Key terminology: strike price, premium, expiry",
        "ITM, ATM, OTM concepts",
        "Understanding option chains, OI, and PCR",
      ],
      assessment: "Module-wise assessments + Final evaluation",
    },
    {
      id: 8,
      category: "derivatives",
      level: "ADVANCED FUTURES & OPTIONS",
      title: "Pricing, Volatility & Risk-Based Application",
      shortTitle: "Advanced F&O",
      subtitle: "Structured, Practical Application of Derivatives",
      icon: <Flame className="w-8 h-8" />,
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      lightGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      badgeColor: "bg-orange-100 text-orange-700",
      duration: "24 hours (4 hours/week × 6 weeks)",
      format: "Live/online sessions with recorded access",
      fee: "₹29,999 + GST",
      students: "Advanced",
      comming:"Coming Soon",
      rating: 4.7,
      image: "/issma/course8.png",
      features: [
        "How market conditions affect derivative behaviour",
        "Volatility's role in option pricing",
        "Option Greeks: Delta, Gamma, Theta, Vega",
        "Introduction to Black-Scholes Model",
        "Position analysis using price and Open Interest",
        "Integrating F&O with Technical and Fundamental analysis",
      ],
      combined: {
        with: "Course 6 (Basics of Futures & Options)",
        fee: "₹24,999 + GST",
      },
      assessment: "Module-wise assessments + Final evaluation",
    },
    {
      id: 9,
      category: "foundation",
      level: "Advanced Foundation Course",
      title: "Basic Financial Literacy & Introduction to Stock Markets",
      shortTitle: "Financial Literacy",
      subtitle: "A Foundation Course for Every Individual",
      icon: <BookOpen className="w-8 h-8" />,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500",
      lightGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      badgeColor: "bg-emerald-100 text-emerald-700",
      duration: "3 hours",
      format: "Live/online session with recorded access",
      fee: "₹999 + GST",
      students: "Beginners",
      comming:"Coming Soon",
      rating: 4.8,
      image: "/issma/course1.png",
      philosophy: [
        "Why savings and capital protection come first",
        "The role of insurance before wealth creation",
        "How businesses operate, grow, and raise money",
        "How ownership works in private and public companies",
      ],
      features: [
        "Understanding money, savings, protection, business, capital, and ownership",
        "Markets explained as systems of ownership and valuation",
        "Live/online session with recorded access for revision",
        "Guided discussions for conceptual clarity",
      ],
      assessment: "Single comprehensive evaluation after course completion",
      benefit: "100% of ₹999 adjusted against next course fee",
      target: [
        "Students and young earners",
        "Individuals with no formal financial education",
        "Anyone seeking clarity before investing",
        "Families wanting to build healthy financial habits",
      ],
      description: `This course is a financial literacy and awareness program created for individuals who want to build a clear, safe, and grounded understanding of money and markets—before taking any financial decisions.
      
Most people are expected to manage savings, insurance, risk, and investments throughout life, yet financial education is rarely taught formally. This course exists to bridge that gap.`,
    },
    {
      id: 10,
      category: "internship",
      level: "MARKET & INDUSTRY READINESS INTERNSHIP",
      title: "Paid Internship with Practical Market Exposure",
      shortTitle: "Industry Internship",
      subtitle: "Real-World Exposure to Capital Markets",
      icon: <Briefcase className="w-8 h-8" />,
      color: "emerald",
      gradient: "from-emerald-500 to-green-500",
      lightGradient: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      badgeColor: "bg-emerald-100 text-emerald-700",
      duration: "3 months",
      format: "Online/Offline (subject to availability)",
      fee: "₹2,00,000 + GST (Includes all courses + internship)",
      students: "Advanced",
      comming:"Coming Soon",
      rating: 5.0,
      image: "/issma/course10.png",
      features: [
        "Guaranteed 3-month paid internship",
        "Exposure to real market-related work",
        "Understanding analysis, research, and market processes",
        "Developing professional discipline and reporting skills",
        "Market research and data analysis",
        "Assisting in technical and fundamental analysis",
        "Compliance awareness and ethical boundaries",
      ],
      prerequisite: "Completion of all courses",
      outcome: "Internship completion certificate with experience recognition",
    },
  ];

  const filteredCourses =
    activeTab === "all"
      ? courses
      : courses.filter((course) => course.category === activeTab);

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-500",
        light: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        gradient: "from-emerald-500 to-teal-500",
        badge: "bg-emerald-100 text-emerald-700",
      },
      blue: {
        bg: "bg-blue-500",
        light: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-500 to-cyan-500",
        badge: "bg-blue-100 text-blue-700",
      },
      purple: {
        bg: "bg-purple-500",
        light: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-500 to-pink-500",
        badge: "bg-purple-100 text-purple-700",
      },
      amber: {
        bg: "bg-amber-500",
        light: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200",
        gradient: "from-amber-500 to-orange-500",
        badge: "bg-amber-100 text-amber-700",
      },
      red: {
        bg: "bg-red-500",
        light: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
        gradient: "from-red-500 to-rose-500",
        badge: "bg-red-100 text-red-700",
      },
      yellow: {
        bg: "bg-yellow-500",
        light: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200",
        gradient: "from-yellow-500 to-amber-500",
        badge: "bg-yellow-100 text-yellow-700",
      },
      orange: {
        bg: "bg-orange-500",
        light: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        gradient: "from-orange-500 to-red-500",
        badge: "bg-orange-100 text-orange-700",
      },
      indigo: {
        bg: "bg-indigo-500",
        light: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
        gradient: "from-indigo-500 to-purple-500",
        badge: "bg-indigo-100 text-indigo-700",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Parallax Effect */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="mb-6 animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full text-sm border border-white/20">
                  <Sparkles className="w-4 h-4" />
                  DIVISION OF INDIA EQUITY NETWORK
                </span>
              </div>

              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="text-white">ISS</span>
                  <span className="text-cyan-400">MA</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              </div>

              <p className="text-gray-300 text-2xl mb-6 max-w-xl font-light">
                Integrated School of Stock Markets Analytics
              </p>

              <p className="text-gray-300 mb-4 text-lg leading-relaxed max-w-2xl">
                ISSMA is built for individuals who want to understand markets
                with depth, structure, and discipline.
              </p>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed max-w-2xl">
                In a space often dominated by noise, shortcuts, and
                surface-level learning, ISSMA focuses on building clear
                thinking, analytical foundations, and independent market
                capability. Our programs are designed to move learners from
                basic awareness to structured analysis—across Technical
                Analysis, Fundamental Analysis, and derivatives.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl">
                At ISSMA, the objective is to help you develop the clarity and
                confidence required to approach markets responsibly,
                thoughtfully, and independently.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">
                      Education
                    </div>
                    <div className="text-blue-300">Only</div>
                  </div>
                </div>

                <div className="w-px h-12 bg-white/20"></div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">
                      No Advisory
                    </div>
                    <div className="text-cyan-300">Services</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-cyan-400" />
                  What ISSMA Delivers
                </h2>

                <div className="space-y-4">
                  {[
                    "Depth, structure, and discipline in market understanding",
                    "Clear thinking and analytical foundations",
                    "Independent market capability—Technical, Fundamental & derivatives",
                    "Clarity and confidence to approach markets responsibly and thoughtfully",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-gray-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">9+</div>
                    <div className="text-sm text-gray-400">Courses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">150+</div>
                    <div className="text-sm text-gray-400">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Practical</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* COURSES SECTION */}
          <div className="mb-20">
            {/* Section Header with decorative elements */}
            <div className="text-center mb-16 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg shadow-blue-500/30">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">LEARNING PATH</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    Courses
                  </span>
                </h2>
                <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                  Serious Market Education. Structured Progression. Learn
                  Directly From Experienced Market Professionals
                </p>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {courseCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:scale-105"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex justify-end mb-6">
              <div className="bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "list"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Course Cards - Grid View */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => {
                  const colors = getColorClasses(course.color);
                  const isHovered = hoveredCourse === course.id;

                  return (
                    <div
                      key={course.id}
                      onMouseEnter={() => setHoveredCourse(course.id)}
                      onMouseLeave={() => setHoveredCourse(null)}
                      className="group relative"
                    >
                      {/* Card with 3D effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${course.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                      ></div>

                      <div
                        className={`relative bg-white rounded-3xl border-2 ${colors.border} shadow-xl overflow-hidden transition-all duration-500 ${
                          isHovered ? "transform -translate-y-2 shadow-2xl" : ""
                        }`}
                      >
                        {/* Card Header with Image */}
                        <div
                          className={`relative h-48 bg-gradient-to-r ${course.gradient} overflow-hidden`}
                        >
                          {/* Background Image */}
                          {course.image && (
                            <div className="absolute inset-0">
                              <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                            </div>
                          )}

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                          {/* Pattern Overlay */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                          </div>

                          <div className="relative z-10 h-full flex flex-col justify-between p-9">
                            <div className="flex justify-between items-start">
                              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30">
                                Course {course.id}
                              </span>
                            </div>

                            <div>
                              <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                                {course.level}
                              </h3>
                              <p className="text-white/90 text-sm line-clamp-2">
                                {course.title}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 h-full flex flex-col">
  {/* Quick Info */}
  <div className="grid grid-cols-2 gap-3 mb-4">
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Clock3 className="w-4 h-4 text-gray-400" />
      <span className="truncate">
        {course.duration}
      </span>
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Users className="w-4 h-4 text-gray-400" />
      <span>{course.students}</span>
    </div>
  </div>

  {/* Coming Soon Badge - Fixed height container */}
  <div className="h-8 mb-2">
    {course.comming && (
      <div className="flex justify-end">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500 rounded-full">
          <span className="text-xs font-medium text-white">{course.comming}</span>
        </div>
      </div>
    )}
  </div>

  {/* Fee */}
  <div className="mb-4">
    <div className="text-2xl font-bold text-gray-900">
      {course.fee}
    </div>
    <div className="text-xs text-gray-500">
      + GST (if applicable)
    </div>
  </div>

  {/* Key Features Preview */}
  <div className="space-y-2 mb-6 flex-grow">
    {(course.features ?? []).slice(0, 2).map((feature, idx) => (
      <div
        key={idx}
        className="flex items-start gap-2 text-xs text-gray-600"
      >
        <CheckCircle
          className={`w-3 h-3 ${colors.text} mt-0.5 flex-shrink-0`}
        />
        <span className="line-clamp-1">{feature}</span>
      </div>
    ))}
    {(course.features ?? []).length > 2 && (
      <div className="text-xs text-gray-400">
        +{(course.features ?? []).length - 2} more topics
      </div>
    )}
  </div>

  {/* Action Buttons - Fixed at bottom */}
  <div className="flex gap-3 w justify-between  mt-auto">
    
    <Link href={"#"} className="px-8 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl text-sm font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105">
      Criculum
    </Link>
  </div>
</div>

                        {/* Expanded Details */}
                        {selectedCourse === course.id && (
                          <div className="border-t border-gray-200 p-6 bg-gray-50 animate-slideDown">
                            <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                              {/* Full Description */}
                              {course.description && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <FileText
                                      className={`w-4 h-4 ${colors.text}`}
                                    />
                                    About
                                  </h4>
                                  <p className="text-sm text-gray-700 whitespace-pre-line">
                                    {course.description}
                                  </p>
                                </div>
                              )}

                              {/* Full Features */}
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                  <BookMarked
                                    className={`w-4 h-4 ${colors.text}`}
                                  />
                                  Curriculum
                                </h4>
                                <ul className="space-y-1.5">
                                  {(course.features ?? []).map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2 text-sm text-gray-700"
                                    >
                                      <CheckCircle
                                        className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`}
                                      />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Target Audience */}
                              {course.target && (
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <Users
                                      className={`w-4 h-4 ${colors.text}`}
                                    />
                                    Who Should Join
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {course.target.map((item, idx) => (
                                      <span
                                        key={idx}
                                        className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs text-gray-700"
                                      >
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Special Offers */}
                              {course.combined && (
                                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                                  <p className="text-sm text-amber-800">
                                    <span className="font-bold">Combo:</span>{" "}
                                    {course.combined.with} -{" "}
                                    {course.combined.fee}
                                  </p>
                                </div>
                              )}

                              {course.internship && (
                                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                                  <p className="text-sm text-purple-800 font-medium mb-1">
                                    Internship Options:
                                  </p>
                                  <ul className="text-xs text-purple-700 space-y-1">
                                    <li>• {course.internship.unpaid}</li>
                                    <li>• {course.internship.paid}</li>
                                  </ul>
                                </div>
                              )}

                              {/* Assessment */}
                              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                <p className="text-sm text-blue-800">
                                  <span className="font-bold">Assessment:</span>{" "}
                                  {course.assessment}
                                </p>
                                {course.outcome && (
                                  <p className="text-sm text-blue-800 mt-1">
                                    <span className="font-bold">Outcome:</span>{" "}
                                    {course.outcome}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {filteredCourses.map((course) => {
                  const colors = getColorClasses(course.color);

                  return (
                    <div
                      key={course.id}
                      className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Color Bar with Image */}
                        <div
                          className={`md:w-32 h-32 md:h-auto relative overflow-hidden bg-gradient-to-r ${course.gradient}`}
                        >
                          {course.image && (
                            <Image
                              src={course.image}
                              alt={course.title}
                              fill
                              className="object-cover opacity-40"
                            />
                          )}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white/80">{course.icon}</div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            {/* Left Section */}
                            <div className="flex items-start gap-4">
                              <div>
                                <div className="flex items-center gap-3 mb-1">
                                  <span
                                    className={`px-3 py-1 ${colors.badge} rounded-full text-xs font-medium`}
                                  >
                                    Course {course.id}
                                  </span>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-sm font-medium">
                                      {course.rating}
                                    </span>
                                  </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                  {course.level}
                                </h3>
                                <p className="text-gray-600">{course.title}</p>
                              </div>
                            </div>

                            {/* Right Section */}
                            <div className="flex items-center gap-6">
                              <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900">
                                  {course.fee}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {course.duration}
                                </div>
                              </div>

                              <button
                                onClick={() =>
                                  setSelectedCourse(
                                    selectedCourse === course.id
                                      ? null
                                      : course.id,
                                  )
                                }
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                              >
                                {selectedCourse === course.id
                                  ? "Hide Details"
                                  : "View Details"}
                              </button>
                            </div>
                          </div>

                          {/* Expanded Details */}
                          {selectedCourse === course.id && (
                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Features */}
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <BookMarked
                                      className={`w-4 h-4 ${colors.text}`}
                                    />
                                    What You'll Learn
                                  </h4>
                                  <ul className="space-y-2">
                                    {(course.features ?? []).map((feature, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-2 text-sm text-gray-700"
                                      >
                                        <CheckCircle
                                          className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`}
                                        />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Additional Info */}
                                <div className="space-y-4">
                                  {course.target && (
                                    <div>
                                      <h4 className="font-semibold text-gray-900 mb-2">
                                        Ideal For
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {course.target.map((item, idx) => (
                                          <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-700"
                                          >
                                            {item}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-sm text-blue-800">
                                      <span className="font-bold">
                                        Assessment:
                                      </span>{" "}
                                      {course.assessment}
                                    </p>
                                  </div>

                                  {course.combined && (
                                    <div className="bg-amber-50 p-4 rounded-lg">
                                      <p className="text-sm text-amber-800">
                                        <span className="font-bold">
                                          Combo Offer:
                                        </span>{" "}
                                        {course.combined.with} -{" "}
                                        {course.combined.fee}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Learning Path Visualization */}
          </div>

          {/* Teaching Philosophy with Modern Design */}

          {/* Program Formats */}

          {/* Call to Action */}

          {/* Important Note - Education Disclaimer */}
          <div className="mt-16 mb-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-amber-900">
                  Important Note
                </h2>
              </div>
              <div className="space-y-4 text-amber-900">
                <p className="leading-relaxed">
                  The courses and training programs offered by IndeqNet through
                  ISSMA are intended solely for educational and informational
                  purposes and do not constitute investment advice, research
                  recommendations, or solicitation of any securities.
                </p>
                <p className="leading-relaxed">
                  Course content is independent of IndeqNet's Research Analyst
                  services and should not be construed as research reports or
                  research recommendations under SEBI (Research Analyst)
                  Regulations, 2014.
                </p>
                <p className="leading-relaxed">
                  No assurance or guarantee is provided regarding accuracy,
                  completeness, or profitability of any concepts, strategies,
                  tools, or examples discussed during the courses.
                </p>
                <p className="leading-relaxed">
                  Participation in the courses does not guarantee trading
                  success, investment performance, income generation,
                  employment, certification outcomes, or financial results.
                </p>
                <p className="leading-relaxed">
                  Any market examples, case studies, illustrations, simulations,
                  or historical data used during the courses are for explanation
                  purposes only and should not be considered as recommendations
                  or indicative of future performance. No assurance or guarantee
                  is provided regarding returns, income generation, trading
                  performance or investment outcomes as a result of attending
                  any course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default ISSMApage;
