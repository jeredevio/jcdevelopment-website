"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { mainLinks, ctaLink } from "@/lib/navLinks";
import { Turn as Hamburger } from 'hamburger-react';
import LanguageSwitcher from "./LanguageSwitcher";
// Composant Logo séparé pour une meilleure performance
const Logo = () => (
    <Link
        href="/"
        className="flex items-center gap-2 font-bold text-xl"
        aria-label="Retour à l'accueil"
    >
        <Image
            src="/Logo.png"
            alt="Logo JCDev"
            width={48}
            height={48}
            priority
            loading="eager"
        />
    </Link>
);

export default function Navbar() {
    const t = useTranslations("Navbar");
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Gestion du scroll quand le menu mobile est ouvert
    const handleMenuToggle = useCallback(() => {
        setIsOpen(prev => {
            if (!prev) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            return !prev;
        });
    }, []);

    return (
        <nav
            role="navigation"
            aria-label="Navigation principale"
            className="
                fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50
                bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl rounded-2xl shadow-lg
                border border-white/40 dark:border-white/10
                ring-1 ring-white/40 dark:ring-white/10
            "
        >
            <div className="flex items-center justify-between px-6 py-3">
                <Logo />

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 items-center mx-auto">
                    {mainLinks.map((link) =>
                        link.children ? (
                            <div className="relative group" key={`nav-${link.key}`}>
                                <button
                                    className="flex items-center gap-1 px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 dark:hover:text-purple-300 transition-colors"
                                    aria-expanded={false}
                                    aria-haspopup="true"
                                >
                                    {t(link.key)}
                                    <svg
                                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute hidden group-hover:flex flex-col bg-white dark:bg-neutral-900 mt-2 rounded-lg shadow-lg border border-white/20 dark:border-white/10 min-w-[200px] transform origin-top transition-all duration-200 ease-in-out">
                                    <div className="absolute -top-4 left-0 right-0 h-4" />
                                    {link.children.map((sublink) => (
                                        <Link
                                            key={`${link.key}-${sublink.key}`}
                                            href={sublink.href}
                                            target={sublink.external ? "_blank" : "_self"}
                                            rel={sublink.external ? "noopener noreferrer" : undefined}
                                            aria-label={sublink.external ? `${t(sublink.key)} (s'ouvre dans un nouvel onglet)` : t(sublink.key)}
                                            className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 dark:hover:text-purple-300 whitespace-nowrap flex items-center gap-2"
                                        >
                                            {t(sublink.key)}
                                            {sublink.external && (
                                                <svg
                                                    className="w-4 h-4"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={`nav-${link.key}`}
                                href={link.href}
                                className={cn(
                                    "relative px-2 py-1 text-base font-medium transition-colors hover:text-cyan-500 dark:hover:text-purple-300",
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
                        )
                    )}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <LanguageSwitcher />
                    <Link
                        href={ctaLink.href}
                        className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-black text-sm font-bold transition-colors dark:bg-gray-200 dark:hover:bg-white"
                    >
                        {t(ctaLink.key)}
                    </Link>

                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center gap-2">
                    <LanguageSwitcher />
                    <Hamburger
                        toggled={isOpen}
                        toggle={handleMenuToggle}
                        aria-label="Menu principal"
                        aria-expanded={isOpen}
                    />
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white/90 dark:bg-black/10 rounded-b-2xl border-t border-white/40 dark:border-white/10"
                    >
                        <div className="flex flex-col gap-4 p-4 items-center">
                            {mainLinks.map((link) =>
                                link.children
                                    ? link.children.map((sublink) => (
                                        <Link
                                            key={`mobile-${link.key}-${sublink.key}`}
                                            href={sublink.href}
                                            target={sublink.external ? "_blank" : "_self"}
                                            rel={sublink.external ? "noopener noreferrer" : undefined}
                                            className="py-2 text-lg font-medium transition-colors hover:text-cyan-500 dark:hover:text-purple-400 flex items-center gap-2"
                                            onClick={handleMenuToggle}
                                        >
                                            {t(sublink.key)}
                                            {sublink.external && (
                                                <svg
                                                    className="w-4 h-4"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            )}
                                        </Link>
                                    ))
                                    : (

                                        <Link
                                            key={`mobile-${link.key}`}
                                            href={link.href}
                                            className={cn(
                                                "py-2 text-lg font-medium transition-colors hover:text-cyan-500 dark:hover:text-purple-400",
                                                pathname === link.href
                                                    ? "text-cyan-600 dark:text-purple-300"
                                                    : "text-gray-700 dark:text-gray-200"
                                            )}
                                            onClick={handleMenuToggle}
                                        >
                                            {t(link.key)}
                                        </Link>
                                    )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}