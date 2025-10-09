# Stripe Integration - Files Reference

## 📁 New Files Created

### Core Stripe Files

1. **`/src/lib/stripe.ts`**
   - Stripe SDK initialization
   - Server-side Stripe client

2. **`/src/app/api/checkout/route.ts`**
   - API route to create Stripe checkout sessions
   - Handles POST requests from checkout button

3. **`/src/app/api/webhooks/stripe/route.ts`**
   - Webhook handler for Stripe events
   - Verifies webhook signatures
   - Processes payment confirmations

4. **`/src/app/api/verify-session/route.ts`**
   - API route to verify payment sessions
   - Checks if a session ID corresponds to a successful payment

### Components

5. **`/src/components/checkout-button.tsx`**
   - Reusable checkout button component
   - Initiates Stripe checkout flow
   - Shows loading state

6. **`/src/components/protected-course.tsx`**
   - Wrapper component for protected content
   - Verifies payment before showing content
   - Redirects unauthorized users

7. **`/src/components/bootcamp-pricing.tsx`**
   - Pricing section for bootcamp landing page
   - Displays features and pricing
   - Includes checkout button

### Documentation

8. **`STRIPE_SETUP_GUIDE.md`**
   - Complete step-by-step setup instructions
   - Testing guide
   - Troubleshooting tips

9. **`STRIPE_FILES_REFERENCE.md`** (this file)
   - Quick reference of all files

---

## 📝 Modified Files

### 1. `/src/app/bootcamp/course/page.tsx`

**What Changed:** Added protection wrapper

**Before:**
\`\`\`tsx
export default function CoursePage() {
  return <CourseContent />;
}
\`\`\`

**After:**
\`\`\`tsx
import ProtectedCourse from "@/components/protected-course";

export default function CoursePage() {
  return (
    <ProtectedCourse>
      <CourseContent />
    </ProtectedCourse>
  );
}
\`\`\`

---

## 🔧 Files You Need to Modify

### 1. `.env.local` (Create this file)

Add these environment variables:

\`\`\`env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_BOOTCAMP_PRICE_ID=price_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

### 2. `/src/app/bootcamp/page.tsx` (Add pricing component)

Import and add the pricing component:

\`\`\`tsx
import BootcampPricing from "@/components/bootcamp-pricing";

// In your JSX, add:
<BootcampPricing />
\`\`\`

Suggested placement (around line 94-95):

\`\`\`tsx
<BootcampValueStack />
<BootcampPricing />  {/* Add this */}
<BootcampAbout />
\`\`\`

### 3. Update Metadata (Optional but Recommended)

Since the bootcamp is no longer free, update:
- Page title: Remove "Free" 
- Description: Update pricing mentions
- Structured data: Change price from "0" to "497"

---

## 🌐 API Routes Overview

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/checkout` | POST | Create Stripe checkout session |
| `/api/webhooks/stripe` | POST | Handle Stripe webhook events |
| `/api/verify-session` | GET | Verify payment session validity |

---

## 🔄 User Flow Diagram

\`\`\`
1. User visits /bootcamp
   ↓
2. Clicks "Enroll Now" button (CheckoutButton)
   ↓
3. POST /api/checkout → Creates Stripe session
   ↓
4. Redirects to Stripe Checkout (hosted by Stripe)
   ↓
5. User completes payment
   ↓
6. Stripe redirects to /bootcamp/course?session_id=xxx
   ↓
7. ProtectedCourse component loads
   ↓
8. GET /api/verify-session?session_id=xxx
   ↓
9. If valid: Store access + Show course
   If invalid: Redirect to /bootcamp
\`\`\`

---

## 🎯 Quick Start Checklist

- [ ] Install dependencies (already done: `stripe` and `@stripe/stripe-js`)
- [ ] Create Stripe account
- [ ] Get API keys from Stripe Dashboard
- [ ] Create product in Stripe Dashboard
- [ ] Copy Price ID
- [ ] Create `.env.local` with all required variables
- [ ] Add `<BootcampPricing />` to `/src/app/bootcamp/page.tsx`
- [ ] Test with Stripe test cards
- [ ] Set up webhook for production

---

## 🎨 Customization Points

### Change Price

Edit `/src/components/bootcamp-pricing.tsx`:
- Line 28: Display price
- Update Price ID in Stripe Dashboard

### Change Features

Edit `/src/components/bootcamp-pricing.tsx`:
- Lines 38-88: Features list

### Change Button Text

When using CheckoutButton:

\`\`\`tsx
<CheckoutButton 
  priceId={priceId}
  text="Your Custom Text"
/>
\`\`\`

### Change Success URL

Edit `/src/app/api/checkout/route.ts`:
- Line 19: success_url
- Line 20: cancel_url

### Change Access Storage

Edit `/src/components/protected-course.tsx`:
- Replace localStorage with cookies, database, etc.

---

## 🔐 Security Notes

- ✅ Webhook signatures are verified
- ✅ Payment status checked server-side
- ✅ Secret keys never exposed to client
- ⚠️ localStorage can be cleared by users
- 💡 Consider adding database for production

---

## 🧪 Testing

### Test Cards:

| Card Number | Result |
|-------------|--------|
| 4242 4242 4242 4242 | Success |
| 4000 0000 0000 0002 | Decline |
| 4000 0000 0000 9995 | Insufficient funds |

Use any future expiry date and any 3-digit CVC.

---

## 📦 Dependencies Added

\`\`\`json
{
  "stripe": "19.1.0",
  "@stripe/stripe-js": "8.0.0"
}
\`\`\`

Already installed via: \`pnpm add stripe @stripe/stripe-js\`

---

## 🚀 Deployment

When deploying to production:

1. **Switch to Live Mode in Stripe**
2. **Get live keys** (pk_live_ and sk_live_)
3. **Update environment variables** in your hosting platform
4. **Set up production webhook**
5. **Update NEXT_PUBLIC_APP_URL** to your domain
6. **Test with small real payment**

---

## Need Help?

- 📖 See `STRIPE_SETUP_GUIDE.md` for detailed instructions
- 🔍 Check Stripe Dashboard → Webhooks for event logs
- 🐛 Check browser console for client-side errors
- 📊 Check server logs for API errors

