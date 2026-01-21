"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/shop/ProductCard";

// Extended product catalog
const allProducts = [
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
    {
        id: "5",
        name: "Smart Watch Elite",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        category: "Gadgets",
        badge: "new" as const,
    },
    {
        id: "6",
        name: "Ankara Print Dress",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&h=300&fit=crop",
        category: "Fashion",
        badge: "sale" as const,
    },
    {
        id: "7",
        name: "Portable Air Purifier",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
        category: "Appliances",
    },
    {
        id: "8",
        name: "Premium Sunglasses",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
        category: "Fashion",
        badge: "hot" as const,
    },
    {
        id: "9",
        name: "Robot Vacuum Cleaner",
        price: 449.99,
        originalPrice: 599.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "Appliances",
        badge: "sale" as const,
    },
    {
        id: "10",
        name: "Wireless Earbuds Pro",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
        category: "Gadgets",
        badge: "new" as const,
    },
    {
        id: "11",
        name: "Espresso Coffee Machine",
        price: 599.99,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop",
        category: "Appliances",
    },
    {
        id: "12",
        name: "Designer Sneakers",
        price: 179.99,
        originalPrice: 229.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        category: "Fashion",
        badge: "sale" as const,
    },
];

const categories = ["All", "Fashion", "Gadgets", "Appliances"];

const priceRanges = [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under $100", min: 0, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 - $400", min: 200, max: 400 },
    { label: "$400+", min: 400, max: Infinity },
];

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPriceRange, setSelectedPriceRange] = useState(0);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sortBy, setSortBy] = useState("featured");

    const filteredProducts = allProducts
        .filter((product) => {
            const categoryMatch =
                selectedCategory === "All" || product.category === selectedCategory;
            const priceMatch =
                product.price >= priceRanges[selectedPriceRange].min &&
                product.price <= priceRanges[selectedPriceRange].max;
            return categoryMatch && priceMatch;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "price-low":
                    return a.price - b.price;
                case "price-high":
                    return b.price - a.price;
                case "name":
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold mb-4">
                        <span className="text-gradient">Shop</span> Collection
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover premium products sourced directly from China and Turkey.
                        Quality guaranteed, competitive prices.
                    </p>
                </motion.div>

                {/* Filters Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-6 mb-8"
                >
                    <div className="flex flex-wrap gap-6 items-center justify-between">
                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-5 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                            ? "bg-[#00D9FF] text-[#0A1128]"
                                            : "bg-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.2)]"
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>

                        {/* Price Filter */}
                        <select
                            value={selectedPriceRange}
                            onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                            className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white cursor-pointer"
                        >
                            {priceRanges.map((range, index) => (
                                <option key={range.label} value={index} className="bg-[#0A1128]">
                                    {range.label}
                                </option>
                            ))}
                        </select>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white cursor-pointer"
                        >
                            <option value="featured" className="bg-[#0A1128]">Featured</option>
                            <option value="price-low" className="bg-[#0A1128]">Price: Low to High</option>
                            <option value="price-high" className="bg-[#0A1128]">Price: High to Low</option>
                            <option value="name" className="bg-[#0A1128]">Name A-Z</option>
                        </select>

                        {/* View Toggle */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-lg transition-colors ${viewMode === "grid"
                                        ? "bg-[#00D9FF] text-[#0A1128]"
                                        : "bg-[rgba(255,255,255,0.1)] text-white"
                                    }`}
                            >
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                    <rect x="14" y="14" width="7" height="7" rx="1" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-lg transition-colors ${viewMode === "list"
                                        ? "bg-[#00D9FF] text-[#0A1128]"
                                        : "bg-[rgba(255,255,255,0.1)] text-white"
                                    }`}
                            >
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="4" rx="1" />
                                    <rect x="3" y="10" width="18" height="4" rx="1" />
                                    <rect x="3" y="16" width="18" height="4" rx="1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Results Count */}
                <div className="mb-6 text-gray-400">
                    Showing <span className="text-white font-semibold">{filteredProducts.length}</span> products
                </div>

                {/* Products Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedCategory}-${selectedPriceRange}-${sortBy}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={
                            viewMode === "grid"
                                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                : "flex flex-col gap-4"
                        }
                    >
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <ProductCard {...product} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* No Results */}
                {filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-2xl text-gray-400 mb-4">No products found</p>
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setSelectedPriceRange(0);
                            }}
                            className="btn-secondary"
                        >
                            Clear Filters
                        </button>
                    </motion.div>
                )}

                {/* Load More */}
                {filteredProducts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary"
                        >
                            Load More Products
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
