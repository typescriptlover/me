import localFont from 'next/font/local';

export const interDisplay = localFont({
   variable: '--font-inter-display',
   display: 'swap',
   fallback: ['system-ui', 'sans-serif'],
   preload: true,
   src: [
      {
         path: '../fonts/InterDisplay-Thin.woff2',
         weight: '100',
         style: 'normal',
      },
      {
         path: '../fonts/InterDisplay-ThinItalic.woff2',
         weight: '100',
         style: 'italic',
      },
      {
         path: '../fonts/InterDisplay-ExtraLight.woff2',
         weight: '200',
         style: 'normal',
      },
      {
         path: '../fonts/InterDisplay-ExtraLightItalic.woff2',
         weight: '200',
         style: 'italic',
      },
      {
         path: '../fonts/InterDisplay-Light.woff2',
         weight: '300',
         style: 'normal',
      },
      {
         path: '../fonts/InterDisplay-LightItalic.woff2',
         weight: '300',
         style: 'italic',
      },
      {
         path: '../fonts/InterDisplay-Regular.woff2',
         weight: '400',
         style: 'normal',
      },
      {
         path: '../fonts/InterDisplay-Italic.woff2',
         weight: '400',
         style: 'italic',
      },
      {
         path: '../fonts/InterDisplay-Medium.woff2',
         weight: '500',
         style: 'normal',
      },
      {
         path: '../fonts/InterDisplay-MediumItalic.woff2',
         weight: '500',
         style: 'italic',
      },
      {
         path: '../fonts/InterDisplay-SemiBold.woff2',
         weight: '600',
         style: 'normal',
      },
      {
         path: '../fonts/InterDisplay-SemiBoldItalic.woff2',
         weight: '600',
         style: 'italic',
      },
      {
         path: '../fonts/InterDisplay-Bold.woff2',
         weight: '700',
         style: 'normal',
      },
      {
         path: '../fonts/InterDisplay-BoldItalic.woff2',
         weight: '700',
         style: 'italic',
      },
      {
         path: '../fonts/InterDisplay-ExtraBold.woff2',
         weight: '800',
         style: 'normal',
      },
      {
         path: '../fonts/InterDisplay-ExtraBoldItalic.woff2',
         weight: '800',
         style: 'italic',
      },
      {
         path: '../fonts/InterDisplay-Black.woff2',
         weight: '900',
         style: 'normal',
      },
      {
         path: '../fonts/InterDisplay-BlackItalic.woff2',
         weight: '900',
         style: 'italic',
      },
   ],
});
