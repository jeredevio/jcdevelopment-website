import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { gridItems } from '@/data'
import { useTranslations } from 'next-intl'

const AboutGrid = () => {
    const t = useTranslations('AboutGrid')
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map(item => (
                    <BentoGridItem
                        key={item.id}
                        {...item}
                        title={t(item.titleKey)}
                        description={t(item.descKey)}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default AboutGrid