import React, { useState } from "react";
import { Link } from "react-router-dom";

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m4 13 4 4 12-12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const subscriptionTiers = [
  {
    id: "essentials",
    name: "Essentials",
    price: "$29–$35/mo",
    desc: "2 teas + pocket mindfulness guide",
    bullets: ["Seasonal curation", "Sustainable sourcing", "Pause/skip anytime"],
    featured: false,
    image: "/images/product-image-1.png"
  },
  {
    id: "classic",
    name: "Classic",
    price: "$45–$55/mo",
    desc: "3 teas + guide + accessory",
    bullets: ["Flagship experience", "Tasting notes", "Gift-ready packaging"],
    featured: true,
    badge: "Most Loved",
    image: "/images/product-image-2.png"
  },
  {
    id: "reserve",
    name: "Reserve",
    price: "$69–$85/mo",
    desc: "Rare single-origin + artisan accessory",
    bullets: ["Traceable micro-lots", "Limited drops", "Member stories"],
    featured: false,
    image: "/images/product-image-3.png"
  }
];

const addOns = [
  {
    id: "teapot",
    name: "Artisan Ceramic Teapot",
    price: "$45",
    desc: "Handcrafted by local artisans",
    image: "/images/product-image-4.png"
  },
  {
    id: "strainer",
    name: "Bamboo Tea Strainer Set",
    price: "$18",
    desc: "Sustainable bamboo with carrying case",
    image: "/images/product-image-1.png"
  },
  {
    id: "journal",
    name: "Mindfulness Journal",
    price: "$24",
    desc: "Guided prompts for daily reflection",
    image: "/images/product-image-2.png"
  },
  {
    id: "sampler",
    name: "Tea Sampler Box",
    price: "$35",
    desc: "6 premium teas to discover your favorite",
    image: "/images/product-image-3.png"
  }
];

export default function Shop() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item, type) => {
    setCart([...cart, { ...item, type }]);
    alert(`Added ${item.name} to cart!`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#E9E4D8] py-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-[#9BB7A7]/20 blur-2xl" />
          <div className="absolute -bottom-16 -right-8 h-72 w-72 rounded-full bg-[#C7A27C]/20 blur-2xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">Shop The Tranquility Kit</h1>
          <p className="mt-4 text-lg text-[#2B2B2B]/80 max-w-2xl mx-auto">
            Choose your subscription tier and discover premium teas, mindful rituals, and artisan accessories.
          </p>
          <div className="mt-6">
            <Link
              to="/quiz"
              className="inline-flex items-center rounded-md border border-[#2F3E34] px-6 py-3 text-sm font-medium text-[#2F3E34] hover:bg-[#2F3E34]/5"
            >
              Not sure? Take our 2-min quiz →
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">Monthly Subscriptions</h2>
            <p className="mt-3 text-[#2B2B2B]/70">Flexible plans. Pause or skip anytime. Free shipping.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptionTiers.map((tier) => (
              <article
                key={tier.id}
                className={`relative rounded-xl bg-white ring-1 ring-black/5 overflow-hidden shadow-[0_2px_12px_rgba(47,62,52,0.08)] transition-transform hover:scale-[1.02] ${
                  tier.featured ? "outline outline-2 outline-[#9BB7A7]" : ""
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full bg-[#9BB7A7] px-3 py-1 text-xs font-medium text-[#2F3E34] shadow">
                    {tier.badge}
                  </div>
                )}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F6F3EE]">
                  <img src={tier.image} alt={tier.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl tracking-tight">{tier.name}</h3>
                  <p className="mt-1 text-sm text-[#2B2B2B]/70">{tier.desc}</p>
                  <p className="mt-4 text-lg font-medium text-[#2F3E34]">{tier.price}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {tier.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckIcon className="mt-[2px] h-5 w-5 text-[#2F3E34] flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => addToCart(tier, "subscription")}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#2F3E34] px-4 py-3 text-sm font-medium text-white hover:bg-[#25342B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7] transition-colors"
                  >
                    Start {tier.name}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">Enhance Your Ritual</h2>
            <p className="mt-3 text-[#2B2B2B]/70">Premium accessories and one-time purchases</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((item) => (
              <article
                key={item.id}
                className="rounded-xl bg-[#F6F3EE] ring-1 ring-black/5 overflow-hidden shadow-[0_2px_12px_rgba(47,62,52,0.08)] transition-transform hover:scale-[1.02]"
              >
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="mt-1 text-sm text-[#2B2B2B]/70">{item.desc}</p>
                  <p className="mt-3 text-lg font-medium text-[#2F3E34]">{item.price}</p>
                  <button
                    onClick={() => addToCart(item, "addon")}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-[#2F3E34] px-4 py-2 text-sm font-medium text-[#2F3E34] hover:bg-[#2F3E34] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7]"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-20 bg-[#E9E4D8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl tracking-tight">Give the Gift of Calm</h2>
          <p className="mt-4 text-[#2B2B2B]/80">
            Digital gift cards delivered instantly. Perfect for tea lovers and mindfulness seekers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["$25", "$50", "$100", "Custom"].map((amount) => (
              <button
                key={amount}
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-[#2F3E34] shadow-sm hover:bg-[#9BB7A7] hover:text-[#2F3E34] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7] min-w-[120px]"
              >
                {amount}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Subscribe */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl tracking-tight">Why Subscribe?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#9BB7A7]/20 text-[#2F3E34] mb-4">
                <CheckIcon className="h-6 w-6" />
              </div>
              <h3 className="font-medium">Curated Selection</h3>
              <p className="mt-2 text-sm text-[#2B2B2B]/70">Hand-picked teas from sustainable farms</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#9BB7A7]/20 text-[#2F3E34] mb-4">
                <CheckIcon className="h-6 w-6" />
              </div>
              <h3 className="font-medium">Flexible Plans</h3>
              <p className="mt-2 text-sm text-[#2B2B2B]/70">Pause, skip, or cancel anytime</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#9BB7A7]/20 text-[#2F3E34] mb-4">
                <CheckIcon className="h-6 w-6" />
              </div>
              <h3 className="font-medium">Free Shipping</h3>
              <p className="mt-2 text-sm text-[#2B2B2B]/70">On all subscription orders</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#9BB7A7]/20 text-[#2F3E34] mb-4">
                <CheckIcon className="h-6 w-6" />
              </div>
              <h3 className="font-medium">Member Perks</h3>
              <p className="mt-2 text-sm text-[#2B2B2B]/70">Exclusive access to limited drops</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

