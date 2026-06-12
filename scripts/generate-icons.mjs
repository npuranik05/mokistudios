/* Generates the PWA / favicon icons into public/icons.
   Re-run with:  node scripts/generate-icons.mjs  */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const icon = (rounded) => `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
  ${rounded ? '<rect width="512" height="512" rx="104" fill="#121210"/>' : '<rect width="512" height="512" fill="#121210"/>'}
  <text x="236" y="346" font-family="Arial, Helvetica, sans-serif" font-size="280" font-weight="800"
        fill="#F4F1EA" text-anchor="middle">M</text>
  <circle cx="392" cy="332" r="30" fill="#E3A857"/>
</svg>`;

await mkdir("public/icons", { recursive: true });

await sharp(Buffer.from(icon(true))).resize(192, 192).png().toFile("public/icons/icon-192.png");
await sharp(Buffer.from(icon(true))).resize(512, 512).png().toFile("public/icons/icon-512.png");
await sharp(Buffer.from(icon(false))).resize(512, 512).png().toFile("public/icons/icon-maskable-512.png");
await sharp(Buffer.from(icon(false))).resize(180, 180).png().toFile("public/icons/apple-touch-icon.png");

console.log("Icons written to public/icons/");
