import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sendlead | Cookie Policy",
  description: "Cookie Policy for Sendlead - your B2B lead generation partner. Learn about the cookies we use and how to control them.",
};

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">Legal & Privacy</div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">Cookie Policy</h1>
            <div className="text-xl text-gray-700 mb-8 font-medium">How we use cookies and how you can control them</div>
          </div>
          
          <div className="text-left space-y-8 text-lg leading-relaxed px-2 md:px-8">
            
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2"><strong>Effective Date:</strong> 30th August, 2025</p>
              <p className="text-sm text-gray-600"><strong>Last Updated:</strong> 30th August, 2025</p>
            </div>

            <h3>1. What Are Cookies?</h3>
            <p>Cookies are small text files placed on your device when you visit a website. They help us remember your preferences, understand how you use our site, and deliver more relevant advertising.</p>
            <p>Cookies may be set by us ("first-party cookies") or by third-party platforms we work with ("third-party cookies").</p>
            <p className="my-4"><strong>You can manage or delete cookies at any time — see Section 6 below.</strong></p>

            <h3>2. What Types of Cookies We Use</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Type of Cookie</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Strictly Necessary</td>
                    <td className="border border-gray-300 px-4 py-2">Required for basic site functionality (e.g. form submission, security).</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Performance</td>
                    <td className="border border-gray-300 px-4 py-2">Helps us understand how users interact with our site (e.g. page visits, bounce rates).</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Advertising</td>
                    <td className="border border-gray-300 px-4 py-2">Tracks your behaviour across websites to show relevant ads on platforms like Google, Facebook, or TikTok.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">A/B Testing</td>
                    <td className="border border-gray-300 px-4 py-2">Used to improve your experience via website experiments.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>3. Cookies We Use</h3>
            
            <h4>Google Analytics & Google Ads</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tracks user behaviour, conversions, and ad performance</li>
              <li>May store IP address, device info, and browsing data</li>
              <li>Includes cookies like <code>_ga</code>, <code>_gid</code>, <code>_gcl_au</code>, and others</li>
              <li><a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learn more about Google's privacy practices</a></li>
            </ul>

            <h4>Meta (Facebook) Pixel</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Helps track ad effectiveness and user actions after clicking a Facebook or Instagram ad</li>
              <li>May track page views, form completions, and device identifiers</li>
              <li>Includes cookies like <code>_fbp</code> and uses <code>event_id</code> for deduplication</li>
              <li><a href="https://www.facebook.com/privacy/policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learn more about Meta's privacy practices</a></li>
            </ul>

            <h4>TikTok Pixel</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enables ad tracking, conversions, and optimisation of TikTok campaigns</li>
              <li>Tracks events such as page views and form submissions</li>
              <li><a href="https://www.tiktok.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learn more about TikTok's privacy practices</a></li>
            </ul>

            <h4>Microsoft Ads (UET Tag)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tracks conversions and helps measure the effectiveness of Microsoft Ads</li>
              <li>May store identifiers, click IDs, and page interactions</li>
              <li>Includes cookies like <code>_uetmsclkid</code> and <code>_uetsid</code></li>
              <li><a href="https://privacy.microsoft.com/privacystatement" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learn more about Microsoft's privacy practices</a></li>
            </ul>

            <h4>Lead Distribution & CRM Tools</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enables secure transfer and management of lead data</li>
              <li>Tracks form completions and lead qualification processes</li>
              <li>Helps optimise lead routing to appropriate partners</li>
            </ul>

            <h3>4. Cookie Duration</h3>
            <p>Cookies may remain on your device for different lengths of time depending on their purpose:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> May remain for up to 24 months</li>
              <li><strong>Analytics cookies:</strong> Typically stored for 26 months</li>
              <li><strong>Advertising cookies:</strong> Usually stored for 12-24 months</li>
            </ul>

            <h3>5. Legal Basis for Using Cookies</h3>
            <p>We use cookies in accordance with the UK's Privacy and Electronic Communications Regulations (PECR) and the UK General Data Protection Regulation (UK GDPR).</p>
            <p className="my-4"><strong>We only set non-essential cookies (e.g. for advertising or analytics) if you have given us consent through our cookie banner.</strong></p>
            <p>You can withdraw your consent at any time (see below).</p>

            <h3>6. How to Control or Disable Cookies</h3>
            
            <h4>On Our Website</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Our cookie banner allows you to accept or reject non-essential cookies</li>
              <li>You can adjust or withdraw your consent at any time by clicking the "Cookie Settings" link in the footer of our website</li>
            </ul>

            <h4>In Your Browser</h4>
            <p>You can also block or delete cookies via your browser settings. Visit the following links for instructions:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cookie settings guide</a></li>
              <li><strong>Safari:</strong> <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cookie settings guide</a></li>
              <li><strong>Firefox:</strong> <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cookie settings guide</a></li>
              <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cookie settings guide</a></li>
            </ul>
            
            <p className="my-4"><strong>Note:</strong> Disabling cookies may affect how our site functions.</p>

            <h3>7. Third-Party Cookie Policies</h3>
            <p>When you visit our website, third-party services may also set cookies. We recommend reviewing their privacy policies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              <li><a href="https://www.facebook.com/privacy/policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook Privacy Policy</a></li>
              <li><a href="https://www.tiktok.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">TikTok Privacy Policy</a></li>
              <li><a href="https://privacy.microsoft.com/privacystatement" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Privacy Statement</a></li>
            </ul>

            <h3>8. Do Not Track Signals</h3>
            <p>Some browsers offer "Do Not Track" signals. We currently do not respond to these signals, but you can control cookies through the methods described above.</p>

            <h3>9. Changes to This Cookies Policy</h3>
            <p>We may update this policy from time to time to reflect changes in the law, technology, or the cookies we use. When we do, we'll revise the "Last Updated" date above.</p>
            <p>Please review this page regularly to stay informed.</p>

            <h3>10. Contact Us</h3>
            <p>If you have any questions about our use of cookies, please contact us:</p>
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
