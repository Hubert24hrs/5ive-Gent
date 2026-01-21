"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/shop/ProductCard";

// Product database (in real app, this would come from an API)
const productsDB: Record<string, {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    description: string;
    specifications: { label: string; value: string }[];
    features: string[];
    inStock: boolean;
    badge?: "new" | "sale" | "hot";
}> = {
    "1": {
        id: "1",
        name: "Premium Leather Jacket",
        price: 299.99,
        originalPrice: 399.99,
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        ],
        category: "Fashion",
        description:
            "Crafted from genuine Italian leather, this premium jacket combines timeless style with modern craftsmanship. Perfect for any occasion, it features a sleek design with attention to every detail. Imported directly from Turkey.",
        specifications: [
            { label: "Material", value: "100% Genuine Leather" },
            { label: "Origin", value: "Turkey" },
            { label: "Lining", value: "Polyester Blend" },
            { label: "Closure", value: "Zipper" },
            { label: "Pockets", value: "4 (2 outside, 2 inside)" },
            { label: "Care", value: "Professional Leather Clean" },
        ],
        features: [
            "Premium Italian leather construction",
            "Water-resistant coating",
            "Breathable inner lining",
            "Adjustable cuffs",
            "Multiple pocket design",
        ],
        inStock: true,
        badge: "sale",
    },
    "2": {
        id: "2",
        name: "Smart Home Hub Pro",
        price: 149.99,
        images: [
            "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        ],
        category: "Gadgets",
        description:
            "Control your entire smart home with this powerful hub. Compatible with over 10,000 smart devices, featuring voice control and intuitive app management. Sourced from leading manufacturers in China.",
        specifications: [
            { label: "Connectivity", value: "WiFi, Bluetooth, Zigbee, Z-Wave" },
            { label: "Origin", value: "China" },
            { label: "Voice Assistant", value: "Built-in Alexa & Google" },
            { label: "Power", value: "5V DC Adapter" },
            { label: "Dimensions", value: "4.5 x 4.5 x 1.5 inches" },
        ],
        features: [
            "Control 10,000+ smart devices",
            "Voice control capability",
            "Easy app management",
            "Automatic firmware updates",
            "Energy monitoring",
        ],
        inStock: true,
        badge: "new",
    },
};

// Default product for IDs not in database
const defaultProduct = {
    id: "default",
    name: "Premium Product",
    price: 199.99,
    images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    ],
    category: "General",
    description: "A premium quality product sourced from our international partners.",
    specifications: [
        { label: "Quality", value: "Premium" },
        { label: "Origin", value: "International" },
    ],
    features: ["High quality materials", "Durable construction"],
    inStock: true,
};

const relatedProducts = [
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
        name: "Wireless Headphones",
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
];

export default function ProductPage() {
    const params = useParams();
    const productId = params.id as string;
    const product = productsDB[productId] || { ...defaultProduct, id: productId };

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");
    const { addItem } = useCart();

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                category: product.category,
            });
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-sm text-gray-400 mb-8"
                >
                    <Link href="/" className="hover:text-[#00D9FF]">Home</Link>
                    <span>/</span>
                    <Link href="/shop" className="hover:text-[#00D9FF]">Shop</Link>
                    <span>/</span>
                    <span className="text-white">{product.name}</span>
                </motion.nav>

                {/* Product Main Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        {/* Main Image */}
                        <div className="glass-card p-4 mb-4 rounded-2xl overflow-hidden">
                            <motion.div
                                key={selectedImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden"
                            >
                                <Image
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {product.badge && (
                                    <span className={`badge badge-${product.badge} absolute top-4 left-4`}>
                                        {product.badge}
                                    </span>
                                )}
                            </motion.div>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-3">
                            {product.images.map((image, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === index
                                            ? "border-[#00D9FF]"
                                            : "border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <Image src={image} alt={`View ${index + 1}`} fill className="object-cover" />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-[#00D9FF] text-sm font-medium">{product.category}</span>
                        <h1 className="text-4xl font-bold mt-2 mb-4">{product.name}</h1>

                        {/* Price */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-4xl font-bold text-[#00D9FF]">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                                <>
                                    <span className="text-xl text-gray-500 line-through">
                                        ${product.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="bg-[#FFD700] text-[#0A1128] px-3 py-1 rounded-full text-sm font-bold">
                                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2 mb-6">
                            <span
                                className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"
                                    }`}
                            />
                            <span className={product.inStock ? "text-green-400" : "text-red-400"}>
                                {product.inStock ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-8">{product.description}</p>

                        {/* Quantity & Add to Cart */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400">Quantity:</span>
                                <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.1)] rounded-full px-4 py-2">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="quantity-btn"
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center font-medium">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="quantity-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <motion.button
                                onClick={handleAddToCart}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary flex-1"
                                disabled={!product.inStock}
                            >
                                Add to Cart — ${(product.price * quantity).toFixed(2)}
                            </motion.button>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex gap-4 mb-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 text-gray-400 hover:text-white"
                            >
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                Add to Wishlist
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 text-gray-400 hover:text-white"
                            >
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="18" cy="5" r="3" />
                                    <circle cx="6" cy="12" r="3" />
                                    <circle cx="18" cy="19" r="3" />
                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                </svg>
                                Share
                            </motion.button>
                        </div>

                        {/* Features */}
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="font-bold mb-4">Key Features</h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-300">
                                        <span className="text-[#00D9FF]">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Tabs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    {/* Tab Headers */}
                    <div className="flex gap-4 mb-8 border-b border-[rgba(255,255,255,0.1)]">
                        {[
                            { key: "description", label: "Description" },
                            { key: "specs", label: "Specifications" },
                            { key: "reviews", label: "Reviews (24)" },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                                className={`pb-4 px-2 font-medium transition-all relative ${activeTab === tab.key
                                        ? "text-[#00D9FF]"
                                        : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.key && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9FF]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="glass-card p-8 rounded-xl">
                        {activeTab === "description" && (
                            <div className="prose prose-invert max-w-none">
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {product.description}
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    At 5ive Gent Enterprise, we source only the finest products from our trusted
                                    partners in China and Turkey. Each item undergoes rigorous quality checks
                                    before being added to our catalog, ensuring you receive nothing but the best.
                                </p>
                            </div>
                        )}

                        {activeTab === "specs" && (
                            <div className="grid md:grid-cols-2 gap-4">
                                {product.specifications.map((spec, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between py-3 border-b border-[rgba(255,255,255,0.1)]"
                                    >
                                        <span className="text-gray-400">{spec.label}</span>
                                        <span className="font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "reviews" && (
                            <div className="text-center py-8">
                                <p className="text-gray-400 mb-4">Customer reviews coming soon!</p>
                                <button className="btn-secondary">Write a Review</button>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Related Products */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        You May Also <span className="text-gradient">Like</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
