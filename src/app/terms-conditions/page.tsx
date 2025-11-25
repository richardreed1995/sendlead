import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sendlead | Terms & Conditions",
  description: "Terms and Conditions for Sendlead - your B2B lead generation partner. Read our service terms and user agreements.",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">Legal & Terms</div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">Terms & Conditions</h1>
            <div className="text-xl text-gray-700 mb-8 font-medium">Our service terms and user agreements</div>
          </div>
          
          <div className="text-left space-y-8 text-lg leading-relaxed px-2 md:px-8">
            
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> 30th August, 2025</p>
              <p className="text-sm text-gray-600"><strong>Last Updated:</strong> 30th August, 2025</p>
            </div>

            <h3>1. Introduction</h3>
            <p>These Terms of Service govern your access to and use of our website and services. By using this website, you agree to these terms. If you do not agree, please do not use the site.</p>
            <p>This website is operated by Surf Marketing Ltd T/A Sendlead. We may update these terms at any time. Continued use of the site means you accept any changes.</p>

            <h3>2. Who We Are (and What We're Not)</h3>
            <p>We are a lead generation company, not a lender, credit broker, or financial adviser. Our role is to connect you with third-party service providers based on the information you provide.</p>
            
            <div className="my-4">
              <p><strong>We do not:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Offer financial advice</li>
                <li>Make lending decisions</li>
                <li>Guarantee that you'll be accepted for a product or service</li>
                <li>Provide direct services to consumers</li>
              </ul>
            </div>
            
            <p className="my-4"><strong>All products or services are provided solely by the third-party organisations we work with.</strong></p>

            <h3>3. Our Service</h3>
            
            <h4>Lead Generation Process</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>We collect information through online forms and enquiries</li>
              <li>We match your requirements with relevant third-party providers</li>
              <li>We share your information with selected partners who may contact you</li>
              <li>We may receive compensation from partners for successful introductions</li>
            </ul>

            <h4>Quality Standards</h4>
            <p>We work with vetted partners and service providers, but we do not guarantee:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The quality of services provided by third parties</li>
              <li>Response times from partners</li>
              <li>Successful outcomes from any introduction</li>
            </ul>

            <h3>4. Your Use of the Website</h3>
            <p>By using this site, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You are at least 18 years old</li>
              <li>You're using the website for personal and lawful purposes only</li>
              <li>The information you provide is accurate and complete</li>
              <li>You will not misuse, tamper with, or attempt to gain unauthorised access to the website</li>
              <li>You understand that submitting a form constitutes your consent to be contacted</li>
            </ul>
            
            <p className="my-4"><strong>We reserve the right to restrict, suspend, or terminate access at any time.</strong></p>

            <h3>5. Your Responsibilities</h3>
            <p>When using our website, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate, complete, and up-to-date information</li>
              <li>Not submit false, misleading, or fraudulent information</li>
              <li>Not use automated systems to submit multiple enquiries</li>
              <li>Not attempt to circumvent our systems or processes</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3>6. Consent and Communication</h3>
            
            <h4>Express Written Consent</h4>
            <p>By submitting your information through our forms, you provide express written consent for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Telephone Contact:</strong> Being contacted by us and our selected partners via telephone, including calls to mobile numbers</li>
              <li><strong>Email Contact:</strong> Receiving communications from us and our selected partners via email</li>
              <li><strong>Text Messages:</strong> Receiving SMS messages where applicable (with separate opt-in)</li>
            </ul>

            <h4>TCPA Compliance</h4>
            <p>We comply with the Telephone Consumer Protection Act (TCPA) by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Obtaining express written consent before sharing your information</li>
              <li>Clearly disclosing which partners may contact you</li>
              <li>Providing opt-out mechanisms in all communications</li>
              <li>Maintaining records of consent as required by law</li>
            </ul>

            <h4>Withdrawal of Consent</h4>
            <p>You may withdraw your consent at any time by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contacting us at richard@sendlead.co</li>
              <li>Using opt-out links in communications</li>
              <li>Requesting removal from partner contact lists</li>
            </ul>

            <h3>7. Accuracy of Information & Disclaimer</h3>
            <p>We do our best to keep all content up to date and accurate — but we don't guarantee it. You agree that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>All information on the website is for general guidance only</li>
              <li>We are not liable for any errors, omissions, or outdated content</li>
              <li>You are responsible for verifying information before acting on it</li>
              <li>We are not responsible for any financial or personal decisions made based on our website or the third parties we introduce you to</li>
            </ul>

            <h3>8. Third-Party Services and Partnerships</h3>
            
            <h4>Partner Relationships</h4>
            <p>We work with various third-party service providers including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Financial service providers</li>
              <li>Insurance companies</li>
              <li>Legal service providers</li>
              <li>Healthcare providers</li>
              <li>Technology and software companies</li>
            </ul>

            <h4>Third-Party Liability</h4>
            <p>We may link to other websites or refer you to third-party services. These are outside our control.</p>
            
            <div className="my-4">
              <p><strong>We do not accept responsibility for:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The content, terms, or privacy policies of third-party sites</li>
                <li>Any product or service provided by a third-party provider</li>
                <li>Any contract or engagement you enter into with them</li>
                <li>The actions or omissions of our partners</li>
              </ul>
            </div>
            
            <p className="my-4"><strong>Use of third-party services is at your own risk and discretion.</strong></p>

            <h3>9. Data Protection and Privacy</h3>
            <p>Your personal data is processed in accordance with our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>. By using our services, you acknowledge that we may:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Share your information with relevant third-party providers</li>
              <li>Use your data to improve our services and matching algorithms</li>
              <li>Retain your information in accordance with our data retention policies</li>
              <li>Transfer your data to partners who may be located outside the UK</li>
            </ul>

            <h3>10. Intellectual Property</h3>
            <p>All content on this site — including logos, text, graphics, forms, design, and layout — is owned by Surf Marketing Ltd T/A Sendlead or our licensors.</p>
            
            <div className="my-4">
              <p><strong>You may:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>View, print, or download content for personal use only</li>
              </ul>
            </div>
            
            <div className="my-4">
              <p><strong>You may not:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Copy, reproduce, distribute, or modify website content for commercial purposes without our written permission</li>
                <li>Use our trademarks, logos, or branding without authorisation</li>
                <li>Reverse engineer or attempt to extract our algorithms or processes</li>
              </ul>
            </div>

            <h3>11. Prohibited Uses</h3>
            <p>You may not use our website or services to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Violate any local, national, or international law or regulation</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful code, viruses, or malicious software</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Interfere with the proper working of the website</li>
              <li>Use automated systems to submit enquiries (except with our express permission)</li>
            </ul>

            <h3>12. Limitation of Liability</h3>
            
            <div className="my-4">
              <p><strong>To the fullest extent permitted by law, we are not liable for:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Loss of income, profits, or data</li>
                <li>Business interruption or reputational damage</li>
                <li>Any indirect, incidental, or consequential loss or damage</li>
                <li>Actions or omissions of third-party providers</li>
                <li>Technical failures or website downtime</li>
                <li>Any damages arising from your use of third-party services</li>
              </ul>
            </div>
            
            <p className="my-4"><strong>Our total liability to you for any claims arising from your use of our services shall not exceed £100.</strong></p>
            
            <p className="my-4"><strong>Nothing in these terms excludes liability for death or injury caused by negligence, fraud, or any liability that cannot be excluded by law.</strong></p>

            <h3>13. Indemnification</h3>
            <p>You agree to indemnify and hold harmless Surf Marketing Ltd T/A Sendlead, its directors, employees, and agents from any claims, damages, or expenses arising from:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your use of our website or services</li>
              <li>Your breach of these Terms of Service</li>
              <li>Your violation of any law or regulation</li>
              <li>Information you provide to us or our partners</li>
            </ul>

            <h3>14. Dispute Resolution</h3>
            
            <h4>Initial Resolution</h4>
            <p>If you have a complaint or dispute, please contact us first at richard@sendlead.co. We will attempt to resolve the matter promptly and fairly.</p>

            <h4>Mediation</h4>
            <p>If we cannot resolve a dispute directly, we agree to attempt mediation through a mutually agreed mediator before pursuing litigation.</p>

            <h4>Governing Law and Jurisdiction</h4>
            <p>These Terms of Service are governed by the laws of England and Wales. Any disputes will be handled exclusively by the courts of England and Wales.</p>

            <h3>15. Termination</h3>
            
            <h4>By You</h4>
            <p>You may stop using our services at any time by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>No longer submitting enquiries through our website</li>
              <li>Requesting removal of your data</li>
              <li>Withdrawing consent for future contact</li>
            </ul>

            <h4>By Us</h4>
            <p>We may terminate or suspend your access if you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Breach these Terms of Service</li>
              <li>Provide false or misleading information</li>
              <li>Use our services for prohibited purposes</li>
              <li>Engage in conduct that could harm our business or partners</li>
            </ul>

            <h3>16. Changes to These Terms</h3>
            <p>We may revise these Terms from time to time. When we do, we'll:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Update the "Last Updated" date above</li>
              <li>Notify you of material changes where required by law</li>
              <li>Continue to honour the terms under which you initially submitted your information</li>
            </ul>
            
            <p className="my-4"><strong>Your continued use of the website confirms your acceptance of the revised terms.</strong></p>

            <h3>17. Severability</h3>
            <p>If any part of these Terms is found to be unlawful or unenforceable, the rest will continue to apply.</p>

            <h3>18. No Waiver</h3>
            <p>If we don't enforce a part of these Terms, that doesn't mean we're waiving our right to enforce it later.</p>

            <h3>19. Entire Agreement</h3>
            <p>These Terms, together with our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>, constitute the entire agreement between you and Surf Marketing Ltd T/A Sendlead regarding your use of our services.</p>

            <h3>20. Contact Information</h3>
            <p>For any questions about these Terms of Service, please contact us:</p>
            <div className="my-4">
              <p><strong>Email:</strong> richard@sendlead.co</p>
              <p><strong>Address:</strong> Surf Marketing Ltd T/A Sendlead, Suite 5, 5th Floor, City Reach, 5 Greenwich View Place, London, United Kingdom, E14 9NN</p>
            </div>
            
            <div className="text-center text-sm text-gray-600 mt-8">
              <p><em>Surf Marketing Ltd T/A Sendlead is a company registered in England and Wales. Registered at Suite 5, 5th Floor, City Reach, 5 Greenwich View Place, London, United Kingdom, E14 9NN. ICO Registration: ZC046410.</em></p>
            </div>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
}
