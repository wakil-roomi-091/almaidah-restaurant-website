# Design System Document

## Design Source of Truth
* **Platform:** Stitch MCP
* **Project ID:** `7703841959310545812`

## Overall Visual Direction
* **Brand Direction:** Authentic Pakistani & Shinwari culinary heritage.
* **Design Philosophy:** "Editorial Minimalism" combined with "Warm Tactile Luxury". Expansive, airy canvas layers allowing food imagery to breathe, paired with a structured typographic rhythm.

## Colors
* **Primary:** `#801323` (Deep Pomegranate Burgundy) - High-priority actions, brand headers.
* **Secondary:** `#D9822B` (Saffron & Roasted Amber) - Badges, active tabs, star ratings.
* **Tertiary:** `#2A2624` (Charred Karahi Charcoal) - Display typography, footer surfaces, structured borders.
* **Backgrounds:** `#FBF8F3` (Warm Cardamom Cream), `#FFFFFF` (Surface Card).
* **Utility / Accent:** `rgba(42, 38, 36, 0.08)` (Subdued border), `#D70F64` (Foodpanda Magenta).

## Typography
* **Headlines / Display:** `Newsreader` (Serif). Used for main headers, section intros, menu descriptions, and phonetic dish names.
* **Body / UI / Meta:** `Plus Jakarta Sans` (Sans-serif). Used for standard text, prices, portion weights, labels, and dietary tags.

## Layout Principles & Spacing
* **Responsive Grid:** 12-column (Desktop max 1280px), 8-column (Tablet), 4-column (Mobile).
* **Spacing Scale:** Expansive vertical breathing space (`space-xl` up to `6rem`) for outer sections. Standard scale includes `space-xs` (0.25rem) to `margin` (3rem).
* **Menu Matrix:** 3 columns (Desktop), 2 columns (Tablet), 1 column (Mobile).
* **Rails:** Desktop features a fixed right-hand summary rail; Mobile converts this into an anchored bottom bar.

## Components
* **Buttons:**
  * *Primary:* Deep Burgundy `#801323` fill, white text, subtle top-edge amber sheen. Hover lifts brightness and adds 2px elevation.
  * *Secondary:* Warm Amber `#D9822B` background, Charcoal text.
  * *Ghost / Outline:* Cream-backed, 1px solid `rgba(42, 38, 36, 0.2)` with burgundy hover fill.
* **Menu Cards:** Pure white `#FFFFFF` surface, 1px subdued border, top-aligned high-aspect food photography, embedded dietary tags. Ambient tinted shadow.
* **Review Cards:** Textured card, 5 amber stars, italicized Newsreader quotes.
* **Delivery Integration:** Dual-action module with Foodpanda modal button (Magenta).
* **Forms:** Cardamom cream background, bottom-line emphasis. Focus state snaps to deep burgundy ring with a 2px stroke.

## Shapes & Elevation
* **Borders / Radius (`roundedness: 1`):** Base UI (`4px`), Food images (`8px`), Category pills (Fully rounded).
* **Shadows:** No harsh drop shadows. Use ambient tinted shadow: `0 4px 20px -2px rgba(128, 19, 35, 0.04)`.
* **Image Treatment:** Warm photo filters, deep contrast, slight vignette.

## Design Information Requiring Verification
* Exact pixel values for typography scale at different breakpoints (Mobile vs Desktop sizes).
* Specific SVG code for the exact icons (Socials, Cart, Map pins).
* Exact footer layout composition.
* Exact menu category tab interactions.
