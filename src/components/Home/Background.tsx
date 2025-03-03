import Image from 'next/image';
import BgMask from '../Backgrounds/BgMask.webp';

const Background = () => {
   return (
      <>
         <div className="absolute inset-0 pointer-events-none select-none bg-gradient-bg opacity-25"></div>
         <div className="absolute inset-0 scale-[1.1] 2xl:scale-100 pointer-events-none select-none mix-blend-overlay">
            <Image
               src={BgMask}
               fill
               className="!w-full !h-full"
               alt="bg mask"
               priority
               quality={50}
            />
         </div>
      </>
   );
};

export default Background;
