# Product Requirements Document (PRD)

## Project Overview
The project is a professional customer-facing website for Al Maidah Peshawar, a high-end authentic Pakistani and Shinwari restaurant/cafe. It serves as the primary digital touchpoint for visitors to explore the culinary heritage, view the complete menu, browse the gallery, find location/contact information, and initiate orders or reservations.

## Business Purpose & Context
* **Purpose:** Establish a premium digital presence reflecting culinary opulence, authentic heritage, and warm hospitality, while providing clear utility (menu browsing, location finding, ordering, reservations).
* **Target Users:** Dine-in customers, takeout/delivery customers, event planners.
* **Goals:** 
  * Primary: Accurate digital representation of the physical brand.
  * Secondary: Facilitate online ordering (e.g., via Foodpanda) and party bookings.

## Core User Journeys
1. Visitor → Home → Menu → Menu Item → Contact/Order
2. Visitor → Home → Reservation → Reservation Submission → Confirmation
3. Visitor → Home → Location → Directions
4. Visitor → Home → Gallery → Gallery viewing
5. Visitor → Home → Contact → Contact action
6. Visitor → Menu → Order → Cart → Checkout → Confirmation

## Page-Level Requirements

### 1. Home Page
* **Header/Navigation:** Sticky navigation.
* **Hero Section:** High-aspect photography of dishes/ambiance.
* **Brand Introduction:** Heritage story.
* **Featured Menu/Categories:** Sneak peek into signature dishes.
* **Delivery Integration:** Foodpanda direct dispatch trigger.
* **Testimonials/Reviews:** Textured cards with 5 amber stars.
* **Footer:** Links, location, hours, social media.

### 2. Menu Page
* **Structure:** Desktop 3-column matrix, Tablet 2-column, Mobile 1-column cards.
* **Content:** Food photography, Title, Description, Price, Dietary Tags.
* **Interactions:** Category switching/filtering.
* **Desktop Rail:** Fixed right-hand summary rail for party bookings/delivery basket (converts to bottom bar on mobile).

### 3. Gallery Page
* **Structure:** Grid layout utilizing 8px corner rounding.
* **Content:** Restaurant interior, banquet setups, food photography.

### 4. Contact & Location Page
* **Content:** Physical address, Google Maps, Phone, Email, WhatsApp, Opening Hours.
* **Form:** Contact form for general inquiries.

## Functional & Non-Functional Requirements

### Functional
* Navigation across 4 primary pages.
* Menu filtering by category.
* Foodpanda integration triggers (CTA buttons).
* Contact form submission.
* Future reservation request functionality.
* Future online ordering functionality.

### Non-Functional
* **Performance:** Optimized images, lazy loading, Next.js optimization.
* **Responsive:** Mobile (4-col), Tablet (8-col), Desktop (12-col).
* **Accessibility:** Semantic HTML, keyboard navigation, focus states (burgundy rings), alt text.
* **SEO:** Meta tags, semantic hierarchy, JSON-LD (LocalBusiness, Restaurant, Menu).
* **Security:** Form input validation (Zod), secrets in `.env.local`.

## Content Requirements
* **Images:** Prefer real business/client images; NO AI-generated restaurant photography unless explicitly approved.
* **Business Info:** NO FABRICATION of prices, addresses, phones, emails, reviews, awards, opening hours, or delivery fees.

## Future / Deferred Requirements
* Real-time Reservation System (Future Scope).
* Native Online Ordering System (Cart, Checkout, Payment Integration, Delivery Architecture) (Future Scope).
* Admin Dashboard (Dashboard, Orders, Menu, Customers, Content) (Future Scope).

## Out-of-Scope Items
* Restaurant POS system.
* Internal kitchen management / ticket generation.
* Proprietary delivery fleet management.
* Advanced CRM.

## Missing Information & Open Questions
* **Exact Business Info:** Physical address, phone number, email, WhatsApp, opening hours.
* **Final Menu Data:** Items, descriptions, exact prices, dietary tags.
* **Business Content:** Official restaurant history, mission, values, real reviews/awards.
* **Asset Availability:** Final production high-res photos and logo assets.
* **Payment/Delivery Provider:** Final decision on local gateway vs. Stripe, delivery zones.
* **Reservation Rules:** Capacity constraints, timeslots, max party size.
* **Email/SMS Provider:** Decision for contact form routing (e.g., Resend, SendGrid).
* **Analytics Provider:** Decision (e.g., Google Analytics, Plausible).
* **Domain & SEO:** Production domain name, specific keywords.
