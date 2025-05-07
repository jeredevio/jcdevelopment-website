import { SpotlightNew } from '@/components/ui/spotlight-new'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { MagicButton } from '@/components/ui/MagicButton';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 md:pt-20 lg:pt-16"
      role="region"
      aria-label={t('ariaLabel') || "Section principale"}
      tabIndex={-1}
    >
      {/* Background grid + mask */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-black z-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.3)_2px,transparent_2px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_2px,transparent_2px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.3)_2px,transparent_2px),linear-gradient(to_bottom,rgba(38,38,38,0.3)_2px,transparent_2px)]",
          )}
        />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:from-transparent dark:via-black/50 dark:to-black" />
      </div>

      {/* Spotlight effect - contained within Hero section */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <SpotlightNew />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-12">
          <div className="flex flex-col items-center gap-1">
            <h2 className="uppercase tracking-widest text-[10px] sm:text-sm lg:text-sm text-blue-100 max-w-96">{t('tagline')}</h2>
            {/* SEO: h1 caché pour accessibilité */}
            <h1 className="sr-only">{t('title')}</h1>
            <TextGenerateEffect
              className="text-center text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              words={t('title')}
              purpleWordIndices={[5, 6]}
              aria-hidden="true"
            />
          </div>

          <p className="text-center md:tracking-wider text-base sm:text-lg lg:text-2xl max-w-2xl mx-auto">
            {t('description')}
          </p>

          <a href="#about" className="mt-8" aria-label={t('MainButton')}>
            <MagicButton
              title={t('MainButton')}
              position="right"
              icon={<FaArrowRight />}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
export default Hero