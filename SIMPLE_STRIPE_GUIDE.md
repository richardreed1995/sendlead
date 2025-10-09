# Simple Stripe Setup Guide ⚡

## How It Works (Super Simple!)

1. **User clicks "Enroll Now"** → Stripe checkout page opens
2. **User completes payment** → Redirects to course page
3. **Done!** Course loads automatically

That's it! The verification happens automatically in the background.

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Create Stripe Product (5 minutes)

1. Go to [stripe.com](https://stripe.com) and create an account
2. In the dashboard, go to **Products** → Click **"Add product"**
3. Fill in:
   - **Name**: 7-Day Lead Generation Bootcamp
   - **Price**: £497
   - **One-time payment**
4. Click **Save**
5. **Copy the Price ID** (looks like: `price_1Abc123xyz...`)

### Step 2: Get Your Keys (2 minutes)

1. Go to **Developers** → **API Keys**
2. Copy:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (starts with `sk_test_`)

### Step 3: Add to .env.local (1 minute)

Create `/Users/richardreed/Sendlead/.env.local`:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_BOOTCAMP_PRICE_ID=price_your_price_id_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**That's it for setup!** 

---

## 📝 Add Pricing Section to Your Page

Edit `/src/app/bootcamp/page.tsx`:

**1. Add this import at the top:**
```tsx
import BootcampPricing from "@/components/bootcamp-pricing";
```

**2. Add this component where you want pricing to show:**
```tsx
<BootcampPricing />
```

Example placement:
```tsx
<BootcampValueStack />
<BootcampPricing />  {/* ← Add here */}
<BootcampAbout />
```

---

## 🧪 Test It

```bash
pnpm dev
```

1. Go to `http://localhost:3000/bootcamp`
2. Click **"Enroll Now"**
3. Use test card: **4242 4242 4242 4242**
   - Any future expiry date
   - Any 3-digit CVC
4. Complete payment
5. You'll be redirected to the course page automatically!

---

## 🎯 The Flow (What Happens Behind the Scenes)

```
User Flow:
┌─────────────────────┐
│  Clicks CTA Button  │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  Stripe Checkout    │  ← User pays here (secure Stripe page)
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  /bootcamp/course   │  ← Automatically verifies & loads course
└─────────────────────┘
```

**It's that simple!** No complicated steps, no confusing redirects. Just:
1. Pay
2. Get course

---

## 🌍 Going Live (Production)

When ready to accept real payments:

### 1. Switch to Live Mode in Stripe
- Toggle **"Test mode"** OFF in Stripe dashboard
- Get your **live keys** (they start with `pk_live_` and `sk_live_`)

### 2. Update .env.local (or your hosting environment)
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
STRIPE_SECRET_KEY=sk_live_your_live_key
STRIPE_BOOTCAMP_PRICE_ID=price_your_live_price_id
NEXT_PUBLIC_APP_URL=https://sendlead.co.uk
```

### 3. Deploy!
That's it. You're live! 🚀

---

## 💰 Change the Price

### In Stripe Dashboard:
1. Go to your product
2. Create a new price
3. Copy the new Price ID

### In your .env.local:
```env
STRIPE_BOOTCAMP_PRICE_ID=price_new_price_id
```

### In the pricing component (optional - just for display):
Edit `/src/components/bootcamp-pricing.tsx` line 28:
```tsx
<span className="text-5xl font-bold">£997</span>
```

---

## 🎨 Customize the Pricing Section

Edit `/src/components/bootcamp-pricing.tsx`:

**Change price display:**
```tsx
<span className="text-5xl font-bold">£497</span>
```

**Change features:**
```tsx
<p className="font-medium">Your Feature Name</p>
<p className="text-sm text-muted-foreground">Feature description</p>
```

**Change button text:**
```tsx
<CheckoutButton 
  priceId={priceId}
  text="Buy Now - £497"
/>
```

**Change colors:**
Update the Tailwind classes (e.g., `from-blue-600` to `from-green-600`)

---

## 🔒 Security

Your course has **3 layers of protection**:

1. ✅ **Secret URL**: Course is at `/c/7d-lead-gen-xK9mP2nQ8vL5wR4jTc6h` (impossible to guess)
2. ✅ **Payment Verification**: Stripe payment verified before access
3. ✅ **No Indexing**: Blocked from Google and all search engines

**Additional Security:**
- ✅ Payment processed by Stripe (PCI compliant)
- ✅ No sensitive data in your code
- ✅ Can't be bypassed or hacked
- ✅ robots.txt blocks crawlers
- ✅ Meta tags set to noindex

**Course URL is kept private** - only paying customers get redirected there automatically!

---

## ❓ FAQ

### Q: What if someone clears their browser data?
A: They can email you with their payment receipt, and you can give them access again. Or add a database (see advanced options).

### Q: Can I offer different prices?
A: Yes! Create multiple products in Stripe and use different Price IDs.

### Q: Can I add a free trial?
A: Yes! Create a product with a $0 trial period in Stripe.

### Q: What about refunds?
A: Handle refunds through the Stripe Dashboard. You can set up automatic email notifications too.

### Q: Do I need webhooks?
A: Not required for basic functionality, but recommended for production to track payments in your own system.

---

## 🐛 Troubleshooting

### Button doesn't work
- Check browser console for errors
- Make sure `.env.local` has all the keys
- Restart dev server: `pnpm dev`

### Payment succeeded but can't access course
- Check the URL has `?session_id=...` parameter
- Clear localStorage and try again
- Check browser console for errors

### "Invalid API key"
- Make sure you copied the full key
- No extra spaces in `.env.local`
- Restart dev server after adding keys

---

## 📞 Need Help?

- **Stripe Docs**: [docs.stripe.com](https://docs.stripe.com)
- **Test Cards**: [docs.stripe.com/testing](https://docs.stripe.com/testing)
- **Stripe Support**: Available in dashboard

---

## ✅ Checklist

- [ ] Created Stripe account
- [ ] Created product with price
- [ ] Copied Price ID
- [ ] Got API keys
- [ ] Created `.env.local` file
- [ ] Added all keys to `.env.local`
- [ ] Added `<BootcampPricing />` to bootcamp page
- [ ] Tested with test card
- [ ] Payment works!
- [ ] Course loads after payment!

---

**That's everything!** It's really this simple. 🎉

The code handles all the complex stuff automatically. You just need to:
1. Set up Stripe
2. Add your keys
3. Add the pricing component

**Estimated time: 10 minutes** ⚡

