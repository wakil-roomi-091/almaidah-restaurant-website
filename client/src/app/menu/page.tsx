"use client";

import React from 'react';
import Link from 'next/link';
import SlideUp from '@/components/animations/SlideUp';
import FadeIn from '@/components/animations/FadeIn';

export default function Page() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">

<SlideUp><section className="relative w-full bg-surface-container-low px-gutter py-space-xl overflow-hidden shadow-sm">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed mb-space-sm shadow-sm btn-interaction">
<span className="material-symbols-outlined text-[16px] text-secondary">restaurant_menu</span>
<span className="font-label-md text-label-md tracking-wider uppercase">Authentic Dining • Warsak Road, Peshawar</span>
</div>
<h1 className="font-display text-display text-primary max-w-4xl tracking-tight mb-space-sm">
        Our Complete Menu
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-lg">
        Explore the flavors of Al Maidah — authentic Desi gravies, Chinese wok specialties, gourmet pizzas, crispy burgers, and more.
      </p>

<div className="w-full max-w-3xl bg-surface-container-lowest p-2 rounded-xl shadow-md flex flex-col sm:flex-row gap-2 items-center">
<div className="relative w-full flex-1 flex items-center">
<span className="material-symbols-outlined text-outline text-[22px] absolute left-3.5 pointer-events-none">search</span>
<input className="w-full pl-11 pr-4 py-3 bg-surface-container-low rounded-lg font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors" id="menuSearchInput" placeholder="Search dishes, e.g., handi, chow mein, zinger, pizza..." type="text"/>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto px-1 justify-between sm:justify-end">
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap px-2" id="resultsCounter">31 Specialties</span>
<button className="hidden px-3 py-2 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors btn-interaction" id="clearFilterBtn" onClick={() => {}} type="button">
            Clear
          </button>
</div>
</div>

<div className="flex flex-wrap items-center justify-center gap-3 mt-space-md">
<div className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
<span>100% Halal Verified</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-secondary">local_fire_department</span>
<span>Fresh Clay Tandoor &amp; Wok</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-primary">electric_moped</span>
<span>Fast Foodpanda Dispatch</span>
</div>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md shadow-sm">
<div className="max-w-7xl mx-auto px-gutter py-2.5">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1" id="categoryNav">
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all shadow-sm bg-primary text-on-primary font-bold btn-interaction" data-category="all" onClick={() => {}}>
          All Dishes
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="appetizers" onClick={() => {}}>
          Appetizers
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="soups" onClick={() => {}}>
          Soups
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="seafood" onClick={() => {}}>
          Seafood
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="burgers" onClick={() => {}}>
          Burgers
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="thai-chinese" onClick={() => {}}>
          Thai &amp; Chinese
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="pizza" onClick={() => {}}>
          Pizza
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="chow-mein" onClick={() => {}}>
          Chow Mein
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="rice" onClick={() => {}}>
          Rice
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="desi" onClick={() => {}}>
          Desi Food
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface-variant btn-interaction" data-category="pasta" onClick={() => {}}>
          Pasta
        </button>
</div>
</div>
</section></SlideUp>

<SlideUp><section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">

<div className="menu-section mb-16" data-section="desi">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Signature Khyber Flavors</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Desi Food &amp; Handi Gravies</h2>
</div>
<span className="font-label-lg text-label-lg text-on-surface-variant hidden sm:inline">Cooked in Pure Ghee • Fresh Coriander &amp; Ginger</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="desi" data-keywords="fish karahi desi seafood gravy fresh">
<div className="relative w-full h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Authentic Peshawari fish karahi simmered with ripe red tomatoes, green chilies, julienned ginger, and aromatic desi spices in a rustic iron wok on an open flame with warm amber kitchen lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwZtQTclqbGnW1_JGywVAytvHzNchjAhOJZQpXm5qF9xjohhMoVeh47ghyGF1LJpSLIHrFSUeId4JT0leUYvSE2HeKDIbWsdzRdyN9_UpUlGhn0cJQx0eYn-488jX0H8kb2cIsf8UpES-iEY07s7MItose7UcZuPPDIVy6yclf6BfN4ba1-Gfv5BwptDUTIylhRsCaHUk5pcnZmwoGZAzu4ZgyJmxSr_GgYe2nie16jQTQBipjZ7o"/>
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-on-primary font-label-md text-label-md font-bold uppercase shadow-sm">Chef&apos;s Special</span>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Special Fish Karahi</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,800</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">Fresh succulent river fish prepared in signature Peshawari karahi gravy with fragrant spices, tomatoes, and ginger.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">skillet</span> Handi Pan Serve
              </span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="desi" data-keywords="boneless chicken handi gravy cream butter desi">
<div className="relative w-full h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Traditional Pakistani chicken boneless handi served in a glazed brown clay pot, topped with fresh double cream, chopped cilantro, and ginger slivers under warm restaurant spotlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE-6hH07EGktZg8IXZsub_3CNJfn0iYbG8HOCDiM_D-RebmIjA6QvA0Bqt7hOVB9zoW-qdsCca8rpKikixdX5ZHg4uBJ66VxIV0vjT3_FQj3Iw59glSyOAHu-sLCtdR1Ff12Mp5jDmWh00LC-qxRkXam6SM_YGLBjiM549OuuUcNmEgTQchJ1paUNjxqNzGNNAjtJR6T4Fuddb20yZBCp4CFb0R29SzgtwCqrLU0rCeqM96UsR0l0"/>
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-md text-label-md font-bold uppercase shadow-sm">Top Seller</span>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Special Chicken Boneless Handi</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,699</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">Tender hand-cut boneless chicken slow-cooked in a rich, buttery clay pot gravy with subtle fenugreek aroma.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">soup_kitchen</span> Full Clay Pot
              </span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="desi" data-keywords="chicken achari handi pickle tangy spicy desi">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Achari Handi</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,699</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Tantalizing handi infused with traditional pickling spices, kalonji seeds, and whole green chilies.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">local_fire_department</span> Medium Spicy
              </span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="desi" data-keywords="chicken white handi malai cream yogurt mild desi">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken White Handi</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,899</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Velvety white gravy crafted with rich heavy cream, roasted cashew nut paste, white pepper, and yoghurt.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">star</span> Creamy Mild
              </span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="desi" data-keywords="chicken ginger desi wok julienne aromatic">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Ginger</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,100</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Wok-tossed boneless chicken bits glazed in a piquant semi-dry ginger sauce with caramelized onions.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">flatware</span> Wok Gravy
              </span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="desi" data-keywords="chicken zaitoni olive desi special gravy">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Zaitoni</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,500</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">A signature specialty incorporating Mediterranean black olives simmered in seasoned Peshawar masala.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">spa</span> Infused Olives
              </span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="desi" data-keywords="seekh kabab karahi grilled skewers gravy masala">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Seekh Kabab Karahi</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">From Rs. 999</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Charcoal-grilled minced meat seekh kababs tossed in a fragrant, tangy tomato and garlic karahi sauce.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">outdoor_grill</span> Smoked Kabab
              </span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="desi" data-keywords="mixed vegetables sabzi vegetarian desi peas carrots potatoes">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Mixed Vegetables</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 499</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Seasonal garden vegetables sauteed with ground cumin, turmeric, and cracked coriander seeds.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">eco</span> Vegetarian
              </span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="desi" data-keywords="daal mash lentils tarka desi butter">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Daal Mash</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 499</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">White urad lentils cooked till firm and finished with a sizzling desi ghee tarka of cumin and red chilies.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">dining</span> Desi Ghee Tarka
              </span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="menu-section mb-16" data-section="appetizers">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Starters &amp; Extras</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Appetizers</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="appetizers" data-keywords="hot wings chicken fried spicy appetizers">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Hot Wings (5 Pieces)</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 649</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Golden fried chicken wings coated in a zesty, spicy pepper glaze, served with cooling garlic dip.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">5 Pcs • Spicy</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="appetizers" data-keywords="supreme nachos cheese jalapeno salsa appetizers">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Supreme Nachos</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 799</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Crispy tortilla chips topped with melted cheese, jalapeños, guacamole and fresh salsa.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Sharing Platter</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="appetizers" data-keywords="paper cup extra disposable drinkware">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Paper Cup</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 39</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Single-use hygienic beverage cup for takeout and family gatherings.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Add-on Item</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="menu-section mb-16" data-section="soups">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Warming Starters</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Soups</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="soups" data-keywords="hot and sour soup chinese broth spicy appetizers">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Hot &amp; Sour Soup</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">From Rs. 399</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Classic savory broth loaded with shredded chicken, black mushrooms, egg ribbons, and balanced vinegar-chili punch.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Single / Family Bowl</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="soups" data-keywords="chicken corn soup sweetcorn broth mild appetizers">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Corn Soup</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">From Rs. 399</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Silky, comforting sweetcorn velouté with shredded tender chicken and a gentle white pepper finish.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Single / Family Bowl</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="menu-section mb-16" data-section="seafood">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Crispy &amp; Fresh Catch</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Seafood Specialties</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="seafood" data-keywords="finger fish crispy seafood tartar dip">
<div className="relative w-full h-44 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Golden crisp fish fingers arranged neatly on an artisan wooden board served with house tartar dip and lime wedge with warm restaurant ambiance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyeoLxsvUucnTqVwOVhOWwf4ujWHOt6dl6NGvWQNO1pViO5heFBQ7NOJyrX0NR3AGxNEp5NY7QNBoha_-l4VNDDHrE02T5yuYHt03w1U9DRvkN1lfkS9pCwjA6zK4wnRKz4P4hoQuIgD29hjrTaTvwsxGtlIjyvAXPXSXQ9Yga0FDaFfbxQRqR9HykaJgpQR2Fgap8Tr9Da1PYdV-fGJG0mXqe5dMEdJbmzJvYRJTQmrnjTPv_aDg"/>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Finger Fish (6 Pieces)</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,600</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Crumbed boneless fish batons seasoned with mild herbs, fried golden with house tartar sauce.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">6 Cutlets • Tartar</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="seafood" data-keywords="crispy fried fish seafood batter peshawar style">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Crispy Fried Fish (4 Pieces)</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,400</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Marinated in Peshawari carom and coriander batter, deep fried for an extra crunchy exterior.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">4 Prime Fillets</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="seafood" data-keywords="dhaka fish sesame seed seafood crispy spiced">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Dhaka Fish</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,520</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Signature Dhaka style fish strips crusted with fragrant sesame seeds and authentic spice rub.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Sesame Crusted</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="menu-section mb-16" data-section="burgers">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Flame-Seared &amp; Crispy</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Gourmet Burgers</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="burgers" data-keywords="al maidah special burger double cheese fries burger">
<div className="relative w-full h-44 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Gourmet double-stacked chicken burger with molten cheese, fresh crisp lettuce, sliced ripe tomatoes, and house special sauce in a toasted brioche bun with salted french fries on side" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOP2WIEthZBRJ47DXbIg8W8chlDTeRbNE32rE6T86EbkT47O4gaesra4Vz3CbQdP2HUwmipFNL8N67XrkRcZGkpXiEReu_DinfYV8OLqsytjeplQpMVjyWFp2r8r1s1zyr-3SAvLwaU9KHEx2FFZA2JNrHpu8ck2F-BufRa4eeSYQF6OC1b44c1WfFcnYZ18e2Ny-esJBUSbaJPDu8FHkSS1xL-BtJ1UuWtxOc2uz9oqIVNal_J7k"/>
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-on-primary font-label-md text-label-md font-bold uppercase shadow-sm">Signature</span>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Al Maidah Special Burger</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 999</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Double layered patty with melted cheddar, smoked caramelized onions, egg, and chef's secret dressing.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Includes Seasoned Fries</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="burgers" data-keywords="zinger burger crispy chicken spicy burger">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Zinger Burger</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 799</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Spicy crisp whole chicken breast fillet, iceberg lettuce, and creamy pepper mayonnaise on a sesame bun.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Includes Fries</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="burgers" data-keywords="crispy fish burger fillet seafood burger tartar">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Crispy Fish Burger</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,100</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Golden fried fish fillet with tart citrus relish, melted American cheese, and crisp shredded cabbage.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Includes Fries</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="menu-section mb-16" data-section="thai-chinese">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Wok Creations</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Thai &amp; Chinese</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="thai-chinese" data-keywords="chicken shashlik rice wok sweet sour chinese">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Shashlik with Rice</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,399</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Skewered wok chicken with capsicum and onions in tangy sweet-and-sour glaze, served alongside egg fried rice.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Includes Fried Rice</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="thai-chinese" data-keywords="chicken manchurian rice spicy garlic wok chinese">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Manchurian with Rice</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,699</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Crispy chicken bites glazed in savory ginger-garlic and chili-tomato sauce with steaming egg fried rice.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Includes Fried Rice</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="menu-section mb-16" data-section="pizza">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Oven-Baked Crusts</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Gourmet Pizza</h2>
</div>
<span className="font-label-lg text-label-lg text-on-surface-variant hidden sm:inline">Sizes Available: Small, Medium, Large</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="pizza" data-keywords="cheese lover pizza mozzarella cheddar baked">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Cheese Lover Pizza</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">From Rs. 599</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Layers of pure molten whole-milk mozzarella, aged cheddar, and aromatic Italian herb tomato sauce.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Stone Oven Baked</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="pizza" data-keywords="smoked chicken pizza bbq mozzarella pizza">
<div className="relative w-full h-44 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Oven-baked artisan pizza topped with tender smoked chicken cubes, fresh basil leaves, red onions, sliced black olives, and molten mozzarella on a wooden peel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1H_SPNK-KstI5CBALNky4ZYmvoXbSeTKXXa5YLQpPFk8pvbO70_qeBF9AZ4oFDl1DHhv_7IwYNEBKH0uwDu4lWLBl2mmt3qcY73dpr5W-rB83AteFIt-3Jpu19-dJj-Xb2iXvTRWXAYUc4gO-pZlowE_2aZDWPdY2NwqdhJVcKc1OV2L-cyXrN7qFhpL9PtorBHirpYSPwMOm43FOItAJId0fKm1hbSfwEdtmOGcHBIWedTryMHU"/>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Smoked Chicken Pizza</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">From Rs. 1,080</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Wood-smoked shredded chicken chunks with bell peppers, mushrooms, and herbs.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Signature Recipe</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="pizza" data-keywords="fajita pizza spicy chicken peppers onions pizza">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Fajita Pizza</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">From Rs. 899</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Mexican spiced chicken fajita cubes, sliced jalapeños, sweet onions, and crisp bell peppers.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Zesty Spices</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="pizza" data-keywords="vegetables pizza vegetarian olives sweetcorn bell pepper mushrooms">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Vegetables Pizza</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">From Rs. 840</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Loaded with sweet corn, mushrooms, black olives, sliced bell peppers, and fresh tomatoes.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Garden Vegetarian</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="pizza" data-keywords="calzone pizza folded stuffed crust chicken cheese">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Calzone Pizza</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">From Rs. 899</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Italian folded golden crust sealed with spiced chicken fillings, cheese blend, and marinara stuffing.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Folded Oven Pockets</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="menu-section mb-16" data-section="chow-mein">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Wok-Tossed Noodles</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Chow Mein</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="chow-mein" data-keywords="chicken chow mein noodles wok stir fry cabbage soy">
<div className="relative w-full h-44 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Steaming wok-tossed chicken chow mein with julienned carrots, scallions, crisp bell peppers, and chicken strips in a classic black skillet with chopsticks resting on the side" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1pKtqfw0YLhDFKNL0eoTltqvK-p6FWnH0Mal_kO-M216nEXhOXywhjUAnh1ARDOve1UPuAJADC_NQ6ZmaJl8hvrTVhYF6M4oZvBTx_dw0Djak-RyRfsGQu5hCgCPNTORuUlU3_ERup8l5hACKTSJbOK3xrNa92j5F2xt0l5MlM6CBzM9_Sp3wH3zTjzefWA7L7vCx9ycOwfkA8fi0KFpzaRienx0ERo97Uj4Br9ob1Eud3pz518g"/>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Chow Mein</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 899</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Tender egg noodles wok-fried with seasoned chicken juliennes, crisp cabbage, and savory dark soy sauce.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Chef&apos;s Favorite</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="chow-mein" data-keywords="thai spicy chow mein noodles chili garlic fiery">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Thai Spicy Chow Mein</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 799</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Fiery chili sauce with Thai basil, crushed garlic, and sliced greens tossed with soft egg noodles.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Hot &amp; Tangy</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="chow-mein" data-keywords="vegetables chow mein veg noodles carrots bean sprouts">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Vegetables Chow Mein</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 699</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Crunchy farm vegetables, bean sprouts, carrots, and spring onions stir-fried in light sesame oil.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Vegetarian</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="menu-section mb-16" data-section="rice">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Fragrant Basmati Creations</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Rice Dishes</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="rice" data-keywords="special fried rice prawns chicken egg basmati wok">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Special Fried Rice</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 699</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Premium long-grain basmati with diced chicken, eggs, seasonal vegetables, and signature chef seasoning.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Top Pairing</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="rice" data-keywords="chicken masala rice spicy desi aromatics basmati">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Masala Rice</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 799</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Spiced basmati rice tossed with marinated chicken bits, brown onions, cloves, and cardamom aroma.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Aromatic Spice</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="rice" data-keywords="chicken fried rice classic wok chinese basmati">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Fried Rice</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 860</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Classic savory wok-tossed basmati loaded with chopped chicken fillet, white pepper, and scallions.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Classic Wok</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="rice" data-keywords="egg fried rice wok basmati light scrambled">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Egg Fried Rice</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 649</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Fluffy basmati grains pan-tossed with freshly scrambled organic eggs, scallions, and light seasoning.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Perfect Side</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="rice" data-keywords="vegetables fried rice vegetarian peas carrots basmati">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Vegetables Fried Rice</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 620</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Nutritious wok-fried basmati enriched with crunchy carrots, green peas, sweet corn, and spring onions.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Vegetarian</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="menu-section mb-12" data-section="pasta">
<div className="flex items-end justify-between mb-space-md">
<div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Italian Oven &amp; Skillet</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Pasta &amp; Lasagne</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="pasta" data-keywords="al maidah special chicken pasta alfredo penne cheese white sauce">
<div className="relative w-full h-44 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Gourmet white sauce penne pasta tossed with grilled seasoned chicken breast, button mushrooms, parmesan shavings, and cracked black pepper in a fine ceramic bowl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKS6B9_H7AjYtBOqzv-2nGMgX6-87JxHqZQQR-iTud4SNvPPgyXVHpuqwq1_Cq5lvwud4wIwDebYrS_bAHcpTiUmkekjHQcHquy2CeF32LoQ9lcAWRCDBnzSPu8D6Aao8CNQIj81pplj2QDVNVqyORim-EAI92T936eLd_JxHraCGUo_O6aVeQAEwoen9HH_Ib6-4qEOU6GqyaMwq9lkhGrTDQlyqklPU2JKmA8Mu36BFzzT1ns8"/>
</div>
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Al Maidah Special Chicken Pasta</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,599</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Penne folded in rich parmesan and garlic cream sauce with seasoned chicken fillets and mushrooms.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Cream &amp; Herb Sauce</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="pasta" data-keywords="chicken mushroom lasagne baked cheese bechamel layers">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chicken Mushroom Lasagne</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,699</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Multi-layered pasta sheets baked with tender chicken ragu, sliced button mushrooms, béchamel, and mozzarella.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Golden Oven Baked</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>

<article className="menu-item bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group" data-category="pasta" data-keywords="penne smoked chicken pasta red sauce pink sauce italian">
<div className="p-space-md flex flex-col flex-1 justify-between">
<div>
<div className="flex items-start justify-between gap-2 mb-1.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Penne with Smoked Chicken</h3>
<span className="font-price-tag text-price-tag text-primary whitespace-nowrap bg-primary-fixed/40 px-2 py-0.5 rounded">Rs. 1,599</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Smoked chicken strips tossed in aromatic pink pomodoro-cream sauce with black olives and fresh herbs.</p>
</div>
<div className="pt-3 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Pink Cream Sauce</span>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm btn-interaction" href="#">
<span>Foodpanda</span>
<span className="material-symbols-outlined text-[15px]">arrow_outward</span>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="hidden py-16 flex-col items-center justify-center text-center" id="noResultsState">
<span className="material-symbols-outlined text-[54px] text-outline mb-3">ramen_dining</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">No culinary items match your search</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-6">Try searching for other house favorites like Handi, Karahi, Zinger, Chow Mein, or Pizza.</p>
<button className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors shadow-sm btn-interaction" onClick={() => {}} type="button">
        View Full Menu
      </button>
</div>
</section></SlideUp>

<aside className="sticky bottom-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-gutter py-3">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-3 w-full sm:w-auto">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
<span className="material-symbols-outlined text-[20px]">room_service</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface leading-tight">Ready to dine with Al Maidah?</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Hot dispatch &amp; table reservations direct from Warsak Road.</span>
</div>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto justify-end">
<a className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors btn-interaction" href="tel:+923009016815">
<span className="material-symbols-outlined text-secondary text-[20px]">call</span>
<span>+92 300 9016815</span>
</a>
<a className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-colors btn-interaction" href="https://www.foodpanda.pk" rel="noopener noreferrer" target="_blank">
<span>Order via Foodpanda</span>
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</div>
</div>
</aside>


</div></main><aside className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-space-md py-2.5 flex items-center justify-between gap-space-sm"><a className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors" href="tel:+923009016815"><span className="material-symbols-outlined text-secondary text-[20px]">call</span><span className="">Call Us</span></a><a className="flex-[1.5] flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg tracking-wide hover:bg-primary-container transition-colors shadow-sm" data-path="menu" href="/menu"><span className="">Order Online</span><span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[9px] font-bold uppercase">Foodpanda</span></a></aside><SlideUp><footer className="w-full bg-surface-container-low pb-24 md:pb-16 pt-space-xl"><div className="max-w-7xl mx-auto px-gutter"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl"><div className="flex flex-col"><div className="flex items-center gap-3 mb-space-sm"><img alt="Al Maidah Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1ViMT7rPuexd6vNlRndEg8vGev4aEbXBFOOUUct2GpaRgL3rlFfBi5FskYSaoUas_orvJ0aj-QZA3rUoMt4ue5h39akSVXfFbN_1fOQJA_2nhwi0aI9emhIlPkB67Q5tWAnrlv5r3vtXP8xTpT2ehsSSHynWkDQPZ2NceuovRx-zeBjHNRVBwviF6s3vaUavuqSyKZgets8NSDbX13sgAmur4jq1OGQ27i6x3Bhd_wXWpQuLFf7i9hb"/><span className="font-headline-sm text-headline-sm text-primary">Al Maidah</span></div><p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-space-md">Refined Khyber culinary heritage and Shinwari barbecue tradition crafted with Peshawar hospitality for family and celebratory dining.</p><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">public</span></div><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">photo_camera</span></div><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">share</span></div></div></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Quick Navigation</h4><ul className="flex flex-col space-y-2"><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="home" href="/">Home</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="menu" href="/menu">Menu &amp; Shinwari Specials</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="gallery" href="/gallery">Ambiance &amp; Gallery</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="about" href="/about">Our Culinary Heritage</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact">Location &amp; Contact</a></li></ul></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Warsak Road Branch</h4><div className="flex items-start gap-2.5 mb-space-sm"><span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">location_on</span><span className="font-body-sm text-body-sm text-on-surface-variant">Arbab Sajjad Plaza, Near ICM School &amp; College, Warsak Road, Peshawar, Khyber Pakhtunkhwa</span></div><div className="flex items-center gap-2.5 mb-space-sm"><span className="material-symbols-outlined text-primary text-[20px] shrink-0">call</span><a className="font-body-sm text-body-sm text-on-surface font-semibold hover:text-primary transition-colors" href="tel:+923009016815">+92 300 9016815</a></div><div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[20px] shrink-0">schedule</span><span className="font-body-sm text-body-sm text-on-surface-variant">Daily: 12:00 PM – 1:00 AM</span></div></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Takeout &amp; Delivery</h4><p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Craving authentic Peshawari Karahi, Chapli Kabab, and Tikka at home?</p><div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2"><div className="flex items-center justify-between"><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">Foodpanda Delivery</span><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md text-[11px] btn-interaction">Live</span></div><p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Fast dispatch across Warsak Road and neighboring Peshawar sectors.</p><a className="mt-1 inline-flex items-center justify-center gap-1.5 py-2 px-space-md rounded bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors" data-path="menu" href="/menu"><span className="">Order via Foodpanda</span><span className="material-symbols-outlined text-[16px]">north_east</span></a></div></div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left"><p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 Al Maidah Restaurant. All rights reserved. Warsak Road, Peshawar.</p><div className="flex items-center gap-space-md"><span className="font-label-md text-label-md text-on-surface-variant">Halal Certified</span><span className="w-1 h-1 rounded-full bg-outline-variant"></span><span className="font-label-md text-label-md text-on-surface-variant">Family Seating Available</span></div></div></div></footer></SlideUp>

    </>
  );
}




