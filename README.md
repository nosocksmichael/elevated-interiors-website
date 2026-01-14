# Elevated Interiors Website

Designer-grade room transformations in 1 week. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Brand Positioning

**Category:** Space Upscale Experts (not interior designers)
**Framework:** The Loveable Spaces Framework™ (Diagnose. Design. Deliver.)
**Enemy:** Fighting the Renovation Industrial Complex
**Tagline:** Make your spaces loveable again

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel (Static Export)

## Brand Design System

### Colors
- **Cream** (#F5F3EF) - Primary background
- **Warm Taupe** (#D4C5B3) - Accents & borders
- **Charcoal** (#3A3A3A) - Primary text
- **Soft Grey** (#9B9B9B) - Secondary text
- **Sage Green** (#8A9A7B) - Success states
- **Natural Wood** (#A67C52) - Accent color

### Typography
- **Serif (Headings):** Playfair Display
- **Sans (Body):** Inter

### Spacing
Custom Tailwind spacing scale (4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128)

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with Header/Footer
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles & brand system
│   │   ├── framework/
│   │   │   └── page.tsx            # Framework deep dive
│   │   ├── services/
│   │   │   ├── page.tsx            # Services overview
│   │   │   ├── room-upscale/       # Room Upscale service
│   │   │   ├── painting/           # Painting service
│   │   │   ├── accent-walls/       # Accent Walls service
│   │   │   └── consultation/       # Design Consultation service
│   │   ├── about/
│   │   │   └── page.tsx            # About page with brand story
│   │   └── consultation/
│   │       ├── page.tsx            # Consultation booking page
│   │       └── ConsultationForm.tsx # Client-side form component
│   └── components/
│       ├── Header.tsx              # Navigation header
│       ├── Footer.tsx              # Site footer
│       └── CTASection.tsx          # Reusable CTA component
├── tailwind.config.ts              # Tailwind with brand colors
├── next.config.js                  # Next.js config (static export)
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation

1. **Navigate to the website directory:**
   ```bash
   cd orchestrator/projects/elevated-interiors/website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build production static site
- `npm run start` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment to Vercel

### First-Time Setup

1. **Install Vercel CLI (optional):**
   ```bash
   npm i -g vercel
   ```

2. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Elevated Interiors website"
   ```

3. **Create GitHub repository:**
   - Go to github.com and create a new repository
   - Follow GitHub's instructions to push your local repo:
   ```bash
   git remote add origin YOUR_GITHUB_REPO_URL
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

### Deployment Settings

Vercel will auto-detect these settings, but verify:

- **Framework Preset:** Next.js
- **Build Command:** `next build`
- **Output Directory:** `out` (auto-configured by next.config.js)
- **Install Command:** `npm install`
- **Development Command:** `next dev`

### Environment Variables

Currently, no environment variables are required. When you add form submission (e.g., email service), add them in Vercel dashboard:

1. Go to Project Settings → Environment Variables
2. Add variables (e.g., `NEXT_PUBLIC_FORM_ENDPOINT`)
3. Redeploy

### Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `elevatedinteriors.ca`)

2. **Update DNS Records:**
   - Add A record pointing to Vercel's IP: `76.76.21.21`
   - Or add CNAME record pointing to your Vercel project URL
   - Add `www` subdomain if desired

3. **Update Contact Information:**
   - Update phone number in [src/components/Footer.tsx](src/components/Footer.tsx:120)
   - Update email in [src/components/Footer.tsx](src/components/Footer.tsx:128)
   - Update schema.org data in [src/app/layout.tsx](src/app/layout.tsx:24-54)

## Continuous Deployment

Once connected to GitHub:

1. Push changes to main branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. Vercel automatically builds and deploys
3. Preview URL provided for every push
4. Production deployment on main branch

## Content Updates

### Update Contact Info
- Phone: [src/components/Footer.tsx](src/components/Footer.tsx:120)
- Email: [src/components/Footer.tsx](src/components/Footer.tsx:128)
- Address: [src/components/Footer.tsx](src/components/Footer.tsx:112)

### Add Before/After Images
Replace placeholder sections in:
- [src/app/page.tsx](src/app/page.tsx) - Homepage
- [src/app/framework/page.tsx](src/app/framework/page.tsx) - Framework page
- [src/app/services/room-upscale/page.tsx](src/app/services/room-upscale/page.tsx) - Service pages

### Form Submission Integration
Update [src/app/consultation/ConsultationForm.tsx](src/app/consultation/ConsultationForm.tsx:19-24):
- Replace `console.log` with actual form submission
- Options: Formspree, EmailJS, custom API route, or CRM integration

### Update Social Links
Update Instagram/Facebook/LinkedIn URLs in:
- [src/components/Footer.tsx](src/components/Footer.tsx:24-26)

## SEO Optimization

### Metadata
Each page has custom metadata:
- Title tags optimized for SEO
- Meta descriptions (155 characters)
- Open Graph tags for social sharing

### Schema Markup
LocalBusiness schema in [src/app/layout.tsx](src/app/layout.tsx:24-54):
- Update business details when going live
- Update coordinates for actual location
- Update phone/email/URL

### Performance
- Static site generation for fast load times
- Optimized images (when added, use Next.js Image component)
- Minimal JavaScript (only form interactions)

## Brand Guidelines Integration

This website implements the complete [BRAND-STYLE-GUIDE.md](../../BRAND-STYLE-GUIDE.md):
- Color palette precisely matched
- Typography hierarchy (Playfair Display + Inter)
- Button styles (primary & secondary)
- Spacing system (custom Tailwind scale)
- Tone of voice (bold, direct, anti-renovation-industrial-complex)

## Messaging Framework

All content follows The Loveable Spaces Framework™:
- **Category:** Space Upscale Experts
- **Enemy:** Renovation Industrial Complex
- **Proof:** Before/afters (placeholders for now) + testimonials
- **Tagline:** Make your spaces loveable again

## Support & Next Steps

### Immediate Next Steps
1. ✅ Build and deploy to Vercel
2. 🔲 Add real contact information
3. 🔲 Set up form submission service
4. 🔲 Add before/after photography
5. 🔲 Configure custom domain
6. 🔲 Add Google Analytics (optional)

### Future Enhancements
- Blog/insights section
- Client testimonials page
- Project portfolio gallery
- Online booking calendar integration
- Live chat widget

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next out
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)
# Or use different port
npm run dev -- -p 3001
```

### Deployment Issues
- Check Vercel build logs in dashboard
- Verify all dependencies in package.json
- Ensure `next.config.js` has `output: 'export'`

## License

© 2024 Elevated Interiors. All rights reserved.
