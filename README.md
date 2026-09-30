# Al Maidah Restaurant — Official Frontend

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

The official, production-ready frontend web application for **Al Maidah Restaurant** (Warsak Road Branch, Peshawar). This repository contains a high-performance, SEO-friendly, and fully responsive user interface designed to reflect the authentic Shinwari culinary heritage and premium dining experience of Al Maidah.

## 🚀 Features

- **Next.js 14 App Router:** Leveraging the latest Next.js features for optimal routing, rendering, and performance.
- **Cinematic Motion Design:** Integrated `framer-motion` for buttery smooth page transitions, scroll-reveals, and micro-interactions.
- **Responsive Architecture:** Pixel-perfect adjustments across Desktop, Tablet, and Mobile breakpoints using Tailwind CSS.
- **Dynamic Routing & Lazy Loading:** Skeleton loading states and optimized asset delivery for a native app-like feel.
- **Live Google Maps Integration:** Interactive embeds mapping directly to the Arbab Sajjad Plaza location.

## 📁 Project Structure

The frontend application is housed inside the `client/` directory.

```text
almaidah-restaurant-website/
├── client/                     # Next.js Application Root
│   ├── src/
│   │   ├── app/                # App Router Pages & Layouts
│   │   ├── components/         # Reusable UI Components & Animations
│   │   └── ...
│   ├── public/                 # Static Assets
│   ├── tailwind.config.ts      # Styling Configuration
│   └── package.json            # Frontend Dependencies
└── README.md
```

## 🛠️ Local Development

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wakil-roomi-091/almaidah-restaurant-website.git
   cd almaidah-restaurant-website
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd client
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🌐 Deployment (Vercel)

This project is optimized for deployment on Vercel.

1. Create a [Vercel account](https://vercel.com/) and connect your GitHub.
2. Click **Add New Project** and import this repository.
3. **CRITICAL:** In the project settings, set the **Root Directory** to `client`.
4. Ensure the Framework Preset is set to **Next.js**.
5. Click **Deploy**.

## 📄 License

© 2025 Al Maidah Restaurant. All rights reserved. Codebase proprietary to the Al Maidah development team.
