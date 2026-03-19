# AliraLabs - Consulting Website

## Overview
Professional single-page website for AliraLabs, a consulting company specializing in agile training, leadership development, digital transformation, and learning products.

## Tech Stack
- **Frontend**: React + TypeScript with Vite, TailwindCSS, shadcn/ui components, Framer Motion for animations
- **Backend**: Express.js with TypeScript
- **Database**: MySQL with Drizzle ORM (connection via MYSQL_URL env var)
- **Routing**: wouter (client-side)

## Project Architecture
```
client/src/
  pages/home.tsx          - Main landing page
  components/
    navbar.tsx            - Fixed navigation bar
    hero-section.tsx      - Hero with background image
    services-section.tsx  - 4 service cards
    about-section.tsx     - Company info & stats
    testimonials-section.tsx - Client testimonials (from API)
    contact-section.tsx   - Contact form (posts to API)
    footer-section.tsx    - Footer with links
server/
  db.ts                   - Database connection
  storage.ts              - Database storage interface
  routes.ts               - API routes (/api/testimonials, /api/contact)
  seed.ts                 - Seed testimonials data
shared/
  schema.ts               - Drizzle schema (contactInquiries, testimonials)
```

## API Endpoints
- `GET /api/testimonials` - Fetch all testimonials
- `POST /api/contact` - Submit contact inquiry (name, email, company, service, message)

## Design
- Font: Inter (sans), Playfair Display (serif), JetBrains Mono (mono)
- Color scheme: Blue primary (#217 91% 35%), clean professional palette
- Dark mode support via CSS variables
- Images stored in client/public/images/

## Running
- `npm run dev` starts both frontend and backend on port 5000
- Database schema pushed via `npx drizzle-kit push`
