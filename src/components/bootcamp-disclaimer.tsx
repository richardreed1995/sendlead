import Link from "next/link";

export default function BootcampDisclaimer() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-4">
            This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT /endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Earnings Disclaimer:</h4>
            <p className="mb-2">
              We don't believe in get-rich-quick programs or short cuts. We believe in hard work, adding value and serving others. And that's what our programs and information we share are designed to help you do. As stated by law, we can not and do not make any guarantees about your own ability to get results or earn any money with our ideas, information, programs or strategies. We don't know you and, besides, your results in life are up to you. Agreed? We're here to help by giving you our greatest strategies to move you forward, faster. However, nothing on this page or any of our websites or emails is a promise or guarantee of future earnings. Any financial numbers referenced here, or on any of our sites or emails, are simply estimates or projections or past results, and should not be considered exact, actual or as a promise of potential earnings – all numbers are illustrative only.
            </p>
            <p className="mb-2">
              Results may vary and testimonials are not claimed to represent typical results. All testimonials are real. These results are meant as a showcase of what the best, most motivated and driven clients have done and should not be taken as average or typical results.
            </p>
            <p>
              You should perform your own due diligence and use your own best judgment prior to making any investment decision pertaining to your business. By virtue of visiting this site or interacting with any portion of this site, you agree that you're fully responsible for the investments you make and any outcomes that may result.
            </p>
          </div>
          
          <p className="font-semibold">
            COPYRIGHT 2025 |  <Link href="/privacy-policy" className="underline hover:text-gray-800">PRIVACY POLICY</Link> | <Link href="/terms-conditions" className="underline hover:text-gray-800">TERMS & CONDITIONS</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
