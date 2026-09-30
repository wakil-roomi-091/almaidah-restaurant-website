"use client";

import React from 'react';
import Link from 'next/link';
import SlideUp from '@/components/animations/SlideUp';
import FadeIn from '@/components/animations/FadeIn';

export default function Page() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">

<SlideUp><section className="relative w-full min-h-[942px] flex items-center bg-surface-container-lowest overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] transform scale-105 duration-1000 ease-out" data-alt="A lavish dining spread on a rustic wooden table featuring copper karahi with tender chicken ginger garnishes, artisan pizzas, crispy zinger burgers, wok-tossed chow mein and biryani in ambient warm restaurant lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPNf12AEN5gUXR3DmkkQuXhOtA4a8zb2zdlwrLSkD_691HbdH4ZoTWmXZDxJNWfzzbNLwT05TSqfTVKRZdVvADfxGkt11gtypb71Ky-kflHzXWFpCHZQVt1H3iped4-GqlcHKAaoevmZeKdZ4Lj01zfkypxcxP9rxaHnPJWr4gb2otNUKPSof63dcn0AlFJnlxEqWyT4OUMMCWVoMRByeMhL1x9Jbmg8MCOItCCjsEJpubjDYkAcQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-primary/30 to-surface/20"></div>
<div className="absolute inset-0 bg-gradient-to-r from-primary-container/80 via-primary-container/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-gutter py-space-xl w-full">
<div className="max-w-3xl flex flex-col items-start gap-space-md">

<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/90 backdrop-blur-md shadow-sm btn-interaction">
<span className="material-symbols-outlined text-[16px] text-on-secondary-container">location_on</span>
<span className="font-label-md text-label-md text-on-secondary-container uppercase tracking-widest">WARSAK ROAD • PESHAWAR</span>
</div>

<div className="flex flex-col gap-1">
<h1 className="font-display text-display text-surface-container-lowest tracking-tight leading-none drop-shadow-sm">
            AL MAIDAH
          </h1>
<p className="font-headline-lg text-headline-lg text-secondary-fixed italic font-light drop-shadow-sm">
            Good Food. Great Moments.
          </p>
</div>

<p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-2xl leading-relaxed">
          Desi favorites, Chinese specialties, pizzas, burgers and more — served fresh in the vibrant heart of Warsak Road, Peshawar with warmth, pride, and authentic Khyber hospitality.
        </p>

<div className="flex flex-wrap items-center gap-4 mt-2">
<a className="inline-flex items-center gap-2 px-space-xl py-3.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-xl hover:bg-primary-container transition-all transform hover:-translate-y-0.5 active:translate-y-0 btn-interaction" href="https://www.foodpanda.pk" rel="noopener noreferrer" target="_blank">
<span className="">ORDER ON FOODPANDA</span>
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
<a className="inline-flex items-center gap-2 px-space-lg py-3.5 rounded-xl bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-lg backdrop-blur transition-all transform hover:-translate-y-0.5 active:translate-y-0 btn-interaction" href="#menu-explorer">
<span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
<span className="">EXPLORE MENU</span>
</a>
</div>

<div className="flex items-center gap-2 mt-4 text-surface-container-lowest/80 text-body-sm font-body-sm">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
<span className="">Arbab Sajjad Plaza, near ICM School &amp; College, Warsak Road</span>
</div>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="w-full bg-surface-container-low shadow-sm relative z-20">
<div className="max-w-7xl mx-auto px-gutter py-space-lg">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">store</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Location</span>
<span className="font-title-md text-title-md text-on-surface">Arbab Sajjad Plaza</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Warsak Road, Peshawar</span>
</div>
</div>
<div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">delivery_dining</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Order Online</span>
<span className="font-title-md text-title-md text-on-surface">Foodpanda Delivery</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Live Dispatch across Warsak</span>
</div>
</div>
<div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">call</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Direct Phone</span>
<a className="font-title-md text-title-md text-on-surface hover:text-primary transition-colors" href="tel:+923009016815">+92 300 9016815</a>
<span className="font-body-sm text-body-sm text-on-surface-variant">Reservations &amp; Takeaway</span>
</div>
</div>
<div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">schedule</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Daily Timing</span>
<span className="font-title-md text-title-md text-on-surface">12:00 PM – 1:00 AM</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dine-in, Takeaway &amp; Delivery</span>
</div>
</div>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-gutter">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-lg">
<div>
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">House Favorites</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Made to Crave</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-1">
            From desi classics to Chinese favorites, pizzas and fast food — explore some of Al Maidah's popular choices.
          </p>
</div>
<a className="inline-flex items-center gap-1.5 text-primary font-label-lg text-label-lg hover:text-primary-container transition-colors" href="#menu-explorer">
<span className="">View Complete Menu</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
<div className="relative h-48 w-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Steaming wok-tossed chicken chow mein noodles with vibrant shredded carrots, cabbage, scallions and tender chicken strips in light soy seasoning" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQfNMYV1xmQIb2iFFhciLrR5r8i-tAyNTcyUO3qRhU8ZsQVVdy9aOsgBLZfvlSYJs13oHzOK99NCeiDUsV65lBEePpORG6qTwpJUPl9ylHYZZmAnWZGWs8a8c7lJIrUIV-jFSbJbifGAQepQTdc0P_gbgLa9JiXD4dzxPk4AplTo6Ke0rVTgTfys5l9RMEY8lZ14fYzVXDgPgsUpJWCT2rGl4XJFxFxMCktHM-3E4GHiXdC7IYHk"/>
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-on-primary font-label-md text-label-md">Wok Signature</span>
<span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 font-price-tag text-price-tag text-primary shadow-sm">Rs. 899</span>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Chow Mein</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Wok-tossed savory noodles with sliced chicken and crisp stir-fry vegetables balanced with oriental seasonings.
              </p>
</div>
<div className="pt-4 mt-4 flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary font-semibold">Thai &amp; Chinese</span>
<a className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1 btn-interaction" href="https://www.foodpanda.pk" rel="noopener noreferrer" target="_blank">
<span className="">Order</span>
<span className="material-symbols-outlined text-[14px]">shopping_bag</span>
</a>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
<div className="relative h-48 w-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Spicy Thai noodles in a wok with red chili flakes, chicken cubes, fresh basil leaves, peppers and lime slice" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAxvCx2tmkXcRILZENh1YKcL9YvyImPgCIwozHuimFKZ6vrfl0fze7k-sUGz5sR1e2wpobGXLSmZy5UPLQvzDecOp-Ys8IKh5q0Df9PIL2sOSv1Tq9OGXQgr-OI4CN3lMoazkacnA7Omee0M-ICPPjgHteVhU89A07glcrV_A1cEr49hEBh-wEvq5zTpl2FU1qaWcVHV-xpxsFFVCwWB-S6BNz7wcEQ063UK36hdUHUAdD1Tskud0"/>
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-md text-label-md">Spicy Favorite</span>
<span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 font-price-tag text-price-tag text-primary shadow-sm">Rs. 799</span>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Thai Spicy Chow Mein</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Zesty noodles infused with fiery Thai chili kick, fresh garden greens, and wok-seared chicken cuts.
              </p>
</div>
<div className="pt-4 mt-4 flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary font-semibold">Thai &amp; Chinese</span>
<a className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1 btn-interaction" href="https://www.foodpanda.pk" rel="noopener noreferrer" target="_blank">
<span className="">Order</span>
<span className="material-symbols-outlined text-[14px]">shopping_bag</span>
</a>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
<div className="relative h-48 w-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Generous platter of crisp corn tortilla chips smothered in melted queso cheese, sliced jalapeños, sour cream and rich tomato salsa" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPSw6jycM6QX1K0B-Q0wy3Wni66tczhhwiso6o7sGmHLKtfsaDqcXwhSo8V2GBcL3M1qM48bKIGYYvvKF4ZhrhrcL6MLJh2Bk3JLlFP8C22kGHRGtsvR1YbB8FUGAZl-09xybboDvEXFRlNCbhXEfGOXXZkUY6Pa89W1Uh05OUWyEDMrM-M0rs-CfEce6tBdZtmuzSnMVNWPA0F_OZmrUJWh9UNPBPZ_1P_zcJFoo8p2CI7SZoWv8"/>
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-md text-label-md">Starter Hit</span>
<span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 font-price-tag text-price-tag text-primary shadow-sm">Rs. 799</span>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Supreme Nachos</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Crispy tortilla chips topped with bubbling melted cheese, pickled jalapeños, guacamole and fresh salsa.
              </p>
</div>
<div className="pt-4 mt-4 flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary font-semibold">Appetizers</span>
<a className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1 btn-interaction" href="https://www.foodpanda.pk" rel="noopener noreferrer" target="_blank">
<span className="">Order</span>
<span className="material-symbols-outlined text-[14px]">shopping_bag</span>
</a>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
<div className="relative h-48 w-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Golden crisp deep fried chicken zinger burger with fresh shredded iceberg lettuce and mayonnaise inside a toasted sesame seed bun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYAdnGj7y-XqwSECS6Firq7jUMFit5UQfNx1312pvE1KYDZoSmuix-YDb80EkGRwsA4_MsUBQw7M5rTDFNsNCpVF-YAOBIis8s7Xx46TQMVmNemxZQ3MESRELfVsqkXnkCYAhg7Y0v5F0pzQjXu1xhAH6qx-yA8uQSGhI9c0-44667Mkdwdwlgw5euXByax-JhJPXqjCCfRC2pY4RAAsqHOAA8wdn6I9Wu2cfnb7Lol_YZC4JPna0"/>
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-md text-label-md">Bestseller</span>
<span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 font-price-tag text-price-tag text-primary shadow-sm">Rs. 799</span>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Zinger Burger</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Crispy deep-fried golden chicken fillet seasoned to perfection, stacked with fresh lettuce and signature sauce.
              </p>
</div>
<div className="pt-4 mt-4 flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary font-semibold">Fast Food</span>
<a className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1 btn-interaction" href="https://www.foodpanda.pk" rel="noopener noreferrer" target="_blank">
<span className="">Order</span>
<span className="material-symbols-outlined text-[14px]">shopping_bag</span>
</a>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
<div className="relative h-48 w-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Fluffy basmati fried rice with tender chicken morsels, scrambled egg, green spring onions and diced carrots served in a ceramic bowl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHu8CwXpSgP_kYv5UxYmdapea0bRlcDlAjXrggMTAijpI0rU_TBiiL2v0CoaOKLet2SmhTAcahV-sjH5ASPmpD7xWhR07DWrfA7mQNxpM0YiYx_ibYo-kItW0EjaQEE3tjbJC7lz9fttnmDH3VqBF-cI4QCnWX3zv0Xdw4BJqIhSkbOCzZa5tYVrNxGyeQKoN0tNq5ol1uvy9dVZOIdi6b1DZfpwUKMwQXsELAbUrnTIU7CARvOu4"/>
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-on-primary font-label-md text-label-md">Essential</span>
<span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 font-price-tag text-price-tag text-primary shadow-sm">Rs. 860</span>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Fried Rice</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Aromatic wok-fried long-grain basmati rice tossed with savory shredded chicken, egg and crisp garden vegetables.
              </p>
</div>
<div className="pt-4 mt-4 flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary font-semibold">Rice Delights</span>
<a className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1 btn-interaction" href="https://www.foodpanda.pk" rel="noopener noreferrer" target="_blank">
<span className="">Order</span>
<span className="material-symbols-outlined text-[14px]">shopping_bag</span>
</a>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
<div className="relative h-48 w-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Traditional Pakistani karahi pan with tender charcoal seekh kababs in a rich tomato gravy garnished with julienned ginger and green chilies" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6Rgye53d0mcWHFB1AUT-_5xKhDoy0Kig5Uw8Gu6cHfNNrW35syiDI4mMBfAYYi7zQOXBD-b55pYZ8WySl6MMed7tTKMKSjOlYsh3He01DsSlBIitjSxL51-PL46ZMev6xbGdcclzehu3aW5PHy0hw5IB9V8GmfXSS2PtlaANfnpW0uP835e_QUxnNU7OA01G35URbrJ8q_v0YxcgV7kWA9egq2eJsSumMDcB_cmL5BwbL3e3FYc"/>
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-md text-label-md">Desi Classic</span>
<span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/90 font-price-tag text-price-tag text-primary shadow-sm">From Rs. 999</span>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Seekh Kabab Karahi</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Succulent spiced seekh kababs simmered gently in a rich tomato, ginger, and green chili karahi gravy.
              </p>
</div>
<div className="pt-4 mt-4 flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary font-semibold">Desi Specialty</span>
<a className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1 btn-interaction" href="https://www.foodpanda.pk" rel="noopener noreferrer" target="_blank">
<span className="">Order</span>
<span className="material-symbols-outlined text-[14px]">shopping_bag</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-6 relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl">
<img className="w-full h-[460px] object-cover" data-alt="Traditional copper handi brimming with rich creamy chicken white handi garnished with fresh coriander, accompanied by crisp naan and tandoori bread" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQXGcW5UEN4mMCyFRcwDSDoRv4JKzC82SGQm0IJS3so7-xUav6PoCTyZWDxHUwT4ht37QNp5KIXpErlkwOslgy2jbOr1_y1fc3Bm7sCrjodGHW0UPwo62UXHI1MsvSkGdWCN-jN9e3tV-gWVk9rmqfxfLdk06-i5lhK1-AOBUqDcuJA4-Acx0IYjo0qerXIKMYJB9gpFIzhqBy8AknjpODbDuW3VEFCO6HaC4krZfKwnNfvDQcdho"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/90 backdrop-blur-md">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Crafted Daily</span>
<p className="font-title-md text-title-md text-primary mt-0.5">Special Chicken Boneless Handi &amp; Fish Karahi</p>
</div>
</div>
<div className="hidden sm:block absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden shadow-xl">
<img className="w-full h-full object-cover" data-alt="Crispy golden finger fish served with homemade tartar dip and fresh lime wedges" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLds0z-EbpAZ73UToqnaU-AEMV-e_qVlmJnabR7mUBMdf6068RRdGxUCRucNXMdMn3AMb0y2oU3zcm28CSdj02-69ARHMqrFEfP7SqeBw0UcPAG1mOKnHn6gTo6EJ7e2xNHVWOEWGTkM9Or-_ZYLJhyFEqPGW1sFCqacYoWj5vY-Z4ejHU0PXfFpVpbf5fYwP9iH1nRYB26syFW-OuODem4kRrJroakVbKB7NZr_Lrc5NVrnigoRg"/>
</div>
</div>

<div className="lg:col-span-6 flex flex-col items-start space-y-4">
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">Khyber Flavors &amp; Global Fusion</span>
<h2 className="font-headline-lg text-headline-lg text-primary">From Desi Classics to Global Favorites</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Whether you&apos;re craving a traditional desi dish, a cheesy pizza, Chinese favorites, a loaded burger or a comforting bowl of rice, Al Maidah brings a wide variety of flavors together under one roof on Warsak Road.
          </p>
<div className="grid grid-cols-3 gap-3 w-full pt-2">
<div className="p-3 rounded-xl bg-surface-container flex flex-col items-center text-center">
<span className="material-symbols-outlined text-primary text-[24px]">eco</span>
<span className="font-label-lg text-label-lg text-on-surface mt-1 font-bold">Fresh</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Daily ingredients</span>
</div>
<div className="p-3 rounded-xl bg-surface-container flex flex-col items-center text-center">
<span className="material-symbols-outlined text-secondary text-[24px]">dinner_dining</span>
<span className="font-label-lg text-label-lg text-on-surface mt-1 font-bold">Generous</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Hearty portions</span>
</div>
<div className="p-3 rounded-xl bg-surface-container flex flex-col items-center text-center">
<span className="material-symbols-outlined text-primary text-[24px]">groups</span>
<span className="font-label-lg text-label-lg text-on-surface mt-1 font-bold">Family Sized</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Shared feasts</span>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all btn-interaction" href="#menu-explorer">
<span className="">EXPLORE FULL MENU</span>
<span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
</a>
</div>
</div>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-gutter">
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">Our Kitchen Portfolio</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Diverse Flavors, One Destination</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Curated culinary offerings catering to diverse tastes, prepared by specialized chefs.
        </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<button className="group flex flex-col items-center p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all text-center" onClick={() => {}} type="button">
<div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow group-hover:scale-105 transition-transform">
<img className="w-full h-full object-cover" data-alt="Traditional Pakistani chicken handi in clay vessel garnished with fresh green chilies" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGeP-pLQvRfYuR_i-S19VRldRzN2-Idht6Tdkniwk-UbD8LZzIcyEabw0OQUDlB3LWNGlReOuSYd5z-S2yZK3pyGnbrchs6CfiGXJYi9uv9LrX9JP433TDCf2IrC_YZnQ9QwhV8bpv7vySvbA0d5S8gvTavKMQm94rhxjsQH4ws9iEqajhV6N4pC_NxxixYHmmaEpQAImAbbC_PvPFrJaLeA-OOvpPfAFkDUI3arMa45COSm94pS8"/>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">Desi</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 line-clamp-1">Handis &amp; Karahis</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all text-center" onClick={() => {}} type="button">
<div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow group-hover:scale-105 transition-transform">
<img className="w-full h-full object-cover" data-alt="Vibrant stir-fried chicken shashlik with capsicum and savory red sauce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvQPA9s4DlK9MIy1lcngoyt_kbPN1wE7M-9qlCopWFEKfDNuCvpLuwPE2WjgFvxWLbftgsvhPvVotkQpa7XS5mjxtRiNbagNIvryA_vCo_lZ-J4P0E5f4ON2qfFKufDq6iStAU6E5utY230zZx2hmdw5BH8ApElE42RjRD7gwR_0LcZVB7_JW6b_d5DgrmeNs80vHfIojWdZDr16eed9pc4g7yjz_sI56ln6KXDQY4P5fkytbgxrA"/>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">Chinese &amp; Thai</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 line-clamp-1">Shashlik &amp; Wok</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all text-center" onClick={() => {}} type="button">
<div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow group-hover:scale-105 transition-transform">
<img className="w-full h-full object-cover" data-alt="Freshly baked artisan cheese pizza with pull and herbs on wooden peel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Sn1aRcNis3VT665n9Eqd6q2Tl_6ZLZ7iyca5yCfARJFpxNYLsL8oL1Mvv_9_9PL6mWlzbIxxEO4MoZtKavKIGuuGNwxm3UIxBUXe9H5h_o2QWEySP8ha5Ejq06x8OOjljUx3lnvrNZvOR-52n4_DuCPGI-SDudPetx-lnoX7OxgOr6LqHemmW1xSn_-GtT39EbQIx9d3OjkPs6iUjAw1ZRuLEmyb1-bTX6TSdViM8ds0a3fCmSs"/>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">Pizza</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 line-clamp-1">Cheesy Crusted</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all text-center" onClick={() => {}} type="button">
<div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow group-hover:scale-105 transition-transform">
<img className="w-full h-full object-cover" data-alt="Juicy gourmet chicken burger with crisp lettuce and sauce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe3W98N096DjzMZK6Yk6mv0OoCYvc_ZoOdb1QTXbfPDtn1xLGxRe4xawa-J32eyGldL5Shg507Cs0vJcOcbX9oE0nLBJ7lzFSsiFqyviU9Cedk3uKY1y-Qb5je8DgvLhRRWUIbh8ejRZ8Xyok1jlSKdoFXvl0t6bU_uBhAirmStVULh7NmF8tpex-r8Lr3msQtXRbnTqgLPsK6yAfTJlPKOXwVYs-K_W5Cxut85CU3xIoAuLy7Xog"/>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">Burgers</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 line-clamp-1">Zingers &amp; Specials</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all text-center" onClick={() => {}} type="button">
<div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow group-hover:scale-105 transition-transform">
<img className="w-full h-full object-cover" data-alt="Crisp fried fish fillets served with lemon wedge and dipping sauce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiWS1ZCt0Dbv0fYTJpBco3fPWpVsHQcJnQ-WO7CAqvOJXch5CSbe3_AUUUX_-RcxGmm_ItfSSQzI-0Z1VVtQaJ8ZW3XOa02i-EzpCm7AzB1cOnzsGZS_zyb4zipTP5JX-gKOlBADB2sIGj2cAlp8bxNAtHnqtXP9NwuMOKOc9f_cUKhoaG5ygNqOjYl_2ho0csK3r3D_0bJ5sSkfJdWd9CxSyJoiD0zma0sjnznjSwvFMCdN2-p94"/>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">Seafood</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 line-clamp-1">Fish Fingers &amp; Dhaka</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all text-center" onClick={() => {}} type="button">
<div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow group-hover:scale-105 transition-transform">
<img className="w-full h-full object-cover" data-alt="Oven baked chicken mushroom lasagne with golden bubbling cheese topping" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg-TduFYvxnhXLnYAVwVOnCKOx8V0c9U-bTuHpFgcpoDpCD52w86U-OD-uxn4P7aOMIOu4xgJ6BJwyt3c082TRgEOpH_c_sGy4fKfQuPuM6eoksTcM_Pl9Ju3K691AA0RdEV0ZFVMMgZGOYF8VrHyU_ZxJk6P13UegEKQOItf_vv4ppzX6pHQPd4TF7D0C-Wy6vE5o2GIQyB1dqDkFMFUFO9PxlhmJPpVNwcx07-K6qYmlNDQt9pg"/>
</div>
<span className="font-title-md text-title-md text-on-surface font-bold">Pasta</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-0.5 line-clamp-1">Creamy &amp; Lasagne</span>
</button>
</div>
</div>
</section></SlideUp>



<SlideUp><section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto px-gutter">
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">Warsak Road Branch</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Dine-in Comfort &amp; Hospitality</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Thoughtfully arranged spaces to make every family celebration, casual lunch, and evening dinner comfortable.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[26px]">groups</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Dedicated Family Dining</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Comfortable, secluded seating halls tailored for families with complete privacy and Peshawar&apos;s warmest courtesy.
          </p>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[26px]">deck</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Rooftop Seating</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Breezy, open-air rooftop dining experience perfect for breezy Peshawar evenings under the stars.
          </p>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[26px]">music_note</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Live Musical Evenings</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Traditional rubab and light melodious acoustic sets hosted on selected weekends and festive occasions.
          </p>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[26px]">local_parking</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Ample Customer Parking</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Easy and secure plaza vehicle parking right at Arbab Sajjad Plaza on main Warsak Road.
          </p>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[26px]">wifi</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Complimentary High-Speed Wi-Fi</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Stay connected while enjoying your meal or conducting business dinners with seamless guest connectivity.
          </p>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-[26px]">accessible</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Accessible Dining Space</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Wheelchair-accessible entryways and supportive ground floor seating for elderly and mobility-assisted guests.
          </p>
</div>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-gutter">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-lg">
<div>
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">Visual Atmosphere</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Ambiance &amp; Culinary Gallery</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-1">
            Glimpse the dishes, hospitality, and welcoming atmosphere at Al Maidah Restaurant Peshawar.
          </p>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-md text-label-md btn-interaction">Click photo to enlarge</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="relative h-64 lg:h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-sm" onClick={() => {}}>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Traditional Shinwari copper karahi being cooked over open fire with fresh tomatoes and green chilies" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD4Kz3GctTf152g0ZZYEZEpVRALWhrzSZWVLf3QEbp039H_aKxbczSC5LOYJnMxpeoKDpiyxMmoHAc6h7J28yCpCYFdYSnpiUx0d6qsdVgPKMUkpvzEHEnxffC6VSoReyKEA-UY9CEGsHbIFNoUd5hTBIdsArneP9tkrCfiJE5dh9OOwjWtKIGnApg0ahgvRF25nVyjYYlak9B-OkbRjTbkyvsPjGdO1RJig7jq3vGhnLNm3YQU0I"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-on-primary font-label-lg text-label-lg">Sizzling Handi &amp; Karahi</span>
</div>
</div>
<div className="relative h-64 lg:h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-sm" onClick={() => {}}>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Warmly lit restaurant dining room with elegant wooden furniture, family booths, and traditional Peshawar decorative accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX-OHLyZwWzRwwcFH9Qct3apHne_oNTq2M1UQdPTSoHSBZQtAjRhPWWuFFue1lE_wrS0NdKHoNIGdKUk7VS7Z4u9KvuuQ03SnQoXQsoqF7vnYCMNMviYuA2ttLJ_ZakLubVss-iQN3fvhhoQBuf4yRW6TlwQBlwxD7E4AUhbPoCcD8YsE1mCzQGgqiarbfs2sB6sD8fpi7hiFTY7lKeZhsFvyuLasE2_G2-TS8XX-AKtZS5i8W-fY"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-on-primary font-label-lg text-label-lg">Family Dining Hall</span>
</div>
</div>
<div className="relative h-64 lg:h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-sm" onClick={() => {}}>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Cheesy supreme nachos loaded with jalapenos, sour cream, and crispy hot wings served on platters" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG-O0lsVRni5ZYxoa8ltiZb5kIiRvmK2zzfcZv_B_1N9M139O8rxd5EwdrnQov6yVmfeXMJvm-bYvPpTP7qkMobrs67MRSHjBWf_WnwIst_A511SZ2TV1D6J8nuv6MLZI0I8tD-SR_KRmT_ypLU85Jz6DmWQgOcwghZ4Ht-2wxYgoUGICHL11-0z7123L9bHa-35RsMH5ApJvWLPAxnZIQ280mnu0q8Eu4e_YXjZH8YkyMEZGm6ls"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-on-primary font-label-lg text-label-lg">Appetizers &amp; Fast Food</span>
</div>
</div>
<div className="relative h-64 lg:h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-sm" onClick={() => {}}>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Open-air rooftop seating at dusk with warm fairy lights overlooking the bustling evening atmosphere of Warsak Road Peshawar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX9C0Sith23tPWWaOwG4YMYs-FDGGSq-HdhqjzEqvp_b3wJH7YHHs2-p53RHRj02cj0ea-0h2Qh7h7HpWn3wt8oo9daY2ZuNmIiWAzdXrXLJkLAIChyMwnOySMnoB-YFJ6EBixsD_q0puyQiZ-zHD56kkC0GcauYZm8qyYPros3ltNUJW3KJ8wum13ZEwDzcloLW-dqw7qD30M1IWjjATMxNUot1qVZNMC-P8N8m9Q-y1PRWCv3K8"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-on-primary font-label-lg text-label-lg">Rooftop Evening Atmosphere</span>
</div>
</div>
</div>
</div>
</section></SlideUp>

<div className="fixed inset-0 z-50 bg-on-background/80 backdrop-blur-md hidden items-center justify-center p-4" id="lightbox-modal">
<div className="relative max-w-4xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl">
<button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
<div className="max-h-[768px] w-full overflow-hidden bg-on-surface">
<img alt="Enlarged View" className="w-full h-full max-h-[768px] object-contain mx-auto" id="lightbox-img" src=""/>
</div>
<div className="p-4 bg-surface-container flex items-center justify-between">
<span className="font-title-md text-title-md text-on-surface" id="lightbox-caption"></span>
<span className="font-label-md text-label-md text-on-surface-variant">Al Maidah Peshawar</span>
</div>
</div>
</div>

<SlideUp><section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto px-gutter">
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">Transparent Feedback</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Verified Customer Ratings &amp; Reviews</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Real guest feedback across our primary delivery and dining channels in Peshawar.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

<div className="p-space-lg rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-5">
<div className="w-16 h-16 rounded-2xl bg-[#D70F64] text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
              fp
            </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-widest text-[#D70F64] font-bold">Foodpanda Delivery</span>
<div className="flex items-baseline gap-2 mt-0.5">
<span className="font-display text-headline-lg font-bold text-on-surface">4.8</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">/ 5.0</span>
</div>
<div className="flex items-center text-secondary mt-1">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
</div>
</div>
</div>
<div className="flex flex-col sm:items-end text-center sm:text-right border-t sm:border-t-0 sm:border-l border-surface-container pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto">
<span className="font-title-md text-title-md text-on-surface font-bold">350+ Reviews</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Verified customer delivery</span>
<span className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md text-[11px] font-semibold btn-interaction">
              Top Rated Partner
            </span>
</div>
</div>

<div className="p-space-lg rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-5">
<div className="w-16 h-16 rounded-2xl bg-surface-container text-primary flex items-center justify-center font-bold text-2xl shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[32px]">map</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant font-bold">Google Reviews</span>
<div className="flex items-baseline gap-2 mt-0.5">
<span className="font-display text-headline-lg font-bold text-on-surface">3.2</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">/ 5.0</span>
</div>
<div className="flex items-center text-secondary mt-1">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 0"}}>star_half</span>
<span className="material-symbols-outlined text-[18px] text-outline-variant" style={{"fontVariationSettings": "'FILL' 0"}}>star</span>
</div>
</div>
</div>
<div className="flex flex-col sm:items-end text-center sm:text-right border-t sm:border-t-0 sm:border-l border-surface-container pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto">
<span className="font-title-md text-title-md text-on-surface font-bold">78 Ratings</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Warsak Road Branch Profile</span>
<span className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md text-[11px] btn-interaction">
              Dine-in &amp; Walk-in
            </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
</div>
<span className="px-2 py-0.5 rounded bg-[#D70F64]/10 text-[#D70F64] font-label-md text-label-md text-[10px] font-bold uppercase">Foodpanda</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
              “it was so tasty creamy chesey tender chicken...”
            </p>
</div>
<div className="pt-4 mt-3 border-t border-surface-container flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Verified Foodpanda Diner</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Peshawar</span>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
</div>
<span className="px-2 py-0.5 rounded bg-[#D70F64]/10 text-[#D70F64] font-label-md text-label-md text-[10px] font-bold uppercase">Foodpanda</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
              “chicken karahi was soo good... fresh ginger aroma and perfect spice balance!”
            </p>
</div>
<div className="pt-4 mt-3 border-t border-surface-container flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Regular Customer</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Warsak Rd</span>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
</div>
<span className="px-2 py-0.5 rounded bg-[#D70F64]/10 text-[#D70F64] font-label-md text-label-md text-[10px] font-bold uppercase">Foodpanda</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
              “best pizza i have ever tried in this area, hot and extra cheesy when delivered.”
            </p>
</div>
<div className="pt-4 mt-3 border-t border-surface-container flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Delivery Order</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">ICM Area</span>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
</div>
<span className="px-2 py-0.5 rounded bg-[#D70F64]/10 text-[#D70F64] font-label-md text-label-md text-[10px] font-bold uppercase">Foodpanda</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
              “This soup is superb amazing delicious... perfect starter for winter nights.”
            </p>
</div>
<div className="pt-4 mt-3 border-t border-surface-container flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Soup Order</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Peshawar City</span>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex text-secondary">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
</div>
<span className="px-2 py-0.5 rounded bg-[#D70F64]/10 text-[#D70F64] font-label-md text-label-md text-[10px] font-bold uppercase">Foodpanda</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
              “excellent food and excellent quality... Chow mein and boneless handi were top tier.”
            </p>
</div>
<div className="pt-4 mt-3 border-t border-surface-container flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Family Gathering</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Warsak Rd</span>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-outline-variant/30 text-on-surface-variant font-label-md text-label-md text-[10px] uppercase font-bold">Kitchen Commitment</span>
<span className="material-symbols-outlined text-secondary text-[18px]">update</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface font-bold">Customer Feedback &amp; Service</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
              Reflecting on feedback from peak weekend hours on Google reviews, our team continues to refine rush-hour wait times and packaging to match our 4.8-star delivery benchmark.
            </p>
</div>
<div className="pt-3 mt-3 border-t border-outline-variant/30">
<span className="font-body-sm text-body-sm text-secondary font-semibold text-[12px]">Management Quality Promise</span>
</div>
</div>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-6 flex flex-col space-y-4">
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">Directions &amp; Inquiries</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Find Us on Warsak Road</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
            Conveniently situated at Arbab Sajjad Plaza, adjacent to ICM School &amp; College on main Warsak Road, Peshawar.
          </p>
<div className="space-y-3.5 pt-2">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">pin_drop</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Address</span>
<span className="font-body-md text-body-md text-on-surface">Arbab Sajjad Plaza, Near ICM School &amp; College, Warsak Road, Peshawar, KP, Pakistan</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">phone</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Direct Telephone</span>
<a className="font-title-md text-title-md text-primary font-bold hover:underline" href="tel:+923009016815">+92 300 9016815</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">local_shipping</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Delivery Reach</span>
<span className="font-body-md text-body-md text-on-surface">Foodpanda live coverage across Warsak Road, Babu Ghari, and nearby Peshawar sectors.</span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 pt-4">
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow hover:bg-primary-container transition-all btn-interaction" href="https://www.google.com/maps/place/Almaidah+Cafe+Warsak+Road/@34.0426808,71.5251936,17z/data=!4m7!3m6!1s0x38d917759e9a0381:0xfb83ca2504d4e801!8m2!3d34.0426808!4d71.5251936!10e9!16s%2Fg%2F11zjmlb1jx?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">navigation</span>
<span className="">GET DIRECTIONS</span>
</a>
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors btn-interaction" href="tel:+923009016815">
<span className="material-symbols-outlined text-secondary text-[18px]">call</span>
<span className="">CALL NOW</span>
</a>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative rounded-3xl overflow-hidden shadow-xl bg-surface-container">
<div className="w-full h-96 rounded-3xl relative overflow-hidden z-0" data-location="Arbab Sajjad Plaza, Warsak Road, Peshawar, Pakistan">
  <iframe 
    src="https://maps.google.com/maps?q=Almaidah%20Cafe%20Warsak%20Road&t=&z=15&ie=UTF8&iwloc=&output=embed" 
    className="absolute inset-0 w-full h-full z-0"
    style={{ border: 0 }} 
    allowFullScreen={true} 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
<div className="absolute inset-0 bg-primary/10"></div>
<div className="absolute top-4 left-4 p-3 rounded-xl bg-surface/95 backdrop-blur shadow-md flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">restaurant</span>
</div>
<div>
<span className="font-title-md text-title-md text-on-surface block leading-tight">Al Maidah</span>
<span className="font-body-sm text-body-sm text-secondary block text-[11px]">Warsak Road • Peshawar</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="w-full bg-primary-container text-on-primary py-space-xl relative overflow-hidden">
<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-surface-tint/20 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-gutter relative z-10">
<div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
<div className="max-w-2xl flex flex-col items-center lg:items-start space-y-2">
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed font-bold">Fast Service &amp; Fresh Dispatch</span>
<h2 className="font-headline-lg text-headline-lg text-on-primary">Craving Something Delicious?</h2>
<p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
            Browse our extensive menu and order your favorites directly to your doorstep or book a warm family table on Warsak Road.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
<a className="inline-flex items-center justify-center gap-2 px-space-xl py-4 rounded-xl bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-label-lg text-label-lg font-bold shadow-lg transition-all transform hover:-translate-y-0.5 btn-interaction" href="https://www.foodpanda.pk" rel="noopener noreferrer" target="_blank">
<span className="">ORDER ON FOODPANDA</span>
<span className="material-symbols-outlined text-[18px]">launch</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-space-lg py-4 rounded-xl bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary font-label-lg text-label-lg transition-colors btn-interaction" href="tel:+923009016815">
<span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
<span className="">+92 300 9016815</span>
</a>
</div>
</div>
</div>
</section></SlideUp>
</div>
</main><aside className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-space-md py-2.5 flex items-center justify-between gap-space-sm"><a className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors" href="tel:+923009016815"><span className="material-symbols-outlined text-secondary text-[20px]">call</span><span className="">Call Us</span></a><a className="flex-[1.5] flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg tracking-wide hover:bg-primary-container transition-colors shadow-sm" data-path="menu" href="/menu"><span className="">Order Online</span><span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[9px] font-bold uppercase">Foodpanda</span></a></aside><SlideUp><footer className="w-full bg-surface-container-low pb-24 md:pb-16 pt-space-xl"><div className="max-w-7xl mx-auto px-gutter"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl"><div className="flex flex-col"><div className="flex items-center gap-3 mb-space-sm"><img alt="Al Maidah Logo" className="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUQDu7sGBAePI7lETEgGmdo-Vt9IXf6Meg6uDxusuCiDn8hTbMgKSZeM9XL51SuKLPq9fkGww6Wdo822eE4XSrIOyuvFO46LkBq4vdTaIjUdrVdh5qxFyC7edSpey4_0WyLhLYWYBwNOb8L86mP82LhIvoDKZW82mvrgfXHjVIVWcHba17mNdojLMlYj7KVoBhQvcGCBBq9bS8L6WPrGHpHB3JYbniRiqqaywEpsY-m3sN1SIWuEM"/><span className="font-headline-sm text-headline-sm text-primary">Al Maidah</span></div><p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-space-md">Refined Khyber culinary heritage and Shinwari barbecue tradition crafted with Peshawar hospitality for family and celebratory dining.</p><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">public</span></div><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">photo_camera</span></div><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">share</span></div></div></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Quick Navigation</h4><ul className="flex flex-col space-y-2"><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="home" href="/">Home</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="menu" href="/menu">Full Menu &amp; Specials</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="about" href="/about">Our Culinary Heritage</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="gallery" href="/gallery">Ambiance &amp; Gallery</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact">Location &amp; Contact</a></li></ul></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Warsak Road Branch</h4><div className="flex items-start gap-2.5 mb-space-sm"><span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">location_on</span><span className="font-body-sm text-body-sm text-on-surface-variant">Arbab Sajjad Plaza, Near ICM School &amp; College, Warsak Road, Peshawar, Khyber Pakhtunkhwa</span></div><div className="flex items-center gap-2.5 mb-space-sm"><span className="material-symbols-outlined text-primary text-[20px] shrink-0">call</span><a className="font-body-sm text-body-sm text-on-surface font-semibold hover:text-primary transition-colors" href="tel:+923009016815">+92 300 9016815</a></div><div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[20px] shrink-0">schedule</span><span className="font-body-sm text-body-sm text-on-surface-variant">Daily: 12:00 PM – 1:00 AM</span></div></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Takeout &amp; Delivery</h4><p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Craving authentic Peshawari Karahi, Chapli Kabab, and Tikka at home?</p><div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2"><div className="flex items-center justify-between"><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">Foodpanda Delivery</span><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md text-[11px] btn-interaction">Live</span></div><p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Fast dispatch across Warsak Road and neighboring Peshawar sectors.</p><a className="mt-1 inline-flex items-center justify-center gap-1.5 py-2 px-space-md rounded bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors" data-path="menu" href="/menu"><span className="">Order via Foodpanda</span><span className="material-symbols-outlined text-[16px]">north_east</span></a></div></div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left"><p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 Al Maidah Restaurant. All rights reserved. Warsak Road, Peshawar.</p><div className="flex items-center gap-space-md"><span className="font-label-md text-label-md text-on-surface-variant">Halal Certified</span><span className="w-1 h-1 rounded-full bg-outline-variant"></span><span className="font-label-md text-label-md text-on-surface-variant">Family Seating Available</span></div></div></div></footer></SlideUp>


    </>
  );
}





