export const CAKTO_LINKS = {
  design: "https://SEU-LINK-CAKTO-DESIGN",
  edicao: "https://SEU-LINK-CAKTO-EDICAO",
  combo: "https://SEU-LINK-CAKTO-COMBO",
} as const;

export type ProductKey = keyof typeof CAKTO_LINKS;

export const PRODUCTS = {
  design: {
    key: "design" as const,
    name: "Pack de Design",
    price: "R$ 27,90",
    tag: "Design",
    tagline: "Tudo para criar artes de alto nível.",
    items: ["Logos", "Thumbnails", "Banners", "PSDs", "Mockups", "Brushes", "Fontes", "Texturas", "Gradientes", "Overlays"],
  },
  edicao: {
    key: "edicao" as const,
    name: "Pack de Edição",
    price: "R$ 27,90",
    tag: "Edição",
    tagline: "Recursos premium para editores de vídeo.",
    items: ["Presets", "LUTs", "Overlays", "Assets", "Recursos Premium", "Elementos", "Efeitos", "Transições"],
  },
  combo: {
    key: "combo" as const,
    name: "Combo Mídia Packed",
    price: "R$ 54,90",
    tag: "Combo",
    tagline: "Pack de Design + Pack de Edição em uma única compra.",
    items: [
      "Pack de Design completo",
      "Pack de Edição completo",
      "Acesso a todos os recursos",
      "Atualizações futuras",
      "Suporte prioritário",
    ],
  },
};
