import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import i18nextLoader from 'vite-plugin-i18next-loader'

const pwaConfig: Partial<VitePWAOptions> = {
  manifest: {
    name: 'Jack of All Dominion II',
    short_name: 'JOAD2',
    description: 'Dominion randomizer App (inspired by the original Jack of All Dominion app)',
    theme_color: '#0059A2',
    orientation: 'portrait',
    icons: [
      {
        src: 'icon.png',
        sizes: '225x225',
        type: 'image/png'
      }
    ]
  },
  devOptions: {
    enabled: true,
  },
  strategies: 'generateSW',
  registerType: 'autoUpdate',
}

export default defineConfig({
  plugins: [solid(), VitePWA(pwaConfig), i18nextLoader({ paths: ['./locales'] })],
})
