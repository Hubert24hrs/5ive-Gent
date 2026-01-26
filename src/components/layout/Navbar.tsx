"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { totalItems } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: "/", label: "Home", icon: "🏠" },
        { href: "/shop", label: "Shop", icon: "🛍️" },
        { href: "/about", label: "About", icon: "ℹ️" },
        { href: "/contact", label: "Contact", icon: "📞" },
    ];

    return (
        <>
            {/* Navigation Bar */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-3 left-3 right-3 z-[1000] flex items-center justify-between px-4 py-3 rounded-full"
                style={{
                    background: scrolled
                        ? "rgba(10, 17, 40, 0.98)"
                        : "rgba(10, 17, 40, 0.9)",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                }}
            >
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <span
                        className="text-lg font-bold"
                        style={{
                            background: "linear-gradient(135deg, #FF6B6B 0%, #E91E63 50%, #FFD700 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontFamily: "var(--font-outfit)"
                        }}
                    >
                        5ive Gent
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/cart" className="relative ml-2">
                        <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#FF6B6B] to-[#E91E63] text-white text-xs font-bold rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </div>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                        background: "linear-gradient(135deg, #FF6B6B 0%, #E91E63 100%)",
                        boxShadow: "0 4px 15px rgba(233, 30, 99, 0.4)",
                    }}
                    aria-label="Open menu"
                >
                    <div className="flex flex-col justify-center items-center gap-[5px]">
                        <span
                            className="block rounded-full bg-white transition-all duration-300"
                            style={{
                                width: 20,
                                height: 2.5,
                                transform: mobileMenuOpen ? "rotate(45deg) translateY(7.5px)" : "none",
                            }}
                        />
                        <span
                            className="block rounded-full bg-white transition-all duration-300"
                            style={{
                                width: 20,
                                height: 2.5,
                                opacity: mobileMenuOpen ? 0 : 1,
                            }}
                        />
                        <span
                            className="block rounded-full bg-white transition-all duration-300"
                            style={{
                                width: 20,
                                height: 2.5,
                                transform: mobileMenuOpen ? "rotate(-45deg) translateY(-7.5px)" : "none",
                            }}
                        />
                    </div>
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] md:hidden"
                        />

                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[280px] z-[1001] md:hidden"
                            style={{
                                background: "linear-gradient(to bottom, #0A1128 0%, #1a1a3e 100%)",
                                borderLeft: "1px solid rgba(255,255,255,0.1)",
                            }}
                        >
                            <div className="flex justify-end p-5">
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>

                            <div className="px-6 py-4">
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Menu</p>
                                <div className="flex flex-col gap-2">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="flex items-center gap-4 px-4 py-4 rounded-xl bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,107,107,0.2)] transition-all"
                                            >
                                                <span className="text-2xl">{link.icon}</span>
                                                <span className="text-lg font-medium">{link.label}</span>
                                                <svg className="ml-auto w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="px-6 py-4 mt-4">
                                <Link
                                    href="/cart"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-4 px-4 py-4 rounded-xl text-white font-medium"
                                    style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #E91E63 100%)" }}
                                >
                                    <span className="text-2xl">🛒</span>
                                    <span>View Cart</span>
                                    {totalItems > 0 && (
                                        <span className="ml-auto bg-white text-[#E91E63] px-2 py-1 rounded-full text-sm font-bold">
                                            {totalItems}
                                        </span>
                                    )}
                                </Link>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[rgba(255,255,255,0.1)]">
                                <p className="text-center text-sm text-gray-500">© {new Date().getFullYear()} 5ive Gent Enterprise</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
