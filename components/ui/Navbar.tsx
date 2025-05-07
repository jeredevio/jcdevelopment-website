"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { mainLinks, ctaLink } from "@/lib/navLinks";
import { Turn as Hamburger } from 'hamburger-react'

export default function Navbar() {
    const t = useTranslations("Navbar");
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="
      fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50
      bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl rounded-2xl shadow-lg
      border border-white/40 dark:border-white/10
      ring-1 ring-white/40 dark:ring-white/10
    ">
            <div className="flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <Image
                        src="/Logo.png"
                        alt="Logo JCDev"
                        width={48}
                        height={48}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 items-center mx-auto">
                    {mainLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative px-2 py-1 text-base font-medium transition-colors hover:text-cyan-500 dark:hover:text-purple-400",
                                pathname === link.href
                                    ? "text-cyan-600 dark:text-purple-300"
                                    : "text-gray-700 dark:text-gray-200"
                            )}
                        >
                            <span className="relative z-10">{t(link.key)}</span>
                            {pathname === link.href && (
                                <motion.span
                                    layoutId="navbar-underline"
                                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-cyan-500 dark:bg-purple-400 rounded"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Link
                        href={ctaLink.href}
                        className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-black text-sm font-bold transition-colors dark:bg-gray-200 dark:hover:bg-white"
                    >
                        {t(ctaLink.key)}
                    </Link>
                </div>


                {/* Mobile menu button */}
                <div className="md:hidden">
                    <Hamburger toggled={isOpen} toggle={() => setIsOpen((v) => !v)} />
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white/90 dark:bg-black/10 rounded-b-2xl border-t border-white/40 dark:border-white/10"
                    >
                        <div className="flex flex-col gap-4 p-4 items-center">
                            {mainLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "py-2 text-lg font-medium transition-colors hover:text-cyan-500 dark:hover:text-purple-400",
                                        pathname === link.href
                                            ? "text-cyan-600 dark:text-purple-300"
                                            : "text-gray-700 dark:text-gray-200"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t(link.key)}
                                </Link>
                            ))}

                            <Link
                                href={ctaLink.href}
                                className="mt-4 px-4 py-2 text-center w-[30%] mx-auto rounded-lg bg-cyan-600 hover:bg-cyan-700 text-black text-sm font-bold transition-colors dark:bg-gray-200 dark:hover:bg-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {t(ctaLink.key)}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
}