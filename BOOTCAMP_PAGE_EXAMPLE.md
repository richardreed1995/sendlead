# How to Add Pricing to Your Bootcamp Page

## Quick Instructions

You need to make **2 simple changes** to `/src/app/bootcamp/page.tsx`:

---

## Change 1: Add Import

At the top of the file (around line 11), add:

\`\`\`tsx
import BootcampPricing from "@/components/bootcamp-pricing";
\`\`\`

### Full Import Section Should Look Like:

\`\`\`tsx
import HeroSectionBootcamp from "@/components/hero-section-bootcamp";
import BootcampReasons from "@/components/bootcamp-reasons";
import BootcampCurriculum from "@/components/bootcamp-curriculum";
import BootcampBenefits from "@/components/bootcamp-benefits";
import BootcampValueStack from "@/components/bootcamp-value-stack";
import BootcampAccess from "@/components/bootcamp-access";
import BootcampAbout from "@/components/bootcamp-about";
import BootcampFAQs from "@/components/bootcamp-faqs";
import BootcampDisclaimer from "@/components/bootcamp-disclaimer";
import BootcampHeader from "@/components/bootcamp-header";
import BootcampPricing from "@/components/bootcamp-pricing";  // ← ADD THIS LINE
import type { Metadata } from "next";
\`\`\`

---

## Change 2: Add Component to Page

In the `<main>` section (around line 89-99), add `<BootcampPricing />`:

### Option A: Replace BootcampAccess (if you want to remove the "free" section)

\`\`\`tsx
<main className="flex-1 flex flex-col">
  <HeroSectionBootcamp />
  <BootcampReasons />
  <BootcampCurriculum />
  <BootcampBenefits />
  <BootcampValueStack />
  <BootcampPricing />      {/* ← REPLACES BootcampAccess */}
  <BootcampAbout />
  <BootcampFAQs />
  <BootcampDisclaimer />
</main>
\`\`\`

### Option B: Keep Both (show both pricing and details)

\`\`\`tsx
<main className="flex-1 flex flex-col">
  <HeroSectionBootcamp />
  <BootcampReasons />
  <BootcampCurriculum />
  <BootcampBenefits />
  <BootcampValueStack />
  <BootcampPricing />      {/* ← ADD THIS */}
  <BootcampAccess />       {/* Keep existing details */}
  <BootcampAbout />
  <BootcampFAQs />
  <BootcampDisclaimer />
</main>
\`\`\`

---

## Change 3: Update Metadata (Optional but Recommended)

Since your bootcamp is no longer free, update the metadata:

### Before:
\`\`\`tsx
export const metadata: Metadata = {
  title: "Free 7-Day On-Demand Bootcamp for Finance Brokers | Sendlead",
  // ...
\`\`\`

### After:
\`\`\`tsx
export const metadata: Metadata = {
  title: "7-Day Lead Generation Bootcamp for Finance Brokers | Sendlead",
  // ...
\`\`\`

Also update the structured data price (around line 73):

### Before:
\`\`\`tsx
"offers": {
  "@type": "Offer",
  "price": "0",
  "priceCurrency": "GBP",
  "description": "Free 7-day bootcamp"
},
\`\`\`

### After:
\`\`\`tsx
"offers": {
  "@type": "Offer",
  "price": "497",
  "priceCurrency": "GBP",
  "description": "7-day lead generation bootcamp"
},
\`\`\`

---

## ✅ That's It!

Just those simple changes will add the pricing section with the Stripe checkout button to your bootcamp page.

---

## 🎨 Want to Customize?

Edit `/src/components/bootcamp-pricing.tsx` to change:
- Price displayed
- Features list
- Colors and styling
- Button text
- Guarantee message

---

## 🧪 Test It

1. Make sure your `.env.local` file is set up (see STRIPE_SETUP_GUIDE.md)
2. Run `pnpm dev`
3. Visit `http://localhost:3000/bootcamp`
4. You should see the new pricing section!
5. Click "Enroll Now" to test the checkout flow

Use test card: **4242 4242 4242 4242** with any future date and any CVC.

