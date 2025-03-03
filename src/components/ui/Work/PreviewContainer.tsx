import { FC, PropsWithChildren } from 'react';

const WorkPreviewContainer: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className="relative mt-32 flex flex-col gap-y-16">{children}</div>
   );
};

export default WorkPreviewContainer;
