'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();


    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'fr' : 'en';
        const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
        router.push(newPath);
    };

    return (
        <button
            onClick={toggleLocale}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white text-xs font-semibold hover:bg-white/10 transition-colors duration-200"
            title="Changer de langue"
        >
            {locale.toUpperCase()}
        </button>
    );
}