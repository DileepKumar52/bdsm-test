import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// High-resolution Master SVG (512x512)
// Designed for maximum visibility, elegance, and contrast on both light and dark backgrounds
const masterSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181c"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <linearGradient id="glyphGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#e4e4e7"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background rounded rectangle with solid contrasting border -->
  <rect x="16" y="16" width="480" height="480" rx="112" fill="url(#bgGrad)" stroke="#27272a" stroke-width="18" filter="url(#shadow)"/>
  
  <!-- Subtle inner perimeter accent -->
  <rect x="25" y="25" width="462" height="462" rx="103" fill="none" stroke="#3f3f46" stroke-width="2" opacity="0.6"/>

  <!-- Distinctive BT Monogram (Geometric vector paths for 100% font-independent rendering) -->
  <g fill="url(#glyphGrad)">
    <!-- Letter B -->
    <path fill-rule="evenodd" d="
      M 112,146
      L 204,146
      C 236,146 254,162 254,194
      C 254,216 242,232 224,242
      C 248,252 262,270 262,298
      C 262,336 238,366 198,366
      L 112,366
      Z
      M 162,188
      L 162,234
      L 196,234
      C 210,234 218,226 218,211
      C 218,196 210,188 196,188
      Z
      M 162,276
      L 162,324
      L 200,324
      C 216,324 225,314 225,300
      C 225,286 216,276 200,276
      Z
    "/>

    <!-- Letter T -->
    <path d="
      M 278,146
      L 404,146
      L 404,192
      L 364,192
      L 364,366
      L 318,366
      L 318,192
      L 278,192
      Z
    "/>
  </g>

  <!-- Brand Accent Dot (Dynamic Emerald Status Jewel) -->
  <circle cx="414" cy="112" r="28" fill="#10b981" stroke="#09090b" stroke-width="6"/>
</svg>`;

/**
 * Creates a valid multi-image ICO binary buffer from an array of PNG buffers
 * Supported by all browsers, Windows, and search engines
 */
function createIco(pngBuffers) {
  // ICO header: 6 bytes
  // Reserved: 2 bytes (0)
  // Type: 2 bytes (1 = ICO)
  // Count: 2 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffers.length, 4);

  // Directory entries: 16 bytes each
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * pngBuffers.length;
  let currentOffset = 6 + dirSize;

  const dirBuffers = [];
  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);     // Width
    entry.writeUInt8(height >= 256 ? 0 : height, 1);   // Height
    entry.writeUInt8(0, 2);                             // Color palette count
    entry.writeUInt8(0, 3);                             // Reserved
    entry.writeUInt16LE(1, 4);                          // Color planes
    entry.writeUInt16LE(32, 6);                         // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8);              // Image size in bytes
    entry.writeUInt32LE(currentOffset, 12);             // Image data offset
    dirBuffers.push(entry);
    currentOffset += buffer.length;
  }

  return Buffer.concat([header, ...dirBuffers, ...pngBuffers.map(p => p.buffer)]);
}

async function generate() {
  const publicDir = path.resolve('public');
  const svgBuffer = Buffer.from(masterSvg);

  // 1. Write favicon.svg
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), masterSvg, 'utf8');
  console.log('✓ Generated public/favicon.svg');

  // 2. Generate PNGs at required sizes
  const sizes = [
    { name: 'favicon-48x48.png', size: 48 },   // Google Search Primary Requirement (48px multiple)
    { name: 'favicon-96x96.png', size: 96 },   // Google High-DPI / Desktop (48px multiple)
    { name: 'apple-touch-icon.png', size: 180 }, // Apple iOS Home Screen
    { name: 'favicon-192x192.png', size: 192 }, // Android / Chrome PWA (48px multiple)
    { name: 'favicon-512x512.png', size: 512 }, // High-Res PWA Splash
  ];

  const icoSizes = [16, 32, 48];
  const icoPngBuffers = [];

  for (const s of sizes) {
    const outPath = path.join(publicDir, s.name);
    await sharp(svgBuffer)
      .resize(s.size, s.size, { fit: 'contain' })
      .png({ compressionLevel: 9 })
      .toFile(outPath);
    console.log(`✓ Generated public/${s.name} (${s.size}x${s.size})`);
  }

  // Generate PNG frames for ICO container
  for (const size of icoSizes) {
    const buf = await sharp(svgBuffer)
      .resize(size, size, { fit: 'contain' })
      .png({ compressionLevel: 9 })
      .toBuffer();
    icoPngBuffers.push({ width: size, height: size, buffer: buf });
  }

  // 3. Write genuine multi-resolution favicon.ico
  const icoBuffer = createIco(icoPngBuffers);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log(`✓ Generated public/favicon.ico (${icoBuffer.length} bytes, containing 16x16, 32x32, 48x48)`);

  // 4. Generate site.webmanifest
  const manifest = {
    name: "BDSM Test — Online Dynamics Assessment",
    short_name: "BDSM Test",
    description: "Free, objective, and anonymous online BDSM test and relationship dynamics assessment.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  };

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log('✓ Generated public/site.webmanifest');
}

generate().catch(err => {
  console.error('Generation failed:', err);
  process.exit(1);
});
