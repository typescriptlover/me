export type TwitterCardType =
   | 'summary'
   | 'summary_large_image'
   | 'app'
   | 'player';

export type Link = Omit<HTMLLinkElement, 'sizes'> & {
   prefetch: boolean;
   crossorigin: string;
   sizes: string;
};

export type Meta = HTMLMetaElement & {
   property: string;
};

export type SEOProps = {
   title?: string;
   titleTemplate?: string;
   titleDefault?: string;
   charset?: string;
   description?: string;
   canonical?: URL | string;
   nofollow?: boolean;
   noindex?: boolean;
   languageAlternates?: {
      href: URL | string;
      hrefLang: string;
   }[];
   openGraph?: {
      basic: {
         title: string;
         type: string;
         image: string;
         url?: URL | string;
      };
      optional?: {
         audio?: string;
         description?: string;
         determiner?: string;
         locale?: string;
         localeAlternate?: string[];
         siteName?: string;
         video?: string;
      };
      image?: {
         url?: URL | string;
         secureUrl?: URL | string;
         type?: string;
         width?: number;
         height?: number;
         alt?: string;
      };
      article?: {
         publishedTime?: string;
         modifiedTime?: string;
         expirationTime?: string;
         authors?: string[];
         section?: string;
         tags?: string[];
      };
   };
   twitter?: {
      card?: TwitterCardType;
      site?: string;
      creator?: string;
      title?: string;
      description?: string;
      image?: URL | string;
      imageAlt?: string;
   };
   extend?: {
      link?: Partial<Link>[];
      meta?: Partial<Meta>[];
   };
   surpressWarnings?: boolean;
};

export type Config = {
   seo: SEOProps;
};

export type WorkData = {
   image: string;
   name: string;
   year: number;
   styling: string;
};
