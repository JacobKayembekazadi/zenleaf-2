import React from "react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Maya Chen",
    role: "Founder & Tea Curator",
    bio: "Former tea sommelier with 15 years traveling tea regions. Maya started ZenLeaf to bridge craft tea and mindful living.",
    image: "/images/product-image-1.png"
  },
  {
    name: "James Rivera",
    role: "Head of Sourcing",
    bio: "Works directly with farmers to build lasting partnerships. James ensures every tea meets our sustainability standards.",
    image: "/images/product-image-2.png"
  },
  {
    name: "Aisha Patel",
    role: "Mindfulness Guide",
    bio: "Certified meditation teacher and ritual designer. Aisha creates the practices that accompany each tea box.",
    image: "/images/product-image-3.png"
  }
];

const values = [
  {
    title: "Craft Over Scale",
    description: "We source from small farms and artisan producers who prioritize quality over quantity."
  },
  {
    title: "Mindful Consumption",
    description: "Every product is designed to slow you down and invite presence into your day."
  },
  {
    title: "Transparent Supply Chain",
    description: "Know exactly where your tea comes from and how it was grown, harvested, and processed."
  },
  {
    title: "Community Impact",
    description: "Our partnerships support fair wages, education, and sustainable farming practices."
  }
];

const timeline = [
  {
    year: "2019",
    title: "The Seed",
    description: "Maya visits a small tea farm in Darjeeling and realizes consumers are disconnected from the craft behind their tea."
  },
  {
    year: "2020",
    title: "First Prototype",
    description: "During the pandemic, Maya curates the first 'Tranquility Kit' for friends—tea, ritual guide, and a handwritten note."
  },
  {
    year: "2021",
    title: "Official Launch",
    description: "ZenLeaf launches with 50 founding members and partnerships with 3 farms across Asia."
  },
  {
    year: "2022",
    title: "Community Grows",
    description: "Reach 5,000 subscribers and expand to 8 partner farms. Launch the Ritual Library with audio guides."
  },
  {
    year: "2023",
    title: "Impact Milestone",
    description: "Fund education programs for 200 children in tea-growing communities. Launch Reserve tier."
  },
  {
    year: "2024",
    title: "Today",
    description: "15,000+ members worldwide, 12 partner farms, and a movement toward more mindful tea rituals."
  }
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#E9E4D8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">Our Story</h1>
          <p className="mt-6 text-lg text-[#2B2B2B]/80 max-w-2xl mx-auto leading-relaxed">
            ZenLeaf started with a simple question: What if tea could be more than a beverage? What if it could be a pause, a practice, a portal to presence?
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-[0_8px_28px_rgba(47,62,52,0.12)] ring-1 ring-black/5 bg-white">
              <img src="/images/product-image-1.png" alt="Tea ceremony" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl tracking-tight">Our Mission</h2>
              <p className="mt-4 text-[#2B2B2B]/80 leading-relaxed">
                We believe the world needs more moments of calm, and that great tea—sourced with care, prepared with intention—can be the gateway. ZenLeaf curates exceptional small-farm teas and pairs them with simple mindfulness practices, making ritual accessible to modern life.
              </p>
              <p className="mt-4 text-[#2B2B2B]/80 leading-relaxed">
                But we're about more than tea. We're building a community of people who value craft, sustainability, and the power of a five-minute pause. Every subscription supports farmers who care for their land, and funds programs that strengthen tea-growing communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl tracking-tight">What We Stand For</h2>
            <p className="mt-3 text-[#2B2B2B]/70">The principles that guide everything we do</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#9BB7A7]/20 text-[#2F3E34] mb-4">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-[#2B2B2B]/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F6F3EE]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl tracking-tight">Our Journey</h2>
            <p className="mt-3 text-[#2B2B2B]/70">From a single tea farm visit to a global community</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#9BB7A7]/30 hidden md:block" />
            
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#9BB7A7] text-white flex items-center justify-center font-serif text-sm font-medium shadow-lg z-10">
                    {item.year}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(47,62,52,0.08)]">
                    <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-[#2B2B2B]/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl tracking-tight">Meet the Team</h2>
            <p className="mt-3 text-[#2B2B2B]/70">The people behind your tea ritual</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square overflow-hidden rounded-xl shadow-[0_8px_28px_rgba(47,62,52,0.12)] ring-1 ring-black/5 bg-white mb-6">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-sm text-[#2F3E34] mt-1">{member.role}</p>
                <p className="text-sm text-[#2B2B2B]/70 mt-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-[#E9E4D8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl tracking-tight">Our Impact</h2>
            <p className="mt-3 text-[#2B2B2B]/70">Growing together, one cup at a time</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="font-serif text-4xl sm:text-5xl text-[#2F3E34] mb-2">15,000+</div>
              <p className="text-sm text-[#2B2B2B]/70">Active Members</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl sm:text-5xl text-[#2F3E34] mb-2">12</div>
              <p className="text-sm text-[#2B2B2B]/70">Partner Farms</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl sm:text-5xl text-[#2F3E34] mb-2">200+</div>
              <p className="text-sm text-[#2B2B2B]/70">Children Supported</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl sm:text-5xl text-[#2F3E34] mb-2">100%</div>
              <p className="text-sm text-[#2B2B2B]/70">Sustainably Sourced</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl tracking-tight">Join the Movement</h2>
          <p className="mt-4 text-[#2B2B2B]/80 max-w-2xl mx-auto">
            Every subscription supports sustainable farming, fair wages, and a more mindful world. Start your ritual today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center rounded-md bg-[#2F3E34] px-6 py-3 text-sm font-medium text-white hover:bg-[#25342B]"
            >
              Explore Subscriptions
            </Link>
            <Link
              to="/quiz"
              className="inline-flex items-center rounded-md border border-[#2F3E34] px-6 py-3 text-sm font-medium text-[#2F3E34] hover:bg-[#2F3E34]/5"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

