export const getExpertiseItems = (t: (key: string) => string) => [
  {
    title: t("idea.title"),
    description: t("idea.description"),
  },
  {
    title: t("design.title"),
    description: t("design.description"),
  },
  {
    title: t("dev.title"),
    description: t("dev.description"),
  },
  {
    title: t("ai.title"),
    description: t("ai.description"),
  },
];

export const aboutItems = [
  {
    id: 1,
    titleKey: "card1.title",
    descriptionKey: "card1.description",
    className: "md:col-span-2",   // Grande
    img: "/images/about1.png",
  },
  {
    id: 2,
    titleKey: "card2.title",
    descriptionKey: "card2.description",
    className: "md:col-span-1",   // Petite
    img: "/images/about2.png",
  },
  {
    id: 3,
    titleKey: "card3.title",
    descriptionKey: "card3.description",
    className: "md:col-span-1",   // Petite
    img: "/images/about3.png",
  },
  {
    id: 4,
    titleKey: "card4.title",
    descriptionKey: "card4.description",
    className: "md:col-span-2",   // Grande
    img: "/images/about4.png",
  },
];

