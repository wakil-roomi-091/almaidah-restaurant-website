# Implementation Roadmap (Tasks)

## Phase 0 — Project Inspection
- [x] Analyze PRD and Master Prompt.
- [x] Inspect existing workspace.
- [x] Inspect Stitch project `7703841959310545812`.

## Phase 1 — Architecture
- [x] Confirm technical stack (Next.js, Tailwind, Supabase, shadcn).
- [x] Generate documentation system (`PRD.md`, `architecture.md`, etc.).

## Phase 2 — External Service Setup
- [?] User to create Supabase Project and set `.env.local` locally.
- [?] User to initialize GitHub repository locally.
- **Approval Gate:** Await user confirmation of `.env.local` readiness.

## Phase 3 — Project Scaffolding
- [ ] Initialize Next.js App Router (TypeScript, Tailwind).
- [ ] Install dependencies (`lucide-react`, `@supabase/supabase-js`, `zod`, `react-hook-form`).
- [ ] Configure `tailwind.config.ts` with brand colors, fonts, and radius.
- [ ] Setup folder structure (`app`, `components`, `lib`, `actions`).
- [ ] Setup Supabase clients (`@supabase/ssr`).

## Phase 4 — Design System
- [ ] Configure `fonts` (Newsreader, Plus Jakarta Sans) locally.
- [ ] Build UI primitive components (Button, Input, Form) matching Stitch.
- [ ] Build complex UI components (MenuCard, ReviewCard, DeliveryBadge).
- **Approval Gate:** Visual QA of core components against Stitch.

## Phase 5 — Public Website
- [ ] Implement global Layout (Header, Navigation, Footer).
- [ ] Implement Home Page (Hero, Brand Intro, Featured).
- [ ] Implement Menu Page (Matrix grid, Rail/Bottom Bar).
- [ ] Implement Gallery Page.
- [ ] Implement Contact Page (Map UI, Hours, Form UI).

## Phase 6 — Database / Backend
- [ ] **Approval Gate:** Present database schema for user review.
- [ ] Create Supabase schema (Migrations for `contact_inquiries`).
- [ ] Implement RLS policies.
- [ ] Implement Server Actions (Submit contact form).

## Phase 7 — Ordering (Initial)
- [ ] Implement Foodpanda deep-link / modal integration UI.
- [ ] *(Native Cart & Ordering deferred)*

## Phase 8 — Reservations (Initial)
- [ ] Implement Table Request contact form.
- [ ] *(Native Booking system deferred)*

## Phase 9 — Admin
- [ ] *(Deferred - Future Scope)*

## Phase 10 — Payments / Delivery
- [ ] *(Deferred - Future Scope)*

## Phase 11 — SEO / Accessibility / Performance
- [ ] Implement Next.js Metadata (Titles, Descriptions).
- [ ] Implement JSON-LD Structured Data.
- [ ] Ensure Image optimization & Alt tags.
- [ ] Verify Keyboard navigation and Focus rings.

## Phase 12 — Testing / QA
- [ ] Type-check, Lint, Build.
- [ ] Verify responsiveness across 4 viewports.

## Phase 13 — Deployment
- [ ] **Approval Gate:** Verify production configuration for Vercel.
- [ ] Push to GitHub & deploy via Vercel.

## Phase 14 — Final Stitch Verification
- [ ] Compare deployed site against Stitch source of truth.
- [ ] Fix visual differences.

## Blocked / Waiting for Decisions
- **Phase 2:** Waiting for User to complete Supabase project setup and confirm `.env.local`.
- **Database Schema:** Awaiting drafting and user approval in Phase 6.
- **Missing Content:** Waiting for final business content, menu items, prices, and address.
