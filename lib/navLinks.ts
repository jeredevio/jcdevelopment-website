// Types plus stricts
interface NavLink {
  href: string;  // href est toujours requis
  key: string;
  external?: boolean;
  children?: NavLink[];
}

// Validation des URLs
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Fonction pour s'assurer que l'URL est valide
const ensureValidUrl = (url: string): string => {
  return isValidUrl(url) ? url : '/';
};

export const mainLinks: NavLink[] = [
  { href: "/", key: "home" },
  { href: "#about", key: "about" },
  { href: "#products", key: "products" },
  {
    key: 'resources',
    href: '#', // Ajout d'un href par défaut pour le parent
    children: [
      { href: '/blog', key: 'blog' },
      {
        href: 'https://jcdevelopment.gumroad.com/',
        key: 'shop',
        external: true
      },
    ],
  },
].map(link => ({
  ...link,
  href: ensureValidUrl(link.href),
  children: link.children?.map(child => ({
    ...child,
    href: ensureValidUrl(child.href)
  }))
}));

export const ctaLink: NavLink = {
  href: "#contact",
  key: "contact"
};