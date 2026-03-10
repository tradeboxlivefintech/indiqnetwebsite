'use client'
import React from 'react'
import { FileText, Mail, MapPin, Phone, AlertTriangle } from 'lucide-react'

const DisclaimerPage = () => {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
            <FileText className="w-5 h-5" />
            <span className="text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-slate-300 text-lg">
            India Elite Summit — Terms governing use of this Website and Platforms
          </p>
        </div>
      </section>

      {/* Disclaimer content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate prose-lg max-w-4xl mx-auto [&_ul]:text-gray-800 [&_ul_li]:text-gray-800">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-10 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-900 text-sm m-0">
              By accessing or using our Website or Platforms, you agree to the terms below. If you do not agree, please do not use our Website or Platforms.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            India Elite Summit, operated by Indeqnet Private Limited (hereinafter referred to as &quot;India Elite Summit,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), provides this website (the &quot;Website&quot;) and related platforms, including mobile applications and web applications (collectively, the &quot;Platforms&quot;), to offer information, services, and resources related to capital market events, training programs, and associated activities. By accessing or using our Website or Platforms, you (the &quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) agree to the terms and conditions outlined in this Disclaimer. If you do not agree with this Disclaimer, please refrain from using our Website or Platforms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            This Disclaimer governs the use of all content, services, and functionalities available on the Website and Platforms, including but not limited to event details, training materials, market insights, stock-related information, and user-generated content. We reserve the right to update or modify this Disclaimer at any time without prior notice. Your continued use of the Website or Platforms constitutes acceptance of any revised terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. General Information and Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The information provided on the Website and Platforms, including but not limited to text, graphics, images, videos, data, event schedules, training materials, and market-related content, is for general informational and educational purposes only. It is not intended to constitute financial, investment, legal, tax, or professional advice, nor should it be relied upon for making investment decisions, trading activities, or other financial commitments.
          </p>
          <ul className="list-none space-y-3 mb-8 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>No Guarantee of Accuracy:</strong> While we strive to ensure that the information on our Website and Platforms is accurate, complete, and up-to-date, we do not warrant or guarantee the accuracy, reliability, completeness, timeliness, or suitability of any content. Information may be delayed, outdated, or subject to errors due to the dynamic nature of capital markets and external data sources.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>User Responsibility:</strong> Users are solely responsible for verifying the accuracy, correctness, and relevance of any information before acting upon it. You should conduct independent research and consult with qualified professionals (e.g., financial advisors, legal counsel) prior to making any decisions based on the content provided.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>No Endorsement:</strong> References to specific stocks, securities, companies, products, or services on the Website or Platforms do not constitute endorsements, recommendations, or sponsorship by India Elite Summit. Such references are provided for informational purposes only.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. No Financial or Investment Advice</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The content on the Website and Platforms, including but not limited to market insights, stock data, investment strategies, and training materials, is not intended as financial or investment advice. It should not be construed as a recommendation to buy, sell, or hold any securities, financial instruments, or other investments.
          </p>
          <ul className="list-none space-y-3 mb-8 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Independent Verification:</strong> Users must independently verify all data and consult with licensed financial advisors or professionals before engaging in any investment or trading activities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Risk Acknowledgment:</strong> Capital market investments involve significant risks, including the potential loss of principal. Users assume full responsibility for any financial decisions and their outcomes, including any losses incurred.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>No Personalized Advice:</strong> The Website and Platforms do not provide personalized financial advice tailored to individual circumstances, objectives, or risk profiles.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Intellectual Property and Trademarks</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All content on the Website and Platforms, including but not limited to text, logos, trademarks, trade names, graphics, designs, videos, and software, is the property of India Elite Summit or its licensors and is protected by applicable intellectual property laws, including copyright, trademark, and trade dress laws.
          </p>
          <ul className="list-none space-y-3 mb-8 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Third-Party Trademarks:</strong> Logos, trademarks, and trade names of stocks, companies, or other entities displayed on the Website or Platforms are the property of their respective owners. Their use is solely for identification, informational, or brand recall purposes and does not imply endorsement, sponsorship, affiliation, or association with India Elite Summit or its services.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>No Ownership Claim:</strong> India Elite Summit does not claim ownership of third-party trademarks, logos, or trade names. We provide no warranty, express or implied, regarding the accuracy, completeness, or correctness of information associated with such third-party marks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Usage Restrictions:</strong> Users may not reproduce, distribute, modify, or create derivative works from any content on the Website or Platforms without prior written consent from India Elite Summit or the respective intellectual property owner.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To the fullest extent permitted by law, India Elite Summit, its affiliates, directors, employees, agents, or service providers shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising out of or in connection with:
          </p>
          <ul className="list-none space-y-2 mb-4 pl-0">
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> The use or inability to use the Website or Platforms;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> The accuracy, completeness, timeliness, or reliability of any content or information provided;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Any errors, omissions, or delays in the content or services;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Any financial losses, missed opportunities, or damages resulting from reliance on the content or participation in events or training programs;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Any unauthorized access to or alteration of user data or transmissions;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Any viruses, malware, or technical issues that may affect your device or systems due to accessing the Website or Platforms.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            Users assume all risks associated with the use of the Website and Platforms, including but not limited to financial, operational, and legal risks. India Elite Summit shall not be responsible for any losses or damages, whether foreseeable or unforeseeable, arising from such use.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. No Warranty</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Website and Platforms are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted access.
          </p>
          <ul className="list-none space-y-3 mb-8 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>No Guarantee of Performance:</strong> India Elite Summit does not guarantee that the Website or Platforms will be free from errors, interruptions, downtime, or technical issues. We reserve the right to suspend, modify, or discontinue any part of the Website or Platforms without notice.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Third-Party Content:</strong> Any content provided by third parties, including but not limited to event speakers, trainers, or external links, is not controlled by India Elite Summit. We are not responsible for the accuracy, reliability, or suitability of such content.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Event and Training Outcomes:</strong> Participation in events or training programs does not guarantee specific financial outcomes, professional certifications, or market success. Users are responsible for their own performance and results.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Conflicts of Interest</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            As a company engaged in capital market events and training, India Elite Summit, its employees, affiliates, or associated trainers may hold positions in stocks, securities, or financial instruments discussed on the Website or Platforms. Such holdings do not constitute recommendations or endorsements. Users should be aware of potential conflicts of interest and conduct their own due diligence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. User Conduct and Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing the Website or Platforms, you agree to:
          </p>
          <ul className="list-none space-y-2 mb-4 pl-0">
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Use the Website and Platforms for lawful purposes only;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Not engage in any activity that may disrupt, damage, or impair the functionality of the Website or Platforms;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Not attempt to gain unauthorized access to any part of the Website, Platforms, or associated systems;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Comply with all applicable laws, regulations, and this Disclaimer.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            Users are solely responsible for maintaining the confidentiality of any account credentials and for all activities conducted under their accounts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Third-Party Links and Services</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Website and Platforms may contain links to third-party websites, applications, or services that are not owned or controlled by India Elite Summit. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
          <ul className="list-none space-y-3 mb-8 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>User Discretion:</strong> Accessing third-party links is at your own risk. India Elite Summit is not liable for any losses, damages, or issues arising from your use of third-party websites or services.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>External Data:</strong> Any market data, stock prices, or financial information sourced from third-party providers is provided for informational purposes only. India Elite Summit does not guarantee its accuracy or reliability.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Governing Law and Jurisdiction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This Disclaimer and your use of the Website and Platforms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes or claims arising out of or in connection with this Disclaimer or your use of the Website or Platforms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
          </p>
          <ul className="list-none space-y-3 mb-8 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Venue:</strong> You agree that Mumbai, Maharashtra, shall be the sole venue for resolving any disputes. You waive any objections to jurisdiction, venue, or forum non conveniens.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span><strong>Compliance with Local Laws:</strong> Users accessing the Website or Platforms from outside India are responsible for ensuring compliance with applicable local laws.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Indemnification</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to indemnify, defend, and hold harmless India Elite Summit, its affiliates, directors, employees, agents, and service providers from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in connection with:
          </p>
          <ul className="list-none space-y-2 mb-8 pl-0">
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Your use of the Website or Platforms;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Your violation of this Disclaimer or any applicable laws;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Your infringement of any intellectual property or other rights of India Elite Summit or third parties;</li>
            <li className="flex items-start gap-2"><span className="text-emerald-600">•</span> Any content you submit, post, or transmit through the Website or Platforms.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Termination of Access</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            India Elite Summit reserves the right to suspend, restrict, or terminate your access to the Website or Platforms at any time, with or without notice, for any reason, including but not limited to violation of this Disclaimer or suspected misuse of the Platforms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Force Majeure</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            India Elite Summit shall not be liable for any failure or delay in providing services or content due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, government regulations, power outages, cyber-attacks, or technical failures.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions, concerns, or complaints regarding this Disclaimer or the Website, please contact us at:
          </p>
          <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 mb-8">
            <p className="font-bold text-gray-900 mb-4">Indeqnet Private Limited (India Elite Summit)</p>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <a href="mailto:indequitynetwork@gmail.com" className="text-emerald-700 hover:underline">indequitynetwork@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                201, Radha Krishna, Radha Residency, Siddharth Nagar, Borivali East, Mumbai - 400066, Maharashtra
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <a href="tel:+918828320113" className="text-emerald-700 hover:underline">+91 - 8828320113</a>
              </p>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              We will endeavour to respond to your inquiries promptly and in accordance with applicable laws.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Severability</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            If any provision of this Disclaimer is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect to the extent permitted by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">15. Entire Agreement</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            This Disclaimer, together with our Privacy Policy, Terms of Use, and any other policies posted on the Website, constitutes the entire agreement between you and India Elite Summit regarding the use of the Website and Platforms. It supersedes all prior or contemporaneous agreements, representations, or understandings, whether written or oral.
          </p>
        </div>
      </section>
    </main>
  )
}

export default DisclaimerPage
