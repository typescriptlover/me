import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type Props = {
   first?: boolean;
   src: StaticImageData;
   alt: string;
   priority?: boolean;
   className?: string;
};

const WorkPreview: FC<Props> = ({
   first = false,
   src,
   alt,
   priority = false,
   className,
}) => {
   return (
      <div
         className={clsx(
            'w-full rounded-12 flex items-center justify-center',
            first
               ? 'px-75 pb-75 bg-gradient-to-b from-transparent from-50% to-100% to-neutral-100'
               : 'p-75 bg-neutral-100'
         )}
      >
         <Image
            src={src}
            alt={alt}
            className={clsx(
               '!rounded-12',
               className ? className : '!w-full !h-auto'
            )}
            quality={85}
            placeholder="blur"
            priority={priority}
            loading={priority ? undefined : 'lazy'}
         />
      </div>
   );
};

export default WorkPreview;
