import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type Props = {
   href: string;
   className?: string;
   spacing?: number;
   centered?: boolean;
};

const LinkTooltip: FC<PropsWithChildren<Props>> = ({
   href,
   children,
   className,
   spacing,
   centered = false,
}) => {
   return (
      <div className="relative group">
         <a href={`https://${href}`} rel="noopener" target="_blank">
            {children}
         </a>
         <span
            className={clsx(
               'absolute text-11 opacity-0 select-none pointer-events-none group-hover:opacity-35 transition-opacity duration-150 ease-linear font-semibold tracking-[-2.25%] w-max',
               className,
               centered && '-translate-x-[50%] left-[50%]'
            )}
            style={{
               bottom: `-${10 + (spacing || 0)}px`,
            }}
         >
            {href}
         </span>
      </div>
   );
};

export default LinkTooltip;
