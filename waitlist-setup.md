# Waitlist Setup — Vercel + Supabase

A self-hosted waitlist using Vercel serverless functions and Supabase as the database. No third-party email tools needed for collection. Free tier on both platforms is enough for early-stage.

---

## How It Works

1. User enters their email on your landing page
2. The form sends a POST request to `/api/waitlist`
3. A Vercel serverless function receives the email
4. The function inserts the email into a Supabase table
5. User sees a confirmation message
6. You log into Supabase anytime to view/export the list

---

## Step 1 — Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project (pick a name and a strong database password — save that password)
3. Once the project is ready, go to **Table Editor → New Table**
4. Name the table `waitlist`
5. Add these columns:

| Column Name | Type | Notes |
|---|---|---|
| `id` | int8 | Primary key, auto-increment (default) |
| `email` | text | Required, unique |
| `created_at` | timestamptz | Default value: `now()` |

6. Go to **Project Settings → API**
7. Copy and save two things:
   - **Project URL** (looks like `https://xyzxyz.supabase.co`)
   - **anon public key** (long string under "Project API keys")

---

## Step 2 — Add Environment Variables to Vercel

1. Go to your project on [vercel.com](https://vercel.com)
2. Go to **Settings → Environment Variables**
3. Add these two variables:

```
SUPABASE_URL = your project URL from step 1
SUPABASE_ANON_KEY = your anon public key from step 1
```

4. Also create a `.env.local` file in the root of your local project for development:

```
SUPABASE_URL=your_project_url_here
SUPABASE_ANON_KEY=your_anon_key_here
```

> Make sure `.env.local` is in your `.gitignore` — never push this to GitHub.

---

## Step 3 — Install Supabase Client

In your project terminal:

```bash
npm install @supabase/supabase-js
```

---

## Step 4 — Create the Supabase Client File

Create a new file at `lib/supabaseClient.js`:

```js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

---

## Step 5 — Create the Serverless Function

Create a new file at `api/waitlist.js`:

```js
import { supabase } from '../lib/supabaseClient'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  // Basic validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  // Insert into Supabase
  const { error } = await supabase
    .from('waitlist')
    .insert([{ email: email.toLowerCase().trim() }])

  if (error) {
    // Handle duplicate email gracefully
    if (error.code === '23505') {
      return res.status(409).json({ error: 'This email is already on the waitlist.' })
    }
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }

  return res.status(200).json({ message: 'You are on the list!' })
}
```

---

## Step 6 — Build the Frontend Form

This is a plain HTML + JS example. Adapt it to whatever framework you are using.

```html
<form id="waitlist-form">
  <input
    type="email"
    id="email-input"
    placeholder="Enter your email"
    required
  />
  <!-- Honeypot field — keeps bots out, users never see this -->
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off" />
  <button type="submit">Join Waitlist</button>
  <p id="form-message"></p>
</form>

<script>
  document.getElementById('waitlist-form').addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.getElementById('email-input').value
    const honeypot = e.target.querySelector('[name="website"]').value
    const messageEl = document.getElementById('form-message')

    // If honeypot is filled, silently reject (it's a bot)
    if (honeypot) return

    messageEl.textContent = 'Submitting...'

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await res.json()

      if (res.ok) {
        messageEl.textContent = '🎉 You are on the list! We will be in touch.'
        document.getElementById('email-input').value = ''
      } else {
        messageEl.textContent = data.error || 'Something went wrong.'
      }
    } catch (err) {
      messageEl.textContent = 'Network error. Please try again.'
    }
  })
</script>
```

---

## Step 7 — Test Locally

```bash
vercel dev
```

Go to `http://localhost:3000`, submit a test email, then check your Supabase Table Editor to confirm the row was inserted.

---

## Step 8 — Deploy

```bash
vercel --prod
```

Or just push to your GitHub repo if it is connected to Vercel for auto-deploy.

---

## Viewing and Exporting Your Waitlist

- **View:** Supabase dashboard → Table Editor → `waitlist` table
- **Export as CSV:** Table Editor → top right menu → Export to CSV
- **Quick count:** Go to SQL Editor and run `SELECT COUNT(*) FROM waitlist;`

---

## Folder Structure After Setup

```
your-project/
├── api/
│   └── waitlist.js        ← serverless function
├── lib/
│   └── supabaseClient.js  ← supabase client
├── .env.local             ← local env vars (not pushed to git)
├── .gitignore             ← make sure .env.local is listed here
└── ... rest of your project
```

---

## Notes for Cursor

- If Cursor asks where to save emails, tell it: **Supabase, table named `waitlist`**
- If it generates a different folder structure for the API route, that is fine — just make sure the fetch URL in the frontend matches the actual route path
- If you are using **Next.js**, the API route goes in `pages/api/waitlist.js` or `app/api/waitlist/route.js` depending on whether you are using the App Router or Pages Router — tell Cursor which one you are using
- The `.env.local` file must exist locally for `vercel dev` to work, even if the variables are already set on Vercel's dashboard
