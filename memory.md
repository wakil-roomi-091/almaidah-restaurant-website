# Project Memory

## Project Identity
* **Name:** Al Maidah Restaurant Website Design
* **Business:** Authentic Pakistani & Shinwari restaurant located in Peshawar.
* **Purpose:** Create a premium customer-facing website reflecting culinary opulence while driving menu discovery, Foodpanda delivery, and table reservations.

## Authority & Sources of Truth
* **Design/Visuals:** Stitch Project `7703841959310545812`.
* **Product/Requirements:** `PRD.md`.
* **Technical Constraints:** `architecture.md` and `rules.md`.

## Technology Stack
* Next.js 14+ (App Router), TypeScript, Tailwind CSS, shadcn/ui.
* Supabase (PostgreSQL, Auth, Storage) via native typed client.
* **Strict Restriction:** DO NOT introduce Prisma. DO NOT introduce arbitrary state management. 

## Important Development Rules
* **Gates:** NEVER create database schema, install major dependencies, configure external services, or deploy without explicit user approval.
* **Secrets:** NEVER ask for database passwords, service role keys, or paste them in chat. Use `.env.local`.
* **Content:** NEVER fabricate business data (prices, addresses, history). Use `TBD`.
* **Images:** NO AI-generated images. Prefer real business images or approved web assets.

## Design Philosophy
* "Editorial Minimalism" and "Warm Tactile Luxury".
* Colors: Burgundy (`#801323`), Amber (`#D9822B`), Charcoal (`#2A2624`), Cream (`#FBF8F3`).
* Typography: `Newsreader` (Headings) and `Plus Jakarta Sans` (Body).
* Elevation: No harsh drop shadows; use subtle tinted ambient shadows. Focus rings are Burgundy with 2px stroke.

## Current State
* **Status:** Documentation Phase Completed. Waiting for User to setup Supabase Project.
* **Milestones Completed:** Phase 0 (Inspection), Phase 1 (Architecture).
* **Next Milestone:** Phase 2 (External Service Setup), Phase 3 (Project Scaffolding).

## Future / Deferred Features
* Full Native E-Commerce Cart & Ordering System.
* Real-time Reservation Booking Engine.
* Admin Dashboard for menu and order management.
* Payments Integration.

## Important Unresolved Items
* **Business Facts:** Address, Phone, Exact Menu Data, History, Opening Hours.
* **Payment/Delivery Providers:** Final architectural choice for processing local payments.
* **Email Provider:** Strategy for routing contact forms and booking requests.
