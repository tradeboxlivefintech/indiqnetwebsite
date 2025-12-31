'use client'
import React from 'react'
import {
  RefreshCw,
  XCircle,
  Clock,
  AlertCircle,
  FileText,
  CheckCircle,
  Shield,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  Download,
  ExternalLink,
  Ban
} from "lucide-react";

const RefundPolicy = () => {
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
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Refund & Cancellation Policy
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-amber-900/30 px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200">Last Updated: {currentDate}</span>
            </div>
            <div className="flex items-center gap-2 bg-red-900/30 px-4 py-2 rounded-full">
              <AlertCircle className="w-4 h-4 text-red-300" />
              <span className="text-red-200">Important: Most services are non-refundable</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Clear guidelines for refunds, cancellations, and service policies across all India Equity Network verticals
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
            
            {/* Warning Banner */}
            <div className="mb-10 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h3>
                  <p className="text-gray-800">
                    Due to the nature of digital delivery, proprietary content, intellectual property, and service-based execution, 
                    most purchases are <span className="font-bold text-red-600">non-refundable</span> once access is granted or materials are delivered.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: General Principle */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. GENERAL REFUND PRINCIPLE</h2>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-gray-800 text-lg mb-4">
                      Refunds are considered only under defined, limited conditions and are not guaranteed.
                      By purchasing or subscribing to any of our services, you acknowledge that you have read, 
                      understood, and agree to the terms outlined in this policy.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-4 h-4 text-blue-500" />
                          <h4 className="font-bold text-gray-900">Applies To</h4>
                        </div>
                        <p className="text-gray-600 text-sm">All services, courses, subscriptions, and registrations</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                         
                          <h4 className="font-bold text-gray-900">Refund Basis</h4>
                        </div>
                        <p className="text-gray-600 text-sm">Defined conditions only, not guaranteed</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <h4 className="font-bold text-gray-900">Acknowledgment</h4>
                        </div>
                        <p className="text-gray-600 text-sm">Purchase indicates acceptance of terms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Non-Refundable Items */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Ban className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. NON-REFUNDABLE PRODUCTS & SERVICES</h2>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Strictly Non-Refundable
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Digital courses, masterclasses, cohorts, and live training",
                        "Recording access, e-learning content, LMS logins",
                        "Advisory & research output from MarketGAInz",
                        "Community/group access (WhatsApp/Telegram/Discord)",
                        "Memberships, program subscriptions, toolkits",
                        "Software, ebooks, templates, license-based materials",
                        "Missed classes, no-shows, non-attendance"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                      Not Grounds for Refund
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Perceived learning value",
                        "Changes in personal schedule",
                        "Lack of time to use the product",
                        "Market movement contrary to expectation",
                        "Losses in trading or investing",
                        "Request after partial/full utilisation",
                        "Market opinions in educational material"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Eligible Cases */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. ELIGIBLE REFUND CASES</h2>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Eligible Cases */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Eligible Scenarios</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-green-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">A</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">Duplicate Payment</h4>
                        </div>
                        <p className="text-gray-600">Same transaction charged more than once</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border border-green-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">B</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">Access Not Provided</h4>
                        </div>
                        <p className="text-gray-600">Paid access not granted due to our error</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border border-green-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">C</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">Event Cancellation</h4>
                        </div>
                        <p className="text-gray-600">Event cancelled by IndeqNet</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Documentation */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Documentation Requirements</h3>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-amber-600" />
                          <span className="text-gray-800">Valid proof of payment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-amber-600" />
                          <span className="text-gray-800">Written explanation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-600" />
                          <span className="text-gray-800">Time-stamped evidence</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Event Cancellation Options</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">Full refund, OR</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">Transfer ticket to another date</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">4. TIME LIMIT</h3>
                </div>
                <p className="text-gray-700">
                  All refund requests must be initiated within <span className="font-bold">72 hours (3 working days)</span> of purchase.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">5. PROCESSING TIME</h3>
                </div>
                <p className="text-gray-700">
                  Approved refunds processed in <span className="font-bold">45 working days</span> to original payment source.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">CHARGES</h3>
                </div>
                <p className="text-gray-700">
                  Payment gateway charges, bank fees, and administrative charges are <span className="font-bold">non-refundable</span>.
                </p>
              </div>
            </div>

            {/* Section 6-8 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">6. SUBSCRIPTION CANCELLATION</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Cancel renewal anytime to avoid future charges</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">No pro-rated refunds for partial periods</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Processed billing cycles are non-refundable</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">7. TRANSFER POLICY</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Event tickets transferable 7+ days prior</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Course deferral possible to later batch</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Replacement options at our discretion</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">8. THIRD-PARTY PURCHASES</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Affiliate/influencer purchases</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">Third-party platform purchases</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-sm font-semibold">Contact seller directly for refunds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fraud Prevention */}
            <div className="mb-10">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">9. FRAUD PREVENTION & MISUSE</h3>
                    <p className="text-gray-300 text-sm">We reserve the right to deny refunds for misuse</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Misuse for free content consumption",
                    "Download materials then request refund",
                    "Share login access or intellectual property",
                    "Initiate chargeback fraud or false claims",
                    "Engage with unauthorized resellers"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <p className="text-red-300 text-sm">
                    <span className="font-semibold">Note:</span> Such behaviour may result in legal action and permanent platform ban.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Request Process */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">12. REFUND REQUEST PROCESS</h2>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-indigo-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <a 
                            href="mailto:support@indeqnet.com"
                            className="text-gray-700 hover:text-indigo-600 hover:underline"
                          >
                            support@indeqnet.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-indigo-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <a 
                            href="tel:+918828320113"
                            className="text-gray-700 hover:text-indigo-600 hover:underline"
                          >
                            +91 88283 20113
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-white rounded-lg border border-indigo-100">
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">Subject Line Format:</span>
                      </p>
                      <code className="block mt-2 text-sm bg-gray-800 text-gray-100 p-2 rounded">
                        REFUND REQUEST – [Full Name] – [Service Purchased] – [Date]
                      </code>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Required Information</h3>
                    <div className="space-y-3">
                      {[
                        "Full name",
                        "Mobile number",
                        "Transaction ID & date",
                        "Proof of payment",
                        "Reason for request with evidence"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">{index + 1}</span>
                          </div>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-amber-800 text-sm">
                        <span className="font-semibold">Important:</span> Incomplete requests may be rejected without processing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Contact Information */}
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">15. CONTACT INFORMATION</h3>
                
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
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 mb-2">Registered Office</p>
                      <p className="text-gray-700 text-center text-sm">
                        201, Radhakrishna, Radha Residency, Siddharth Nagar,
                        Borivali East, Mumbai – 400066, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Final Acknowledgment</h4>
                  <p className="text-gray-700 mb-4">
                    By completing a purchase, the user acknowledges that they have read this policy in full, 
                    understand the refund limitations, agree that refunds are discretionary, and will not 
                    initiate chargebacks without first contacting support.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href="mailto:support@indeqnet.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                      Submit Refund Request
                    </a>
                    <a 
                      href="tel:+918828320113"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      Call for Queries
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

export default RefundPolicy;