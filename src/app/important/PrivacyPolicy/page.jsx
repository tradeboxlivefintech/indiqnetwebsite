'use client'
import React from 'react'
import { FileText, Mail, MapPin, Phone, Lock, AlertTriangle } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
            <Lock className="w-5 h-5" />
            <span className="text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg">
            India Elite Summit — How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate prose-lg">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-10 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-900 text-sm m-0">
                By accessing or using our Platforms, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree, please do not use our Platforms.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Indeqnet Private Limited (hereinafter referred to as &quot;India Elite Summit,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), having its registered office at 201, Radhakrishna, Radha Residency, Siddharth Nagar, Borivali - East, Mumbai – 400066, Maharashtra, India, is committed to protecting the privacy and security of your personal information. This Privacy Policy governs the collection, use, storage, disclosure, and protection of personal information obtained through our website www.indiaelitesummit.com, mobile applications, web applications, and related services (collectively, the &quot;Platforms&quot;) in connection with our capital market events, training programs, and associated activities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using our Platforms, you (the &quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use or access our Platforms. We reserve the right to update or modify this Privacy Policy at any time, and changes will be effective upon posting on our Platforms. Your continued use of the Platforms constitutes acceptance of any revised terms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              This Privacy Policy complies with applicable data protection laws, including but not limited to the Digital Personal Data Protection Act, 2023 (DPDP Act) of India, the General Data Protection Regulation (GDPR) (where applicable), and other relevant regulations. For any questions or concerns regarding this Privacy Policy, please contact our Data Protection Officer at:
            </p>
            <div className="bg-slate-100 rounded-xl p-4 mb-10 border border-slate-200">
              <p className="m-0 flex items-center gap-2 text-gray-700"><Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Email: <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a></p>
              <p className="m-0 mt-2 flex items-center gap-2 text-gray-700"><MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Address: 201, Radhakrishna, Radha Residency, Siddharth Nagar, Borivali - East, Mumbai – 400066, Maharashtra, India</p>
              <p className="m-0 mt-2 flex items-center gap-2 text-gray-700"><Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Phone: <a href="tel:+918828320113" className="text-emerald-700 hover:underline">+91-8828320113</a></p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Definitions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the purposes of this Privacy Policy, the following terms shall have the meanings ascribed to them below:
            </p>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>&quot;We,&quot; &quot;Us,&quot; &quot;Our&quot;:</strong> Refers to Indeqnet Private Limited, trading as India Elite Summit, and its affiliates, successors, and assigns.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>&quot;You,&quot; &quot;Your,&quot; &quot;User&quot;:</strong> Refers to any individual or legal entity accessing or using the Platforms, whether registered or unregistered.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>&quot;Personal Information&quot;:</strong> Refers to any information that identifies or can be used to identify an individual, including but not limited to name, address, email, phone number, and financial details, as further described in Section 2.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>&quot;Sensitive Personal Information&quot;:</strong> Includes financial data, biometric data, or other categories of sensitive information as defined under applicable laws.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>&quot;Third Parties&quot;:</strong> Refers to any individual, company, or entity other than India Elite Summit and the User, including service providers, partners, or advertisers.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">Headings in this Privacy Policy are for organizational purposes only and do not affect the interpretation of its provisions.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information to provide seamless, efficient, and personalized services related to our capital market events, training programs, and associated activities. The types of information we may collect include:
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.1 Personal Information</h3>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start text-gray-500 text-gray-500  gap-2"><span className="text-emerald-600">•</span> <strong>Contact Details:</strong> Name, email address, phone number, mailing address.</li>
              <li className="flex items-start text-gray-500 text-gray-500  gap-2"><span className="text-emerald-600">•</span> <strong>Account Details:</strong> Username, password, and account preferences.</li>
              <li className="flex items-start text-gray-500 text-gray-500  gap-2"><span className="text-emerald-600">•</span> <strong>Professional Information:</strong> Educational qualifications, college name, area of interest, professional references, or employment details.</li>
              <li className="flex items-start text-gray-500 text-gray-500  gap-2"><span className="text-emerald-600">•</span> <strong>Financial Information:</strong> Payment details (e.g., credit/debit card numbers, bank account details, billing address) provided during transactions for event registrations or training programs.</li>
              <li className="flex items-start text-gray-500 text-gray-500  gap-2"><span className="text-emerald-600">•</span> <strong>Event-Related Information:</strong> Details related to event attendance, training program enrollment, or participation preferences.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.2 Non-Personal Information</h3>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start text-gray-500  gap-2"><span className="text-emerald-600">•</span> <strong>Tracking Data:</strong> IP address, device ID, browser type, operating system, and other technical information collected when you interact with our Platforms.</li>
              <li className="flex items-start text-gray-500  gap-2"><span className="text-emerald-600">•</span> <strong>Usage Data:</strong> Pages visited, time spent on the Platforms, search history, features used, and clickstream data.</li>
              <li className="flex items-start text-gray-500  gap-2"><span className="text-emerald-600">•</span> <strong>Cookies and Similar Technologies:</strong> Information collected via cookies, web beacons, and other tracking technologies to enhance user experience and analyze usage patterns (see Section 7 for details).</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.3 Information from Non-Registered Users</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We may collect data from users who are not registered, such as browsing behavior, pages viewed, or interactions with public sections of the Platforms.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.4 Purpose of Collection</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We collect only the information necessary to:</p>
            <ul className="list-none space-y-2 mb-8 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> Provide and improve our services, including event management and training delivery.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> Process transactions and registrations.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> Communicate account, event, or service-related information.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> Personalize user experience through tailored content and offers.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> Conduct analytics to understand user preferences and enhance our Platforms.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> Comply with legal and regulatory obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. How We Collect Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We collect information through the following methods:</p>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Direct Input:</strong> When you voluntarily provide information during account creation, event registration, training enrolment, or contact form submissions.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Automated Technologies:</strong> Through cookies, web beacons, server logs, and analytics tools (e.g., Google Analytics) that track your interactions with our Platforms.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Third Parties:</strong> From service providers, payment gateways, or partners (e.g., event sponsors or exhibitors) when necessary to fulfil your requests or comply with legal requirements.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Public Sources:</strong> From publicly available sources, such as social media profiles, when you interact with our Platforms or events.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">Before collecting Personal Information, we will inform you of the purpose of collection. If the purpose is unclear, you may request clarification by contacting us at <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a>. You are not obligated to provide information until the purpose is adequately explained.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information to provide, improve, and personalize our services. Specific uses include:</p>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Service Delivery:</strong> To facilitate event registrations, training program enrolments, and customer support.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Communication:</strong> To send account updates, event reminders, training materials, or responses to inquiries.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Personalization:</strong> To tailor content, recommendations, and marketing communications based on your interests and usage patterns.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Analytics:</strong> To analyze usage trends, improve Platform functionality, and develop new services.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Marketing:</strong> To send promotional offers, newsletters, or targeted advertisements (subject to your consent, where required). You may opt out of marketing communications at any time via the &quot;unsubscribe&quot; link or by emailing <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a>.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Compliance:</strong> To meet legal, regulatory, or tax obligations, including audits or law enforcement requests.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Security:</strong> To detect and prevent fraud, unauthorized access, or other illegal activities.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">We will only process your Personal Information with your explicit consent or as permitted by law, and we will retain it only for as long as necessary to fulfill the stated purposes.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Disclosure of Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We do not sell, rent, or trade your Personal Information to third parties. However, we may disclose your information in the following circumstances:</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.1 Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We may share your information with trusted third-party service providers (e.g., payment processors, event organizers, or analytics providers) who assist us in operating the Platforms and delivering services. These providers are contractually obligated to protect your information and use it only for the purposes specified by us.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.2 Event Partners</h3>
            <p className="text-gray-700 leading-relaxed mb-4">For events, we may share limited information (e.g., name, company name, email address) with exhibitors, sponsors, or co-organizers to facilitate event logistics or networking opportunities. Such disclosures will be communicated to you in advance, and you may opt out where applicable.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.3 Legal Obligations</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We may disclose your information to comply with legal or regulatory requirements, such as: responding to lawful requests from government authorities or law enforcement; enforcing our rights, including investigations of fraud, intellectual property violations, or other illegal activities; complying with tax, audit, or financial reporting obligations.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.4 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">In the event of a merger, acquisition, or sale of all or part of our assets, your Personal Information may be transferred to the acquiring entity. You will be notified of such transfers and any changes to how your information is handled.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.5 With Your Consent</h3>
            <p className="text-gray-700 leading-relaxed mb-8">We may share your information with third parties if you provide explicit consent, such as for promotional partnerships or third-party services. All disclosures will be made in compliance with applicable data protection laws, and we will notify you via email or Platform notification when required.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. Cookies are small data files stored on your device that help us recognize you and track your interactions.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">6.1 Types of Cookies </h3>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Essential Cookies:</strong> Necessary for the Platforms to function, such as maintaining your session or enabling secure logins.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Functionality Cookies:</strong> Enable personalized features, such as resuming training progress or remembering your preferences.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Analytics Cookies:</strong> Collect anonymous data on how you use our Platforms (e.g., pages visited, time spent) to improve performance and content.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Advertising Cookies:</strong> Deliver targeted advertisements based on your interests and browsing behavior.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">6.2 Third-Party Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We use third-party tools, such as Google Analytics, to analyze user behavior. Google Analytics collects anonymous data (e.g., IP address, pages visited) to generate reports on Platform usage. This data may be stored on Google&apos;s servers in the United States and processed in accordance with Google&apos;s Privacy Policy. By using our Platforms, you consent to this processing.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">6.3 Managing Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-8">You can accept or decline cookies by modifying your browser settings. However, disabling cookies may limit your ability to use certain features of the Platforms. For more information, refer to our Cookie Policy (available on the Website) or contact us at <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a>.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">As a User, you have the following rights regarding your Personal Information, subject to applicable laws:</p>
            <ul className="list-none space-y-2 mb-4 pl-0">text-gray-500 
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Right to Access:</strong> Request a copy of the Personal Information we hold about you.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Right to Deletion:</strong> Request deletion of your Personal Information, subject to our legal obligations.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Right to Restrict Processing:</strong> Request that we limit the processing of your information in certain circumstances.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Right to Data Portability:</strong> Request a transferable copy of your Personal Information in a structured, commonly used format.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Right to Object:</strong> Object to the processing of your information for marketing or other purposes.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Right to Withdraw Consent:</strong> Withdraw your consent to data processing at any time, without affecting the lawfulness of prior processing.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Right to Lodge a Complaint:</strong> File a complaint with a supervisory authority, such as the Data Protection Authority of India (once established under the DPDP Act) or the relevant authority in your jurisdiction.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">To exercise these rights, please contact our Data Protection Officer at <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a> or use the self-service options in your account profile (where available). We will respond to your request within the timeframes prescribed by law.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Accessing, Reviewing, and Deleting Your Information</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">8.1 Accessing Your Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Registered Users can view and update their Personal Information in the &quot;Profile&quot; section of their account. Certain sensitive information (e.g., passwords) may be withheld for security reasons.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">8.2 Deleting Your Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You may request deletion of your Personal Information via: The &quot;Delete My Account&quot; feature in your account profile; or emailing <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a> with your request. We will delete your information promptly, except where retention is required for legal or regulatory compliance, fraud prevention or security purposes, or resolving disputes or enforcing our Terms of Service. Deleted data will be removed from our active databases and backup systems, subject to technical limitations.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">8.3 Updating Your Information</h3>
            <p className="text-gray-700 leading-relaxed mb-8">You can update your account details (except your registered email ID) at any time via the Platform&apos;s profile settings. We may retain previous information for audit or dispute resolution purposes unless you explicitly request its deletion.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We employ industry-standard security measures to protect your Personal Information. These measures include:</p>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Encryption:</strong> Secure transmission of sensitive data using SSL/TLS protocols.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Access Controls:</strong> Restricting access to Personal Information to authorized personnel only.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Secure Storage:</strong> Storing data on encrypted servers with regular security audits.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Monitoring:</strong> Continuous monitoring for suspicious activity or vulnerabilities.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">Despite these measures, no online platform can guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials and notifying us immediately of any suspected unauthorized access at <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a>.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We retain your Personal Information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy or as required by law. Retention periods vary based on: <strong>Account Status</strong> — information is retained while you are an active User and for a reasonable period thereafter; <strong>Legal Requirements</strong> — financial transaction data may be retained for up to 7 years to comply with tax or audit regulations; <strong>Consent Withdrawal</strong> — upon withdrawal of consent or deletion request, we will delete your information unless retention is required for legal purposes. Deleted data is securely erased from our systems, subject to technical constraints (e.g., backup archives).</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Third-Party Links and Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Our Platforms may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices, content, or security of these third-party sites. Accessing third-party links is at your own risk. Advertisers or partners may use their own cookies or tracking technologies, governed by their privacy policies. For a list of third-party links on our Platforms, please contact us at <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a>.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-8">India Elite Summit is based in India, and your Personal Information is primarily stored and processed within India. However, certain service providers (e.g., Google Analytics) may process data in other jurisdictions. When transferring data internationally, we ensure compliance with applicable laws, including GDPR (for EU residents) and the DPDP Act. You may request information about international transfers by contacting <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a>.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-8">Our Platforms are not intended for individuals under the age of 18. We do not knowingly collect Personal Information from children. If we become aware that a child has provided information, we will delete it immediately. If you believe a child has provided information, please contact us at <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a>.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-8">Your Personal Information is treated as confidential and will not be disclosed to third parties except as outlined in this Privacy Policy or with your consent. We will not use your email address for unsolicited communications, and all marketing emails will include an option to unsubscribe.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">15. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-8">We may update this Privacy Policy to reflect changes in our practices, legal requirements, or Platform functionalities. Updates will be posted on our Platforms, and significant changes will be communicated via email or Platform notifications. Your continued use of the Platforms after such changes constitutes acceptance of the revised policy.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">16. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-8">This Privacy Policy is governed by the laws of India, without regard to its conflict of law principles. Any disputes arising from this Privacy Policy shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India. You waive any objections to jurisdiction, venue, or forum non conveniens.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">17. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">For questions, concerns, or complaints about this Privacy Policy or our data practices, please contact our Data Protection Officer:</p>
            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 mb-8">
              <p className="font-bold text-gray-900 mb-4">Indeqnet Private Limited (India Elite Summit)</p>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  Indeqnet Private Limited, 201, Radhakrishna, Radha Residency, Siddharth Nagar, Borivali - East, Mumbai – 400066, Maharashtra, India
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <a href="tel:+918828320113" className="text-emerald-700 hover:underline">+91-8828320113</a>
                </p>
              </div>
              <p className="text-gray-600 text-sm mt-4">We will respond to your inquiries promptly and in accordance with applicable laws.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">18. Severability</h2>
            <p className="text-gray-700 leading-relaxed mb-8">If any provision of this Privacy Policy is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect to the extent permitted by law.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">19. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed mb-8">This Privacy Policy, together with our Disclaimer, Terms of Use, and any other policies posted on the Platforms, constitutes the entire agreement between you and India Elite Summit regarding the collection, use, and protection of your information. It supersedes all prior or contemporaneous agreements, whether written or oral.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy
