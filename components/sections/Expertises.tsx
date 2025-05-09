"use client";

import { useTranslations } from "next-intl";
import { getExpertiseItems } from "@/data";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";

// Pas d'imports d'images, juste des chemins
const images = [
    "/ampoule.png",
    "/design.png",
    "/pc.png",
    "/brain.png"
];

const Expertise = () => {
    const t = useTranslations("expertise");
    const items = getExpertiseItems(t);

    return (
        <section id="about" className="py-20 w-full px-6 bg-black z-50 mt-32">
            <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-20">
                {t("sectionTitle")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {items.map((card, index) => (
                    <Button
                        key={index}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem * 0.96)`,
                        }}
                        className="flex-1 text-white border-white/10"
                    >
                        <div className="flex flex-col items-center text-center p-6 gap-4">
                            <Image
                                src={images[index]}
                                alt={card.title}
                                width={80}
                                height={80}
                                className="object-contain"
                                onError={(e) => {
                                    console.error(`Failed to load image: ${images[index]}`);
                                    e.currentTarget.src = "/fallback.png"; // Image de secours
                                }}
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{card.title}</h3>
                                <p className="mt-2 text-sm text-neutral-400">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </section>
    );
};

export default Expertise;
