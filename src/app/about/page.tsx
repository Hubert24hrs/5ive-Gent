"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";

export default function AboutPage() {
    const timeline = [
        {
            year: "2009",
            title: "The Beginning",
            description: "5ive Gent Enterprise was founded with a vision to bridge global markets and bring premium products to Africa.",
        },
        {
            year: "2012",
            title: "Expanding Horizons",
            description: "Established direct partnerships with manufacturers in China, expanding our product catalog significantly.",
        },
        {
            year: "2015",
            title: "Turkey Partnership",
            description: "Opened new sourcing channels in Turkey, specializing in fashion and textile imports.",
        },
        {
            year: "2018",
            title: "Global Reach",
            description: "Extended distribution network to Europe and USA, serving customers on four continents.",
        },
        {
            year: "2021",
            title: "Digital Transformation",
            description: "Launched our e-commerce platform to bring the 5ive Gent experience directly to customers worldwide.",
        },
        {
            year: "2024",
            title: "Leading the Industry",
            description: "Now serving 50+ countries with over 10,000 products and 25,000+ satisfied customers.",
        },
    ];

    const values = [
        {
            icon: "💎",
            title: "Quality First",
            description: "Every product undergoes rigorous quality checks before reaching our customers.",
        },
        {
            icon: "🤝",
            title: "Trust & Integrity",
            description: "Building lasting relationships through honest business practices and transparency.",
        },
        {
            icon: "🌍",
            title: "Global Vision",
            description: "Connecting markets worldwide while understanding local needs and preferences.",
        },
        {
            icon: "🚀",
            title: "Innovation",
            description: "Continuously improving our processes and embracing new technologies.",
        },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Hero Section */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="text-[#00D9FF] text-sm font-medium mb-4 inline-block">
                            OUR STORY
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            About <span className="text-gradient">5ive Gent</span> Enterprise
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            For over 15 years, we&apos;ve been connecting continents through quality,
                            bringing premium products from the world&apos;s leading manufacturing hubs
                            to customers across the globe.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="section bg-[rgba(0,0,0,0.3)]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-card p-4 rounded-3xl">
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/founder.jpg"
                                        alt="Ugo Chimuanya Darlington - Founder & CEO"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00D9FF] rounded-full opacity-20 blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FFD700] rounded-full opacity-20 blur-2xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#FFD700] text-sm font-medium mb-2 inline-block">
                                FOUNDER & CEO
                            </span>
                            <h2 className="text-4xl font-bold mb-4">Ugo Chimuanya Darlington</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                With a passion for international trade and a vision to connect markets,
                                Ugo Chimuanya Darlington founded 5ive Gent Enterprise in 2009. His
                                expertise in global sourcing and commitment to quality has transformed
                                the company into one of Africa&apos;s leading import and distribution enterprises.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Under his leadership, 5ive Gent has built strong relationships with
                                manufacturers in China and Turkey, establishing reliable supply chains
                                that ensure consistent quality and competitive pricing for customers
                                across Nigeria, Africa, Europe, the USA, and beyond.
                            </p>
                            <blockquote className="glass-card p-6 border-l-4 border-[#00D9FF]">
                                <p className="text-lg italic text-gray-300 mb-2">
                                    &ldquo;Our mission is simple: to provide access to premium quality
                                    products at fair prices while building relationships that last a lifetime.&rdquo;
                                </p>
                                <cite className="text-[#00D9FF]">— Ugo Chimuanya Darlington</cite>
                            </blockquote>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 rounded-2xl text-center"
                        >
                            <span className="text-5xl mb-6 block">🎯</span>
                            <h3 className="text-2xl font-bold mb-4 text-[#00D9FF]">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To bridge global markets by providing access to premium quality products
                                from international manufacturing hubs, while ensuring exceptional service
                                and competitive pricing for all our customers.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card p-10 rounded-2xl text-center"
                        >
                            <span className="text-5xl mb-6 block">🔭</span>
                            <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To become the most trusted name in international trade, known for
                                exceptional quality, innovative solutions, and creating lasting value
                                for our customers, partners, and communities worldwide.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section bg-[rgba(0,0,0,0.3)]">
                <div className="container">
                    <div className="stats-container">
                        <div className="stat-item glass-card">
                            <CountUp end={15} suffix="+" />
                            <p className="stat-label">Years Experience</p>
                        </div>
                        <div className="stat-item glass-card">
                            <CountUp end={50} suffix="+" />
                            <p className="stat-label">Countries Served</p>
                        </div>
                        <div className="stat-item glass-card">
                            <CountUp end={10000} suffix="+" />
                            <p className="stat-label">Products</p>
                        </div>
                        <div className="stat-item glass-card">
                            <CountUp end={25000} suffix="+" />
                            <p className="stat-label">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">
                            Our <span className="text-gradient">Journey</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#00D9FF] to-[#FFD700] hidden md:block" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                    <div className="glass-card p-6 rounded-xl">
                                        <span className="text-[#00D9FF] font-bold text-xl">{item.year}</span>
                                        <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00D9FF] rounded-full border-4 border-[#0A1128]" />

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-[rgba(0,0,0,0.3)]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">
                            Our <span className="text-gradient">Values</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-card p-8 text-center rounded-xl"
                            >
                                <span className="text-5xl mb-4 block">{value.icon}</span>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Import Sources */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">
                            Our <span className="text-gradient">Sourcing Partners</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We work directly with trusted manufacturers in the world&apos;s leading
                            production hubs to bring you the best quality at competitive prices.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-6xl">🇨🇳</span>
                                <div>
                                    <h3 className="text-2xl font-bold">China</h3>
                                    <p className="text-gray-400">Electronics, Gadgets, Home Appliances</p>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Our partnerships with leading Chinese manufacturers give us access to
                                cutting-edge technology and electronics at factory-direct prices.
                                Every product undergoes strict quality control before export.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-6xl">🇹🇷</span>
                                <div>
                                    <h3 className="text-2xl font-bold">Turkey</h3>
                                    <p className="text-gray-400">Fashion, Apparel, Textiles</p>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Turkey&apos;s renowned textile industry provides us with premium
                                fashion and apparel. We source from Istanbul&apos;s finest designers
                                and manufacturers, ensuring style meets quality.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
