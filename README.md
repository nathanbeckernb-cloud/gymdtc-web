# Gym DTC Marketing Website

Premium marketing site for **Gym DTC**, a mobile-first training platform for athletes, wrestling programs, schools, teams, families, and adults who need structure, accountability, and progress tracking outside practice.

## Site direction

- Athletic, dark, sharp visual system with volt/lime accents
- Direct copy focused on structure, consistency, coach trust, family clarity, and real-world training
- App Router pages for Home, About, Features, and Contact
- Reusable layout, card, heading, CTA, logo, header, and footer components
- Placeholder social proof cards prepared for pilot feedback, coach quotes, family notes, and athlete testimonials
- Waitlist and team pilot forms post to a Vercel-ready contact API route
- Mobile app links intentionally represented as coming soon

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Useful commands

```bash
npm run dev       # Start local development server
npm run build     # Create a production build
npm run start     # Run the production build locally
npm run lint      # Run Next.js lint checks
npm run typecheck # Run TypeScript checks without emitting files
```

## Project structure

```text
src/app/          App Router routes and global styles
src/components/   Reusable marketing components
src/lib/          Shared site metadata and navigation
```

## Launch notes

- Replace social proof placeholders with real pilot quotes, school/program names, or launch metrics when approved.
- Set `FORMSPREE_ENDPOINT` or `CONTACT_FORM_ENDPOINT` in Vercel to forward waitlist and team pilot submissions to Formspree or another secure intake webhook.
- Add App Store and Google Play links when mobile app pages are available.
