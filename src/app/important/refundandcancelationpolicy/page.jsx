'use client'
import React from 'react'
import { FileText, Mail, MapPin, Phone, AlertTriangle, RefreshCw, Calendar } from 'lucide-react'

const RefundPolicy = () => {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
            <RefreshCw className="w-5 h-5" />
            <span className="text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
          <p className="text-slate-300 text-lg">
            India Elite Summit — Seminar refunds, cancellations, and transfers
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
                By registering for the Seminar, you agree to be bound by this Refund Policy. We reserve the right to update or modify this policy at any time; changes will be posted on www.indiaelitesummit.com.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Indeqnet Private Limited, trading as India Elite Summit (hereinafter referred to as &quot;we,&quot; &quot;us,&quot; or &quot;India Elite Summit&quot;), having its registered office at 201, Radhakrishna, Radha Residency, Siddharth Nagar, Borivali - East, Mumbai – 400066, Maharashtra, India, organizes capital market events and training programs, including the India Elite Summit Seminar scheduled for 21st June 2025 and 22nd June 2025 (the &quot;Seminar&quot;). This Refund Policy governs the terms and conditions for cancellations, refunds, and transfers related to Seminar registrations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              By registering for the Seminar, you (the &quot;Attendee,&quot; &quot;Participant,&quot; or &quot;you&quot;) agree to be bound by this Refund Policy. We reserve the right to update or modify this Refund Policy at any time, and changes will be posted on our website www.indiaelitesummit.com. Your continued participation or failure to cancel your registration constitutes acceptance of any revised terms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">For any inquiries regarding this Refund Policy, please contact us at:</p>
            <div className="bg-slate-100 rounded-xl p-4 mb-10 border border-slate-200">
              <p className="m-0 flex items-center gap-2 text-gray-700"><Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Email: <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a></p>
              <p className="m-0 mt-2 flex items-center gap-2 text-gray-700"><Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Phone: <a href="tel:+918828320113" className="text-emerald-700 hover:underline">+91-8828320113</a></p>
              <p className="m-0 mt-2 flex items-center gap-2 text-gray-700">WhatsApp: <a href="https://wa.me/918828320113" className="text-emerald-700 hover:underline" target="_blank" rel="noopener noreferrer">+91-8828320113</a></p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Seminar Registration Fees</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The Seminar registration fees are as follows (inclusive of applicable taxes):</p>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>Conference Only:</strong> INR 5,500/- (Rupees Five Thousand Five Hundred Only)</li>
              <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>Conference + Single Occupancy:</strong> INR 10,000/- (Rupees Ten Thousand Only)</li>
              <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>Conference + Double Occupancy:</strong> INR 7,000/- (Rupees Seven Thousand Only)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8"><strong>Payment Deadline:</strong> Full payment must be received by 31st May 2025. Partial payments or late payments may result in forfeiture of registration or ineligibility for refunds, as outlined below.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Cancellation by Attendee</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.1 Cancellation Deadline</h3>
            <p className="text-gray-700 leading-relaxed mb-4">To be eligible for a refund, Attendees must notify India Elite Summit of their cancellation in writing by <strong>20th May 2025</strong> (30 days prior to the Seminar start date). Notifications must be sent via email to <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a> from the registered email ID provided during registration.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.2 Refund Options</h3>
            <ul className="list-none space-y-3 mb-4 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>No Full Refund:</strong> Under no circumstances will a full refund of the registration fees be issued, except as provided in Section 3 (Cancellation by India Elite Summit).</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>Partial Refund:</strong> Cancellations received on or before 20th May 2025 are eligible for a <strong>75% refund</strong> of the paid registration fee, after deducting a 25% administrative fee to cover processing, operational, and third-party costs. The refund amount will be calculated based on the total amount paid by the Attendee, excluding any bank charges or transaction fees.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>No Refund:</strong> Cancellations received after 20th May 2025 are not eligible for any refund. No refunds will be issued for no-shows (failure to attend the Seminar without prior cancellation). If only a partial payment was made by 30th April 2025, the entire amount paid will be forfeited, and no refund will be issued. The decision to offer any refund in such cases rests solely with the India Elite Summit Decision Committee, whose decision is final and binding.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.3 Transfer of Registration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Attendees may transfer their registration to another individual, subject to the following conditions:</p>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> A written request for transfer, including the reason for cancellation and the details of the substitute attendee (name, email, phone number), must be emailed to <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a> from the registered email ID.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> The request must be received at least 15 days prior to the Seminar (by <strong>6th June 2025</strong>).</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> Transfers are subject to approval by India Elite Summit, and an administrative fee of <strong>INR 1,000/-</strong> may be charged to process the transfer.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> Transfers are not permitted after 6th June 2025 or for no-shows.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2.4 Refund Process</h3>
            <ul className="list-none space-y-2 mb-8 pl-0">
              <li className="flex items-start  text-gray-500 gap-2"><span className="text-emerald-600">•</span> Refunds will be processed within <strong>15 business days</strong> of receiving an eligible cancellation request.</li>
              <li className="flex items-start  text-gray-500 gap-2"><span className="text-emerald-600">•</span> Refunds will be issued using the original payment method or via wire transfer to a bank account specified by the Attendee. Bank details must match those provided during registration to prevent fraud.</li>
              <li className="flex items-start  text-gray-500 gap-2"><span className="text-emerald-600">•</span> Any bank charges or transaction fees incurred during the refund process will be borne by the Attendee.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Cancellation or Rescheduling by India Elite Summit</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3.1 Event Cancellation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">India Elite Summit reserves the right to cancel or reschedule the Seminar due to unforeseen circumstances, including but not limited to: Acts of God (e.g., natural disasters, pandemics); Government regulations or restrictions; Insufficient registrations or logistical issues; Speaker or venue unavailability.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3.2 Notification</h3>
            <p className="text-gray-700 leading-relaxed mb-4">In the event of cancellation or rescheduling, Attendees will be notified as soon as practicable via: Email to the registered email ID; SMS or WhatsApp to the registered mobile number; An announcement on our website www.indiaelitesummit.com.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3.3 Refund for Cancellation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">If India Elite Summit cancels the Seminar, Attendees will receive a <strong>full refund</strong> of the registration fees paid, without deduction of administrative fees. Refunds will be processed within 15 business days of the cancellation announcement.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3.4 Options for Rescheduling</h3>
            <p className="text-gray-700 leading-relaxed mb-4">If the Seminar is rescheduled, Attendees may choose to: Transfer their registration to the rescheduled Seminar at no additional cost; or Request a full refund of the registration fees, processed within 15 business days of the request.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3.5 No Additional Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-8">India Elite Summit will not be liable for any incidental, consequential, or indirect damages resulting from cancellation or rescheduling, including but not limited to: Travel or accommodation expenses; Lost wages or business opportunities; Other costs incurred by the Attendee.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Payment Terms and Conditions</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4.1 Payment Methods</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Payments for Seminar registration must be made via: Online payment gateways (credit/debit card, UPI, net banking); Bank transfer to the account details provided below; Other methods as specified on our website.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4.2 Bank Details for Payments</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-900">S. No.</th>
                    <th className="text-left p-3 font-semibold text-gray-900">Details</th>
                    <th className="text-left p-3 font-semibold text-gray-900">Remarks</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t border-gray-200"><td className="p-3">1</td><td className="p-3">Beneficiary Name</td><td className="p-3">INDEQNET PRIVATE LIMITED</td></tr>
                  <tr className="border-t border-gray-200"><td className="p-3">2</td><td className="p-3">Bank Name</td><td className="p-3">ICICI BANK</td></tr>
                  <tr className="border-t border-gray-200"><td className="p-3">3</td><td className="p-3">Bank Account No.</td><td className="p-3">041205001093</td></tr>
                  <tr className="border-t border-gray-200"><td className="p-3">4</td><td className="p-3">Account Type</td><td className="p-3">Current Account</td></tr>
                  <tr className="border-t border-gray-200"><td className="p-3">5</td><td className="p-3">Bank IFSC Code</td><td className="p-3">ICIC0000412</td></tr>
                  <tr className="border-t border-gray-200"><td className="p-3">6</td><td className="p-3">Bank Branch Location</td><td className="p-3">Yari Road Versova, Andheri West</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">Attendees must include their Registration ID or Attendee Name as a reference in the bank transfer to ensure accurate allocation. Any bank charges or transaction fees for payments are the responsibility of the Attendee.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4.3 Payment Confirmation</h3>
            <p className="text-gray-700 leading-relaxed mb-8">Upon successful payment, Attendees will receive a confirmation email with their registration details. Failure to complete full payment by 31st May 2025 may result in cancellation of the registration without refund of any partial payments.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Other Considerations</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.1 Administrative Fees</h3>
            <p className="text-gray-700 leading-relaxed mb-4">A 25% administrative fee will be deducted from all eligible refunds to cover processing, operational, and third-party costs. Additional fees may apply for registration transfers, as outlined in Section 2.3.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.2 Non-Transferable Fees</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Registration fees are non-transferable to other events, training programs, or services offered by India Elite Summit unless explicitly approved by the India Elite Summit Decision Committee.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.3 Force Majeure</h3>
            <p className="text-gray-700 leading-relaxed mb-4">India Elite Summit shall not be liable for failure to hold the Seminar or provide refunds due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, government restrictions, or cyberattacks. In such cases, India Elite Summit may offer alternative remedies, such as rescheduling or credit for future events, at its sole discretion.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.4 Dispute Resolution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Any disputes arising from this Refund Policy shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra. Attendees waive any objections to jurisdiction, venue, or forum non conveniens.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5.5 Contact Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">For refund requests, inquiries, or disputes, please contact:</p>
            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 mb-8">
              <p className="font-bold text-gray-900 mb-2">Indeqnet Private Limited (India Elite Summit)</p>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2"><Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" /> <a href="mailto:support@indiaelitesummit.com" className="text-emerald-700 hover:underline">support@indiaelitesummit.com</a></p>
                <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" /> <a href="tel:+918828320113" className="text-emerald-700 hover:underline">+91-8828320113</a></p>
                <p className="flex items-center gap-2">WhatsApp: <a href="https://wa.me/918828320113" className="text-emerald-700 hover:underline" target="_blank" rel="noopener noreferrer">+91-8828320113</a></p>
                <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" /> 201, Radhakrishna, Radha Residency, Siddharth Nagar, Borivali - East, Mumbai – 400066, Maharashtra, India</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">We aim to respond to all inquiries within 5 business days.</p>
            </div>text-gray-500 

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Attendee Responsibilities</h2>
            <ul className="list-none space-y-2 mb-8 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>Accurate Information:</strong> Attendees must provide accurate contact and payment details during registration to ensure timely communication and refund processing.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>Timely Notification:</strong> Attendees are responsible for notifying India Elite Summit of cancellations or transfer requests within the specified deadlines.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600 font-bold">•</span> <strong>Verification:</strong> For security purposes, refund or transfer requests must be made from the registered email ID or verified by providing the Registration ID.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Additional Terms</h2>
            <ul className="list-none space-y-2 mb-4 pl-0">
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>No Guarantee of Attendance:</strong> Registration fees cover access to the Seminar but do not guarantee attendance if Attendees fail to comply with event policies (e.g., health and safety protocols, code of conduct).</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Policy Updates:</strong> India Elite Summit may amend this Refund Policy at any time. Attendees will be notified of significant changes via email or website updates.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Severability:</strong> If any provision of this Refund Policy is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</li>
              <li className="flex items-start text-gray-500 gap-2"><span className="text-emerald-600">•</span> <strong>Entire Agreement:</strong> This Refund Policy, together with our Privacy Policy, Disclaimer, and Terms of Use, constitutes the entire agreement between you and India Elite Summit regarding Seminar registrations and refunds.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RefundPolicy
