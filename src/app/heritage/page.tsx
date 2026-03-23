"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const timeline = [
  {
    year: "1629",
    title: "The Origin",
    description:
      "The first known cuckoo clock reference appears in the estate of Augsburg nobleman Philipp Hainhofer. The concept spreads to the Black Forest region.",
  },
  {
    year: "1737",
    title: "The Pioneer",
    description:
      "Franz Anton Ketterer of Schönwald creates the first documented Black Forest cuckoo clock with a mechanical bellows system mimicking the bird's call.",
  },
  {
    year: "1850",
    title: "The Golden Age",
    description:
      "Friedrich Eisenlohr designs the iconic 'Bahnhäusleuhr' (railroad house clock), establishing the classic chalet style still beloved today.",
  },
  {
    year: "1987",
    title: "Our Beginning",
    description:
      "Golden Black is founded with a mission to curate and preserve the finest examples of mechanical clockmaking from the Black Forest.",
  },
  {
    year: "Today",
    title: "Living Tradition",
    description:
      "We partner with 37 master artisans across the Black Forest, ensuring every clock meets the exacting standards of the VdS certification.",
  },
];

export default function HeritagePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/black-forest.png"
            alt="Foggy Black Forest landscape at dawn"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brass mb-4 block">
              Authenticity & Heritage
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl text-gallery mb-6">
              Three Centuries of
              <br />
              <span className="text-gradient-brass">Mechanical Mastery</span>
            </h1>
            <p className="text-gallery/50 text-lg max-w-2xl mx-auto">
              Understanding the difference between a genuine Black Forest
              cuckoo clock and a mass-produced imitation is essential.
              Here, we explain what makes our timepieces authentic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VdS Certificate Section */}
      <section className="bg-gallery py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Certificate Visual */}
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Certificate Card */}
                <div className="bg-ivory border border-brass/20 p-10 lg:p-14 shadow-2xl shadow-charcoal/5">
                  <div className="text-center space-y-6">
                    {/* Seal */}
                    <div className="w-28 h-28 mx-auto rounded-full border-4 border-brass/30 flex items-center justify-center bg-forest/5">
                      <div className="w-20 h-20 rounded-full border-2 border-brass flex items-center justify-center">
                        <div className="text-center">
                          <span className="block font-heading text-2xl text-forest">
                            VdS
                          </span>
                          <span className="block text-[8px] uppercase tracking-[0.15em] text-charcoal/50">
                            Certified
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl text-charcoal mb-1">
                        Verein die Schwarzwalduhr
                      </h3>
                      <p className="text-xs text-charcoal/40 uppercase tracking-wider">
                        Black Forest Clock Association
                      </p>
                    </div>

                    <div className="brass-divider" />

                    <p className="text-sm text-charcoal/50 leading-relaxed max-w-sm mx-auto">
                      This certificate guarantees that the clock has been
                      manufactured exclusively in the Black Forest region of Germany
                      and contains a genuine mechanical movement.
                    </p>

                    <div className="flex items-center justify-center gap-6 pt-4">
                      {["Mechanical Movement", "Hand-Crafted", "Black Forest Origin"].map(
                        (item) => (
                          <div key={item} className="flex items-center gap-1.5">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-brass"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="text-[10px] uppercase tracking-wider text-charcoal/40">
                              {item}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 border border-brass/20" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border border-brass/20" />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-brass-dark mb-4 block">
                    The VdS Certificate
                  </span>
                  <h2 className="font-heading text-3xl lg:text-4xl text-charcoal leading-tight">
                    Your Guarantee of
                    <br />
                    Authenticity
                  </h2>
                </div>

                <p className="text-charcoal/60 text-lg leading-relaxed">
                  The <strong>Verein die Schwarzwalduhr e.V.</strong> (VdS) is
                  the Black Forest Clock Association, the sole authority that can
                  certify a cuckoo clock as genuinely originating from the Black
                  Forest. Every clock in our collection carries this prestigious
                  mark.
                </p>

                <p className="text-charcoal/50 leading-relaxed">
                  A VdS certificate confirms three essential qualities: the clock
                  was designed and assembled in the Black Forest region, it
                  contains a genuine mechanical movement (never quartz), and it
                  was crafted using traditional materials and methods passed down
                  through generations.
                </p>

                <div className="bg-forest/5 border-l-2 border-brass p-6">
                  <p className="text-sm text-charcoal/60 italic leading-relaxed">
                    &ldquo;Beware of imitations. Only a clock bearing the VdS
                    certificate can truly claim to be a Black Forest cuckoo
                    clock. Everything else is merely a reproduction.&rdquo;
                  </p>
                  <span className="text-xs text-charcoal/30 mt-3 block">
                    — VdS Official Statement
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mechanical vs Quartz */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-brass-dark mb-4 block">
              Know the Difference
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-charcoal">
              Mechanical vs. Quartz
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mechanical */}
            <AnimatedSection direction="left">
              <div className="bg-ivory border border-brass/20 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full border border-brass flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-brass"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl text-forest">
                    Mechanical Movement
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Powered by hand-wound weights — no batteries ever needed",
                    "Precision brass gears and hand-tuned pendulum",
                    "Authentic wooden bellows produce the 'kuckuck' call",
                    "Available in 1-day and 8-day winding cycles",
                    "Designed to last for generations with minimal maintenance",
                    "Carries the prestigious VdS certificate of authenticity",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-charcoal/60"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-brass mt-0.5 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Quartz */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-charcoal/[0.02] border border-charcoal/10 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-charcoal/30"
                    >
                      <rect x="7" y="2" width="10" height="20" rx="1" />
                      <line x1="12" y1="18" x2="12" y2="18.01" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl text-charcoal/40">
                    Quartz Movement
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Battery-operated electronic oscillator",
                    "Plastic gears with limited lifespan",
                    "Electronic speaker mimics cuckoo sound",
                    "No winding ritual — loses the tactile connection",
                    "Mass-produced, typically outside the Black Forest",
                    "Cannot carry a VdS certificate of authenticity",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-charcoal/30"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-charcoal/20 mt-0.5 flex-shrink-0"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-forest py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-brass mb-4 block">
              A Living History
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-gallery">
              The Story of the Cuckoo Clock
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-brass/20 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, i) => (
                <AnimatedSection
                  key={item.year}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 pl-20 lg:pl-0 ${
                      i % 2 === 0
                        ? "lg:flex-row lg:text-right"
                        : "lg:flex-row-reverse lg:text-left"
                    }`}
                  >
                    {/* Year dot */}
                    <div className="absolute left-8 lg:left-1/2 w-4 h-4 -translate-x-1/2 mt-1">
                      <div className="w-4 h-4 rounded-full bg-brass border-2 border-forest" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <span className="font-heading text-3xl text-brass mb-2 block">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-xl text-gallery mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gallery/40 text-sm leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
