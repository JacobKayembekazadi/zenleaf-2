import React, { useState } from "react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Essentials",
    price: "$29–$35/mo",
    desc: "2 teas + pocket mindfulness guide",
    bullets: ["Seasonal curation", "Sustainable sourcing", "Pause/skip anytime"],
    featured: false
  },
  {
    name: "Classic",
    price: "$45–$55/mo",
    desc: "3 teas + guide + accessory",
    bullets: ["Flagship experience", "Tasting notes", "Gift-ready packaging"],
    featured: true,
    badge: "Most Loved"
  },
  {
    name: "Reserve",
    price: "$69–$85/mo",
    desc: "Rare single-origin + artisan accessory",
    bullets: ["Traceable micro-lots", "Limited drops", "Member stories"],
    featured: false
  }
];

const howItWorks = [
  { title: "Curated by craft", text: "Small-batch teas from partner farms.", icon: LeafIcon },
  { title: "Ritual made simple", text: "5-minute guide in every box.", icon: CupIcon },
  { title: "Delivered monthly", text: "Pause or skip anytime.", icon: GiftIcon }
];

const reviews = [
  {
    name: "Amelia R.",
    rating: 5,
    comment:
      "The Tranquility Kit turned my evenings into a calming ritual. Gorgeous packaging and thoughtful curation."
  },
  {
    name: "Sofia L.",
    rating: 5,
    comment: "Beautiful, mindful, and delicious. I love discovering the small-farm stories each month."
  },
  {
    name: "Noah P.",
    rating: 4,
    comment: "I didn't think a tea box could change my mornings—now I actually slow down before work."
  }
];

function StarRow({ count = 5 }) {
  return (
    <div aria-label={`${count} out of 5 stars`} className="flex gap-1" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-5 w-5 ${i < count ? "fill-[#2F3E34]" : "fill-gray-200"}`}
          aria-hidden="true"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function LeafIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M4 13c6.5 0 11-4 16-10 0 8-4 17-16 17 0 0 3-5 8-8"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CupIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 7h12v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V7Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M16 9h2.5a2.5 2.5 0 1 1 0 5H16" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function GiftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 8h18v13H3z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M12 8v13M3 12h18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 6a2 2 0 1 1 0 4h8a2 2 0 1 1 0-4c-1.5 0-4 1.5-4 4 0-2.5-2.5-4-4-4Z" fill="currentColor" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m4 13 4 4 12-12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  function handleNewsletter(e) {
    e.preventDefault();
    alert("Thanks for subscribing – a quieter inbox awaits.");
  }

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-[#E9E4D8]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Soft leaf accents */}
          <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-[#9BB7A7]/20 blur-2xl" />
          <div className="absolute -bottom-16 -right-8 h-72 w-72 rounded-full bg-[#C7A27C]/20 blur-2xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B2B2B] tracking-tight">
              Make calm a ritual.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#2B2B2B]/80">
              Curated small-farm teas, handcrafted accessories, and a pocket mindfulness guide—delivered monthly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center rounded-md bg-[#9BB7A7] px-6 py-3 text-sm font-medium text-[#2F3E34] shadow-sm hover:bg-[#8FAD9D] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9BB7A7]"
              >
                Shop The Tranquility Kit
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center rounded-md border border-[#2F3E34] px-6 py-3 text-sm font-medium text-[#2F3E34] hover:bg-[#2F3E34]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9BB7A7]"
              >
                Take the 2‑min Quiz
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_8px_28px_rgba(47,62,52,0.12)] ring-1 ring-black/5 bg-white">
              <img
                src="/images/product-image-1.png"
                alt="ZenLeaf tea products and accessories"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" aria-labelledby="tiers-title" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="tiers-title" className="font-serif text-3xl sm:text-4xl tracking-tight">
              Choose your calm
            </h2>
            <p className="mt-3 text-[#2B2B2B]/70">Flexible subscriptions. Gift-ready packaging. Pause or skip anytime.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((t) => (
              <article
                key={t.name}
                className={`relative rounded-xl bg-white ring-1 ring-black/5 p-6 md:p-8 shadow-[0_2px_12px_rgba(47,62,52,0.08)] ${
                  t.featured ? "outline outline-2 outline-[#9BB7A7]" : ""
                }`}
              >
                {t.badge && (
                  <div className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-[#9BB7A7] px-3 py-1 text-xs font-medium text-[#2F3E34] shadow">
                    {t.badge}
                  </div>
                )}
                <h3 className="font-serif text-2xl tracking-tight">{t.name}</h3>
                <p className="mt-1 text-sm text-[#2B2B2B]/70">{t.desc}</p>
                <p className="mt-4 text-lg font-medium text-[#2F3E34]">{t.price}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {t.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="mt-[2px] h-5 w-5 text-[#2F3E34]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/shop"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#2F3E34] px-4 py-2 text-sm font-medium text-white hover:bg-[#25342B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7]"
                >
                  Start {t.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-title" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="how-title" className="text-center font-serif text-3xl tracking-tight">
            How the ritual works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {howItWorks.map((s) => (
              <div key={s.title} className="rounded-xl bg-[#F6F3EE] p-6 ring-1 ring-black/5">
                <s.icon className="h-7 w-7 text-[#2F3E34]" />
                <h3 className="mt-4 font-medium text-lg">{s.title}</h3>
                <p className="mt-1 text-[#2B2B2B]/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm spotlight */}
      <section id="farms" aria-labelledby="farms-title" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative order-last lg:order-first">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_8px_28px_rgba(47,62,52,0.12)] ring-1 ring-black/5 bg-white">
              <img
                src="/images/product-image-2.png"
                alt="Premium tea sourcing and craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 id="farms-title" className="font-serif text-3xl tracking-tight">
              From small, sustainable farms
            </h2>
            <p className="mt-4 text-[#2B2B2B]/80 max-w-xl">
              We source from independent growers who prioritize soil health, biodiversity, and craft. Each box features
              traceable origins, tasting notes, and the people behind the leaves.
            </p>
            <Link
              to="/farms"
              className="mt-6 inline-flex items-center rounded-md border border-[#2F3E34] px-4 py-2 text-sm font-medium text-[#2F3E34] hover:bg-[#2F3E34]/5"
            >
              Explore farm stories
            </Link>
          </div>
        </div>
      </section>

      {/* Ritual teaser */}
      <section id="rituals" aria-labelledby="rituals-title" className="py-16 bg-[#E9E4D8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <h2 id="rituals-title" className="font-serif text-3xl tracking-tight">
              Tea & Breath — a 7‑day mini series
            </h2>
            <p className="mt-3 text-[#2B2B2B]/80 max-w-2xl">
              Short, guided practices to anchor your day. Choose Morning Focus, Afternoon Reset, or Evening Unwind and
              follow along with gentle audio prompts.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/rituals"
                className="inline-flex items-center rounded-md bg-[#9BB7A7] px-5 py-2.5 text-sm font-medium text-[#2F3E34] hover:bg-[#8FAD9D]"
              >
                Browse rituals
              </Link>
              <Link
                to="/rituals"
                className="inline-flex items-center rounded-md border border-[#2F3E34] px-5 py-2.5 text-sm font-medium text-[#2F3E34] hover:bg-[#2F3E34]/5"
              >
                Play a sample
              </Link>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <div className="aspect-square overflow-hidden rounded-xl ring-1 ring-black/5 bg-white shadow-[0_8px_28px_rgba(47,62,52,0.12)]">
              <img
                src="/images/product-image-3.png"
                alt="Mindful tea ritual and brewing experience"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section aria-labelledby="reviews-title" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="reviews-title" className="text-center font-serif text-3xl tracking-tight">
            What our members say
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-xl bg-white p-6 ring-1 ring-black/5 shadow-[0_2px_12px_rgba(47,62,52,0.08)]">
                <StarRow count={r.rating} />
                <blockquote className="mt-3 text-[#2B2B2B]/80">"{r.comment}"</blockquote>
                <figcaption className="mt-4 text-sm font-medium text-[#2F3E34]">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section aria-labelledby="nl-title" className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="nl-title" className="font-serif text-3xl tracking-tight">
            A quieter inbox
          </h2>
          <p className="mt-2 text-[#2B2B2B]/70">Ritual tips, farm notes, and limited drops—just a few times a month.</p>
          <form onSubmit={handleNewsletter} className="mt-6 mx-auto max-w-xl grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@calm.com"
              className="w-full rounded-md border border-black/10 bg-[#F6F3EE] px-4 py-3 text-base placeholder:text-[#2B2B2B]/40 focus:outline-none focus:ring-2 focus:ring-[#9BB7A7]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-[#2F3E34] px-6 py-3 text-sm font-medium text-white hover:bg-[#25342B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

