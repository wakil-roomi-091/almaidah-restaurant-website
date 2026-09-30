"use client";

import React from 'react';
import Link from 'next/link';
import SlideUp from '@/components/animations/SlideUp';
import FadeIn from '@/components/animations/FadeIn';

export default function Page() {
  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]"><div className="flex flex-col w-full">
<SlideUp><section className="relative w-full py-16 md:py-24 bg-surface-container-low overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface-container-low pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto px-gutter relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed mb-4 shadow-sm btn-interaction">
<span className="material-symbols-outlined text-[16px]">location_on</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-semibold">Warsak Road Branch • Peshawar</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">GET IN TOUCH</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 leading-relaxed">
            Visit us at Arbab Sajjad Plaza, Warsak Road, or connect with our hospitality team for reservations, quick takeaway, and doorstep delivery.
          </p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all btn-interaction" href="tel:+923009016815">
<span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
<span>+92 300 9016815</span>
</a>
<a className="inline-flex items-center gap-2 px-space-md py-3 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg transition-all btn-interaction" href="#reservation-section">
<span className="material-symbols-outlined text-secondary text-[20px]">event_seat</span>
<span>Book Table</span>
</a>
</div>
</div>
</div>
</section></SlideUp>
<SlideUp><section className="w-full -mt-8 relative z-20">
<div className="max-w-7xl mx-auto px-gutter">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300">
<div>
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">phone_enabled</span>
</div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Direct Concierge</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">+92 300 9016815</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              For instant table reservations, event dining, corporate hosting, and advance Shinwari Karahi preparation.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Avg. pick-up: &lt; 2 rings</span>
<a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold group-hover:translate-x-1 transition-transform" href="tel:+923009016815">
              Call Now <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300">
<div>
<div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[28px]">moped</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Online Delivery</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md text-[11px] font-bold btn-interaction">Foodpanda</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Live Online Dispatch</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Fast, thermally sealed delivery across Warsak Road, Babu Ghari, Prime City, and adjacent Peshawar sectors.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Est. 30–45 mins</span>
<a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-secondary font-bold group-hover:translate-x-1 transition-transform" href="#">
              Order via Foodpanda <span className="material-symbols-outlined text-[16px]">north_east</span>
</a>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface mb-space-md">
<span className="material-symbols-outlined text-[28px]">schedule</span>
</div>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Operating Hours</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Daily 12:00 PM – 1:00 AM</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Serving continuous lunch, afternoon refreshments, sunset family banquets, and late-night grill barbecue.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Open Today
            </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Takeaway &amp; Dine-in</span>
</div>
</div>
</div>
</div>
</section></SlideUp>
<SlideUp><section className="w-full py-16 md:py-24">
<div className="max-w-7xl mx-auto px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7 flex flex-col gap-6">
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Warsak Corridor Navigation</span>
<h2 className="font-headline-md text-headline-md text-primary mt-1">Location &amp; Landmark Access</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Strategically placed on main Warsak Road, providing rapid access for families across Cantonment, Babu Ghari, and Northern Ring Road intersections.
            </p>
</div>
<div className="relative rounded-xl overflow-hidden shadow-lg bg-surface-container-high">
<iframe 
  src="https://maps.google.com/maps?q=Almaidah%20Cafe%20Warsak%20Road&t=&z=15&ie=UTF8&iwloc=&output=embed" 
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-80 md:h-96"
></iframe>
<div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">storefront</span>
<div>
<h4 className="font-title-md text-title-md text-on-surface">Arbab Sajjad Plaza</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Near ICM School &amp; College, Warsak Road, Peshawar</p>
</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<a className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors btn-interaction" href="https://www.google.com/maps/place/Almaidah+Cafe+Warsak+Road/@34.0426808,71.5251936,17z/data=!4m7!3m6!1s0x38d917759e9a0381:0xfb83ca2504d4e801!8m2!3d34.0426808!4d71.5251936!10e9!16s%2Fg%2F11zjmlb1jx?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">directions</span>
<span>Directions</span>
</a>
<a className="inline-flex items-center justify-center p-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" href="tel:+923009016815" title="Call directly">
<span className="material-symbols-outlined text-[18px]">call</span>
</a>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-space-md rounded-xl bg-surface-container flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">local_parking</span>
</div>
<div>
<h4 className="font-title-md text-title-md text-on-surface">Ample Guest Parking</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dedicated ground-level customer parking bays in Arbab Sajjad Plaza frontage.</p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container flex items-start gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">accessible</span>
</div>
<div>
<h4 className="font-title-md text-title-md text-on-surface">Universal Accessibility</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Easy entry with ramp assistance and spacious family floor layout.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-6">
<div className="rounded-xl overflow-hidden shadow-lg relative bg-surface-container-high">
<img className="w-full h-80 object-cover object-center" data-alt="Exterior entrance view of Al Maidah Cafe and Restaurant on Warsak Road Peshawar with prominent modern bronze facade signage, glass double doors, manicured green turf steps lined with potted outdoor greenery, and welcoming evening lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3dHlVuCeDJLtzt9T22Di3Ye9LAcqA8sdftXuGi88aZr_aeZkxPpaOg85RzcElp2SNEZ9_W96SfbekdncWUXCBfErqX3TtgFwQhlsYrmh4Wkdl6MwRClxhHy6rxhM88ulbtWqllLztsQk-tnblzLQtc3dPuuNsqadKMevsXBKCEpBvrfa5oqjOLfMC5Wm6E8hSI76wKsFEZUcEj80fITwMntZSUbSPBUORrx3RF8Bh3M8qH2l-AHE"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-6">
<div className="text-on-primary">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed">Facade &amp; Entrance</span>
<h4 className="font-headline-sm text-headline-sm">Welcoming Peshawari Ambience</h4>
<p className="font-body-sm text-body-sm text-surface-container-high opacity-90 mt-1">Lush entryway setting the stage for authentic hospitality.</p>
</div>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-4">
<h3 className="font-title-lg text-title-lg text-on-surface">Prominent Landmarks</h3>
<ul className="flex flex-col space-y-3">
<li className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">school</span>
                  ICM School &amp; College
                </span>
<span className="font-semibold text-on-surface">Directly Adjacent</span>
</li>
<li className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">near_me</span>
                  Babu Ghari Roundabout
                </span>
<span className="font-semibold text-on-surface">2 Minutes Drive</span>
</li>
<li className="flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[18px]">shield</span>
                  Peshawar Cantonment
                </span>
<span className="font-semibold text-on-surface">7-10 Minutes Drive</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section></SlideUp>
<SlideUp><section className="w-full py-16 md:py-24 bg-surface-container-low relative" id="reservation-section">
<div className="max-w-4xl mx-auto px-gutter">
<div className="text-center max-w-xl mx-auto mb-10">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Table &amp; Banquet Booking</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Reserve Your Experience</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Secure private family seating, banquet spaces, or dining tables in advance. Our desk will confirm shortly via SMS or phone call.
        </p>
</div>
<div className="p-6 md:p-10 rounded-xl bg-surface-container-lowest shadow-xl">
<form className="flex flex-col gap-6" id="contactReservationForm" onSubmit={(e) => { e.preventDefault(); document.getElementById('reservationSuccess')?.classList.remove('hidden'); e.currentTarget.reset(); }}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="fullName">Guest Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary btn-interaction" id="fullName" placeholder="e.g. Tariq Khan" required type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="phoneNumber">WhatsApp / Mobile Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary btn-interaction" id="phoneNumber" placeholder="+92 3XX XXXXXXX" required type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="resDate">Reservation Date</label>
<input className="w-full px-4 py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary btn-interaction" id="resDate" required type="date"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="resTime">Preferred Time</label>
<input className="w-full px-4 py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary btn-interaction" id="resTime" required type="time"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="partySize">Party Size</label>
<select className="w-full px-4 py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary btn-interaction" id="partySize" required>
<option value="1-2">1 – 2 Persons</option>
<option  value="3-5">3 – 5 Persons (Small Family)</option>
<option value="6-10">6 – 10 Persons (Large Family)</option>
<option value="12+">12+ Persons (Banquet / Group Event)</option>
</select>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-lg text-label-lg text-on-surface">Preferred Seating Area</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer flex items-center gap-3 p-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<input checked className="w-4 h-4 text-primary focus:ring-primary" name="seatingArea" type="radio" value="family"/>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Family Hall</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Private curtained booths</span>
</div>
</label>
<label className="cursor-pointer flex items-center gap-3 p-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<input className="w-4 h-4 text-primary focus:ring-primary" name="seatingArea" type="radio" value="rooftop"/>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Rooftop Seating</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Open-sky evening dining</span>
</div>
</label>
<label className="cursor-pointer flex items-center gap-3 p-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<input className="w-4 h-4 text-primary focus:ring-primary" name="seatingArea" type="radio" value="regular"/>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Regular Dining</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Quick meals &amp; gatherings</span>
</div>
</label>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="specialNotes">Special Requests &amp; Advance Orders</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary btn-interaction" id="specialNotes" placeholder="Advance Shinwari Karahi quantity, birthday setup, baby high-chair, etc." rows={3}></textarea>
</div>
<div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-on-surface-variant text-body-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
<span>Instant confirmation via direct WhatsApp hotline</span>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all btn-interaction" type="submit">
<span>Send Reservation Request</span>
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</form>
<div className="hidden mt-6 p-4 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center gap-3" id="reservationSuccess">
<span className="material-symbols-outlined text-[24px]">check_circle</span>
<p className="font-body-md text-body-md">Thank you! Your reservation inquiry has been registered. Our host on Warsak Road will contact you within 15 minutes.</p>
</div>
</div>
</div>
</section></SlideUp>
<SlideUp><section className="w-full py-16 md:py-24">
<div className="max-w-4xl mx-auto px-gutter">
<div className="text-center max-w-xl mx-auto mb-12">
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Frequently Answered</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Visitor Questions</h2>
</div>
<div className="flex flex-col gap-4">
<details className="group p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<summary className="font-title-lg text-title-lg text-on-surface cursor-pointer list-none flex items-center justify-between">
<span>What are your Foodpanda delivery timings and areas?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 pt-3">
            We deliver daily via Foodpanda from 12:00 PM to 1:00 AM. Our coverage spans the entire Warsak Road corridor, Babu Ghari, Prime City, Regi Model Town approaches, and neighboring residential sectors.
          </p>
</details>
<details className="group p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<summary className="font-title-lg text-title-lg text-on-surface cursor-pointer list-none flex items-center justify-between">
<span>Do you have fully private family dining halls?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 pt-3">
            Yes, Al Maidah Warsak Road provides dedicated family enclosures with traditional privacy curtains and sound attenuation, ensuring a tranquil and hospitable environment for families.
          </p>
</details>
<details className="group p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<summary className="font-title-lg text-title-lg text-on-surface cursor-pointer list-none flex items-center justify-between">
<span>Is there safe customer parking available at Arbab Sajjad Plaza?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 pt-3">
            Yes, our guests have access to well-lit ground-level vehicular parking directly in front of Arbab Sajjad Plaza with dedicated attendants during peak dinner hours.
          </p>
</details>
<details className="group p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<summary className="font-title-lg text-title-lg text-on-surface cursor-pointer list-none flex items-center justify-between">
<span>How does pre-order takeaway work for slow-cooked Shinwari dishes?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 pt-3">
            Authentic Shinwari mutton karahi and Dum Pukht take 40-50 minutes of fresh butchery and preparation. You can call our direct hotline (+92 300 9016815) in advance, and your order will be steaming hot and packed upon your arrival.
          </p>
</details>
</div>
</div>
</section></SlideUp>
<SlideUp><section className="w-full py-12 bg-primary text-on-primary">
<div className="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm">Planning a banquet or family celebration?</h3>
<p className="font-body-md text-body-md text-surface-container-high opacity-90 mt-1">Talk to our banquet manager for customized Khyber barbecue platters.</p>
</div>
<div className="flex items-center gap-4">
<a className="px-6 py-3 rounded-xl bg-secondary-container text-on-secondary-container font-label-lg text-label-lg font-bold shadow-md hover:brightness-105 transition-all btn-interaction" href="tel:+923009016815">
          Call Management
        </a>
</div>
</div>
</section></SlideUp>
</div></main><aside className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-space-md py-2.5 flex items-center justify-between gap-space-sm"><a className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors" href="tel:+923009016815"><span className="material-symbols-outlined text-secondary text-[20px]">call</span><span className="">Call Us</span></a><a className="flex-[1.5] flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg tracking-wide hover:bg-primary-container transition-colors shadow-sm" data-path="menu" href="/menu"><span className="">Order Online</span><span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[9px] font-bold uppercase">Foodpanda</span></a></aside><SlideUp><footer className="w-full bg-surface-container-low pb-24 md:pb-16 pt-space-xl"><div className="max-w-7xl mx-auto px-gutter"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl"><div className="flex flex-col"><div className="flex items-center gap-3 mb-space-sm"><img alt="Al Maidah Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1ViMT7rPuexd6vNlRndEg8vGev4aEbXBFOOUUct2GpaRgL3rlFfBi5FskYSaoUas_orvJ0aj-QZA3rUoMt4ue5h39akSVXfFbN_1fOQJA_2nhwi0aI9emhIlPkB67Q5tWAnrlv5r3vtXP8xTpT2ehsSSHynWkDQPZ2NceuovRx-zeBjHNRVBwviF6s3vaUavuqSyKZgets8NSDbX13sgAmur4jq1OGQ27i6x3Bhd_wXWpQuLFf7i9hb"/><span className="font-headline-sm text-headline-sm text-primary">Al Maidah</span></div><p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-space-md">Refined Khyber culinary heritage and Shinwari barbecue tradition crafted with Peshawar hospitality for family and celebratory dining.</p><div className="flex items-center gap-2.5"><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">public</span></div><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">photo_camera</span></div><div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"><span className="material-symbols-outlined text-[18px]">share</span></div></div></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Quick Navigation</h4><ul className="flex flex-col space-y-2"><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="home" href="/">Home</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="menu" href="/menu">Menu &amp; Shinwari Specials</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="gallery" href="/gallery">Ambiance &amp; Gallery</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="about" href="/about">Our Culinary Heritage</a></li><li className="leading-none"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact">Location &amp; Contact</a></li></ul></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Warsak Road Branch</h4><div className="flex items-start gap-2.5 mb-space-sm"><span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">location_on</span><span className="font-body-sm text-body-sm text-on-surface-variant">Arbab Sajjad Plaza, Near ICM School &amp; College, Warsak Road, Peshawar, Khyber Pakhtunkhwa</span></div><div className="flex items-center gap-2.5 mb-space-sm"><span className="material-symbols-outlined text-primary text-[20px] shrink-0">call</span><a className="font-body-sm text-body-sm text-on-surface font-semibold hover:text-primary transition-colors" href="tel:+923009016815">+92 300 9016815</a></div><div className="flex items-center gap-2.5"><span className="material-symbols-outlined text-secondary text-[20px] shrink-0">schedule</span><span className="font-body-sm text-body-sm text-on-surface-variant">Daily: 12:00 PM – 1:00 AM</span></div></div><div className="flex flex-col"><h4 className="font-title-md text-title-md text-on-surface mb-space-sm">Takeout &amp; Delivery</h4><p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Craving authentic Peshawari Karahi, Chapli Kabab, and Tikka at home?</p><div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2"><div className="flex items-center justify-between"><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">Foodpanda Delivery</span><span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md text-[11px] btn-interaction">Live</span></div><p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Fast dispatch across Warsak Road and neighboring Peshawar sectors.</p><a className="mt-1 inline-flex items-center justify-center gap-1.5 py-2 px-space-md rounded bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors" data-path="menu" href="/menu"><span className="">Order via Foodpanda</span><span className="material-symbols-outlined text-[16px]">north_east</span></a></div></div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left"><p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 Al Maidah Restaurant. All rights reserved. Warsak Road, Peshawar.</p><div className="flex items-center gap-space-md"><span className="font-label-md text-label-md text-on-surface-variant">Halal Certified</span><span className="w-1 h-1 rounded-full bg-outline-variant"></span><span className="font-label-md text-label-md text-on-surface-variant">Family Seating Available</span></div></div></div></footer></SlideUp>

    </>
  );
}




