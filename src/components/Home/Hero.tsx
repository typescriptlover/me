import bookPerlin from '@/components/Backgrounds/BookPerlin.webp';
import ChatIcon from '../Icons/ChatIcon';
import LinkTooltip from '../LinkTooltip';

const Hero = () => {
   return (
      <div className="mt-72">
         <h1 className="font-medium text-balance tracking-[-.01em] text-24">
            Beautifully built software solutions that drive growth
         </h1>
         <p className="mt-18 text-16 text-neutral-600 leading-[150%]">
            I&apos;m a professional developer & designer with over 4 years of
            experience—
            <br />
            creating high-quality, meaningful and user centered software on the
            web.
         </p>
         <div className="mt-32 flex items-center gap-x-8">
            <LinkTooltip
               href="cal.com/vigyme/book"
               spacing={12}
               className="left-[10px]"
            >
               <div className="select-none relative bg-gradient-to-l font-semibold pt-8 pb-9 px-15 transition duration-150 ease-linear will-change-transform hover:scale-[0.95] hover:shadow-md rounded-full tracking-[-2.5%] text-white text-16 from-[#A855F7] from-0% to-75% to-[#F97316] overflow-hidden">
                  <span className="relative z-10">Book a call</span>
                  <div
                     className="absolute inset-0 scale-[15] z-0 opacity-50 mix-blend-overlay"
                     style={{
                        backgroundImage: `url(${bookPerlin.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                     }}
                  />
               </div>
            </LinkTooltip>
            <LinkTooltip
               href="cal.com/vigyme/book"
               spacing={12}
               className="left-[10px]"
            >
               <div className="select-none bg-black inline-flex items-center text-white font-semibold pt-8 pb-9 px-15 transition duration-150 ease-linear will-change-transform hover:scale-[0.95] hover:shadow-md rounded-full tracking-[-2.5%] text-16">
                  Chat
                  <ChatIcon className="text-white size-15 ml-10" />
               </div>
            </LinkTooltip>
         </div>
      </div>
   );
};

export default Hero;
