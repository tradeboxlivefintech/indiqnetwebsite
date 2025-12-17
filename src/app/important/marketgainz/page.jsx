'use client'
import React from 'react'
import { useRouter } from "next/navigation"
import { ArrowRight,ArrowDown, Shield, BookOpen, Users, Target, BarChart3, Brain, TrendingUp, ChevronRight, Award, FileText, Scale, AlertTriangle, ClipboardCheck, Layers, Filter, PieChart, LineChart, Database, Lock, Eye, Download, CheckCircle, FileSearch, Target as TargetIcon, Zap, ShieldCheck } from 'lucide-react'

const MarketgainzPage = () => {
  const router = useRouter();

  const researchApproach = [
    { icon: <Layers className="w-6 h-6" />, title: "Framework-based analysis", desc: "Structured methodologies for consistent evaluation" },
    { icon: <Filter className="w-6 h-6" />, title: "Multi-timeframe validation", desc: "Cross-verification across different time horizons" },
    { icon: <LineChart className="w-6 h-6" />, title: "Technical + Quantitative reasoning", desc: "Data-driven insights combined with technical analysis" },
    { icon: <Database className="w-6 h-6" />, title: "Evidence-driven insights", desc: "Conclusions based on verifiable data and evidence" },
    { icon: <Shield className="w-6 h-6" />, title: "Emphasis on risk management", desc: "Risk assessment integrated into every analysis" },
    { icon: <AlertTriangle className="w-6 h-6" />, title: "No tips, no calls, no speculation", desc: "Educational focus, not speculative recommendations" }
  ];

  const offerings = [
    { icon: <FileSearch className="w-6 h-6" />, title: "Equity research reports", desc: "Comprehensive analysis of equity opportunities" },
    { icon: <Layers className="w-6 h-6" />, title: "Market frameworks", desc: "Structured approaches to market analysis" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Educational research content", desc: "Research-focused educational materials" },
    { icon: <ClipboardCheck className="w-6 h-6" />, title: "Structured documentation", desc: "Systematic recording and presentation of analysis" },
    { icon: <PieChart className="w-6 h-6" />, title: "Research commentary", desc: "Insightful commentary on market developments" }
  ];

  const investorDocuments = [
    { name: "Investor Charter", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Complaint Redressal Mechanism", icon: <Scale className="w-5 h-5" /> },
    { name: "Monthly Complaints Data", icon: <FileText className="w-5 h-5" /> },
    { name: "Research Report Policies", icon: <FileSearch className="w-5 h-5" /> },
    { name: "Code of Conduct", icon: <CheckCircle className="w-5 h-5" /> },
    { name: "Risk Disclosures", icon: <AlertTriangle className="w-5 h-5" /> },
    { name: "Terms & Conditions", icon: <Lock className="w-5 h-5" /> }
  ];

  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
       <div className="relative max-w-7xl mx-auto">
  <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
    {/* Left Content */}
    <div className="text-left">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-500/20 mb-6">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <span className="text-emerald-300 font-medium text-sm">SEBI REGISTERED RA</span>
      </div>
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
        <span className="block">market</span>
        <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          gAInz
        </span>
      </h1>
      
      <p className="text-gray-300 text-xl mb-8 leading-relaxed">
        A division of <span className="text-emerald-300 font-semibold">India Equity Network</span>
      </p>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-bold">SEBI RA</div>
            <div className="text-gray-400 text-sm">Reg. No: ________</div>
          </div>
        </div>
        
        <div className="h-10 w-px bg-gray-700"></div>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-bold">Compliant</div>
            <div className="text-gray-400 text-sm">Framework-based</div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Content - Registration Card */}
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/30 shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">SEBI Registered</h3>
            <p className="text-emerald-300">Research Analyst</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-800/50 rounded-xl">
            <div className="text-gray-400 text-sm mb-1">Registration Number</div>
            <div className="text-white font-mono text-lg">________</div>
          </div>
          
          <div className="p-4 bg-gray-800/50 rounded-xl">
            <div className="text-gray-400 text-sm mb-1">Validity Period</div>
            <div className="text-white font-mono text-lg">________</div>
          </div>
          
          <div className="p-4 bg-amber-900/20 rounded-xl border border-amber-500/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-amber-100 text-sm">
                Registration granted by SEBI does not guarantee performance or returns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="relative">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-700/50"></div>
    </div>
    <div className="relative flex justify-center">
      <div className="px-4 bg-gray-900">
        <ArrowDown className="w-8 h-8 text-emerald-400 animate-bounce" />
      </div>
    </div>
  </div>
</div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* WHO WE ARE Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                WHO WE ARE
              </h2>
              <div className="w-16 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-8"></div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-2xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Commitment</h3>
                </div>
                <p className="text-gray-700">
                  Delivering SEBI-compliant, research-driven insights focused on disciplined decision-making.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                marketgAInz delivers SEBI-compliant, research-driven insights focused on disciplined decision-making.
              </p>
              
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-emerald-500 mb-8">
                <p className="text-gray-800 text-xl font-semibold">
                  Our approach is built on transparency, documentation, and risk-first analysis — not predictions or guaranteed outcomes.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                  <Eye className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Transparency First</h4>
                    <p className="text-gray-700">Clear documentation of all research methodologies and assumptions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg">
                  <Shield className="w-5 h-5 text-cyan-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Risk-Aware Approach</h4>
                    <p className="text-gray-700">Every analysis begins with risk assessment and management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OUR RESEARCH APPROACH */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                OUR RESEARCH APPROACH
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A disciplined, framework-driven methodology for market analysis
              </p>
              <div className="w-20 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchApproach.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-emerald-600">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT WE OFFER */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                WHAT WE OFFER
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                All offerings strictly follow SEBI RA Regulations. <span className="text-emerald-600 font-semibold">Nothing here implies returns, tips, or calls.</span>
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-3xl p-8 border border-emerald-100">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {offerings.map((item, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 italic">
                  Exact categories will depend on your RA scope. Nothing here implies returns, tips, or calls.
                </p>
              </div>
            </div>
          </div>

          {/* MANDATORY SEBI DISCLOSURES */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                MANDATORY SEBI DISCLOSURES
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 border border-yellow-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-800">MarketgAInz – SEBI Registered Research Analyst</h3>
                  <p className="text-yellow-700">SEBI Registration No: ________ | Validity: ________</p>
                </div>
              </div>

              <div className="space-y-4 text-yellow-800">
                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p>
                    Registration granted by SEBI, and certification from NISM in no way guarantee performance of the Research Analyst.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p>
                    Investing is subject to market risks. Past performance does not indicate future results.
                  </p>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p>
                    We do not provide stock tips, calls, or guaranteed returns. All research is educational and framework-based.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* INVESTOR DOCUMENTS */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                INVESTOR DOCUMENTS
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Important regulatory documents for your reference
              </p>
              <div className="w-20 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {investorDocuments.map((doc, index) => (
                  <button
                    key={index}
                    className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 rounded-xl border border-gray-200 hover:border-emerald-300 transition-all duration-300 text-left"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-emerald-500 group-hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300">
                      <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                        {doc.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {doc.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-500 text-sm">View Document</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-3xl p-8 border border-emerald-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Access Regulated Research?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Connect with our SEBI Registered Research Analyst team for compliant, framework-based market insights.
              </p>
              
              <button 
                onClick={() => router.push('/contact')}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg">Contact Our Research Team</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <p className="text-gray-500 text-sm mt-4">
                All interactions are governed by SEBI RA Regulations and our Code of Conduct.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MarketgainzPage;