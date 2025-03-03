import { FC, PropsWithChildren } from 'react';

const WorkContainer: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className="relative mt-104 max-w-[900px] w-full mx-auto flex flex-col gap-y-96">
         {children}
      </div>
   );
};

export default WorkContainer;
