'use client'
import React from 'react'
import {
  Shield,
  Mail,
  Clock,
  AlertCircle,
  FileText,
  CheckCircle,
  Users,
  ExternalLink
} from "lucide-react";

const GrievanceOfficerPolicy = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Grievance Officer & Redressal Policy
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to effective resolution of complaints and user satisfaction
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
            
            {/* Policy Summary Card */}
            <div className="mb-10 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-200">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Key Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Response Time</p>
                        <p className="text-gray-600 text-sm">Within 48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Escalation</p>
                        <p className="text-gray-600 text-sm">To Grievance Officer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Resolution</p>
                        <p className="text-gray-600 text-sm">Within 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1: Background */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. BACKGROUND</h2>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3"></div>
                    <div>
                      <p className="text-gray-800 text-lg font-medium">Definitions</p>
                      <p className="text-gray-600 mt-1">
                        <span className="font-semibold text-gray-800">"Company", "we," "us," and "our"</span> refer to Indeqnet Private Limited.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3"></div>
                    <div>
                      <p className="text-gray-800 text-lg font-medium">Service Reference</p>
                      <p className="text-gray-600 mt-1">
                        <span className="font-semibold text-gray-800">"Service"</span> refers to the Company's services as mentioned in the{' '}
                        <a 
                          href="https://www.indiaequitynetwork.com/terms-of-use"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Terms of Use <ExternalLink className="w-4 h-4" />
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3"></div>
                    <div>
                      <p className="text-gray-800 text-lg font-medium">User Definition</p>
                      <p className="text-gray-600 mt-1">
                        <span className="font-semibold text-gray-800">"You"</span> refers to you, as a user (or subscriber) of our Site or our Service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Objectives */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. OBJECTIVES OF THE POLICY</h2>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">2.1</span>
                    </div>
                    <p className="text-gray-800 text-lg">
                      The Company understands and appreciates the importance of an effective and expeditious resolution of complaints raised by the Users/Subscribers using its Service.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">2.2</span>
                    </div>
                    <p className="text-gray-800 text-lg">
                      User satisfaction is key to the Company and it is therefore essential that the Users have an avenue for communicating with the Company and the Company should put in place internal processes to receive and address all concerns of Users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Process to Avail Support */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. PROCESS TO AVAIL SUPPORT</h2>
              </div>
              
              <div className="space-y-8">
                {/* Email Support Card */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                      <p className="text-gray-800 text-lg mb-4">
                        Users can write to us at{' '}
                        <a 
                          href="mailto:support@indiaequitynetwork.com"
                          className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                        >
                          support@indiaequitynetwork.com
                        </a>{' '}
                        for complaints related to the Service.
                      </p>
                      <div className="bg-white/70 rounded-lg p-4 border border-blue-100">
                        <p className="text-gray-600">
                          <span className="font-semibold text-gray-800">Note:</span> Any complaint through email shall be acknowledged promptly after receipt and a complaint registration number (also known as "ticket id") shall be issued.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Conditions */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Conditions for Addressing Complaints</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <p className="text-gray-800">All complaints received by email shall be sent from the registered email id of the User, as available on the Company's records.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <p className="text-gray-800">The User should mention his/her full name and registered mobile number in the complaint.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <p className="text-gray-800">The complaint shall indicate what the complaint is in relation to any specific aspect on the service platform.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <p className="text-gray-800">Any anonymous complaints shall not be entertained.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Grievance Redressal */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. GRIEVANCE REDRESSAL</h2>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Escalation Process</h3>
                    <p className="text-gray-800 text-lg">
                      If the User is not satisfied with the resolution received from above channels, or if the User does not hear from us in two weeks, the User can escalate/write to the Grievance Officer.
                    </p>
                  </div>

                  {/* Grievance Officer Contact Card */}
                  <div className="bg-white rounded-xl p-6 border border-gray-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                          <User className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Mr. Ram Iyer</h4>
                        <p className="text-gray-700 text-lg mb-4">Grievance Officer</p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <a 
                              href="mailto:indequitynetwork@gmail.com"
                              className="text-gray-800 hover:text-emerald-600 font-medium hover:underline"
                            >
                              indequitynetwork@gmail.com
                            </a>
                          </div>
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                            <div>
                              <p className="text-gray-800">Indeqnet Private Limited</p>
                              <p className="text-gray-600">201, Radhakrishna, Radha Residency</p>
                              <p className="text-gray-600">Siddharth Nagar, Borivali - East</p>
                              <p className="text-gray-600">Mumbai - 400066, Maharashtra, India</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">Important:</span> Users are required to quote the complaint number (also known as "ticket id") provided to them in their earlier communication.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resolution Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-8 h-8 text-emerald-600" />
                        <h5 className="text-lg font-bold text-gray-900">Resolution Timeline</h5>
                      </div>
                      <p className="text-gray-700">
                        The Grievance Officer shall promptly and no later than <span className="font-semibold text-gray-900">30 days</span> from the date of receipt of the grievance, take necessary steps to resolve the grievance.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="w-8 h-8 text-emerald-600" />
                        <h5 className="text-lg font-bold text-gray-900">Closure Policy</h5>
                      </div>
                      <p className="text-gray-700">
                        If no further communication is received from the User within <span className="font-semibold text-gray-900">10 days</span> upon receiving our response, the grievance shall be treated as satisfied & closed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Compliance Reporting */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <BarChart className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. GRIEVANCE COMPLIANCE REPORTING</h2>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 text-lg">
                      A consolidated summary of all the grievances, pending and closed, will be submitted to the Board of Directors of the Company every quarter, by the Grievance Officer, for compliance purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Footer */}
           

          </div>
        </div>
      </section>
    </main>
  );
};

// Add missing icon components
const Target = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const BarChart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const User = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default GrievanceOfficerPolicy;