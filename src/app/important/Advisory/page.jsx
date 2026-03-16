'use client'
import React from 'react'
import { useRouter } from "next/navigation"
import { ArrowRight, ArrowDown, Shield, BookOpen, Users, Target, BarChart3, Brain, TrendingUp, ChevronRight, Award, FileText, Scale, AlertTriangle, ClipboardCheck, Layers, Filter, PieChart, LineChart, Database, Lock, Eye, Download, CheckCircle, FileSearch, Target as TargetIcon, Zap, ShieldCheck, Sparkles, Cpu, CandlestickChart, Briefcase, Combine, Percent } from 'lucide-react'

const MarketgainzPage = () => {
  const router = useRouter();

  const plans = [
    {
      icon: <Combine className="w-8 h-8" />,
      title: "Techno Funda",
      description: "Both fundamental and technical based. Positional — 3 to 6 months. 2–3 calls per month.",
      gradient: "from-blue-500 to-cyan-500",
      fees: [
        { period: "Month", original: "₹3,000", final: "₹2,499", promo: "Promo:  TRADEBOX" },
        { period: "Quarter", original: "₹9,000", final: "₹6,999" ,promo: "Promo:  TRADEBOX" },
        { period: "Annual", original: "₹36,000", final: "₹24,999" ,promo: "Promo:  TRADEBOX" }
      ]
    },
    {
      icon: <CandlestickChart className="w-8 h-8" />,
      title: "Intraday Cash Technical Calls",
      description: "Up to 3 calls per day.",
      gradient: "from-emerald-500 to-teal-500",
      fees: [
        { period: "Month", original: "₹3,000", final: "₹2,499", promo: "Promo:  TRADEBOX" },
        { period: "Quarter", original: "₹9,000", final: "₹6,999" ,promo: "Promo:  TRADEBOX" },
        { period: "Annual", original: "₹36,000", final: "₹24,999" ,promo: "Promo:  TRADEBOX" }
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Intraday F&O Technical Calls",
      description: "Calls in Index and Stocks.",
      gradient: "from-violet-500 to-purple-500",
      fees: [
        { period: "Month", original: "₹3,000", final: "₹2,499", promo: "Promo:  TRADEBOX" },
        { period: "Quarter", original: "₹9,000", final: "₹6,999", promo: "Promo:  TRADEBOX" },
        { period: "Annual", original: "₹36,000", final: "₹24,999", promo: "Promo:  TRADEBOX" }
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Short Term Stock Calls",
      description: "7–10 trading days. 2–3 calls per week based on purely technicals. Mix of stocks and index.",
      gradient: "from-amber-500 to-orange-500",
      singlePrice: "₹1,499",
      periodLabel: "per month"
    }
  ];

  const combinedPlan = {
    title: "All 3 Combined",
    subtitle: "Techno Funda + Intraday Cash + Intraday F&O",
    fees: [
      { period: "Monthly", original: "₹9,000", final: "₹6,999", promo: "Promo:  TRADEBOX" },
      { period: "Quarterly", original: "₹27,000", final: "₹18,999", promo: "Promo:  TRADEBOX" },
      { period: "Annual", original: "₹1,08,000", final: "₹69,999", promo: "Promo:  TRADEBOX" }
    ]
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6">
              
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              marketgAInz
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The advisory vertical of India Equity Network, built for individuals who seek structured market insights.
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-semibold text-white">Our Philosophy</h2>
            </div>
            
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              We believe markets reward clarity, discipline, and process — but not impulsive decisions. 
              Our approach is rooted in structured analysis, risk awareness, and responsible market thinking.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Markets move through cycles of optimism, fear, expansion, correction. 
              Our role is to help you navigate these cycles with greater understanding and steadiness.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {["Clarity", "Discipline", "Process", "Risk Awareness"].map((item, index) => (
                <span key={index} className="px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advisory Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Choose the plan that aligns with your trading style
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto italic">
              At India Equity Network, our effort is directed toward identifying and presenting well-researched, fundamentally strong companies that meet defined quality parameters and risk considerations.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`bg-gradient-to-r ${plan.gradient} p-6 text-white`}>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-white/90 text-sm">{plan.description}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  {plan.singlePrice ? (
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="text-2xl font-bold text-gray-900">{plan.singlePrice}</div>
                      <div className="text-gray-500 text-sm">{plan.periodLabel}</div>
                    </div>
                  ) : (
                    <div className="space-y-3 mt-auto">
                      {plan.fees.map((fee, idx) => (
                        <div key={idx} className="flex flex-col gap-0.5 p-3 bg-gray-50 rounded-lg">
                          <div className="flex justify-between items-baseline">
                            <span className="text-gray-600 text-sm font-medium">{fee.period}</span>
                            <span className="text-lg font-bold text-gray-900">{fee.final}</span>
                          </div>
                          {fee.original && (
                            <span className="text-gray-400 text-xs line-through">{fee.original}</span>
                          )}
                          {fee.promo && (
                            <span className="text-emerald-600 text-xs font-medium">{fee.promo}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* All 3 Combined */}
          <div className="mt-10 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-3xl p-8 border-2 border-emerald-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Combine className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">All 3 Combined</h3>
                <p className="text-gray-700">Techno Funda + Intraday Cash Technical + Intraday F&O Technical</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {combinedPlan.fees.map((fee, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-emerald-100">
                  <div className="text-gray-600 font-medium mb-1">{fee.period}</div>
                  <div className="text-2xl font-bold text-emerald-700">{fee.final}</div>
                  <div className="text-gray-400 text-sm line-through">{fee.original}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-amber-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Important Note</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                The research information and opinions provided are based on publicly available information, 
                internal analysis and other sources believed to be reliable. However, no representation or 
                warranty, express or implied, is made as to the accuracy or completeness of such information.
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="font-medium text-amber-800">
                  Past performance is not indicative of future results. No assurance or guarantee of returns is provided.
                </p>
              </div>
              
              <p>
                Participation in markets involves risk, and users should act based on their own understanding and suitability.
              </p>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <AlertTriangle className="w-4 h-4" />
              <span>Please read all disclosure documents carefully before subscribing</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the strategy that matches your investment approach
          </p>
          
          <button
            onClick={() => router.push('/important/trainings')}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-lg"> Subscribe Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          
          <p className="text-gray-500 text-sm mt-4">
            For detailed terms and conditions, please refer to our disclosure documents
          </p>
        </div>
      </section>
    </main>
  )
}

export default MarketgainzPage