"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
    const [couponCode, setCouponCode] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);

    const shippingCost = totalPrice > 200 ? 0 : 15;
    const discount = couponApplied ? totalPrice * 0.1 : 0;
    const finalTotal = totalPrice + shippingCost - discount;

    const handleApplyCoupon = () => {
        if (couponCode.toLowerCase() === "5ive10") {
            setCouponApplied(true);
        }
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <span className="text-8xl mb-8 block">🛒</span>
                        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
                        <p className="text-gray-400 text-lg mb-8">
                            Looks like you haven&apos;t added any products yet.
                        </p>
                        <Link href="/shop">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                Start Shopping
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold mb-2">
                        Shopping <span className="text-gradient">Cart</span>
                    </h1>
                    <p className="text-gray-400">
                        {items.length} item{items.length !== 1 ? "s" : ""} in your cart
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <AnimatePresence>
                            {items.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20, height: 0 }}
                                    className="cart-item"
                                >
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="cart-item-details flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="text-sm text-[#00D9FF]">{item.category}</p>
                                                <h3 className="font-bold text-lg">{item.name}</h3>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-gray-400 hover:text-red-400 transition-colors p-2"
                                            >
                                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="flex flex-wrap justify-between items-center gap-4">
                                            <div className="quantity-controls">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="quantity-btn"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="quantity-btn"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-xl font-bold text-[#00D9FF]">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </p>
                                                <p className="text-sm text-gray-400">
                                                    ${item.price.toFixed(2)} each
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Cart Actions */}
                        <div className="flex flex-wrap gap-4 mt-6">
                            <Link href="/shop">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    className="btn-secondary"
                                >
                                    ← Continue Shopping
                                </motion.button>
                            </Link>
                            <motion.button
                                onClick={clearCart}
                                whileHover={{ scale: 1.02 }}
                                className="px-6 py-3 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                            >
                                Clear Cart
                            </motion.button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="glass-card p-8 rounded-xl sticky top-32">
                            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                            {/* Coupon */}
                            <div className="mb-6">
                                <label className="text-sm text-gray-400 mb-2 block">Promo Code</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        placeholder="Enter code"
                                        className="flex-1 px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white"
                                        disabled={couponApplied}
                                    />
                                    <motion.button
                                        onClick={handleApplyCoupon}
                                        whileHover={{ scale: 1.02 }}
                                        className="px-4 py-2 rounded-lg bg-[rgba(0,217,255,0.2)] text-[#00D9FF] font-medium"
                                        disabled={couponApplied}
                                    >
                                        {couponApplied ? "Applied ✓" : "Apply"}
                                    </motion.button>
                                </div>
                                {couponApplied && (
                                    <p className="text-green-400 text-sm mt-2">10% discount applied!</p>
                                )}
                                <p className="text-gray-500 text-xs mt-1">Try: 5IVE10</p>
                            </div>

                            {/* Summary Items */}
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-400">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                {couponApplied && (
                                    <div className="flex justify-between text-green-400">
                                        <span>Discount (10%)</span>
                                        <span>-${discount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-gray-400">
                                    <span>Shipping</span>
                                    <span>
                                        {shippingCost === 0 ? (
                                            <span className="text-green-400">FREE</span>
                                        ) : (
                                            `$${shippingCost.toFixed(2)}`
                                        )}
                                    </span>
                                </div>
                                {shippingCost > 0 && (
                                    <p className="text-xs text-gray-500">
                                        Free shipping on orders over $200
                                    </p>
                                )}
                                <div className="border-t border-[rgba(255,255,255,0.1)] pt-4">
                                    <div className="flex justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span className="text-[#00D9FF]">${finalTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary w-full mb-4"
                            >
                                Proceed to Checkout
                            </motion.button>

                            {/* Trust Badges */}
                            <div className="flex justify-center gap-6 text-gray-500 text-sm">
                                <span className="flex items-center gap-1">
                                    <span>🔒</span> Secure
                                </span>
                                <span className="flex items-center gap-1">
                                    <span>🚚</span> Fast Shipping
                                </span>
                                <span className="flex items-center gap-1">
                                    <span>↩️</span> Easy Returns
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
