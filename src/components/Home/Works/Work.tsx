import { motion, useScroll, useTransform } from 'framer-motion';
import { useCallback, useRef, useState, type FC } from 'react';

import type { WorkData } from '../../../types';

type Props = WorkData;

const Work: FC<Props & { index: number }> = ({
   index,
   image,
   name,
   year,
   styling,
}) => {
   const ref = useRef<HTMLDivElement>(null);
   const [top, setTop] = useState<number>(0);
   const [height, setHeight] = useState<number>(0);
   const { scrollY } = useScroll();

   const updateValues = useCallback(() => {
      if (ref.current) {
         setTop(ref.current.offsetTop);
         setHeight(ref.current.clientHeight);
      }
   }, [ref]);

   const scale = useTransform(
      scrollY,
      [
         top > 0 ? top - height - 125 : 0,
         top && height > 0 ? top - height / 2 : 0,
         top && height > 0 ? top - height / 2 + 125 : 0,
         top > 0 ? top + height / 2 + 125 : 0,
      ],
      [index === 0 ? 1.0 : 0.9, 1.0, 1.0, 0.9]
   );

   return (
      <motion.div
         ref={ref}
         style={{ scale }}
         className="group will-change-transform"
      >
         <img
            src={`/works/${image}`}
            alt={`${name}'s website`}
            onLoad={updateValues}
            className="w-full rounded-2xl md:rounded-3xl"
         />
         <div className="mt-4 flex items-center justify-between">
            <p
               className={`${styling} py-1 text-base px-3 -ml-3 rounded-full transition duration-150 ease-linear font-normal tracking-tight`}
            >
               {name}
            </p>
            <p className="font-anonymous text-base font-normal text-neutral-400">
               {year}
            </p>
         </div>
      </motion.div>
   );
};

export default Work;
