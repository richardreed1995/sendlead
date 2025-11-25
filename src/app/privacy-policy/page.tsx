import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sendlead | Privacy Policy",
  description: "Privacy Policy for Sendlead - your B2B lead generation partner. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">Legal & Privacy</div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">Privacy Policy</h1>
            <div className="text-xl text-gray-700 mb-8 font-medium">How we protect and use your personal data</div>
          </div>
          
          <div className="text-left space-y-8 text-lg leading-relaxed px-2 md:px-8">
            
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> 30th August, 2025</p>
              <p className="text-sm text-gray-600"><strong>Last Updated:</strong> 30th August, 2025</p>
            </div>

            <h3>1. Who We Are</h3>
            <p>This Privacy Policy explains how we collect, use, share, and protect your personal data. We operate as a lead generation company under the trading name Sendlead and may operate additional branded websites.</p>
            
            <div className="my-4">
              <p className="font-semibold">Data Controller:</p>
              <p>Surf Marketing Ltd T/A Sendlead</p>
              <p>Suite 5, 5th Floor, City Reach, 5 Greenwich View Place, London, United Kingdom, E14 9NN</p>
              <p>Email: richard@sendlead.co</p>
              <p>ICO Registration: ZC046410</p>
              <p>Registered in England and Wales</p>
            </div>

            <h3>2. What Personal Data We Collect</h3>
            <p>We may collect the following types of data when you use our website:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Contact details:</strong> name, phone number, email address, postcode</li>
              <li><strong>Demographic details:</strong> date of birth, marital status, employment status</li>
              <li><strong>Financial information:</strong> income, expenses, mortgage details, credit profile (if entered)</li>
              <li><strong>Lead qualification data:</strong> answers you provide in our web forms</li>
              <li><strong>Technical data:</strong> IP address, browser type, device ID, referral source</li>
              <li><strong>Location data:</strong> approximate geographic location based on your IP address</li>
              <li><strong>Cookies & tracking data:</strong> see our <a href="/cookies" className="text-blue-600 hover:underline">Cookies Policy</a></li>
            </ul>

            <h3>3. How We Collect Your Data</h3>
            <p>We collect personal data when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fill in a form on our website</li>
              <li>Click on our advertisements (e.g. Facebook, Google, TikTok)</li>
              <li>Interact with our website or landing pages</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p>We may also use tools and analytics to detect your geographic location, device type, and browsing behaviour using your IP address and browser data.</p>

            <h3>4. How We Use Your Data</h3>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Match you with a relevant third-party provider or adviser</li>
              <li>Share your enquiry with selected partners so they can contact you</li>
              <li>Optimise which provider receives your enquiry, based on your form responses and approximate location</li>
              <li>Improve the performance and experience of our website</li>
              <li>Comply with legal or regulatory obligations</li>
              <li>Send follow-up communications, where permitted</li>
            </ul>
            
            <p className="my-4"><strong>By submitting your information, you acknowledge that we may share your data with relevant third-party providers who may offer financial services. In some cases, we may receive a fee or commission from these partners when we introduce you to them.</strong></p>

            <h3>5. Consent and Communication Preferences</h3>
            <p>When you submit your details through our forms, you provide explicit consent for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Email Contact:</strong> Receiving communications from us and our selected partners via email</li>
              <li><strong>Phone Contact:</strong> Being contacted by telephone from us and our selected partners</li>
              <li><strong>SMS Contact:</strong> Receiving text messages from us and our selected partners (where applicable)</li>
            </ul>
            <p>You can withdraw your consent at any time by contacting us at richard@sendlead.co.</p>

            <h4>TCPA Compliance</h4>
            <p>In accordance with the Telephone Consumer Protection Act (TCPA), we ensure:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>All telephone contact is made with your express written consent</li>
              <li>Clear disclosure of who may contact you and how</li>
              <li>Opt-out mechanisms are always available</li>
              <li>Records of consent are maintained securely</li>
            </ul>

            <h3>6. How Decisions Are Made About Your Data</h3>
            <p>Some decisions about which partner receives your enquiry are made automatically based on your form responses and geographic location. For example:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your answers may determine which product or provider is most relevant</li>
              <li>Leads with similar answers may be distributed using a round-robin system</li>
            </ul>
            <p>These decisions are made using automated business rules. They do not involve pricing, eligibility, or credit decisions. You may request human review or object to this type of processing at any time.</p>

            <h3>7. Who We Share Your Data With</h3>
            <p>We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Selected third-party partners or clients</strong> who offer the services you're interested in</li>
              <li><strong>Our technology providers,</strong> who help us store and process your data securely</li>
            </ul>
            <p>All third-party processors are contractually obligated to comply with UK GDPR and to process your data securely and only as instructed.</p>
            
            <p className="my-4"><strong>We do not share your data with unrelated parties. We never sell your data in bulk or for general marketing lists.</strong></p>

            <h3>8. Industry-Specific Compliance</h3>
            
            <h4>Financial Services (GLBA/FCRA Compliance)</h4>
            <p>When processing financial leads, we comply with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Gramm-Leach-Bliley Act (GLBA) privacy requirements</li>
              <li>Fair Credit Reporting Act (FCRA) disclosure obligations</li>
              <li>Financial Conduct Authority (FCA) guidelines</li>
            </ul>

            <h4>Healthcare (HIPAA Elements)</h4>
            <p>For health-related leads, we implement:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Appropriate safeguards for health information</li>
              <li>Limited use and disclosure principles</li>
              <li>Individual rights regarding health data</li>
            </ul>

            <h4>Legal Services</h4>
            <p>For legal service leads, we follow:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>State bar advertising guidelines</li>
              <li>Solicitor referral regulations</li>
              <li>Client confidentiality principles</li>
            </ul>

            <h4>Insurance</h4>
            <p>For insurance leads, we comply with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>State insurance board requirements</li>
              <li>Insurance marketing regulations</li>
              <li>Consumer protection standards</li>
            </ul>

            <h3>9. Lawful Basis for Processing</h3>
            <p>We rely on the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Consent</strong> – when you provide your details and agree to be contacted</li>
              <li><strong>Legitimate interests</strong> – in operating our service and matching you with relevant providers</li>
              <li><strong>Legal obligations</strong> – where we must comply with applicable laws or industry regulations</li>
            </ul>

            <h3>10. How Long We Keep Your Data</h3>
            <p>We retain your personal data for only as long as necessary:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Unconverted leads:</strong> typically up to 12 months</li>
              <li><strong>Converted leads:</strong> according to the policies of the receiving provider</li>
              <li><strong>Analytics & cookie data:</strong> typically up to 26 months, depending on the platform</li>
              <li><strong>TCPA compliance records:</strong> up to 4 years as required by law</li>
            </ul>
            <p>We regularly review and securely delete data when it is no longer required.</p>

            <h3>11. International Transfers</h3>
            <p>Some of our providers may process data outside the UK. When this happens, we ensure that your data is protected by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>UK-approved standard contractual clauses, or</li>
              <li>Adequacy decisions for countries with equivalent data protections</li>
            </ul>

            <h3>12. Your Rights</h3>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Correct any inaccuracies</li>
              <li>Withdraw your consent at any time</li>
              <li>Object to or restrict certain processing</li>
              <li>Request deletion of your data</li>
              <li>Request human review of automated decisions</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
            </ul>
            <p>To exercise your rights, contact us at richard@sendlead.co.</p>

            <h3>13. How We Keep Your Data Safe</h3>
            <p>We take appropriate steps to protect your personal data, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Secure cloud infrastructure with encryption</li>
              <li>Encryption of data in transit and at rest</li>
              <li>Firewalls and access controls</li>
              <li>Internal policies and staff confidentiality training</li>
              <li>Regular security audits and updates</li>
            </ul>

            <h3>14. Profiling & Ad Targeting</h3>
            <p>We may use tools like Google Ads, Meta Pixel, TikTok Pixel, or other analytics platforms to understand your behaviour and interests. This helps us improve advertising relevance and website performance.</p>
            <p>These tools may track how you interact with our website and use this data to serve personalised ads on other platforms.</p>
            <p>For more information, and to control these settings, please see our <a href="/cookies" className="text-blue-600 hover:underline">Cookies Policy</a>.</p>

            <h3>15. Support for Vulnerable Individuals</h3>
            <p>We aim to ensure that everyone can access our services fairly and without discrimination. If you have specific accessibility needs or feel that a vulnerability may affect how you use our website or understand this policy, please contact us. We will do our best to support you.</p>

            <h3>16. Third-Party Links</h3>
            <p>Our website may contain links to third-party websites. We are not responsible for their content or privacy practices. Please review their policies before submitting any data.</p>

            <h3>17. Updates to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Any changes will be published on this page, with a revised "Last Updated" date above. Please check back regularly to stay informed.</p>

            <h3>18. Children's Privacy</h3>
            <p>Our services are not intended for anyone under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected data from a minor, we will delete it promptly. If you believe we have mistakenly collected information from a child, please contact us.</p>

            <h3>19. Contact Us</h3>
            <p>For any questions about this Privacy Policy or to exercise your rights, please contact us:</p>
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
