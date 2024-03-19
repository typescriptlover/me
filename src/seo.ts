import type { SEOProps } from './types';

export default function SEO(): SEOProps {
   const title = 'Vignesh Wadhwani';
   const description =
      'Developing modern and performant web applications with neat interfaces, robust experiences, scalability, and the user in mind.';
   const imageUrl = `https://vigy.me/website.png`;
   const imageAlt = `Vignesh Wadhwani's Website`;

   return {
      title,
      description,
      canonical: 'https://vigy.me',
      openGraph: {
         basic: {
            title,
            type: 'website',
            image: imageUrl,
         },
         optional: {
            description,
            locale: 'en',
            siteName: title,
         },
         image: {
            url: imageUrl,
            width: 2800,
            height: 1668,
            type: 'image/png',
            alt: imageAlt,
         },
      },
      twitter: {
         card: 'summary_large_image',
         site: 'https://vigy.me',
         title,
         description,
         image: imageUrl,
         imageAlt,
      },
   };
}
