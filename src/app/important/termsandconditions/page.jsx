'use client'
import React from 'react'
import {
  FileText,
  Shield,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  User,
  Lock,
  DollarSign,
  RefreshCw,
  Target,
  Users,
  ExternalLink,
  BookOpen,
  Calendar,
  CheckCircle,
  Scale
} from "lucide-react";

const TermsAndConditions = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Terms & Conditions
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-indigo-900/30 px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4 text-indigo-300" />
              <span className="text-indigo-200">Last Updated: {currentDate}</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-900/30 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-200">SEBI Compliant Operations</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Legal terms governing your access to India Equity Network platforms and services
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-400 to-emerald-400 mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
            
            {/* Important Notice */}
            <div className="mb-10 p-6 bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-xl border border-indigo-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Important Legal Notice</h3>
                  <p className="text-gray-800 mb-3">
                    These Terms & Conditions ("Terms") govern your access to and use of all services operated by IndeqNet under India Equity Network.
                  </p>
                  <div className="p-4 bg-white/70 rounded-lg border border-indigo-100">
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">Electronic Record:</span> This document is an electronic record under the Information Technology Act, 2000 and does not require signatures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1: Legal Identity */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. LEGAL IDENTITY</h2>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-800 text-lg">
                      "IndeqNet", "India Equity Network", "MarketGAInz", "India Elite Summit", and "ISSMA" are used for branding clarity; however, the legal contracting entity is:
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">IndeqNet</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                            <div>
                              <p className="text-gray-800">201, Radhakrishna, Radha Residency</p>
                              <p className="text-gray-800">Siddharth Nagar, Borivali East</p>
                              <p className="text-gray-800">Mumbai – 400066, Maharashtra, India</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-amber-800">
                      <span className="font-semibold">Important:</span> No marketing reference shall be interpreted as implying SEBI registration or license beyond what is stated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 & 3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">2. ELIGIBILITY</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">Must be 18+ years with legal capacity to contract</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">13–18 years: Educational access only under supervision</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">"Incompetent to contract" persons cannot use paid services</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">3. SEBI COMPLIANCE</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">All services are for education & research only</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">No personalized investment advice</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">Consult SEBI-registered professionals for decisions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 & 5 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">4. ACCOUNT REGISTRATION</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">You are responsible for account security and activity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">False information may lead to immediate suspension</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Misconduct in communities may result in termination</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">5. PAYMENTS & BILLING</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Fees must be paid in advance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">We do not store payment details</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Prices may change without notice</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 & 7 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">6. REFUND POLICY</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">Generally non-refundable for digital products</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">Considered only for duplicate payments or our errors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">Decisions at sole discretion of IndeqNet</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">7. MARKET RISK DISCLAIMER</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">Financial markets involve substantial risk</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">Past performance ≠ future results</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span className="text-gray-800">All decisions at user's sole discretion</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8: Intellectual Property */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. INTELLECTUAL PROPERTY & CONTENT LICENSE</h2>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Protected IP Includes:</h3>
                    <div className="space-y-3">
                      {[
                        "Research material & strategic frameworks",
                        "Training modules & presentations",
                        "Brand assets & proprietary tools",
                        "Models, methods, and educational content"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center">
                            <Shield className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Users May Not:</h3>
                    <div className="space-y-3">
                      {[
                        "Copy, reproduce, or distribute content",
                        "Share login credentials or access",
                        "Commercialize proprietary tools/methods",
                        "Reverse engineer or extract platform data"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center">
                            <Ban className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-indigo-300">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Legal Action:</span> Unauthorized use may result in immediate termination and legal action.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 & 10 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">9. USER OBLIGATIONS</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Do not misrepresent financial expertise",
                    "No buy/sell recommendations in communities",
                    "No funds solicitation or capital pooling",
                    "No defamatory or offensive content",
                    "No reverse engineering or data scraping",
                    "No market manipulation or misleading users"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">10. COMMUNITY CONDUCT</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "No unsolicited promotions or spam",
                    "No abusive or discriminatory behaviour",
                    "No unverified SEBI registration claims",
                    "No cold-calling for financial services",
                    "Moderated spaces - follow guidelines",
                    "Misconduct may lead to removal without refund"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 13: Limitation of Liability */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">13. LIMITATION OF LIABILITY</h2>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-800 text-lg">
                      To the maximum extent permitted by law, IndeqNet shall not be liable for:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900">Financial Losses</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Loss of funds, profits, or revenue</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900">Platform Issues</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Downtime or third-party failures</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900">Algorithmic Issues</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Model-based inaccuracies</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900">User Decisions</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Decisions using educational material</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 text-white">
                    <p className="text-gray-200">
                      <span className="font-semibold">Aggregate Liability:</span> Shall not exceed the total amount paid for the specific service giving rise to the claim.
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      No indirect, punitive, incidental, consequential, or speculative damages shall be recoverable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">14. DISPUTE RESOLUTION & GOVERNING LAW</h2>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Scale className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-800 text-lg">
                      These Terms are governed by the laws of India
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-emerald-100 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Written Negotiation</h4>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-emerald-100 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Mandatory Mediation</h4>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-emerald-100 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Arbitration</h4>
                      <p className="text-gray-600 text-xs">Seated in Mumbai, in English</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-emerald-100 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">Final & Binding</h4>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-emerald-300">
                    <p className="text-gray-700 text-center">
                      <span className="font-semibold text-gray-900">Jurisdiction:</span> Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Contact Information */}
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">17. CONTACT INFORMATION</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 mb-2">Email</p>
                      <a 
                        href="mailto:support@indeqnet.com"
                        className="text-blue-600 hover:text-blue-700 hover:underline text-lg"
                      >
                        support@indeqnet.com
                      </a>
                      <p className="text-gray-600 text-sm mt-2">For all queries and legal concerns</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 mb-2">Phone</p>
                      <a 
                        href="tel:+918828320113"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline text-lg"
                      >
                        +91 88283 20113
                      </a>
                      <p className="text-gray-600 text-sm mt-2">Monday to Friday, 9 AM to 6 PM IST</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 mb-2">Registered Office</p>
                      <p className="text-gray-700 text-center text-sm">
                        201, Radhakrishna, Radha Residency
                        <br />
                        Siddharth Nagar, Borivali East
                        <br />
                        Mumbai – 400066, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                    <h4 className="text-lg font-bold text-gray-900">Agreement Acknowledgement</h4>
                  </div>
                  <p className="text-gray-700 mb-6">
                    By accessing or using our platforms, you agree to be bound by these Terms & Conditions. 
                    If you do not agree, discontinue use immediately.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href="mailto:support@indeqnet.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                      Contact Legal Support
                    </a>
                    <a 
                      href="tel:+918828320113"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      Call for Clarifications
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

// Add missing icon components
const Building = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Ban = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);

export default TermsAndConditions;