import type { Config } from 'tailwindcss';

function generateSizing(increment: number, max: number) {
   const spacing: Record<number, string> = {};
   for (let i = increment; i <= max; i += increment) {
      spacing[i] = `${i}px`;
   }
   return spacing;
}

export default {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            inter: ['var(--font-inter-display)', 'system-ui', 'sans-serif'],
         },
         spacing: {
            ...generateSizing(1, 150),
         },
         borderRadius: {
            ...generateSizing(1, 50),
         },
         fontSize: {
            ...generateSizing(1, 100),
         },
         backgroundImage: {
            'gradient-bg':
               'linear-gradient(to bottom, rgba(215, 165, 255, 0.75) 0%, rgba(255, 0, 0, 0.25) 26%, rgba(255, 128, 128, 0.63) 57%, #FFFFFF 80%)',
            'gradient-brand':
               'linear-gradient(to left, #22C55E 0%, #F97316 50%, #FF0000 75%, #A855F7 100%)',
         },
         keyframes: {
            spinny: {
               from: { transform: 'rotate(0deg)' },
               to: { transform: 'rotate(360deg)' },
            },
         },
         animation: {
            spinny: 'spinny 3s linear',
         },
      },
   },
   plugins: [],
} satisfies Config;
