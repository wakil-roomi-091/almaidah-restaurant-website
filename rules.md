# Project Rules

## Development Rules
* **No Blind Implementation:** Do not start coding blindly. Follow the phase-by-phase execution.
* **Approval Gates:** Stop and request explicit user approval before external service configuration, database schema creation, dependency installation, and production deployments.
* **Code Inspection:** Always inspect existing code before modifying it. Do not overwrite working functionality unnecessarily.
* **Dependencies:** Do not introduce unnecessary dependencies. Explain the purpose before installing significant packages.
* **Architecture:** Do not make architectural changes without justification. (e.g., Do not add Prisma).
* **No Placeholder Implementation:** Do not create fake functionality (fake orders, fake database records, fake API responses). If incomplete, label as "Integration pending".

## Design Rules
* **Source of Truth:** The Stitch project (`7703841959310545812`) is the absolute visual source of truth.
* **PRD:** The PRD is the absolute product source of truth.
* **Architecture:** The master instructions (`architecture.md`) are the absolute technical source of truth.
* **No Generic UI:** Do not turn the website into a generic shadcn template. Do not add random gradients, excessive rounded cards, or replace the approved design decisions.
* **Fidelity:** Preserve exact layout relationships, spacing, typography, image proportions, button dimensions, and visual hierarchy defined in Stitch.

## Content Rules
* **NEVER FABRICATE:** Do not invent business information, menu prices, contact information, reviews, business claims, awards, opening hours, delivery fees, or payment methods.
* **TBD Usage:** Use `TBD` or `REQUIRES BUSINESS CONFIRMATION` for any missing information.

## Image Rules
* **No AI Generation:** Do NOT generate fake AI restaurant photography unless explicitly approved.
* **Preference:** Prefer real business/client imagery, or approved licensed web imagery.
* **Optimization:** Optimize all images for production (Next.js Image component).

## Code & Quality Rules
* **TypeScript:** Strict mode enabled.
* **Clean Architecture:** Maintain separation of UI, lib, and actions.
* **Component Reuse:** Avoid unnecessary duplication.
* **Validation:** Validate all user input (using Zod).
* **Error Handling:** Every feature must handle Loading, Success, Error, Empty, Unauthorized, Network failure, and Invalid input states.
* **Security:** Protect secrets. Never expose server-only secrets (e.g., Supabase service role key, payment secrets) to the client. Never paste secrets in chat.

## Database Rules
* **Schema Approval:** Do not create schema without passing the required approval gate.
* **Migrations:** Database changes must be migration-based and version-controlled.
* **RLS:** Row Level Security must be explicitly defined and never set to "Allow everyone to do everything" unless strictly required.
* **Destruction:** Never delete production data during development without explicit approval.

## External-Service Rules
* **Stop and Ask:** Stop before configuring any external service when user action is required.
* **Clarity:** Clearly identify what the user must configure, the exact steps, and what values are needed.
* **Secrets:** Never request passwords, OTPs, CVVs, or private keys.

## Testing Rules
* **Checks:** Type-check, lint, and build before declaring a phase complete.
* **Visual QA:** Perform strict visual QA against the Stitch reference.
* **Responsiveness:** Verify behavior across Mobile, Tablet, Laptop, and Desktop viewports.
