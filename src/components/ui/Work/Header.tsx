import clsx from 'clsx';
import { FC } from 'react';

type Props = {
   Logo: FC<{ className?: string }>;
   description: string;
   logoClassName?: string;
   notSVG?: boolean;
};

const WorkHeader: FC<Props> = ({
   Logo,
   description,
   logoClassName,
   notSVG = false,
}) => {
   return (
      <div className="px-[150px]">
         <Logo className={clsx('ml-5 h-auto inline-block', logoClassName)} />
         <p
            className={clsx(
               'text-neutral-500 text-14 font-normal',
               notSVG ? 'mt-4' : 'mt-8'
            )}
         >
            {description}
         </p>
      </div>
   );
};

export default WorkHeader;
