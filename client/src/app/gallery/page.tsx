"use client";

import React from 'react';
import Link from 'next/link';
import SlideUp from '@/components/animations/SlideUp';
import FadeIn from '@/components/animations/FadeIn';

export default function Page() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">

<SlideUp><section className="relative w-full bg-surface-container-low py-16 md:py-24 overflow-hidden">
<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-gutter relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-space-sm">
<span className="inline-block w-8 h-[2px] bg-secondary"></span>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Visual Chronicle &amp; Spaces</span>
</div>
<h1 className="font-display text-display text-primary leading-tight mb-space-sm">The Al Maidah Experience</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            A closer look at our food, dining spaces, and warm hospitality at Arbab Sajjad Plaza, Warsak Road. Immerse yourself in Peshawar’s vibrant culinary spirit.
          </p>
</div>

<div className="flex flex-wrap md:flex-col items-start md:items-end gap-3 shrink-0">
<div className="inline-flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full shadow-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface">Arbab Sajjad Plaza • Open Daily Till 1:00 AM</span>
</div>
<div className="flex items-center gap-6 font-title-md text-title-md text-on-surface-variant">
<div className="flex flex-col items-start md:items-end">
<span className="font-headline-sm text-headline-sm text-primary font-bold">4.8 ★</span>
<span className="font-label-md text-label-md text-on-surface-variant">Family Ambience</span>
</div>
<span className="h-8 w-px bg-outline-variant"></span>
<div className="flex flex-col items-start md:items-end">
<span className="font-headline-sm text-headline-sm text-primary font-bold">120+</span>
<span className="font-label-md text-label-md text-on-surface-variant">Signature Dishes</span>
</div>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t-0 flex flex-wrap items-center gap-2" id="gallery-filter-bar">
<button className="filter-btn active px-5 py-2.5 rounded-full font-label-lg text-label-lg transition-all duration-200 bg-primary text-on-primary shadow-sm hover:scale-[1.02] btn-interaction" data-filter="all" type="button">
          All Perspectives
        </button>
<button className="filter-btn px-5 py-2.5 rounded-full font-label-lg text-label-lg transition-all duration-200 bg-surface-container hover:bg-surface-container-high text-on-surface hover:scale-[1.02] btn-interaction" data-filter="exterior" type="button">
          Exterior &amp; Facade
        </button>
<button className="filter-btn px-5 py-2.5 rounded-full font-label-lg text-label-lg transition-all duration-200 bg-surface-container hover:bg-surface-container-high text-on-surface hover:scale-[1.02] btn-interaction" data-filter="handi" type="button">
          Food &amp; Handis
        </button>
<button className="filter-btn px-5 py-2.5 rounded-full font-label-lg text-label-lg transition-all duration-200 bg-surface-container hover:bg-surface-container-high text-on-surface hover:scale-[1.02] btn-interaction" data-filter="fastfood" type="button">
          Fast Food &amp; Pizza
        </button>
<button className="filter-btn px-5 py-2.5 rounded-full font-label-lg text-label-lg transition-all duration-200 bg-surface-container hover:bg-surface-container-high text-on-surface hover:scale-[1.02] btn-interaction" data-filter="ambiance" type="button">
          Dining Ambiance
        </button>
<button className="filter-btn px-5 py-2.5 rounded-full font-label-lg text-label-lg transition-all duration-200 bg-surface-container hover:bg-surface-container-high text-on-surface hover:scale-[1.02] btn-interaction" data-filter="rooftop" type="button">
          Rooftop Seating
        </button>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="max-w-7xl mx-auto px-gutter py-12 md:py-16 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]" id="masonry-grid">

<article className="gallery-card group relative lg:row-span-2 overflow-hidden rounded-xl bg-surface-container shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="exterior" onClick={() => {}}>
<img alt="Al Maidah Warsak Road Peshawar cafe storefront, illuminated warm round signage, green entryway and steps at Arbab Sajjad Plaza" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHxPMR2mHJtyXl37GKUQSLCNvJrjht0DDG04VkkfXUQ8h4XyTjjax-Tx4Xi95_YLTtL7P75IiwjMu4bDoxxYOJv8fKyTE-66HVHxkf1qGzBDnPLcE1KvdM8N_r3zwgPAVrgfiLBA-v6LBzDtAJ9ZFNpdi3jgStya4usLYcj_j0z2k0U3hRip8zqqnM2J5V6X7XiVZ2ikaroNM6gJeh2jTSIKGvcWVJQSLoOIHJyaI-Zj2ooKvMHL9D0xi7ZdFyANwE"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-85 transition-opacity group-hover:opacity-95"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-wider font-bold btn-interaction">Featured Entrance</span>
<span className="px-2.5 py-1 rounded-full bg-surface/90 text-on-surface font-label-md text-label-md btn-interaction">Warsak Road</span>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-on-primary">
<span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider mb-1">Architecture &amp; Arrival</span>
<h2 className="font-headline-sm text-headline-sm text-on-primary mb-2">The Iconic Warsak Road Facade</h2>
<p className="font-body-sm text-body-sm text-surface-container-high line-clamp-2">Lush green turf pathway, illuminated Al Maidah calligraphy crest, and contemporary glass facade welcoming family guests at Arbab Sajjad Plaza.</p>
<div className="mt-4 flex items-center gap-2 text-secondary-fixed font-label-lg text-label-lg">
<span>Inspect High-Res View</span>
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">north_east</span>
</div>
</div>
</article>

<article className="gallery-card group relative md:col-span-2 overflow-hidden rounded-xl bg-surface-container shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="handi fastfood" onClick={() => {}}>
<img alt="Full grand feast spread at Al Maidah Peshawar featuring sizzling copper chicken handi, artisanal stone baked pizza, crispy zinger burger, steaming wok chow mein, and golden tandoori naans" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1VeRQp2QOucUobxtXhI_h5XjjR75Ax3_YwzeSqFfLrrk90DEnlHo78OkBQiom55Bt4zaagzsuTwc_HTPIncXLPUVY7WaY3Unq1YzKiBlaL73fI-lz6C0hTyRrNBw9CShAyR-RYNv28txku_ZfOnsEBqAwrdHvbtjdikoA1ag_U6vw1J1k_Nqk9kjRK91J1AyWq0aWEf-IDzaNMH-0PhkWyOw9fyhMu26cNsmNa9js4JD0IP5W4ONNCHAg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider font-semibold btn-interaction">Chef's Table Feast</span>
<span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 text-on-surface font-label-md text-label-md btn-interaction">Best Seller</span>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between text-on-primary">
<div>
<span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider mb-1">Signature Culinary Array</span>
<h2 className="font-headline-sm text-headline-sm text-on-primary">Copper Handi &amp; Global Flavors</h2>
<p className="font-body-sm text-body-sm text-surface-container-high hidden sm:block">Slow-cooked handi simmered with fresh ginger and green chilies, accompanied by oven-baked artisan pizza and wok-tossed chow mein.</p>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest/20 backdrop-blur-md flex items-center justify-center text-on-primary shrink-0 group-hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</div>
</div>
</article>

<article className="gallery-card group relative overflow-hidden rounded-xl bg-surface-container shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="handi" onClick={() => {}}>
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Traditional Shinwari lamb karahi bubbling in pure animal fat with fresh organic tomatoes and slit green chili peppers in black iron wok, garnished with fine ginger juliennes, cinematic warm moody lighting, shallow depth of field, Pakistani culinary culture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVkpH4qStVSbbUBWhxvOdVD8jNZncuR3gl1WMnP-FusCJmCbT44bPhk7EUIq93Zhjd0IJlmmhmoF2JDogQkFRWWXjlEVJQ2WQoVGP2IyFQUjJb0zdLBmFjeGLZPi9sm7knL6mlLqdqQMoerST80WTzT-9mcQwmNS-D85s7RYdFaFUlSvPBTj8RC88TUTQgoL63jRkzIXTvLpoy8FJfAMA3nGYVJYkzgYu00GMY5O43AVLB4A1pLSw"/>
<div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-surface/90 text-on-surface font-label-md text-label-md btn-interaction">Traditional Shinwari</span>
</div>
<div className="absolute bottom-0 inset-x-0 p-5 text-on-primary">
<h2 className="font-headline-sm text-headline-sm text-on-primary mb-1">Mutton Shinwari Karahi</h2>
<p className="font-body-sm text-body-sm text-surface-container-high">Prepared strictly with freshly cut meat, rock salt, and ripest tomatoes.</p>
</div>
</article>

<article className="gallery-card group relative overflow-hidden rounded-xl bg-surface-container shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="fastfood" onClick={() => {}}>
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Wood-fired gourmet pizza with bubbling mozzarella, chargrilled chicken tikka morsels, fresh basil leaves and melted cheese pull, warm oven glow, deep rustic wooden tray presentation, culinary editorial photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIRO3KZPese0X-L1oh6c-0eZzaOZlDiVGMzMez7tpMYpVecuor1mh3nsCXZFyUWvu1C4TB959aDP3i2RQYuQG3lZ1J2TwVKmqJ8ZQtTKVaqTCbmIxUHAJnRGTjiKNAHBiWh_TTchdRXTz3Yb7kJ_wypjK4pFPK0g2maFdV5KYt7yJarIg9xou3LFOdWCv_5fYNvhwLyJiBp_pnlykqvAVOa50O7jEKkvyKWByn2YxUX9C5GB0h3OM"/>
<div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold btn-interaction">Oven Crisp</span>
</div>
<div className="absolute bottom-0 inset-x-0 p-5 text-on-primary">
<h2 className="font-headline-sm text-headline-sm text-on-primary mb-1">Peshawari Tikka Pizza</h2>
<p className="font-body-sm text-body-sm text-surface-container-high">Smoked chicken tikka chucks paired with stringy mozzarella and house herb marinara.</p>
</div>
</article>

<article className="gallery-card group relative md:col-span-2 overflow-hidden rounded-xl bg-surface-container shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="ambiance" onClick={() => {}}>
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Spacious elegant family restaurant dining hall in Peshawar with warm golden recessed ceiling lighting, private dining alcoves with lattice screens, plush seating, set timber tables with brass cutlery, welcoming Pakistani dining hospitality, wide angle architectural interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJmQIs1inflOTEuIdZTvjy5HKSQvSxj70-naoeMerbGsqXnT-pXEwvTqoxrDk-XdQEmlr-TqpZcKi-VzaA_AKNwRQ8qDviUuDUpvE0H-Dd2rw-8O112RJ5JTzMic8N4eSTmBLg6o0i4lWdRQh8JLatSDYae6YKrIzh-lSHgVaAusSi7z4v816GztIWzXE23STx-E4__kaKN_om4RcFxJtNf1PEy2gHikXdw-5T68eodKG014Zd32E"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md font-bold btn-interaction">Interior Sanctuary</span>
<span className="px-2.5 py-1 rounded-full bg-surface-container-highest/80 text-on-surface font-label-md text-label-md btn-interaction">Family Enclosures</span>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 text-on-primary">
<span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider mb-1">Hospitality Architecture</span>
<h2 className="font-headline-sm text-headline-sm text-on-primary">Main Family Dining Hall</h2>
<p className="font-body-sm text-body-sm text-surface-container-high max-w-xl">Curated for modesty, comfort, and celebratory gatherings with dedicated partitions and attentive Peshawar service.</p>
</div>
</article>

<article className="gallery-card group relative lg:col-span-1 md:row-span-2 overflow-hidden rounded-xl bg-surface-container shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="rooftop ambiance" onClick={() => {}}>
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Evening rooftop terrace at Al Maidah Warsak Road Peshawar with string bulb fairy lights glowing overhead, open sky dusk ambiance, comfortable iron lounge seating, patrons enjoying warm barbecue platters, cozy mountain breeze vibe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFdE_W8MltQarG6WicVjbMBWaqwEEb_3MB7vzd7fyw3K86E6U_V4TX6OG3KKbJjNx50P5nw5bSAQ6ApMoiRNclRdNP2wZVAY5TUCWvDug4ubQbv3PIVc8SVIPRyhr6x1cn_b363WgzRAN-2dB2ikScliNkr_E8PeJBSB51CY6sZI-CoOGLvXBJH39m0HPsKw8AkZTThmGqXf5BRKusar0LfMlhBBP5bKlbWWDSzVxYqatg4shbiJA"/>
<div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-semibold btn-interaction">Warsak Skyline</span>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 text-on-primary">
<span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-wider mb-1">Open-Air Evenings</span>
<h2 className="font-headline-sm text-headline-sm text-on-primary mb-2">Breezy Rooftop Dinners</h2>
<p className="font-body-sm text-body-sm text-surface-container-high mb-3">Dine beneath Peshawar&apos;s night sky surrounded by fairy lights and the aroma of live coal grills.</p>
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest/15 backdrop-blur-sm text-on-primary font-label-md text-label-md btn-interaction">
<span className="material-symbols-outlined text-[16px] text-secondary-container">star</span>
<span>Prime Dusk Hours: 7 PM - 12 AM</span>
</div>
</div>
</article>

<article className="gallery-card group relative overflow-hidden rounded-xl bg-surface-container shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="handi" onClick={() => {}}>
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Peshawari chapli kebabs frying in large circular shallow flat iron skillet with boiling bone marrow ghee, fresh tomato slices pressed into minced beef patties, crackling embers and dramatic smoke, street-culinary craft photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwWA7QumNNPgwgzngCf1kLszxHZyUoesOJYw9e0CmMwmoW0vQXD4scID0bYzG29ddBS4Y8AM5vAlS7DbUA5_npKjYQ3PZse73iD4thunyLO4MBD0U37_64jKdQ3zpdIV-zwZ6qHYNuVbhQoVdpojKrFWqnTUvNTg83h2VuOUmsFCX45uBPWEhBCuSxqmVNZE_msNYh5Y28XWdqE4xUJxX52Kh1oAqAeKh2SlnEpFZIi-eAIhsqLrE"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-surface/90 text-on-surface font-label-md text-label-md btn-interaction">Khyber Special</span>
</div>
<div className="absolute bottom-0 inset-x-0 p-5 text-on-primary">
<h2 className="font-headline-sm text-headline-sm text-on-primary mb-1">Live Chapli Kabab Pan</h2>
<p className="font-body-sm text-body-sm text-surface-container-high">Fried golden crisp in traditional tallow skillet with coriander seeds and piquant herbs.</p>
</div>
</article>

<article className="gallery-card group relative overflow-hidden rounded-xl bg-surface-container shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-category="fastfood" onClick={() => {}}>
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Stacked double crunch zinger chicken burger with melted cheddar slice, crisp iceberg lettuce and garlic mayo dressing, served with seasoned crinkle fries in small steel basket, bright natural food studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrvt4_pqBgzDBW19cVeus-BYyki7d2DhyNcuhDp2zNoCQkIvKvFYMarxuEYxPrgUGpBXvLBDahXORH8tFq6nkLKvcqxw54DYfQHo0qUzLCxB1K4jm7FoVZ6f94RJGaoz-GZMJTkEg8T_XMHluPxDnn3AVaTTx8zDrYD4eRB0pgw2Z9qTturFfDN46myg4jOYfxvVRYXdPVYXs4ASS8RRHsniUaYJZqJEaBPYw8F81JcTq9wwakffU"/>
<div className="absolute inset-0 bg-gradient-to-t from-tertiary/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute top-4 left-4">
<span className="px-2.5 py-1 rounded-full bg-surface/90 text-on-surface font-label-md text-label-md btn-interaction">Quick Bite</span>
</div>
<div className="absolute bottom-0 inset-x-0 p-5 text-on-primary">
<h2 className="font-headline-sm text-headline-sm text-on-primary mb-1">Crispy Al Maidah Zinger</h2>
<p className="font-body-sm text-body-sm text-surface-container-high">Double-coated spicy chicken breast fillet with our signature pepper mayonnaise.</p>
</div>
</article>
</div>
</section></SlideUp>

<div aria-label="Image Lightbox" aria-modal="true" className="fixed inset-0 z-50 bg-tertiary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 hidden opacity-0 transition-opacity duration-300" id="lightbox-modal" role="dialog">
<div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">

<div className="w-full flex items-center justify-between pb-4 text-on-tertiary">
<div className="flex items-center gap-3">
<span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider font-semibold btn-interaction" id="lightbox-tag">Tag</span>
<span className="font-body-sm text-body-sm text-tertiary-fixed" id="lightbox-counter">1 of 8</span>
</div>
<button aria-label="Close modal" className="w-10 h-10 rounded-full bg-surface-container-highest/20 hover:bg-surface-container-highest/40 flex items-center justify-center transition-colors text-on-tertiary" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[24px]">close</span>
</button>
</div>

<div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden rounded-xl bg-tertiary-container shadow-2xl">
<img alt="" className="w-full h-full object-contain" id="lightbox-image" src=""/>

<button aria-label="Previous image" className="absolute left-4 w-12 h-12 rounded-full bg-surface-container-lowest/20 hover:bg-surface-container-lowest/40 backdrop-blur-md flex items-center justify-center text-on-tertiary transition-transform active:scale-95" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[28px]">chevron_left</span>
</button>
<button aria-label="Next image" className="absolute right-4 w-12 h-12 rounded-full bg-surface-container-lowest/20 hover:bg-surface-container-lowest/40 backdrop-blur-md flex items-center justify-center text-on-tertiary transition-transform active:scale-95" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[28px]">chevron_right</span>
</button>
</div>

<div className="w-full pt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-on-tertiary">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-tertiary" id="lightbox-title">Image Title</h3>
<p className="font-body-sm text-body-sm text-tertiary-fixed-dim" id="lightbox-description">Image caption details</p>
</div>
<a className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors shadow-sm btn-interaction" data-path="menu" href="/menu" id="lightbox-reserve-btn">
<span>Order This Dish</span>
<span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
</a>
</div>
</div>
</div>

<SlideUp><section className="w-full bg-surface-container-low py-16">
<div className="max-w-7xl mx-auto px-gutter">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">Planned for Comfort</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Dining Tailored for Families</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Every square foot at Al Maidah Warsak Road is shaped around authentic hospitality, discretion, and effortless celebrations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-4">
<span className="material-symbols-outlined text-[26px]">groups</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">Private Family Enclosures</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Partitioned seating zones providing complete privacy for family dinners and private parties.</p>
</div>
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-4">
<span className="material-symbols-outlined text-[26px]">outdoor_grill</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">Live Charcoal Showcase</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Watch our grill masters skewers lamb tikkas and tender kebabs directly over glowing coal beds.</p>
</div>
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-4">
<span className="material-symbols-outlined text-[26px]">wb_twilight</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">Open-Sky Rooftop Deck</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cool evening mountain breezes, ambient starlight, and sweeping views of the Warsak Road promenade.</p>
</div>
<div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-4">
<span className="material-symbols-outlined text-[26px]">local_parking</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">Convenient Plaza Parking</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dedicated security and spacious entrance parking directly outside Arbab Sajjad Plaza.</p>
</div>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="w-full py-16 md:py-24 bg-surface">
<div className="max-w-7xl mx-auto px-gutter">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary text-[20px]">photo_camera</span>
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">Community Mosaic</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Share Your Moments with <span className="text-primary italic font-headline-lg">#AlMaidahPeshawar</span></h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Tag our handle or hashtag during your visit to be featured in our monthly guest exhibition.</p>
</div>
<div className="flex items-center gap-3 shrink-0">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors btn-interaction" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px] text-secondary">share</span>
<span>Follow @almaidah.peshawar</span>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Guest snapshot at Al Maidah Peshawar holding a warm cup of cardamom Peshawari Qehwa tea with green tea leaves and sweet dry fruit platter, cozy lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNn9eRcXagi5aeTaCFvBQsE912m7-xI8mrFiuRYJV12NroHmZm-YQAWaFS8ii885lZaVe-0RDnWhBPhCBfQAhHJP3YCwpV4x0pYzySr60l-E96FiTJ-_nl4j57a2hiGMGcHwxHSUJzTAAKm85XGyMyBUkW5LaWN_lTowzNPZwjNGNUux_dZv1BvICbiNig31lBkwZO3ltC8fHkTFBei2IUk9S3_O12qlhiXrrJrLw4wWc0VFTb0LU"/>
<div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center text-on-primary">
<span className="material-symbols-outlined text-[28px] mb-1">favorite</span>
<span className="font-title-md text-title-md">@hamza_khyber</span>
<span className="font-body-sm text-body-sm text-surface-container-high mt-1">"The Peshawari Kahwa finale is perfection!"</span>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Crispy loaded chicken chow mein wok bowl with chopped scallions and red bell peppers, chopsticks lifting noodles, restaurant background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQvTVqpbPIF3sy4l7JuXs4X3pN4U9efD5tRKdBM5QMZuWe7NIve2Y0WnxoP3h9jBm_r9OMQg5tNzZL5zmDHCmKB7IlBQ1kUZLvaqgApFCfRAAtyRpgYrDF9_zEwNJ0vBh871B9eq67VyYV5Q2X6_cm-1pvAJtZp8_aoZEQdKW0eBFajNWwrqqZ5mhebi68KUNJbBH2G0lLJLN_vZnvBckatx10VkUpiwqwvtruwP9DI3LQkms1vbI"/>
<div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center text-on-primary">
<span className="material-symbols-outlined text-[28px] mb-1">favorite</span>
<span className="font-title-md text-title-md">@peshawar.foodies</span>
<span className="font-body-sm text-body-sm text-surface-container-high mt-1">"Best Chinese fusion on Warsak Road hands down."</span>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Family celebration dinner at Al Maidah restaurant with smiling people around a lavish dinner table laden with Shinwari karahi and barbecue platters" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIB3RruQoIFPHajWTpTOeDEnF0mdcuwsAFmD-wMWwzYaj68Fq8PWqX96t6isaX8A6k1NHyDoHAJpNgPIc4CVyuujOPw_xPTRQ5QBmqlSvGUoOiCTI7NLeVH74eDbYtDhorWLEWGxlrQ4s7DDJMjeIT6gXHtseI8un2ZGBzAeKgtdyAXRXUlMgO01924_W3AzECcJ2L7bnXyDkcU6lp_bsCNla1qSHmv1rylp2s-Lc6dS19BwtxTiY"/>
<div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center text-on-primary">
<span className="material-symbols-outlined text-[28px] mb-1">favorite</span>
<span className="font-title-md text-title-md">@dr_zahid_khan</span>
<span className="font-body-sm text-body-sm text-surface-container-high mt-1">"Family birthday dinner celebrated in peace."</span>
</div>
</div>

<div className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container shadow-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Freshly baked sesame seed roghni naan bread emerging from clay tandoor with golden butter glaze, steam rising" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCif00e8UPTBuwE9znXyhM8qSw90M_YHr0Waq_4q9uFxg3dbI53ho95aaR0A3tA7FpJJw3QzxG1TI9sftEgb3I8olUYUw67pvJEue50XZujdqUG4t47SZ4B5GiBDQSbkraIKeGI6nbI6qlqQoESQqQp339eilmSHHQPg1FEO4M_0K9kjnBmMVFJg7qqWXES9bIC1ZsDZ8Vnrx4Ehcdk3A0KAmpac9bF8-1_0b7CJwQFqOSuyV9E_HI"/>
<div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center text-on-primary">
<span className="material-symbols-outlined text-[28px] mb-1">favorite</span>
<span className="font-title-md text-title-md">@tasteofkp</span>
<span className="font-body-sm text-body-sm text-surface-container-high mt-1">"Roghni naan hot out of the clay pit."</span>
</div>
</div>
</div>

<div className="mt-16 p-8 md:p-12 rounded-xl bg-surface-container-high flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
<div className="max-w-xl text-center lg:text-left">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-bold">Warsak Road Peshawar Destination</span>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">Planning a Family Gathering or Banquet?</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Reserve our private family alcoves or rooftop deck in advance. Call our team directly or secure instant delivery on Foodpanda.</p>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface transition-all btn-interaction" href="tel:+923009016815">
<span className="material-symbols-outlined text-secondary text-[20px]">call</span>
<span>+92 300 9016815</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-all shadow-md btn-interaction" data-path="contact" href="/contact">
<span>Reserve Table Online</span>
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
</a>
</div>
</div>
</div>
</section></SlideUp>


</div></main><aside className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-space-md py-2.5 flex items-center justify-between gap-space-sm"><a className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors" href="tel:+923009016815"><span className="material-symbols-outlined text-secondary text-[20px]">call</span><span className="">Call Us</span></a><a className="flex-[1.5] flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg tracking-wide hover:bg-primary-container transition-colors shadow-sm" data-path="menu" href="/menu"><span className="">Order Online</span><span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[9px] font-bold uppercase">Foodpanda</span></a></aside><SlideUp><footer className="w-full bg-surface-container-low pb-24 md:pb-16 pt-space-xl"><div className="max-w-7xl mx-auto px-gutter"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl"><div className="flex flex-col"><div className="flex items-center gap-3 mb-space-sm"><img alt="Al Maidah Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1ViMT7rPuexd6vNlRndEg8vGev4aEbXBFOOUUct2GpaRgL3rlFfBi5FskYSaoUas_orvJ0aj-QZA3rUoMt4ue5h39akSVXfFbN_1fOQJA_2nhwi0aI9emhIlPkB67Q5tWAnrlv5r3vtXP8xTpT2ehsSSHynWkDQPZ2NceuovRx-zeBjHNRVBwviF6s3vaUavuqSyKZgets8NSDbX13sgAmur4jq1OGQ27i6x3Bhd_wXWpQuLFf7i9hb"/><span className="font-headline-sm text-headline-sm text-primary">Al Maidah</span></div><p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-space-md">Refined Khyber culinary heritage and Shinwari barbecue tradition crafted with Peshawar hospitality for family and celebratory dining.</p><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">public</span></div><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">photo_camera</span></div><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">share</span></div></div></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Quick Navigation</h4><ul className="flex flex-col space-y-2"><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="home" href="/">Home</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="menu" href="/menu">Menu &amp; Shinwari Specials</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="gallery" href="/gallery">Ambiance &amp; Gallery</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="about" href="/about">Our Culinary Heritage</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact">Location &amp; Contact</a></li></ul></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Warsak Road Branch</h4><div className="flex items-start gap-2.5 mb-space-sm"><span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">location_on</span><span className="font-body-sm text-body-sm text-on-surface-variant">Arbab Sajjad Plaza, Near ICM School &amp; College, Warsak Road, Peshawar, Khyber Pakhtunkhwa</span></div><div className="flex items-center gap-2.5 mb-space-sm"><span className="material-symbols-outlined text-primary text-[20px] shrink-0">call</span><a className="font-body-sm text-body-sm text-on-surface font-semibold hover:text-primary transition-colors" href="tel:+923009016815">+92 300 9016815</a></div><div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[20px] shrink-0">schedule</span><span className="font-body-sm text-body-sm text-on-surface-variant">Daily: 12:00 PM – 1:00 AM</span></div></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Takeout &amp; Delivery</h4><p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Craving authentic Peshawari Karahi, Chapli Kabab, and Tikka at home?</p><div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2"><div className="flex items-center justify-between"><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">Foodpanda Delivery</span><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md text-[11px] btn-interaction">Live</span></div><p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Fast dispatch across Warsak Road and neighboring Peshawar sectors.</p><a className="mt-1 inline-flex items-center justify-center gap-1.5 py-2 px-space-md rounded bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors" data-path="menu" href="/menu"><span className="">Order via Foodpanda</span><span className="material-symbols-outlined text-[16px]">north_east</span></a></div></div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left"><p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 Al Maidah Restaurant. All rights reserved. Warsak Road, Peshawar.</p><div className="flex items-center gap-space-md"><span className="font-label-md text-label-md text-on-surface-variant">Halal Certified</span><span className="w-1 h-1 rounded-full bg-outline-variant"></span><span className="font-label-md text-label-md text-on-surface-variant">Family Seating Available</span></div></div></div></footer></SlideUp>

    </>
  );
}




