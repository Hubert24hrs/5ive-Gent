import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-grid">
                {/* Brand */}
                <div>
                    <div className="footer-brand text-gradient">5ive Gent Enterprise</div>
                    <p className="footer-text">
                        Your gateway to premium international goods. Connecting continents
                        through quality products and trusted service.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link" aria-label="Facebook">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="Twitter">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="Instagram">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="LinkedIn">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop All</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/dashboard">My Account</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h4 className="footer-title">Categories</h4>
                    <ul className="footer-links">
                        <li><Link href="/shop?category=fashion">Fashion & Apparel</Link></li>
                        <li><Link href="/shop?category=appliances">Home Appliances</Link></li>
                        <li><Link href="/shop?category=gadgets">Gadgets & Tech</Link></li>
                        <li><Link href="/shop?category=accessories">Accessories</Link></li>
                        <li><Link href="/shop?category=wholesale">Wholesale</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="footer-title">Contact Us</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="mailto:info@5ivegent.com">
                                📧 info@5ivegent.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+2341234567890">
                                📞 +234 123 456 7890
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/2341234567890" target="_blank" rel="noopener noreferrer">
                                💬 WhatsApp Us
                            </a>
                        </li>
                        <li>Lagos, Nigeria 🇳🇬</li>
                        <li>China 🇨🇳 | Turkey 🇹🇷</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom container">
                <p>© {currentYear} 5ive Gent Enterprise. All rights reserved.</p>
                <div className="flex gap-6 justify-center mt-4 text-sm">
                    <Link href="/privacy" className="hover:text-[#00D9FF]">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-[#00D9FF]">Terms of Service</Link>
                    <Link href="/shipping" className="hover:text-[#00D9FF]">Shipping Info</Link>
                </div>
            </div>
        </footer>
    );
}
