# Deploying NMC Consulting Website

## Before you deploy — two things to update

### 1. Formspree (contact form)
The contact form sends to Formspree. You need a free account and form ID.

1. Go to https://formspree.io and sign up with your email
2. Create a new form — name it "Platform Unlock Audit"
3. Copy your form ID (looks like `xabc1234`)
4. Open `app/contact/page.tsx` and replace `YOUR_FORM_ID` on this line:
   ```
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### 2. Your photo (About page)
The About page has a placeholder where your headshot goes.
Open `app/about/page.tsx` and replace the placeholder `<div>` block with:
```tsx
import Image from 'next/image'

<Image
  src="/nathan.jpg"
  alt="Nathan Carroll"
  width={192}
  height={192}
  className="rounded-2xl object-cover"
/>
```
Put your photo file at `public/nathan.jpg`.

---

## Local development

```bash
npm install
npm run dev
```
Open http://localhost:3000

---

## Deploy to Vercel via GitHub

### Step 1 — initialise the repo
```bash
git init
git add .
git commit -m "Initial commit — NMC Consulting website"
```

### Step 2 — push to GitHub
1. Go to https://github.com/new
2. Create a new repository (e.g. `nmcc-website`)
3. Run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/nmcc-website.git
git branch -M main
git push -u origin main
```

### Step 3 — connect to Vercel
1. Go to https://vercel.com and sign in (or sign up — free)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no config needed
5. Click "Deploy"

Your site will be live at `https://nmcc-website.vercel.app` within ~60 seconds.

### Step 4 — add your custom domain
1. In Vercel dashboard → your project → Settings → Domains
2. Add `nmcconsulting.co.uk` and `www.nmcconsulting.co.uk`
3. Update your DNS records as Vercel instructs (usually two CNAME/A records)

---

## Site structure

```
nmcc-website/
├── app/
│   ├── layout.tsx          Root layout (nav, footer, metadata)
│   ├── page.tsx            Homepage
│   ├── globals.css         Tailwind + global styles
│   ├── how-we-work/        The Product Unlock Method
│   ├── about/              Nathan Carroll bio
│   ├── case-studies/       Client case studies
│   └── contact/            Platform Unlock Audit booking form
├── components/
│   ├── Nav.tsx             Fixed navigation bar
│   ├── Footer.tsx          Site footer
│   └── CTABanner.tsx       Reusable CTA section
└── public/                 Static assets (add your photo here)
```

## SEO — what's already set up

- Full `<metadata>` on every page (title, description, OG tags, Twitter card)
- `lang="en-GB"` on the HTML element
- Server-side rendering on all pages (Google can index everything)
- Semantic HTML throughout
- Mobile responsive layout

## Next steps after launch

1. Set up Google Search Console and submit your sitemap (`/sitemap.xml` — add this later)
2. Install Vercel Analytics (free) for page-level traffic data
3. Add a LinkedIn profile link to the Footer and About page
4. Write your first blog post targeting "MSP product strategy UK" or "managed service pricing model"
