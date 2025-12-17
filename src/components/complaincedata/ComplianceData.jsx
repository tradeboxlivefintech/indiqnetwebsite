'use client'
import React from 'react'
import { Shield, FileText, Scale, Users, AlertTriangle, Phone, Mail, MapPin, Building, CheckCircle, FileCheck, BookOpen, XCircle, Info, Download, Eye, Lock, Award, Target, Zap, ChevronRight } from 'lucide-react'

const CompliancePage = () => {
  const investorDocuments = [
    { 
      name: "Investor Charter", 
      icon: <FileText className="w-6 h-6" />,
      description: "Your rights and our responsibilities"
    },
    { 
      name: "Complaints Redressal", 
      icon: <Scale className="w-6 h-6" />,
      description: "Process for addressing grievances"
    },
    { 
      name: "Monthly Complaints Report", 
      icon: <FileCheck className="w-6 h-6" />,
      description: "Transparent reporting of complaints"
    },
    { 
      name: "Code of Conduct", 
      icon: <Users className="w-6 h-6" />,
      description: "Ethical standards and guidelines"
    },
    { 
      name: "Risk Disclosure Document", 
      icon: <AlertTriangle className="w-6 h-6" />,
      description: "Comprehensive risk disclosures"
    },
    { 
      name: "Past Performance Disclosure", 
      icon: <Target className="w-6 h-6" />,
      description: "Historical performance data"
    },
    { 
      name: "Research Report Policy", 
      icon: <FileText className="w-6 h-6" />,
      description: "Methodology and standards"
    },
    { 
      name: "Terms & Conditions", 
      icon: <Lock className="w-6 h-6" />,
      description: "Legal terms of engagement"
    }
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30 mb-8">
              <Shield className="w-7 h-7 text-emerald-300" />
              <span className="text-emerald-300 font-semibold text-xl">REGULATORY COMPLIANCE CENTER</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Compliance & Disclosures
              </span>
            </h1>
            
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Complete transparency and regulatory adherence across all divisions
            </p>
            
            <div className="w-24 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mx-auto rounded-full mt-8"></div>
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-emerald-900/40 backdrop-blur-sm rounded-xl p-5 border border-emerald-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">SEBI</div>
                <div className="text-emerald-300 text-sm">Registered RA</div>
              </div>
            </div>
            
            <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-5 border border-blue-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-300 text-sm">Compliance</div>
              </div>
            </div>
            
            <div className="bg-cyan-900/40 backdrop-blur-sm rounded-xl p-5 border border-cyan-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-cyan-300 text-sm">Investor Documents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Company Information Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">India Equity Network</h2>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <p className="text-lg"><strong>Indeqnet Private Limited</strong></p>
                  <p>CIN: ________</p>
                  <p>Registered Address: ____________________________</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-6 border border-emerald-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact for Compliance</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-800">support@indeqnet.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-800">+91 ____________</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A. MARKETGAINZ – SEBI REGISTERED RA */}
          <div className="mb-16">
            <div className="relative mb-10">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
              </div>
              <div className="ml-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  MARKETGAINZ – SEBI REGISTERED RA
                </h2>
                <p className="text-gray-600 text-lg">Research Analyst Division</p>
                <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mt-4"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Registration Details */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Registration Details</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <div className="text-gray-600 text-sm mb-1">SEBI Registration No</div>
                          <div className="text-gray-900 font-mono text-lg font-bold">_______</div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <div className="text-gray-600 text-sm mb-1">Validity Period</div>
                          <div className="text-gray-900 font-mono text-lg font-bold">_______</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
                        <div className="flex items-start gap-3 mb-4">
                          <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5" />
                          <h4 className="text-lg font-bold text-yellow-800">Mandatory Disclosure</h4>
                        </div>
                        <p className="text-yellow-800 text-sm leading-relaxed">
                          Registration granted by SEBI, and certification from NISM does not guarantee performance of the Research Analyst.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">Key Compliance Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                    <span>SEBI Registered RA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                    <span>No Guaranteed Returns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                    <span>Market Risks Apply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                    <span>Educational Research Only</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Investor Documents */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Investor Documents
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {investorDocuments.map((doc, index) => (
                  <button
                    key={index}
                    className="group bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 text-left"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg flex items-center justify-center">
                        <div className="text-emerald-600">
                          {doc.icon}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{doc.name}</h4>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* B. ISSMA – EDUCATION DIVISION */}
          <div className="mb-16">
            <div className="relative mb-10">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">B</span>
                </div>
              </div>
              <div className="ml-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  ISSMA – EDUCATION DIVISION
                </h2>
                <p className="text-gray-600 text-lg">Integrated School of Stock Markets & Analytics</p>
                <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Platform</h3>
                    <p className="text-gray-700 text-lg">
                      ISSMA is purely an education platform.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-red-800 mb-2">Important Notice</h4>
                      <p className="text-red-700">
                        ISSMA does NOT provide stock recommendations, tips, or advisory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What ISSMA Provides</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-800">Market skill development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-800">Financial literacy education</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-800">Structured learning programs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-800">Practical market understanding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* C. GENERAL DISCLAIMER */}
          <div className="mb-16">
            <div className="relative mb-10">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">C</span>
                </div>
              </div>
              <div className="ml-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  GENERAL DISCLAIMER
                </h2>
                <p className="text-gray-600 text-lg">Important Risk Disclosures</p>
                <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mt-4"></div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-10 border-2 border-amber-200 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-800 mb-2">Market Risk Warning</h3>
                        <p className="text-amber-700 text-lg font-medium">
                          All investments carry market risk.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-800 mb-2">Performance Disclaimer</h3>
                        <p className="text-amber-700 text-lg font-medium">
                          Past performance does not indicate future performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-800 mb-2">No Guarantees</h3>
                        <p className="text-amber-700 text-lg font-medium">
                          No guaranteed returns.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Info className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-800 mb-2">Investor Responsibility</h3>
                        <p className="text-amber-700 text-lg font-medium">
                          Users are advised to perform their own due diligence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-amber-200 text-center">
                  <p className="text-amber-800 text-lg font-bold">
                    IMPORTANT: This information must be read and understood before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary & Contact */}
         
        </div>
      </section>
    </main>
  )
}

export default CompliancePage