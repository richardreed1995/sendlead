# 🚀 START HERE - Stripe Setup in 3 Steps

Your bootcamp paywall is **ready to go**! Just follow these 3 simple steps:

---

## ✅ Step 1: Get Your Stripe Info (5 min)

### Go to [stripe.com](https://stripe.com)

1. **Create account** (or login)
2. **Create a Product**:
   - Click "Products" → "Add product"
   - Name: "7-Day Lead Generation Bootcamp"
   - Price: £497 (one-time)
   - Save it
   - **→ COPY THE PRICE ID** (looks like: `price_1Abc...`)

3. **Get API Keys**:
   - Click "Developers" → "API keys"
   - **→ COPY Publishable key** (starts with `pk_test_`)
   - **→ COPY Secret key** (starts with `sk_test_`)

---

## ✅ Step 2: Create .env.local File (2 min)

Create this file: `/Users/richardreed/Sendlead/.env.local`

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_PASTE_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_PASTE_YOUR_KEY_HERE  
STRIPE_BOOTCAMP_PRICE_ID=price_PASTE_YOUR_PRICE_ID_HERE
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Replace the placeholder text** with your actual keys from Step 1!

---

## ✅ Step 3: Add Pricing to Your Page (1 min)

### Edit this file: `/src/app/bootcamp/page.tsx`

**A) Add import at the top (around line 11):**

```tsx
import BootcampPricing from "@/components/bootcamp-pricing";
```

**B) Add component in your page (around line 95):**

```tsx
<BootcampValueStack />
<BootcampPricing />  {/* ← ADD THIS LINE */}
<BootcampAbout />
```

---

## 🎉 Done! Test It:

```bash
pnpm dev
```

1. Go to `http://localhost:3000/bootcamp`
2. Click "Enroll Now"
3. Use test card: **4242 4242 4242 4242** (any date, any CVC)
4. Complete payment
5. Course loads! ✅

---

## 📊 What You Built

```
Before:
❌ Anyone can access /bootcamp/course for free

After:
✅ /bootcamp shows pricing with "Enroll Now" button
✅ Button opens Stripe checkout (secure payment)
✅ After payment → automatically redirects to course
✅ Course is protected (can't access without paying)
```

---

## 🌍 Go Live (When Ready)

1. In Stripe: Toggle "Test mode" **OFF**
2. Get your **live keys** (pk_live_... and sk_live_...)
3. Update `.env.local` (or hosting environment variables)
4. Change URL to: `NEXT_PUBLIC_APP_URL=https://sendlead.co.uk`
5. Deploy! 🚀

---

## 💡 Quick Tips

- **Change price?** Create new price in Stripe, update Price ID
- **Customize look?** Edit `/src/components/bootcamp-pricing.tsx`
- **Need help?** See `SIMPLE_STRIPE_GUIDE.md` for details

---

## ⚡ The Simple Flow

```
User clicks "Enroll Now"
  ↓
Stripe Checkout (they pay)
  ↓
Redirects to secret course URL
  ↓
Payment verified automatically
  ↓
Course loads! They can start learning!
```

**That's it!** No complicated verification screens or confusing steps. 

Just: **Pay → Get Course** ✅

### 🔒 Security Features:
- ✅ Course is at a secret, unguessable URL
- ✅ Not indexed by search engines
- ✅ Payment verified before access
- ✅ Triple-layer protection

---

**Need more details?** Check `SIMPLE_STRIPE_GUIDE.md`

**Have questions?** All the files are documented and ready to go!

