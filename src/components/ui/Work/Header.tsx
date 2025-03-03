import clsx from 'clsx';
import { FC } from 'react';

type Props = {
   Logo: FC<{ className?: string }>;
   description: string;
   logoClassName?: string;
};

const WorkHeader: FC<Props> = ({ Logo, description, logoClassName }) => {
   return (
      <div className="px-[150px]">
         <Logo className={clsx('ml-5 h-auto inline-block', logoClassName)} />
         <p className="mt-8 text-neutral-500 text-14 font-normal">
            {description}
         </p>
      </div>
   );
};

export default WorkHeader;
