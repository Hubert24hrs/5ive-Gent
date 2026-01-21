"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import ProductCard from "@/components/shop/ProductCard";

// Dynamically import HeroScene to avoid SSR issues with Three.js
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] to-[#1B2838]" />,
});

// Sample products data
const featuredProducts = [
  {
    id: "1",
    name: "Premium Leather Jacket",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
    category: "Fashion",
    badge: "sale" as const,
  },
  {
    id: "2",
    name: "Smart Home Hub Pro",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=300&fit=crop",
    category: "Gadgets",
    badge: "new" as const,
  },
  {
    id: "3",
    name: "Designer Handbag Collection",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
    category: "Fashion",
    badge: "hot" as const,
  },
  {
    id: "4",
    name: "Wireless Noise-Canceling Headphones",
    price: 249.99,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "Gadgets",
    badge: "sale" as const,
  },
];

const categories = [
  {
    name: "Fashion & Apparel",
    count: 1200,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop",
  },
  {
    name: "Home Appliances",
    count: 850,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    name: "Gadgets & Tech",
    count: 650,
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
  },
];

const testimonials = [
  {
    text: "5ive Gent Enterprise has been our trusted supplier for over 3 years. The quality of products and reliability of delivery is unmatched. They truly understand global trade.",
    name: "Amara Okonkwo",
    role: "CEO, Lagos Fashion House",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
  },
  {
    text: "Working with 5ive Gent has transformed our electronics business. Their direct imports from China and Turkey give us the best prices in the market.",
    name: "Emmanuel Adebayo",
    role: "Director, TechMart Nigeria",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    text: "Their attention to detail and customer service is exceptional. Every order arrives exactly as promised, and their team goes above and beyond.",
    name: "Sarah Thompson",
    role: "Buyer, UK Fashion Imports",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="mesh-gradient" />
          <HeroScene />
        </div>

        {/* Floating Shapes CSS */}
        <div className="floating-shape floating-shape-1" />
        <div className="floating-shape floating-shape-2" />
        <div className="floating-shape floating-shape-3" />
        <div className="floating-shape floating-shape-4" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full bg-[rgba(0,217,255,0.1)] border border-[rgba(0,217,255,0.3)] text-[#00D9FF] text-sm font-medium mb-6"
            >
              🌍 Global Trade, Local Trust
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span className="text-gradient">Connecting</span>
              <br />
              <span className="text-white">Continents Through</span>
              <br />
              <span className="text-glow">Quality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Premium import and distribution of fashion, home appliances, and gadgets
              from China and Turkey to Nigeria, Africa, Europe, USA, and worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Explore Products
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap justify-center gap-8 mt-16"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-2xl">🔒</span>
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-2xl">🚚</span>
                <span className="text-sm">Global Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-2xl">💬</span>
                <span className="text-sm">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-[#00D9FF] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section bg-[rgba(0,0,0,0.3)]">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item glass-card">
              <CountUp end={50} suffix="+" />
              <p className="stat-label">Countries Served</p>
            </div>
            <div className="stat-item glass-card">
              <CountUp end={10000} suffix="+" />
              <p className="stat-label">Products Available</p>
            </div>
            <div className="stat-item glass-card">
              <CountUp end={25000} suffix="+" />
              <p className="stat-label">Happy Customers</p>
            </div>
            <div className="stat-item glass-card">
              <CountUp end={15} suffix="+" />
              <p className="stat-label">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <span className="text-gradient">Featured</span> Products
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Shop by <span className="text-gradient">Category</span>
            </h2>
          </motion.div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/shop?category=${category.name.toLowerCase()}`}>
                  <div className="category-card">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="category-image"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="category-content">
                      <h3 className="category-title">{category.name}</h3>
                      <p className="category-count">{category.count}+ Products</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-[rgba(0,0,0,0.3)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Why Choose <span className="text-gradient">5ive Gent</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Global Sourcing",
                description:
                  "Direct imports from manufacturing hubs in China and Turkey, ensuring the best prices and quality.",
              },
              {
                icon: "✨",
                title: "Premium Quality",
                description:
                  "Every product undergoes rigorous quality checks before reaching our customers.",
              },
              {
                icon: "🚀",
                title: "Fast Delivery",
                description:
                  "Efficient logistics network enabling quick delivery to 50+ countries worldwide.",
              },
              {
                icon: "💰",
                title: "Competitive Pricing",
                description:
                  "Wholesale and retail pricing that gives you the best value in the market.",
              },
              {
                icon: "🤝",
                title: "Trusted Partner",
                description:
                  "15+ years of experience building lasting relationships with clients globally.",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description:
                  "Dedicated customer service team ready to assist you anytime, anywhere.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 text-center"
              >
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="testimonial-card"
              >
                <span className="testimonial-quote">&ldquo;</span>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="testimonial-avatar"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="newsletter-section"
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay <span className="text-gradient">Updated</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for exclusive deals, new arrivals, and industry insights.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-gold"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section bg-[rgba(0,0,0,0.3)]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Our <span className="text-gradient">Global Presence</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              From our sourcing partners in China 🇨🇳 and Turkey 🇹🇷 to our distribution
              network spanning Africa, Europe, USA, and beyond — we connect markets
              and deliver excellence worldwide.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {["🇳🇬 Nigeria", "🇬🇧 UK", "🇺🇸 USA", "🇩🇪 Germany", "🇫🇷 France", "🇿🇦 South Africa", "🇰🇪 Kenya", "🇦🇪 UAE"].map(
              (country, index) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass-card px-6 py-3 text-lg cursor-default"
                >
                  {country}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF] rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-gradient">Get Started?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust 5ive Gent Enterprise
                for their import and distribution needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Start Shopping
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
