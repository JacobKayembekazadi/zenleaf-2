import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Quiz", href: "/quiz" },
  { label: "Rituals", href: "/rituals" },
  { label: "Farm Stories", href: "/farms" },
  { label: "About", href: "/about" }
];

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

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#F6F3EE] text-[#2B2B2B] selection:bg-[#9BB7A7]/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7] rounded">
              <img src="/images/logo-1.png" alt="ZenLeaf Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className={`text-sm hover:text-[#2F3E34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7] rounded ${
                    location.pathname === l.href ? "text-[#2F3E34] font-medium" : ""
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/shop"
                className="inline-flex items-center rounded-md bg-[#9BB7A7] px-4 py-2 text-sm font-medium text-[#2F3E34] shadow-sm hover:bg-[#8FAD9D] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9BB7A7]"
              >
                Shop The Tranquility Kit
              </Link>
            </nav>

            {/* Mobile trigger */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#2B2B2B] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7]"
              aria-controls="mobile-nav"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        {open && (
          <div id="mobile-nav" className="border-t border-black/5 md:hidden">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-2 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7]"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/shop"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-[#9BB7A7] px-4 py-2 text-sm font-medium text-[#2F3E34] shadow-sm hover:bg-[#8FAD9D]"
              >
                Shop The Tranquility Kit
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/images/logo-1.png" alt="ZenLeaf Logo" className="h-10 w-auto" />
            </div>
            <p className="mt-3 text-sm text-[#2B2B2B]/70 max-w-xs">
              Curated small‑farm teas and mindful rituals delivered monthly.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:text-[#2F3E34]" to="/shop">
                  The Tranquility Kit
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2F3E34]" to="/shop">
                  Add‑ons
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2F3E34]" to="/shop">
                  Gift cards
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Learn</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:text-[#2F3E34]" to="/rituals">
                  Ritual Library
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2F3E34]" to="/farms">
                  Farm Stories
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2F3E34]" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="hover:text-[#2F3E34]" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-[#2F3E34]" href="#">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a className="hover:text-[#2F3E34]" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/5 py-6 text-center text-xs text-[#2B2B2B]/60">
          © {new Date().getFullYear()} ZenLeaf. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

