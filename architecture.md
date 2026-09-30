# Architecture Document

## Overall Architecture
* **Stack:** Single Next.js 14+ (App Router) repository.
* **Language:** TypeScript (Strict mode).
* **Styling:** Tailwind CSS.
* **UI Components:** shadcn/ui (used selectively, avoiding generic templates).
* **Backend & Database:** Supabase (PostgreSQL).
* **ORM:** None. Relying on Supabase's native typed database client (Prisma is explicitly NOT to be introduced unless documented technical reasons arise).
* **Forms & Validation:** Zod.

## Application Architecture
* **Server Logic:** Utilize Next.js Server Components (RSC) for data fetching and SEO optimization.
* **Mutations:** Use Next.js Server Actions for form submissions (Contact, Reservations) and database mutations.
* **Client/Server Responsibilities:** Minimize client-side JavaScript. Keep interactive components (e.g., Modals, Cart state) as client components, while layout and content are server components.

## Folder Structure
```text
project-root/
├── app/
│   ├── (public)/ (Home, Menu, Gallery, Contact)
│   ├── admin/ (Protected routes)
│   ├── api/ (Webhooks/Route handlers)
├── components/
│   ├── ui/ (shadcn primitives)
│   ├── layout/
│   ├── navigation/
│   ├── [features]/ (Menu, Gallery, Ordering)
├── lib/
│   ├── supabase/
│   ├── validations/
│   ├── utilities/
├── actions/
├── types/
├── public/
├── supabase/
│   ├── migrations/
├── tests/
├── .env.local
├── .env.example
```

## Supabase & Database Architecture
* **Database:** PostgreSQL.
* **Migration Strategy:** Database changes must be migration-based, reproducible, and version-controlled. No manual production DB changes.
* **Authentication:** Supabase Auth for Admin users. Public site remains unauthenticated.
* **Storage:** Supabase Storage for menu/gallery images.
* **RLS Strategy:** Strict Row Level Security policies. Examples:
  * Public read for menu/gallery.
  * Public insert for contact inquiries.
  * Admin-only full access for all tables.
* **Entities (Future):** `profiles`, `menu_categories`, `menu_items`, `orders`, `order_items`, `customers`, `reservations`, `restaurant_settings`.

## Security & Secret Management
* **Secrets:** All secrets stored in `.env.local` locally and Vercel Environment Variables in production.
* **Service Role Key:** The Supabase `service_role` key must NEVER be exposed to client-side code.
* **Public Keys:** `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
* **Authorization:** Admin functionality verified on the server-side, not just via frontend routing.

## Deployment Architecture
* **Hosting:** Vercel (preferred for Next.js).
* **Source Control:** GitHub.

## Future Scalability Considerations
* Native online ordering, payments, and reservation tables should be designed to plug into the existing architecture without a complete rewrite.
* Order status state machine (`PENDING`, `PREPARING`, `READY`, etc.).

## Architecture Decisions Still Required
* **Payment Architecture:** Selection of payment gateway (e.g., Stripe vs. Local Gateway) and associated webhook architecture.
* **Reservation Architecture:** Integration vs. Custom DB tables.
* **Email/Notification Routing:** Selection of email provider for contact form / order confirmations.
* **Analytics Implementation:** Integration strategy for Google Analytics or alternatives.
