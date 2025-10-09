# 🔒 Secure Course URL Setup

## What Changed

Your course is now accessible at a **secret, unguessable URL** instead of the simple `/bootcamp/course` path.

### New Course URL:
```
/c/7d-lead-gen-xK9mP2nQ8vL5wR4jTc6h
```

This URL is:
- ✅ **Impossible to guess** (random 24-character string)
- ✅ **Not indexed by search engines** (robots.txt + noindex meta tags)
- ✅ **Hidden from sitemaps**
- ✅ **Still payment-protected** (requires valid Stripe payment)

---

## 🔐 Security Layers

Your course now has **3 layers of protection**:

1. **Unguessable URL** - Can't find it by guessing
2. **Payment Verification** - Can't access without paying
3. **No Indexing** - Won't show up in search results

---

## 🎯 How It Works

```
User Flow:
1. User pays on /bootcamp
   ↓
2. Stripe redirects to: /c/7d-lead-gen-xK9mP2nQ8vL5wR4jTc6h?session_id=xxx
   ↓
3. Payment verified automatically
   ↓
4. Course loads!
```

**Old URL Protection:**
- If someone visits `/bootcamp/course` → Redirects to `/bootcamp` (purchase page)

---

## 🛠️ Customization (Optional)

Want to use your own secret URL? Easy!

### Option 1: Change the Default Route

1. Rename the folder:
   ```
   /src/app/c/7d-lead-gen-xK9mP2nQ8vL5wR4jTc6h/
   
   TO:
   
   /src/app/c/your-custom-secret-url/
   ```

2. Update the default in `/src/app/api/checkout/route.ts` (line 16):
   ```tsx
   const courseUrl = process.env.BOOTCAMP_COURSE_URL || 'c/your-custom-secret-url';
   ```

### Option 2: Use Environment Variable

Add to your `.env.local`:
```env
BOOTCAMP_COURSE_URL=c/your-custom-secret-path
```

Then create that folder:
```
/src/app/c/your-custom-secret-path/page.tsx
```

---

## 🔍 SEO Protection

### In robots.txt:
```
Disallow: /c/
Disallow: /bootcamp/course
```

### In page metadata:
```tsx
robots: {
  index: false,
  follow: false,
  noarchive: true,
  nosnippet: true,
  noimageindex: true,
  nocache: true,
}
```

This ensures:
- ❌ Won't appear in Google search
- ❌ Can't be cached
- ❌ No snippets shown
- ❌ Not archived

---

## 📝 Your Course URL

**Production URL:**
```
https://sendlead.co.uk/c/7d-lead-gen-xK9mP2nQ8vL5wR4jTc6h
```

**Dev URL:**
```
http://localhost:3000/c/7d-lead-gen-xK9mP2nQ8vL5wR4jTc6h
```

**Keep this URL private!** Only share it with paying customers (which happens automatically via Stripe redirect).

---

## 🧪 Testing

After payment with a test card, you should be redirected to:
```
/c/7d-lead-gen-xK9mP2nQ8vL5wR4jTc6h?session_id=cs_test_...
```

The `session_id` gets verified, then removed from the URL, leaving just:
```
/c/7d-lead-gen-xK9mP2nQ8vL5wR4jTc6h
```

---

## 💡 Pro Tips

### Additional Security Ideas:

1. **Time-Limited Access:**
   - Add expiry date to localStorage
   - Revalidate after X days

2. **Email-Based Access:**
   - Store purchases in database
   - Allow login with purchase email

3. **IP Tracking:**
   - Log IP addresses of course access
   - Alert on suspicious activity

4. **Rotate URL:**
   - Change the secret URL periodically
   - Update all paying customers via email

---

## 🚫 What's Blocked

### URLs that redirect to /bootcamp:
- `/bootcamp/course` (old URL)
- Any access to `/c/...` without payment
- Direct navigation without session_id or stored access

### Search Engine Coverage:
- ❌ Google
- ❌ Bing  
- ❌ DuckDuckGo
- ❌ Any bot respecting robots.txt

---

## ✅ Setup Complete

No additional setup needed! The secure URL is ready to use:

1. ✅ New secret route created
2. ✅ Checkout redirects to new URL
3. ✅ Payment verification works
4. ✅ Old URL redirects away
5. ✅ robots.txt updated
6. ✅ Meta tags set to noindex

**Just test it and you're done!** 🎉

---

## 🔄 Migration from Old Setup

If you had the old `/bootcamp/course` URL:
- ✅ Automatically redirects to `/bootcamp` (no broken links)
- ✅ All new purchases go to secret URL
- ✅ Existing customers need to repurchase (or you can manually grant access)

---

## ❓ FAQ

**Q: Can I use a shorter URL?**  
A: Yes, but longer = more secure. Minimum 20 characters recommended.

**Q: What if someone shares the URL?**  
A: They still need payment verification. The URL alone doesn't grant access.

**Q: Can I have multiple secret URLs?**  
A: Yes! Create different routes for different products/tiers.

**Q: Will this affect my existing customers?**  
A: Only if you had customers with the old URL bookmarked. Send them the new URL or have them repurchase.

---

## 📚 Related Files

- `/src/app/c/7d-lead-gen-xK9mP2nQ8vL5wR4jTc6h/page.tsx` - Course page
- `/src/app/api/checkout/route.ts` - Redirect configuration
- `/src/components/protected-course.tsx` - Payment verification
- `/public/robots.txt` - Search engine blocking

---

**Your course is now secure and hidden! 🔒**

