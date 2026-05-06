import sharp from 'sharp'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const svgBuffer = readFileSync(resolve(__dirname, '../public/favicon.svg'))

const sizes = [16, 32, 180, 192, 512]

for (const size of sizes) {
  const filename = size === 180
    ? 'apple-touch-icon.png'
    : size === 192
    ? 'android-chrome-192.png'
    : size === 512
    ? 'android-chrome-512.png'
    : `favicon-${size}x${size}.png`

  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(resolve(__dirname, `../public/${filename}`))

  console.log(`✓ Generated ${filename}`)
}
