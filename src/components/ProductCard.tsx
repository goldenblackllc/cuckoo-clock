"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal/5 mb-5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition-colors duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs uppercase tracking-[0.2em] text-gallery border border-gallery/50 px-6 py-3 backdrop-blur-sm">
            View Details
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] uppercase tracking-[0.15em] bg-forest/80 text-brass px-3 py-1.5 backdrop-blur-sm">
            {product.movement}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <h3 className="font-heading text-lg text-charcoal group-hover:text-forest transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-charcoal/50 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-medium text-brass-dark">
            €{product.price.toLocaleString()}
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-charcoal/30">
            {product.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
