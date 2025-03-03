import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className="max-w-[600px] relative mx-auto w-full flex flex-col">
         {children}
      </div>
   );
};

export default Container;
