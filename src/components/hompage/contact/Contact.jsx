'use client'
import React from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Building,
  Clock
} from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-emerald-400">India Equity Network</span>
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            {/* Company Header */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">India Equity Network</h2>
                <p className="text-gray-600 text-lg">Indeqnet Private Limited</p>
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              
              {/* Phone Information */}
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Phone</h3>
                  <p className="text-gray-800 text-xl font-semibold mb-1">+91 XXXXX XXXXX</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <p className="text-gray-600 text-sm">Monday to Friday, 9 AM to 6 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Email Information */}
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Email</h3>
                  <p className="text-gray-800 text-xl font-semibold mb-1">support@indeqnet.com</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <p className="text-gray-600 text-sm">Response within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registered Office */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Registered Office</h3>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p className="text-gray-800 text-lg">201, RADHAKRISHNA, RADHA RESIDENCY,SIDDHARTH NAGER, BORIVALI - EAST,</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p className="text-gray-800 text-lg">MUMBAI, MAHARASHTRA - 400066</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p className="text-gray-800 text-lg">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Banner */}
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center justify-center gap-4">
                <Clock className="w-6 h-6 text-emerald-600" />
                <div className="text-center">
                  <p className="text-gray-800 font-semibold text-lg">Response Time</p>
                  <p className="text-gray-600">We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All communications are handled with strict confidentiality and in accordance with our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;