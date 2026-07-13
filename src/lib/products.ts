export const CAKTO_LINKS = {
  design: "https://pay.cakto.com.br/35jmd2p_978100",
  edicao: "https://pay.cakto.com.br/rtu8r33_978068",
  combo: "https://pay.cakto.com.br/3bfot5w_978107",
} as const;

export const DISCORD_URL = "https://discord.gg/ut3TVAzFT";

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
