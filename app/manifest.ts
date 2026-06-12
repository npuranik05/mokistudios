import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moki Studios | Websites & Lead Automation",
    short_name: "Moki Studios",
    description:
      "Professional websites and lead-generating automations for small businesses. Free demo first. You only pay if you love it.",
    start_url: "/",
    display: "standalone",
    background_color: "#121210",
    theme_color: "#121210",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
