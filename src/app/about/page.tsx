"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Authenticity First",
    description:
      "We sell only VdS-certified, genuine Black Forest mechanical cuckoo clocks. No quartz, no reproductions, no compromises.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Master Craftsmanship",
    description:
      "Each clock is hand-crafted by artisans with decades of experience, using traditional tools and techniques passed through generations.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Personal Curation",
    description:
      "We personally visit each workshop, know every maker by name, and hand-select only clocks that meet our exacting standards.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "White-Glove Delivery",
    description:
      "Every clock ships in a custom-built wooden crate with museum-grade packaging, delivered with care to your door worldwide.",
  },
];

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1920&q=80"
            alt="Craftsman workshop"
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
              About Us
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl text-gallery mb-6">
              Guardians of a
              <br />
              <span className="text-gradient-brass">Timeless Craft</span>
            </h1>
            <p className="text-gallery/50 text-lg max-w-2xl mx-auto">
              For nearly four decades, we have dedicated ourselves to preserving
              the art of mechanical clockmaking by connecting discerning
              collectors with the world&apos;s finest artisans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-gallery py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80"
                  alt="Clock workshop detail"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-forest-dark/30 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-brass-dark mb-4 block">
                    Our Story
                  </span>
                  <h2 className="font-heading text-3xl lg:text-4xl text-charcoal leading-tight">
                    Born from a Love
                    <br />
                    of Precision
                  </h2>
                </div>

                <p className="text-charcoal/60 text-lg leading-relaxed">
                  Schwarzwald Uhrenmanufaktur was founded in 1987 by a third-generation
                  Black Forest clockmaker who saw the art form he loved being
                  overshadowed by cheap, mass-produced imitations from overseas.
                </p>

                <p className="text-charcoal/50 leading-relaxed">
                  Today, we work directly with 37 master artisans across the
                  Schwarzwald region, each specializing in a different aspect of
                  the craft — from woodcarving and painting to movement assembly
                  and acoustic tuning. We don&apos;t just sell clocks; we are
                  custodians of a living tradition.
                </p>

                <p className="text-charcoal/50 leading-relaxed">
                  Our mission is simple: to ensure that every mechanical cuckoo
                  clock we offer is worthy of being passed down through
                  generations — as a functional heirloom, a work of art, and a
                  connection to centuries of human ingenuity.
                </p>

                <div className="brass-divider" />

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "1987", label: "Founded" },
                    { number: "37", label: "Artisan Partners" },
                    { number: "2,400+", label: "Clocks Delivered" },
                    { number: "48", label: "Countries Served" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-heading text-2xl text-forest">
                        {stat.number}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-charcoal/40 mt-1">
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

      {/* Values */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-brass-dark mb-4 block">
              Our Commitment
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-charcoal">
              What Sets Us Apart
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-ivory border border-brass/10 p-8 h-full hover:border-brass/30 transition-colors duration-500 group">
                  <div className="text-brass mb-5 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-lg text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-charcoal/40 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gallery py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-brass-dark mb-4 block">
                    Get in Touch
                  </span>
                  <h2 className="font-heading text-3xl lg:text-4xl text-charcoal leading-tight">
                    We&apos;d Love to
                    <br />
                    Hear from You
                  </h2>
                </div>

                <p className="text-charcoal/50 leading-relaxed">
                  Whether you&apos;re seeking a specific model, need guidance
                  choosing your first mechanical clock, or have a question about
                  care and maintenance — our horological advisors are here to help.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      label: "Email",
                      value: "concierge@schwarzwald-uhren.de",
                      icon: "✉",
                    },
                    {
                      label: "Phone",
                      value: "+49 7722 918 200",
                      icon: "☎",
                    },
                    {
                      label: "Showroom",
                      value:
                        "Hauptstraße 47, 78098 Triberg im Schwarzwald, Germany",
                      icon: "◉",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-brass text-lg mt-0.5">
                        {item.icon}
                      </span>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-charcoal/30 block mb-1">
                          {item.label}
                        </span>
                        <span className="text-sm text-charcoal/60">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-forest/5 border-l-2 border-brass p-6">
                  <p className="text-sm text-charcoal/50 italic">
                    Showroom visits are by appointment only. We offer private
                    viewings where you can experience our full collection.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" delay={0.2}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-ivory border border-brass/20 p-10 lg:p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-brass flex items-center justify-center mb-6">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-brass"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl text-charcoal mb-3">
                    Message Received
                  </h3>
                  <p className="text-sm text-charcoal/50 max-w-xs">
                    Thank you for your inquiry. A horological advisor
                    will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-ivory border border-brass/10 p-8 lg:p-10 space-y-6"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2 block"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-charcoal/10 py-3 text-charcoal placeholder:text-charcoal/20 focus:outline-none focus:border-brass transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2 block"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-charcoal/10 py-3 text-charcoal placeholder:text-charcoal/20 focus:outline-none focus:border-brass transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2 block"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-charcoal/10 py-3 text-charcoal text-sm focus:outline-none focus:border-brass transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a topic...</option>
                      <option value="purchase">Purchase Inquiry</option>
                      <option value="custom">Custom Commission</option>
                      <option value="care">Care & Maintenance</option>
                      <option value="showroom">Showroom Appointment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2 block"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-charcoal/10 py-3 text-charcoal placeholder:text-charcoal/20 focus:outline-none focus:border-brass transition-colors text-sm resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full brass-gradient text-forest-dark py-4 text-sm uppercase tracking-[0.2em] font-medium hover:brightness-110 transition-all duration-300 mt-4"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
