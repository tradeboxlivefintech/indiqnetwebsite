'use client'
import React from 'react'
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  FileText,
  Lock,
  Users,
  Eye,
  Cookie,
  ExternalLink,
  Calendar,
  BookOpen,
  Target,
  Bell,
  CheckCircle
} from "lucide-react";

const PrivacyPolicy = () => {
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
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Privacy Policy
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200">Last Updated: {currentDate}</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-900/30 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-200">SEBI Compliant</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy and trust are fundamental to our operations at Indeqnet and its verticals
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
            
            {/* Introduction Card */}
            <div className="mb-10 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Privacy Matters</h2>
                  <p className="text-gray-700">
                    This Privacy Policy explains how Indeqnet, operating under the brand India Equity Network and its verticals — MarketgAInz (Advisory Desk), India Elite Summit (Events & Community), and ISSMA – Integrated School of Stock Markets Analytics (Training & Academy) — collects, uses, stores, discloses and protects your personal information.
                  </p>
                  <div className="mt-4 p-4 bg-white/70 rounded-lg border border-blue-100">
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold text-gray-800">Important:</span> By accessing our platforms, enrolling in our programs, purchasing services, or submitting information, you acknowledge that you have read and understood this Privacy Policy and consent to the use of your information as described herein.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1: Our Identity */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. OUR IDENTITY AND LEGAL STATUS</h2>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-800 text-lg mb-4">
                      This Privacy Policy governs all websites and services owned and operated by Indeqnet, the registered legal entity of India Equity Network. Throughout this document, terms such as "we", "our", and "us" refer to Indeqnet and its operational verticals.
                    </p>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-emerald-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                        <h4 className="font-bold text-gray-900">MarketGAInz</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Research and advisory (strictly non-solicitation, no guaranteed returns)</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-emerald-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        <h4 className="font-bold text-gray-900">India Elite Summit</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Event access, networking and community interactions</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-emerald-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <h4 className="font-bold text-gray-900">ISSMA Academy</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Educational programs, cohorts and certifications</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mt-4">
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">Important Note:</span> All services are provided for personal use, knowledge enhancement and lawful market participation. Nothing provided constitutes investment advice or solicitation, in line with SEBI advertising and communication rules.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Information We Collect */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. INFORMATION WE COLLECT</h2>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-800 text-lg mb-6">
                  To facilitate access, ensure compliance, improve user experience and fulfil contractual obligations, we may collect the following information:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Basic Profile Information</p>
                        <p className="text-gray-600">Name, mobile number, email address, city, and occupation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Billing Information</p>
                        <p className="text-gray-600">Payment confirmations, invoices, course/event enrolment history</p>
                        <div className="mt-2 p-3 bg-white/70 rounded border border-blue-100">
                          <p className="text-gray-600 text-sm">
                            <span className="font-semibold text-gray-800">Note:</span> We do not store card numbers or sensitive payment credentials; payments are routed through secure gateways.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Technical Data</p>
                        <p className="text-gray-600">IP address, browser type, device identifiers, location data, session duration</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Communication Records</p>
                        <p className="text-gray-600">Email correspondences, WhatsApp/Telegram interactions, support tickets</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Learning History</p>
                        <p className="text-gray-600">Course progress, webinar attendance, resource downloads, content engagement</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-amber-800">
                    <span className="font-semibold">Important:</span> You may decline to provide information; however, doing so may limit our ability to deliver services or fulfill contractual obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Lawful Use */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. LAWFUL USE OF YOUR INFORMATION</h2>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Verification of identity, creation of user profiles and secure login access",
                    "Delivery of subscribed education, event privileges, cohort access and advisory content",
                    "Communication regarding program updates, transaction confirmations, operational notices",
                    "Research-based service improvements, platform enhancements and security optimization",
                    "Compliance with tax records, regulatory audits, fraud-prevention",
                    "Sending curated educational newsletters, announcements, academic material"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Important Commitment:</span> We do not engage in manipulative digital practices, unauthorized data resale, or targeted financial solicitation prohibited under SEBI advertisement rules.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: SEBI Alignment */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. SEBI-ALIGNED COMMUNICATION & NON-SOLICITATION STATEMENT</h2>
              </div>
              
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Commitment</h3>
                  <p className="text-gray-700">
                    All communications from Indeqnet and its verticals are intended for informational, educational and research purposes only.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-800">MarketGAInz may share analytical viewpoints but does not guarantee outcomes or offer return commitments</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-800">We do not cold call with stock tips, personalized buy/sell instructions or profit promises</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-800">Any paid or free content must be interpreted as learning support, not investment direction</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-red-300">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">User Responsibility:</span> Users are responsible for their personal financial decisions and should consult SEBI-registered experts before acting on market information, wherever required.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">5. COOKIES & ANALYTICS</h3>
                </div>
                <p className="text-gray-700">We use cookies for personalized experience and security. You may disable them through browser settings.</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">6. DATA SECURITY</h3>
                </div>
                <p className="text-gray-700">Encrypted databases, role-based access, and industry-standard protocols protect your information.</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">7. SHARING POLICY</h3>
                </div>
                <p className="text-gray-700">We do not sell or rent your personal information. Limited sharing only for authorized service delivery.</p>
              </div>
            </div>

            {/* Your Rights Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. YOUR RIGHTS & DATA CONTROL OPTIONS</h2>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Access & Review</p>
                        <p className="text-gray-600 text-sm">Request access to your personal data</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Correction</p>
                        <p className="text-gray-600 text-sm">Update or correct inaccurate information</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Deletion</p>
                        <p className="text-gray-600 text-sm">Request deletion of your personal data</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center">
                        <Bell className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Opt-Out</p>
                        <p className="text-gray-600 text-sm">Withdraw consent for marketing communications</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-indigo-300">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Contact for Rights:</span> For any request, write to:{' '}
                    <a 
                      href="mailto:support@indeqnet.com"
                      className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline"
                    >
                      support@indeqnet.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">13. CONTACT INFORMATION</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a 
                          href="mailto:support@indeqnet.com"
                          className="text-gray-700 hover:text-blue-600 hover:underline"
                        >
                          support@indeqnet.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <a 
                          href="tel:+918828320113"
                          className="text-gray-700 hover:text-green-600 hover:underline"
                        >
                          +91 88283 20113
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Registered Office</p>
                        <p className="text-gray-700">201, RADHAKRISHNA, RADHA RESIDENCY</p>
                        <p className="text-gray-700">SIDDHARTH NAGAR, BORIVALI - EAST</p>
                        <p className="text-gray-700">MUMBAI, MAHARASHTRA - 400066 India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300">
                  <div className="text-center">
                    <p className="text-gray-700">
                      For questions, corrections, withdrawals or data concerns, please contact us through any of the above channels.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 justify-center">
                      <a 
                        href="mailto:support@indeqnet.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <Mail className="w-5 h-5" />
                        Email Support
                      </a>
                      <a 
                        href="tel:+918828320113"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <Phone className="w-5 h-5" />
                        Call Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Notice */}
            <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-300">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Updates</h3>
                <p className="text-gray-700 mb-4">
                  We may revise this Privacy Policy periodically to reflect legal, technological or operational changes. Updated versions will be posted on this page with the revised "Last Updated" date.
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <p>Continued use of the platform constitutes acknowledgment and acceptance of revisions</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;