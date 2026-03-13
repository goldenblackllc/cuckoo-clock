"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import type { Product } from "@/data/products";

type MovementFilter = "all" | "1-day" | "8-day";
type StyleFilter = "all" | "chalet" | "carved";

export default function CollectionPage() {
  const [movementFilter, setMovementFilter] = useState<MovementFilter>("all");
  const [styleFilter, setStyleFilter] = useState<StyleFilter>("all");

  const filteredProducts = products.filter((p: Product) => {
    const matchesMovement =
      movementFilter === "all" || p.movement === movementFilter;
    const matchesStyle =
      styleFilter === "all" || p.category === styleFilter;
    return matchesMovement && matchesStyle;
  });

  const filterGroups = [
    {
      title: "Movement",
      options: [
        { label: "All Movements", value: "all" as MovementFilter },
        { label: "1-Day Movement", value: "1-day" as MovementFilter },
        { label: "8-Day Movement", value: "8-day" as MovementFilter },
      ],
      current: movementFilter,
      setter: setMovementFilter,
    },
    {
      title: "Style",
      options: [
        { label: "All Styles", value: "all" as StyleFilter },
        { label: "Chalet Style", value: "chalet" as StyleFilter },
        { label: "Carved Style", value: "carved" as StyleFilter },
      ],
      current: styleFilter,
      setter: setStyleFilter,
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-forest pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brass mb-4 block">
              Our Timepieces
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl text-gallery mb-4">
              The Collection
            </h1>
            <p className="text-gallery/50 max-w-xl mx-auto">
              Each clock in our collection is a VdS-certified masterpiece,
              hand-carved from sustainably harvested linden wood.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collection Grid with Filters */}
      <section className="bg-gallery py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar Filters */}
            <AnimatedSection
              direction="left"
              className="lg:w-64 flex-shrink-0"
            >
              <div className="lg:sticky lg:top-28 space-y-8">
                <div>
                  <h3 className="font-heading text-xl text-charcoal mb-1">
                    Filters
                  </h3>
                  <p className="text-xs text-charcoal/40">
                    {filteredProducts.length} timepiece
                    {filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {filterGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4 font-medium">
                      {group.title}
                    </h4>
                    <div className="space-y-2">
                      {group.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => group.setter(option.value as never)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-300 border ${
                            group.current === option.value
                              ? "border-brass bg-brass/10 text-charcoal"
                              : "border-charcoal/5 text-charcoal/50 hover:border-brass/30 hover:text-charcoal"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Price Range (decorative) */}
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4 font-medium">
                    Price Range
                  </h4>
                  <div className="flex items-center justify-between text-sm text-charcoal/40 mb-2">
                    <span>€1,650</span>
                    <span>€5,200</span>
                  </div>
                  <div className="h-1 bg-charcoal/10 rounded-full relative">
                    <div className="absolute left-0 right-0 h-full bg-brass/40 rounded-full" />
                  </div>
                </div>

                {/* Reset */}
                <button
                  onClick={() => {
                    setMovementFilter("all");
                    setStyleFilter("all");
                  }}
                  className="text-xs uppercase tracking-[0.15em] text-charcoal/30 hover:text-brass transition-colors"
                >
                  ← Reset Filters
                </button>
              </div>
            </AnimatedSection>

            {/* Product Grid */}
            <div className="flex-1">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
              >
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </motion.div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="font-heading text-2xl text-charcoal/30 mb-2">
                    No clocks match your filters
                  </p>
                  <p className="text-sm text-charcoal/20">
                    Try adjusting your selection above
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
