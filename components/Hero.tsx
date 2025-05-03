import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl';
import { TextGenerateEffect } from './ui/text-generate-effect';
const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='cyan' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='purple' />
      </div>

      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
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

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-96'>{t('tagline')}</h2>
          <TextGenerateEffect words={t('title')} />
        </div>

      </div>
    </div >
  )
}
export default Hero
