import React, { useState } from "react";

const farms = [
  {
    id: 1,
    name: "Misty Mountain Tea Estate",
    location: "Darjeeling, India",
    established: "1850",
    specialty: "First Flush Darjeeling",
    story: "Nestled at 6,000 feet in the Himalayan foothills, this family-owned estate has been cultivating exceptional teas for five generations. Their sustainable practices and commitment to soil health produce some of the world's most sought-after first flush harvests.",
    practices: ["Organic certified", "Fair trade", "Biodiversity preservation", "Solar-powered processing"],
    image: "/images/product-image-1.png",
    farmer: "Rajesh Kumar & Family",
    featured: true
  },
  {
    id: 2,
    name: "Jade Valley Collective",
    location: "Fujian, China",
    established: "2005",
    specialty: "White & Oolong Teas",
    story: "A cooperative of 12 small-scale farmers who came together to preserve traditional processing methods while innovating for the future. Each farmer brings unique terroir and expertise to create teas that honor both heritage and creativity.",
    practices: ["Cooperative model", "Traditional hand-processing", "Water conservation", "Community profit-sharing"],
    image: "/images/product-image-2.png",
    farmer: "Li Wei & Collective Members",
    featured: false
  },
  {
    id: 3,
    name: "Sunset Ridge Farm",
    location: "Shizuoka, Japan",
    established: "1920",
    specialty: "Sencha & Matcha",
    story: "Four generations of the Tanaka family have stewarded these volcanic slopes, where mineral-rich soil and coastal fog create the perfect conditions for umami-rich green teas. Their commitment to traditional shade-growing methods is unmatched.",
    practices: ["Shade-grown", "Hand-harvested", "Stone-ground matcha", "Zero-waste processing"],
    image: "/images/product-image-3.png",
    farmer: "Tanaka Family",
    featured: false
  },
  {
    id: 4,
    name: "High Forest Estate",
    location: "Yunnan, China",
    established: "Ancient trees",
    specialty: "Pu-erh & Ancient Tree Tea",
    story: "Home to 500-year-old tea trees, this estate works with indigenous communities to harvest and process tea from ancient forests. Every purchase supports forest conservation and indigenous land rights.",
    practices: ["Ancient tree preservation", "Indigenous partnership", "Forest conservation", "Traditional fermentation"],
    image: "/images/product-image-4.png",
    farmer: "Zhang Lin & Community Guardians",
    featured: true
  },
  {
    id: 5,
    name: "Mountain Mist Gardens",
    location: "Uji, Japan",
    established: "1875",
    specialty: "Premium Gyokuro",
    story: "Renowned for Japan's finest shaded teas, this garden maintains meticulous standards passed down through generations. Their 20-day shading process and handpicked harvests produce gyokuro of exceptional sweetness and depth.",
    practices: ["Traditional shading", "Handpicked only", "Natural fertilizers", "Master craftsmanship"],
    image: "/images/product-image-1.png",
    farmer: "Yamamoto Family",
    featured: false
  },
  {
    id: 6,
    name: "Tranquil Valley Organic",
    location: "Sri Lanka (Ceylon)",
    established: "1995",
    specialty: "Ceylon Black Tea",
    story: "Started by a group of women farmers committed to organic agriculture and fair wages, this estate has become a model for sustainable tea production in Sri Lanka. Their high-grown teas are bright, brisk, and full of character.",
    practices: ["Women-led", "Organic certified", "Fair wages", "Education programs"],
    image: "/images/product-image-2.png",
    farmer: "Women's Cooperative",
    featured: false
  }
];

function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
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

export default function FarmStories() {
  const [selectedFarm, setSelectedFarm] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-[#E9E4D8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">Farm Stories</h1>
          <p className="mt-4 text-lg text-[#2B2B2B]/80 max-w-2xl mx-auto">
            Meet the farmers, families, and collectives behind every cup. Every tea has a story of craft, care, and connection to the land.
          </p>
        </div>
      </section>

      {/* Featured Farms */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl tracking-tight">Featured This Month</h2>
            <p className="mt-2 text-[#2B2B2B]/70">Spotlight on exceptional stewards of tea craft</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {farms.filter(f => f.featured).map((farm) => (
              <article
                key={farm.id}
                className="group rounded-xl bg-white ring-1 ring-black/5 overflow-hidden shadow-[0_2px_12px_rgba(47,62,52,0.08)] hover:shadow-[0_8px_28px_rgba(47,62,52,0.12)] transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#F6F3EE]">
                  <img
                    src={farm.image}
                    alt={farm.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="inline-flex items-center rounded-full bg-[#9BB7A7]/20 px-3 py-1 text-xs font-medium text-[#2F3E34] mb-3">
                        Featured
                      </div>
                      <h3 className="font-serif text-2xl tracking-tight">{farm.name}</h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-[#2B2B2B]/70">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{farm.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#2B2B2B]/80 leading-relaxed">{farm.story}</p>
                  
                  <div className="mt-6 pt-6 border-t border-black/5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium">Sustainability Practices:</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {farm.practices.map((practice, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-[#F6F3EE] px-3 py-1 text-xs">
                          <LeafIcon className="h-3 w-3 text-[#2F3E34]" />
                          {practice}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm">
                      <p className="text-[#2B2B2B]/60">Specialty</p>
                      <p className="font-medium text-[#2F3E34]">{farm.specialty}</p>
                    </div>
                    <button
                      onClick={() => setSelectedFarm(farm)}
                      className="inline-flex items-center rounded-md border border-[#2F3E34] px-4 py-2 text-sm font-medium text-[#2F3E34] hover:bg-[#2F3E34] hover:text-white transition-colors"
                    >
                      Read Full Story
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Farms Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl tracking-tight">Our Partner Farms</h2>
            <p className="mt-2 text-[#2B2B2B]/70">Building relationships, one harvest at a time</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {farms.filter(f => !f.featured).map((farm) => (
              <article
                key={farm.id}
                className="group rounded-xl bg-[#F6F3EE] ring-1 ring-black/5 overflow-hidden shadow-[0_2px_12px_rgba(47,62,52,0.08)] hover:shadow-[0_8px_28px_rgba(47,62,52,0.12)] transition-all cursor-pointer"
                onClick={() => setSelectedFarm(farm)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={farm.image}
                    alt={farm.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl tracking-tight">{farm.name}</h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-[#2B2B2B]/70">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{farm.location}</span>
                  </div>
                  <p className="mt-3 text-sm text-[#2B2B2B]/80 line-clamp-2">{farm.story}</p>
                  <div className="mt-4 pt-4 border-t border-black/5">
                    <p className="text-xs text-[#2B2B2B]/60 mb-1">Specialty</p>
                    <p className="text-sm font-medium text-[#2F3E34]">{farm.specialty}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Commitment */}
      <section className="py-20 bg-[#E9E4D8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl tracking-tight">Our Sourcing Commitment</h2>
            <p className="mt-4 text-[#2B2B2B]/80">
              We believe great tea starts with great relationships. Every farm we partner with meets our standards for quality, sustainability, and fair treatment of workers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white rounded-xl p-6 ring-1 ring-black/5">
              <div className="h-12 w-12 rounded-full bg-[#9BB7A7]/20 flex items-center justify-center mb-4">
                <LeafIcon className="h-6 w-6 text-[#2F3E34]" />
              </div>
              <h3 className="font-medium text-lg mb-2">Sustainable Practices</h3>
              <p className="text-sm text-[#2B2B2B]/70">
                Organic, regenerative, or biodynamic farming methods that protect soil health and biodiversity.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 ring-1 ring-black/5">
              <div className="h-12 w-12 rounded-full bg-[#9BB7A7]/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#2F3E34]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Fair Partnerships</h3>
              <p className="text-sm text-[#2B2B2B]/70">
                Direct trade relationships that ensure fair wages and community investment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 ring-1 ring-black/5">
              <div className="h-12 w-12 rounded-full bg-[#9BB7A7]/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#2F3E34]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Traceable Origins</h3>
              <p className="text-sm text-[#2B2B2B]/70">
                Complete transparency from harvest to cup. Know exactly where your tea comes from.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 ring-1 ring-black/5">
              <div className="h-12 w-12 rounded-full bg-[#9BB7A7]/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#2F3E34]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Community Impact</h3>
              <p className="text-sm text-[#2B2B2B]/70">
                Supporting education, healthcare, and infrastructure in tea-growing communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Detail Modal */}
      {selectedFarm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
          onClick={() => setSelectedFarm(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[#F6F3EE]">
              <img src={selectedFarm.image} alt={selectedFarm.name} className="h-full w-full object-cover" />
              <button
                onClick={() => setSelectedFarm(null)}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPinIcon className="h-5 w-5 text-[#2F3E34]" />
                <span className="text-sm text-[#2B2B2B]/70">{selectedFarm.location}</span>
                <span className="text-[#2B2B2B]/30">•</span>
                <span className="text-sm text-[#2B2B2B]/70">Est. {selectedFarm.established}</span>
              </div>
              
              <h2 className="font-serif text-3xl tracking-tight">{selectedFarm.name}</h2>
              
              <div className="mt-6 p-4 bg-[#F6F3EE] rounded-lg">
                <p className="text-sm text-[#2B2B2B]/70 mb-1">Specialty</p>
                <p className="font-medium text-lg text-[#2F3E34]">{selectedFarm.specialty}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3">The Story</h3>
                <p className="text-[#2B2B2B]/80 leading-relaxed">{selectedFarm.story}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3">Farmer/Owner</h3>
                <p className="text-[#2F3E34]">{selectedFarm.farmer}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3">Sustainability Practices</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFarm.practices.map((practice, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-[#F6F3EE] px-3 py-1.5 text-sm">
                      <LeafIcon className="h-4 w-4 text-[#2F3E34]" />
                      {practice}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5">
                <a
                  href="/shop"
                  className="inline-flex items-center justify-center w-full rounded-md bg-[#2F3E34] px-6 py-3 text-sm font-medium text-white hover:bg-[#25342B]"
                >
                  Taste Teas from {selectedFarm.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

