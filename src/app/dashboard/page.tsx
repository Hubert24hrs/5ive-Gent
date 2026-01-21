"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DashboardPage() {
    // Mock user data
    const user = {
        name: "John Doe",
        email: "john@example.com",
        memberSince: "January 2024",
        loyaltyPoints: 1250,
    };

    const orders = [
        {
            id: "ORD-2024-001",
            date: "Jan 15, 2024",
            status: "Delivered",
            total: 299.99,
            items: 3,
        },
        {
            id: "ORD-2024-002",
            date: "Jan 20, 2024",
            status: "In Transit",
            total: 149.99,
            items: 1,
        },
        {
            id: "ORD-2024-003",
            date: "Jan 25, 2024",
            status: "Processing",
            total: 489.99,
            items: 4,
        },
    ];

    const wishlist = [
        { id: "1", name: "Premium Leather Jacket", price: 299.99 },
        { id: "5", name: "Smart Watch Elite", price: 399.99 },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Delivered":
                return "text-green-400 bg-green-400/10";
            case "In Transit":
                return "text-blue-400 bg-blue-400/10";
            case "Processing":
                return "text-yellow-400 bg-yellow-400/10";
            default:
                return "text-gray-400 bg-gray-400/10";
        }
    };

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
                        Welcome back, <span className="text-gradient">{user.name.split(" ")[0]}!</span>
                    </h1>
                    <p className="text-gray-400">Manage your account and track your orders</p>
                </motion.div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1"
                    >
                        <div className="glass-card p-6 rounded-xl sticky top-32">
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#FFD700] flex items-center justify-center text-3xl font-bold text-[#0A1128] mx-auto mb-4">
                                    {user.name.charAt(0)}
                                </div>
                                <h3 className="font-bold text-lg">{user.name}</h3>
                                <p className="text-sm text-gray-400">{user.email}</p>
                                <p className="text-xs text-gray-500 mt-1">Member since {user.memberSince}</p>
                            </div>

                            <div className="space-y-2">
                                {[
                                    { label: "Orders", icon: "📦", active: true },
                                    { label: "Wishlist", icon: "❤️", active: false },
                                    { label: "Addresses", icon: "📍", active: false },
                                    { label: "Settings", icon: "⚙️", active: false },
                                    { label: "Logout", icon: "🚪", active: false },
                                ].map((item) => (
                                    <button
                                        key={item.label}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${item.active
                                                ? "bg-[#00D9FF] text-[#0A1128] font-medium"
                                                : "hover:bg-[rgba(255,255,255,0.1)]"
                                            }`}
                                    >
                                        <span>{item.icon}</span>
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="grid sm:grid-cols-3 gap-4"
                        >
                            <div className="glass-card p-6 rounded-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-sm">Total Orders</p>
                                        <p className="text-3xl font-bold mt-1">{orders.length}</p>
                                    </div>
                                    <span className="text-4xl">📦</span>
                                </div>
                            </div>
                            <div className="glass-card p-6 rounded-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-sm">Wishlist Items</p>
                                        <p className="text-3xl font-bold mt-1">{wishlist.length}</p>
                                    </div>
                                    <span className="text-4xl">❤️</span>
                                </div>
                            </div>
                            <div className="glass-card p-6 rounded-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-sm">Loyalty Points</p>
                                        <p className="text-3xl font-bold mt-1 text-[#FFD700]">{user.loyaltyPoints}</p>
                                    </div>
                                    <span className="text-4xl">⭐</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Recent Orders */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Recent Orders</h2>
                                <button className="text-[#00D9FF] hover:underline">View All</button>
                            </div>

                            <div className="space-y-4">
                                {orders.map((order) => (
                                    <div key={order.id} className="glass-card p-6 rounded-xl">
                                        <div className="flex flex-wrap justify-between items-center gap-4">
                                            <div>
                                                <p className="font-bold">{order.id}</p>
                                                <p className="text-sm text-gray-400">{order.date}</p>
                                            </div>
                                            <div>
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                                                        order.status
                                                    )}`}
                                                >
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-[#00D9FF]">${order.total.toFixed(2)}</p>
                                                <p className="text-sm text-gray-400">{order.items} items</p>
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                className="btn-secondary py-2 px-4 text-sm"
                                            >
                                                Track Order
                                            </motion.button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Wishlist Preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Your Wishlist</h2>
                                <button className="text-[#00D9FF] hover:underline">View All</button>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {wishlist.map((item) => (
                                    <div key={item.id} className="glass-card p-4 rounded-xl flex justify-between items-center">
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-[#00D9FF] font-bold">${item.price.toFixed(2)}</p>
                                        </div>
                                        <Link href={`/product/${item.id}`}>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                className="btn-primary py-2 px-4 text-sm"
                                            >
                                                View
                                            </motion.button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Referral Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass-card p-8 rounded-xl text-center"
                        >
                            <span className="text-5xl mb-4 block">🎁</span>
                            <h3 className="text-2xl font-bold mb-2">Refer & Earn</h3>
                            <p className="text-gray-400 mb-6 max-w-md mx-auto">
                                Share your unique referral code with friends and earn $20 credit
                                for each successful referral!
                            </p>
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="px-6 py-3 bg-[rgba(255,255,255,0.1)] rounded-lg font-mono text-[#00D9FF] text-lg">
                                    5IVEGENT-JOHN20
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="btn-secondary py-3 px-6"
                                >
                                    Copy Code
                                </motion.button>
                            </div>
                            <p className="text-sm text-gray-500">0 successful referrals so far</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
