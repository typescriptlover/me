import defaultTheme from 'tailwindcss/defaultTheme';

import colors from './tailwind.colors.mjs';

/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {
         fontFamily: {
            space: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
            anonymous: ['Anonymous Pro', ...defaultTheme.fontFamily.sans],
         },
         colors: {
            ...colors,
         },
         animation: {
            fadeInBeam: 'fadeIn 0.4s linear 0.2s forwards',
            fadeInLabel: 'fadeIn 0.4s linear 0.3s forwards',
            fadeInText: 'fadeIn 0.4s linear 0.5s forwards',
            fadeInInquiry: 'fadeIn 0.4s linear 0.6s forwards',
         },
         keyframes: {
            fadeIn: {
               '0%': { opacity: 0 },
               '100%': { opacity: 1 },
            },
         },
      },
   },
   plugins: [],
};
