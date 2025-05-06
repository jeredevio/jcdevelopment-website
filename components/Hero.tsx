import { SpotlightNew } from './ui/spotlight-new'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { MagicButton } from './ui/MagicButton';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className='pb-20 pt-36'>
      <div>
        {/* Animated spotlight new */}
        <SpotlightNew />
      </div>

      {/* Background grid + mask */}
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.3)_2px,transparent_2px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_2px,transparent_2px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.3)_2px,transparent_2px),linear-gradient(to_bottom,rgba(38,38,38,0.3)_2px,transparent_2px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
        
        {/* Content */}
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-96'>{t('tagline')}</h2>
          <TextGenerateEffect className="text-center text-[50px] md:text-5xl lg:text-6xl" words={t('title')} purpleWordIndices={[5, 6]} />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            {t('description')}
          </p>

          <a href="#about">
            <MagicButton
              title={t('MainButton')}
              position="right"
              icon={<FaArrowRight />}
            />
          </a>
        </div>

      </div>
    </div >
  )
}
export default Hero
