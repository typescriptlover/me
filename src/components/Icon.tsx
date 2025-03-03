'use client';

import { motion } from 'framer-motion';

const Icon = () => {
   return (
      <motion.svg
         width="25"
         height="25"
         viewBox="0 0 20 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         whileHover={{
            rotate: 360,
            transition: { duration: 3, ease: 'linear', repeat: Infinity },
         }}
         initial={{ rotate: 0 }}
         transition={{
            duration: 0.25,
            ease: 'linear',
         }}
      >
         <rect
            x="7.69231"
            y="20"
            width="20"
            height="4.61538"
            rx="2.30769"
            transform="rotate(-90 7.69231 20)"
            fill="#22C55E"
         />
         <rect
            y="7.69232"
            width="20"
            height="4.61538"
            rx="2.30769"
            fill="#FF0000"
         />
         <rect
            x="4.56071"
            y="1.29712"
            width="20"
            height="4.61538"
            rx="2.30769"
            transform="rotate(45 4.56071 1.29712)"
            fill="#A855F7"
         />
         <rect
            x="1.29713"
            y="15.4393"
            width="20"
            height="4.61538"
            rx="2.30769"
            transform="rotate(-45 1.29713 15.4393)"
            fill="#F97316"
         />
         <circle cx="9.84616" cy="9.84615" r="3.07692" fill="white" />
      </motion.svg>
   );
};

export default Icon;
