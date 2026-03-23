import Link from "next/link";

const footerLinks = [
  {
    title: "Collections",
    links: [
      { label: "Carved Clocks", href: "/collection" },
      { label: "Chalet Clocks", href: "/collection" },
      { label: "8-Day Movements", href: "/collection" },
      { label: "Limited Editions", href: "/collection" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Heritage", href: "/heritage" },
      { label: "VdS Certificate", href: "/heritage" },
      { label: "The Brand", href: "/about" },
      { label: "Contact", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping & Returns", href: "/about" },
      { label: "Care Guide", href: "/heritage" },
      { label: "FAQ", href: "/about" },
      { label: "Privacy Policy", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-gallery/80">
      {/* Brass divider */}
      <div className="brass-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full border border-brass/40 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brass"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="font-heading text-lg text-gallery">
                Golden Black
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gallery/50 max-w-sm mb-6">
              Curating the finest hand-crafted mechanical cuckoo clocks from the
              heart of Germany&apos;s Black Forest. Each timepiece is a
              testament to centuries of horological tradition.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gallery/5 border border-gallery/10 rounded-sm px-4 py-2.5 text-sm text-gallery placeholder:text-gallery/30 focus:outline-none focus:border-brass/40 flex-1 max-w-xs transition-colors"
              />
              <button className="bg-brass hover:bg-brass-light text-forest-dark px-5 py-2.5 text-sm font-medium uppercase tracking-wider rounded-sm transition-colors">
                Join
              </button>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-brass mb-5 font-medium">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gallery/40 hover:text-brass transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gallery/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gallery/30">
            © 2026 Golden Black. All rights reserved.
          </p>
          <p className="text-xs text-gallery/20 italic">
            Handcrafted with precision in the Black Forest
          </p>
        </div>
      </div>
    </footer>
  );
}
