import React, { useState } from "react";

const ritualCategories = ["All", "Morning", "Afternoon", "Evening", "Quick (5 min)", "Deep (20+ min)"];

const rituals = [
  {
    id: 1,
    title: "Morning Clarity",
    category: "Morning",
    duration: "10 min",
    difficulty: "Beginner",
    description: "Start your day with intention. A gentle breathing practice paired with energizing green tea.",
    benefits: ["Mental clarity", "Energy boost", "Stress reduction"],
    image: "/images/product-image-1.png",
    teaPairing: "Sencha Green Tea"
  },
  {
    id: 2,
    title: "Midday Reset",
    category: "Afternoon",
    duration: "5 min",
    difficulty: "Beginner",
    description: "A quick pause to recenter. Perfect for busy afternoons when you need to hit refresh.",
    benefits: ["Quick reset", "Focus restoration", "Tension release"],
    image: "/images/product-image-2.png",
    teaPairing: "White Peony Tea"
  },
  {
    id: 3,
    title: "Evening Unwind",
    category: "Evening",
    duration: "15 min",
    difficulty: "Beginner",
    description: "Release the day with calming chamomile and gentle body scan meditation.",
    benefits: ["Deep relaxation", "Better sleep", "Stress relief"],
    image: "/images/product-image-3.png",
    teaPairing: "Chamomile Lavender Blend"
  },
  {
    id: 4,
    title: "Tea Ceremony Meditation",
    category: "Deep (20+ min)",
    duration: "25 min",
    difficulty: "Intermediate",
    description: "A full ceremonial experience. Every movement becomes meditation as you prepare and savor your tea.",
    benefits: ["Mindful presence", "Ritual building", "Deep calm"],
    image: "/images/product-image-4.png",
    teaPairing: "Oolong or Pu-erh"
  },
  {
    id: 5,
    title: "Gratitude Pause",
    category: "Quick (5 min)",
    duration: "5 min",
    difficulty: "Beginner",
    description: "Three breaths and three things you're grateful for. Simple, powerful, transformative.",
    benefits: ["Positive mindset", "Quick practice", "Daily habit"],
    image: "/images/product-image-1.png",
    teaPairing: "Any favorite tea"
  },
  {
    id: 6,
    title: "Breath & Steep",
    category: "Morning",
    duration: "12 min",
    difficulty: "Beginner",
    description: "Match your breath to the steeping time. A practice in patience and presence.",
    benefits: ["Patience practice", "Breathing technique", "Mindful timing"],
    image: "/images/product-image-2.png",
    teaPairing: "First Flush Darjeeling"
  },
  {
    id: 7,
    title: "Body Scan Tea Ritual",
    category: "Evening",
    duration: "20 min",
    difficulty: "Intermediate",
    description: "Progressive relaxation while savoring a warming herbal blend. Perfect before bed.",
    benefits: ["Full body relaxation", "Sleep preparation", "Tension release"],
    image: "/images/product-image-3.png",
    teaPairing: "Rooibos Vanilla"
  },
  {
    id: 8,
    title: "Walking Tea Meditation",
    category: "Afternoon",
    duration: "15 min",
    difficulty: "Intermediate",
    description: "Take your tea outside. Slow steps, deep breaths, and nature connection.",
    benefits: ["Nature connection", "Movement meditation", "Fresh perspective"],
    image: "/images/product-image-4.png",
    teaPairing: "Jasmine Green Tea"
  }
];

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export default function Rituals() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRitual, setSelectedRitual] = useState(null);

  const filteredRituals = selectedCategory === "All"
    ? rituals
    : rituals.filter(r => r.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-[#E9E4D8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">Ritual Library</h1>
          <p className="mt-4 text-lg text-[#2B2B2B]/80 max-w-2xl mx-auto">
            Guided mindfulness practices designed to pair with your tea. From 5-minute resets to deep ceremonial experiences.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {ritualCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7] ${
                  selectedCategory === cat
                    ? "bg-[#2F3E34] text-white"
                    : "bg-[#F6F3EE] text-[#2B2B2B] hover:bg-[#9BB7A7]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRituals.map((ritual) => (
              <article
                key={ritual.id}
                className="group rounded-xl bg-white ring-1 ring-black/5 overflow-hidden shadow-[0_2px_12px_rgba(47,62,52,0.08)] hover:shadow-[0_8px_28px_rgba(47,62,52,0.12)] transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F6F3EE]">
                  <img
                    src={ritual.image}
                    alt={ritual.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button
                    onClick={() => setSelectedRitual(ritual)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlayIcon className="h-8 w-8 text-[#2F3E34] ml-1" />
                    </div>
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <ClockIcon className="h-4 w-4" />
                      <span>{ritual.duration}</span>
                      <span className="mx-1">•</span>
                      <span>{ritual.difficulty}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center rounded-full bg-[#9BB7A7]/20 px-2.5 py-0.5 text-xs font-medium text-[#2F3E34] mb-3">
                    {ritual.category}
                  </div>
                  <h3 className="font-serif text-xl tracking-tight">{ritual.title}</h3>
                  <p className="mt-2 text-sm text-[#2B2B2B]/70 line-clamp-2">{ritual.description}</p>
                  <div className="mt-4 pt-4 border-t border-black/5">
                    <p className="text-xs text-[#2B2B2B]/60 mb-2">Pairs well with:</p>
                    <p className="text-sm font-medium text-[#2F3E34]">{ritual.teaPairing}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl tracking-tight">Get New Rituals Every Month</h2>
          <p className="mt-4 text-[#2B2B2B]/80">
            Subscribers receive exclusive audio guides, seasonal practices, and tea-pairing recommendations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/shop"
              className="inline-flex items-center rounded-md bg-[#2F3E34] px-6 py-3 text-sm font-medium text-white hover:bg-[#25342B]"
            >
              Explore Subscriptions
            </a>
            <a
              href="/quiz"
              className="inline-flex items-center rounded-md border border-[#2F3E34] px-6 py-3 text-sm font-medium text-[#2F3E34] hover:bg-[#2F3E34]/5"
            >
              Take the Quiz
            </a>
          </div>
        </div>
      </section>

      {/* Modal for Ritual Details */}
      {selectedRitual && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedRitual(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden bg-[#F6F3EE]">
              <img src={selectedRitual.image} alt={selectedRitual.title} className="h-full w-full object-cover" />
              <button
                onClick={() => setSelectedRitual(null)}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 text-sm text-[#2B2B2B]/70 mb-3">
                <span className="inline-flex items-center rounded-full bg-[#9BB7A7]/20 px-3 py-1 text-xs font-medium text-[#2F3E34]">
                  {selectedRitual.category}
                </span>
                <span>{selectedRitual.duration}</span>
                <span>•</span>
                <span>{selectedRitual.difficulty}</span>
              </div>
              <h3 className="font-serif text-3xl tracking-tight">{selectedRitual.title}</h3>
              <p className="mt-4 text-[#2B2B2B]/80">{selectedRitual.description}</p>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRitual.benefits.map((benefit, i) => (
                    <span key={i} className="inline-flex items-center rounded-full bg-[#F6F3EE] px-3 py-1 text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-black/5">
                <p className="text-sm text-[#2B2B2B]/60 mb-1">Recommended tea pairing:</p>
                <p className="font-medium text-[#2F3E34]">{selectedRitual.teaPairing}</p>
              </div>

              <button className="mt-8 w-full inline-flex items-center justify-center rounded-md bg-[#2F3E34] px-6 py-3 text-sm font-medium text-white hover:bg-[#25342B]">
                <PlayIcon className="h-5 w-5 mr-2" />
                Start This Ritual
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

