'use client';

import { useTranslations } from 'next-intl';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { aboutItems } from '@/data';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-12 px-6 bg-black text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
        {t('sectionTitle')}
      </h2>

      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
        {aboutItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={t(item.titleKey)}
            description={t(item.descriptionKey)}
            img={item.img}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
