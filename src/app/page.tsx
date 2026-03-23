"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featuredProducts = products.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video placeholder background */}
        <div className="absolute inset-0 bg-forest-dark">
          <Image
            src="/images/hero-gears.png"
            alt="Intricate brass clock gears and mechanical movement"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Video placeholder overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/40 to-forest-dark" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.4em] text-brass mb-6 border border-brass/30 px-5 py-2">
              Est. 2025 — Montana, USA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-gallery leading-[1.1] mb-8"
          >
            The Art of
            <br />
            <span className="text-gradient-brass">Mechanical</span> Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-gallery/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Hand-carved masterpieces from the heart of the Black Forest.
            Each clock is a living work of art — crafted over hundreds
            of hours by master woodcarvers using techniques passed down
            through generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/collection"
              className="brass-gradient text-forest-dark px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:brightness-110 transition-all duration-300 inline-block"
            >
              Explore the Collection
            </Link>
            <Link
              href="/heritage"
              className="border border-gallery/20 text-gallery/80 px-10 py-4 text-sm uppercase tracking-[0.2em] hover:border-brass/40 hover:text-brass transition-all duration-300 inline-block"
            >
              Our Heritage
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 border border-gallery/30 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 bg-brass rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── MECHANICAL HERITAGE SECTION ─── */}
      <section className="bg-gallery py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/heritage-carving.png"
                  alt="Hand-carved linden wood cuckoo clock detail"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-forest-dark/40 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 glass-card px-5 py-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                    200+ Hours Per Clock
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Text Side */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-brass-dark mb-4 block">
                    Mechanical Heritage
                  </span>
                  <h2 className="font-heading text-4xl lg:text-5xl text-charcoal leading-tight">
                    Where Precision
                    <br />
                    Meets Artistry
                  </h2>
                </div>

                <div className="brass-divider" />

                <p className="text-charcoal/60 text-lg leading-relaxed">
                  In an age of disposable electronics, our mechanical cuckoo clocks
                  stand as monuments to human ingenuity. Each timepiece contains a
                  precision brass movement — no batteries, no circuits — just the
                  elegant interplay of weights, gears, and the steady rhythm of a
                  hand-tuned pendulum.
                </p>

                <p className="text-charcoal/50 leading-relaxed">
                  Every clock that leaves our workshop carries the unmistakable
                  signature of its maker: the depth of the carving, the warmth of
                  the linden wood, and the satisfying <em>kuckuck</em> call that has
                  echoed through Alpine homes for over three centuries.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-4">
                  {[
                    { number: "300+", label: "Years of Tradition" },
                    { number: "37", label: "Master Artisans" },
                    { number: "100%", label: "Mechanical" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-heading text-3xl text-forest mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-charcoal/40">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-brass-dark mb-4 block">
              Curated Selection
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl text-charcoal mb-4">
              Featured Timepieces
            </h2>
            <p className="text-charcoal/50 max-w-xl mx-auto">
              Each clock is individually numbered, hand-signed by its maker,
              and accompanied by a certificate of authenticity from the
              Black Forest Clock Association.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {featuredProducts.slice(0, 6).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-16" delay={0.3}>
            <Link
              href="/collection"
              className="inline-block border-2 border-brass text-brass px-12 py-4 text-sm uppercase tracking-[0.2em] hover:bg-brass hover:text-forest-dark transition-all duration-300"
            >
              View Full Collection
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CRAFTSMANSHIP BANNER ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-forest">
          <Image
            src="/images/craftsmanship-workshop.png"
            alt="Master woodcarver's workbench with cuckoo clock and tools"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.3em] text-brass mb-6 block">
              Our Promise
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gallery leading-tight mb-8">
              &ldquo;A mechanical clock doesn&apos;t just tell time —
              <br />
              it tells a story.&rdquo;
            </h2>
            <p className="text-gallery/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Every Golden Black timepiece comes with complimentary white-glove
              delivery, a lifetime movement guarantee, and the certainty that
              you own a piece of living history.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
