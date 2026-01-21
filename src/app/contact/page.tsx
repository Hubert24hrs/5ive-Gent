"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email Us",
            content: "info@5ivegent.com",
            link: "mailto:info@5ivegent.com",
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Call Us",
            content: "+234 123 456 7890",
            link: "tel:+2341234567890",
        },
        {
            icon: (
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
            ),
            title: "WhatsApp",
            content: "Chat with us",
            link: "https://wa.me/2341234567890",
        },
        {
            icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Location",
            content: "Lagos, Nigeria",
            link: "#",
        },
    ];

    const faqs = [
        {
            question: "What countries do you ship to?",
            answer: "We ship to over 50 countries worldwide, including Nigeria, UK, USA, Germany, France, South Africa, Kenya, UAE, and many more. Contact us for specific shipping inquiries.",
        },
        {
            question: "What are your wholesale requirements?",
            answer: "We offer competitive wholesale pricing for bulk orders. Minimum order quantities vary by product category. Contact our sales team for a custom quote.",
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping times vary by destination. Within Nigeria: 2-5 business days. International: 7-21 business days depending on the destination and shipping method chosen.",
        },
        {
            question: "Do you offer product samples?",
            answer: "Yes, we offer sample orders for business customers. Sample costs may be deducted from your first bulk order. Contact us for details.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept bank transfers, credit/debit cards, PayPal, Paystack, Flutterwave, and cryptocurrency payments for international orders.",
        },
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-[#00D9FF] text-sm font-medium mb-4 inline-block">
                        GET IN TOUCH
                    </span>
                    <h1 className="text-5xl font-bold mb-6">
                        Contact <span className="text-gradient">Us</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Have questions? We&apos;d love to hear from you. Our team is here to help
                        with any inquiries about our products, wholesale opportunities, or partnerships.
                    </p>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={info.title}
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass-card p-6 text-center cursor-pointer group"
                        >
                            <div className="w-14 h-14 rounded-full bg-[rgba(0,217,255,0.1)] flex items-center justify-center mx-auto mb-4 text-[#00D9FF] group-hover:bg-[#00D9FF] group-hover:text-[#0A1128] transition-all">
                                {info.icon}
                            </div>
                            <h3 className="font-bold mb-1">{info.title}</h3>
                            <p className="text-gray-400 group-hover:text-[#00D9FF] transition-colors">
                                {info.content}
                            </p>
                        </motion.a>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8">
                            Send us a <span className="text-gradient">Message</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="form-group">
                                    <label className="form-label">Your Name *</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address *</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        placeholder="john@example.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-input"
                                        placeholder="+234 123 456 7890"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Subject *</label>
                                    <select
                                        className="form-input"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="wholesale">Wholesale Inquiry</option>
                                        <option value="support">Product Support</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message *</label>
                                <textarea
                                    className="form-textarea"
                                    placeholder="How can we help you?"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary w-full"
                                disabled={submitted}
                            >
                                {submitted ? "Message Sent! ✓" : "Send Message"}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Business Hours & FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Business Hours */}
                        <div className="glass-card p-8 rounded-xl mb-8">
                            <h3 className="text-2xl font-bold mb-6">
                                Business <span className="text-gradient">Hours</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-[rgba(255,255,255,0.1)]">
                                    <span className="text-gray-400">Monday - Friday</span>
                                    <span className="font-medium text-[#00D9FF]">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-[rgba(255,255,255,0.1)]">
                                    <span className="text-gray-400">Saturday</span>
                                    <span className="font-medium text-[#00D9FF]">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="font-medium text-red-400">Closed</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                * All times are in West Africa Time (WAT)
                            </p>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">
                                Frequently Asked <span className="text-gradient">Questions</span>
                            </h3>
                            <div className="space-y-3">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="accordion-item"
                                    >
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="accordion-header w-full text-left"
                                        >
                                            <span>{faq.question}</span>
                                            <motion.span
                                                animate={{ rotate: openFaq === index ? 180 : 0 }}
                                                className="text-[#00D9FF]"
                                            >
                                                ▼
                                            </motion.span>
                                        </button>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="accordion-content"
                                            >
                                                {faq.answer}
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Map placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-xl text-center"
                >
                    <h3 className="text-2xl font-bold mb-4">
                        Our <span className="text-gradient">Global Offices</span>
                    </h3>
                    <p className="text-gray-400 mb-6">
                        With headquarters in Lagos, Nigeria and sourcing offices in China and Turkey,
                        we&apos;re strategically positioned to serve you wherever you are.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-3 text-lg">
                            <span className="text-3xl">🇳🇬</span>
                            <span>Lagos, Nigeria (HQ)</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <span className="text-3xl">🇨🇳</span>
                            <span>Guangzhou, China</span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <span className="text-3xl">🇹🇷</span>
                            <span>Istanbul, Turkey</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
