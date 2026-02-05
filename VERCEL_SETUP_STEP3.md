📋 STEP 3 — Add Environment Variable in Vercel (MANUAL)

This is what YOU need to do in Vercel's dashboard:

1️⃣ Go to your Vercel project:
   https://vercel.com/dashboard

2️⃣ Find your GenTech Portfolio project

3️⃣ Click → Settings (at top)

4️⃣ Look for → Environment Variables (left sidebar)

5️⃣ Click → Add New
   
6️⃣ Fill in:
   Name: DATABASE_URL
   Value: postgresql://neondb_owner:abcd1234@ep-xxxxx.neon.tech/gentech_db?sslmode=require
   
   (Copy from your Neon dashboard)

7️⃣ Click → Save

8️⃣ Now redeploy:
   - Go to Deployments
   - Click the latest deployment
   - Click "Redeploy" button
   - Wait for it to finish ✓

That's it! Your API will now have access to DATABASE_URL 🎯

---

✅ What You've Done So Far:

✓ STEP 1 — Installed pg package (Done ✓)
✓ STEP 2 — Created /api folder with:
  - api/db.js (database connection)
  - api/projects.js (API endpoint)
✓ STEP 4 — Updated Projects.jsx to fetch from API (Done ✓)

⏳ STEP 3 — Add DATABASE_URL in Vercel (Your Turn!)
