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
