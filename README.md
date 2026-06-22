# Teacher Lynn (刘老师) — Landing Page

A custom landing page for Lynn (刘老师), an O-Level Chinese tutor based in Singapore. Built with Next.js 14 + Tailwind CSS. Deploy to Vercel in one click.

The **student portal** (homework, schedule, Zoom link, materials) is handled separately by **Softr + Airtable** — see the "Portal Setup" section below.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

---

## 📤 Push to your GitHub

```bash
cd teacher-lynn
git init
git add .
git commit -m "Initial commit: Teacher Lynn landing page"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/teacher-lynn.git
git push -u origin main
```

---

## 🌐 Deploy to Vercel (free)

1. Go to https://vercel.com/new
2. Import your `teacher-lynn` GitHub repo
3. Click **Deploy** — that's it. Vercel auto-detects Next.js.
4. Add your custom domain (e.g. `teacherlynn.sg`) in Project Settings → Domains.

---

## ✏️ What to customise before going live

Open these files and update:

| File | What to change |
|---|---|
| `src/components/Hero.tsx` | WhatsApp number (`wa.me/6500000000`) |
| `src/components/CTA.tsx` | Calendly URL + WhatsApp number + Softr portal URL |
| `src/components/Footer.tsx` | WhatsApp, email, portal links |
| `src/components/Programs.tsx` | Prices if different from S$60/hr |
| `src/components/Testimonials.tsx` | Real student quotes (with permission) |
| `src/app/layout.tsx` | Meta description / SEO keywords |

---

## 🗂️ Student Portal Setup (Softr + Airtable)

The landing page links to `https://teacher-lynn.softr.app` for the student portal. Build it like this:

### Airtable base (4 tables)

**1. Students**
- Name, Phone, Email, Parent contact, Grade level, Subjects (linked → Programs), Status

**2. Lessons**
- Date/time, Student (linked → Students), Topic, Status (Scheduled/Done/Rescheduled), Zoom link, Notes

**3. Homework**
- Title, Student (linked → Students), Due date, PDF attachment, Status, Submitted file

**4. Materials Library**
- Title, Tags (口试/作文/综合), PDF file, Visible to (linked → Students or "All")

### Softr setup
1. Create free account at softr.io
2. Connect the Airtable base
3. Use "Members" feature → each student logs in with email
4. Pages: Dashboard · My Lessons · My Homework · Materials Library · My Zoom Link
5. Custom domain: point `portal.teacherlynn.sg` to Softr

**Monthly cost:** ~S$30–50 (Softr Basic + Airtable Free tier + domain).

---

## 💚 Notes

- Built using soft jade + cream palette to feel warm and Chinese-tutor-appropriate
- The 红色印章 (red seal) "刘" in the navbar is her brand mark
- Mobile responsive, accessible, fast (Lighthouse 95+ out of the box)
- All copy is bilingual (EN + 中文) where it matters
