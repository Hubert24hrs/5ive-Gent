"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    badge?: "new" | "sale" | "hot";
}

export default function ProductCard({
    id,
    name,
    price,
    originalPrice,
    image,
    category,
    badge,
}: ProductCardProps) {
    const { addItem } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addItem({ id, name, price, image, category });
    };

    return (
        <Link href={`/product/${id}`}>
            <motion.div
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
            >
                <div className="product-image-container relative">
                    {badge && (
                        <span className={`badge badge-${badge} absolute top-4 left-4 z-10`}>
                            {badge}
                        </span>
                    )}
                    <Image
                        src={image}
                        alt={name}
                        width={400}
                        height={300}
                        className="product-image"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="product-overlay" />

                    {/* Quick Add Button */}
                    <motion.button
                        onClick={handleAddToCart}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 btn-primary opacity-0 group-hover:opacity-100 z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: "10px 24px",
                            fontSize: "0.85rem",
                        }}
                    >
                        Add to Cart
                    </motion.button>
                </div>

                <div className="product-content">
                    <p className="text-sm text-[#00D9FF] mb-1">{category}</p>
                    <h3 className="product-title">{name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="product-price">${price.toFixed(2)}</span>
                        {originalPrice && (
                            <span className="product-price-old">${originalPrice.toFixed(2)}</span>
                        )}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
