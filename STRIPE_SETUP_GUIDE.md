# Stripe Bootcamp Paywall Setup Guide

## 📋 Overview

Your bootcamp is now protected behind a Stripe payment gateway. Here's what has been implemented:

- ✅ Stripe checkout integration
- ✅ Protected course content (requires payment)
- ✅ Payment verification
- ✅ Webhook handling for payment events
- ✅ Session-based access control

---

## 🚀 Setup Steps

### Step 1: Create Stripe Account

1. Go to [https://stripe.com](https://stripe.com) and create an account
2. Complete the account verification process
3. Switch between Test Mode and Live Mode using the toggle in the Stripe Dashboard

### Step 2: Get Your API Keys

1. Go to [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)

### Step 3: Create Your Product

1. Go to [https://dashboard.stripe.com/products](https://dashboard.stripe.com/products)
2. Click "Add product"
3. Set up your product:
   - **Name**: "7-Day Lead Generation Bootcamp"
   - **Description**: Add a description
   - **Pricing**: Set to £497 (or your chosen price)
   - **Pricing model**: One-time payment
   - **Currency**: GBP
4. Click "Save product"
5. **Copy the Price ID** (starts with `price_`) - you'll need this!

### Step 4: Configure Environment Variables

Create a `.env.local` file in your project root with the following:

\`\`\`env
# Stripe Keys (from Step 2)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key

# Webhook Secret (we'll add this in Step 5)
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Product Price ID (from Step 3)
STRIPE_BOOTCAMP_PRICE_ID=price_your_price_id

# URL Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

**Important**: Update `NEXT_PUBLIC_APP_URL` to your production URL when deploying!

### Step 5: Set Up Webhooks (for production)

Webhooks verify payments on your server. This is crucial for production!

#### For Local Development:

1. Install Stripe CLI: [https://docs.stripe.com/stripe-cli](https://docs.stripe.com/stripe-cli)
2. Run: \`stripe login\`
3. Run: \`stripe listen --forward-to localhost:3000/api/webhooks/stripe\`
4. Copy the webhook signing secret (starts with \`whsec_\`) and add it to `.env.local`

#### For Production (Vercel, etc.):

1. Go to [https://dashboard.stripe.com/webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Set endpoint URL: \`https://your-domain.com/api/webhooks/stripe\`
4. Select events to listen for:
   - ✅ `checkout.session.completed`
   - ✅ `payment_intent.succeeded`
   - ✅ `payment_intent.payment_failed`
5. Click "Add endpoint"
6. Copy the **Signing secret** and add it to your production environment variables

### Step 6: Add Pricing to Your Bootcamp Page

Open `/src/app/bootcamp/page.tsx` and add the pricing component:

\`\`\`tsx
import BootcampPricing from "@/components/bootcamp-pricing";

// Add this component where you want the pricing section to appear
// For example, replace or add after BootcampValueStack:

<BootcampValueStack />
<BootcampPricing />  {/* Add this line */}
<BootcampAbout />
\`\`\`

### Step 7: Update Metadata (Optional)

Since your bootcamp is no longer free, update the metadata in `/src/app/bootcamp/page.tsx`:

- Change "Free 7-Day" to "7-Day"
- Update the structured data price from "0" to "497"
- Update descriptions as needed

---

## 🧪 Testing

### Test the Payment Flow:

1. Start your dev server: \`pnpm dev\`
2. Go to \`http://localhost:3000/bootcamp\`
3. Click the "Enroll Now" button
4. You'll be redirected to Stripe Checkout

### Use Test Cards:

Stripe provides test cards for development:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Use any future expiry date and any CVC**

### Verify Access:

1. Complete a test purchase
2. You should be redirected to `/bootcamp/course?session_id=...`
3. The protected course content should load
4. Access is stored in localStorage for subsequent visits

---

## 🔒 How the Protection Works

### Payment Flow:

1. User clicks "Enroll Now" → Creates Stripe Checkout Session
2. User completes payment on Stripe
3. User redirected to `/bootcamp/course?session_id=xxx`
4. Session ID verified with Stripe API
5. If valid, access granted and stored in localStorage
6. Course content displayed

### Access Verification:

- First visit: Verifies `session_id` parameter
- Return visits: Checks localStorage for stored access
- No valid session: Redirects to `/bootcamp`

---

## 🚀 Deployment Checklist

Before going live:

- [ ] Switch to Stripe Live Mode keys
- [ ] Update `NEXT_PUBLIC_APP_URL` to production domain
- [ ] Set up production webhook endpoint
- [ ] Test with real payment (small amount)
- [ ] Verify webhook events are received
- [ ] Update all environment variables in your hosting platform

### Vercel Environment Variables:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add all the variables from `.env.local`
4. Redeploy your application

---

## 🗄️ Optional: Add Database (Recommended for Production)

The current setup uses localStorage, which works but has limitations:

**Limitations:**
- Users can clear localStorage
- No admin panel to manage purchases
- No email-based access recovery

**Recommended Enhancement:**

Consider adding a database to store purchases:

1. Set up a database (Supabase, PlanetScale, etc.)
2. Create a `purchases` table with:
   - `email`
   - `session_id`
   - `purchase_date`
   - `access_granted`
3. Update webhook to store purchases
4. Update verification to check database instead of/in addition to localStorage

Would you like me to implement this database solution?

---

## 📧 Email Notifications (Optional)

You might want to send confirmation emails. Options:

1. **Stripe Email Receipts** (built-in, free)
   - Enable in Stripe Dashboard → Settings → Emails
   
2. **Custom Emails** (via webhook)
   - Use SendGrid, Resend, or EmailJS
   - Send course access details

---

## 🎨 Customization

### Change Pricing:

Edit `/src/components/bootcamp-pricing.tsx`:
- Update the price display (£497)
- Modify the features list
- Change styling/colors

### Change Access Verification:

Edit `/src/components/protected-course.tsx`:
- Modify where access is stored (localStorage, cookies, database)
- Add loading/error states
- Customize redirect behavior

---

## 🐛 Troubleshooting

### "Session verification failed"
- Check that `STRIPE_SECRET_KEY` is set correctly
- Verify the session_id in the URL is valid
- Check browser console for errors

### Webhook not receiving events
- Ensure webhook URL is correct
- Check webhook signing secret matches
- For local dev, ensure Stripe CLI is running
- Check Stripe Dashboard → Webhooks for delivery logs

### Button not working
- Check browser console for errors
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
- Ensure you're using test keys in development

### Course immediately redirects back
- Check localStorage has `bootcamp_access` set to "true"
- Clear localStorage and try purchasing again
- Check session_id parameter is present after payment

---

## 📞 Support

For Stripe-specific issues:
- [Stripe Documentation](https://docs.stripe.com/)
- [Stripe Support](https://support.stripe.com/)

---

## ✅ Next Steps

1. **Set up your Stripe account**
2. **Add your API keys to `.env.local`**
3. **Test the checkout flow with test cards**
4. **Customize the pricing section**
5. **Deploy to production with live keys**

You're all set! 🎉

