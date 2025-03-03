import { FC } from 'react';

type Props = {
   className?: string;
};

const XIcon: FC<Props> = ({ className }) => {
   return (
      <svg
         viewBox="0 0 10 10"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className={className}
      >
         <g clipPath="url(#clip0_7_20)">
            <path
               d="M7.87542 0.480408H9.40875L6.05875 4.30957L10 9.51916H6.91417L4.4975 6.35916L1.73167 9.51916H0.1975L3.78083 5.42332L0 0.480824H3.16417L5.34875 3.36916L7.87542 0.480408ZM7.3375 8.60166H8.18708L2.7025 1.34999H1.79083L7.3375 8.60166Z"
               fill="currentColor"
            />
         </g>
      </svg>
   );
};
export default XIcon;
