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

    // Close menu when clicking outside
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
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="nav-floating"
                style={{
                    background: scrolled
                        ? "rgba(10, 17, 40, 0.98)"
                        : "rgba(10, 17, 40, 0.9)",
                    boxShadow: scrolled
                        ? "0 10px 40px rgba(0, 0, 0, 0.5)"
                        : "0 10px 40px rgba(0, 0, 0, 0.3)",
                }}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-lg sm:text-xl font-bold"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        <span className="text-gradient">5ive Gent</span>
                    </motion.div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="nav-link">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3">
                    {/* Cart - Desktop only */}
                    <Link href="/cart" className="relative hidden md:block">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center cursor-pointer"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                            {totalItems > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#FF6B6B] to-[#E91E63] text-white text-xs font-bold rounded-full flex items-center justify-center"
                                >
                                    {totalItems}
                                </motion.span>
                            )}
                        </motion.div>
                    </Link>

                    {/* Mobile Menu Button - Prominent Hamburger */}
                    <motion.button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden w-11 h-11 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#E91E63] flex items-center justify-center shadow-lg shadow-[#FF6B6B]/30"
                        aria-label="Open menu"
                    >
                        <motion.div
                            animate={mobileMenuOpen ? "open" : "closed"}
                            className="flex flex-col justify-center items-center gap-[5px]"
                        >
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0, width: 18 },
                                    open: { rotate: 45, y: 7, width: 18 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="h-[2.5px] bg-white block rounded-full origin-center"
                                style={{ width: 18 }}
                            />
                            <motion.span
                                variants={{
                                    closed: { opacity: 1, scaleX: 1, width: 18 },
                                    open: { opacity: 0, scaleX: 0, width: 18 },
                                }}
                                transition={{ duration: 0.2 }}
                                className="h-[2.5px] bg-white block rounded-full"
                                style={{ width: 18 }}
                            />
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0, width: 18 },
                                    open: { rotate: -45, y: -7, width: 18 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="h-[2.5px] bg-white block rounded-full origin-center"
                                style={{ width: 18 }}
                            />
                        </motion.div>
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[280px] z-50 md:hidden"
                        >
                            <div className="h-full bg-gradient-to-b from-[#0A1128] to-[#1a1a3e] border-l border-[rgba(255,255,255,0.1)] shadow-2xl">
                                {/* Close button */}
                                <div className="flex justify-end p-4 pt-6">
                                    <motion.button
                                        onClick={() => setMobileMenuOpen(false)}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* Menu Links */}
                                <div className="px-6 py-4">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Navigation</p>
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
                                                    className="flex items-center gap-4 px-4 py-4 rounded-xl bg-[rgba(255,255,255,0.05)] hover:bg-gradient-to-r hover:from-[#FF6B6B]/20 hover:to-[#E91E63]/20 transition-all group"
                                                >
                                                    <span className="text-2xl">{link.icon}</span>
                                                    <span className="text-lg font-medium group-hover:text-[#FF6B6B] transition-colors">
                                                        {link.label}
                                                    </span>
                                                    <svg
                                                        className="ml-auto w-5 h-5 text-gray-500 group-hover:text-[#FF6B6B] transition-colors"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="px-6 py-4 mt-4">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">Quick Actions</p>
                                    <Link
                                        href="/cart"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-4 px-4 py-4 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#E91E63] text-white font-medium"
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

                                {/* Footer */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[rgba(255,255,255,0.1)]">
                                    <p className="text-center text-sm text-gray-500">
                                        © 2024 5ive Gent Enterprise
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
