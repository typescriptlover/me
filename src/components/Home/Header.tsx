import Icon from '../Icon';
import LayersIcon from '../Icons/LayersIcon';
import XIcon from '../Icons/XIcon';
import LinkTooltip from '../LinkTooltip';

const Header = () => {
   return (
      <div className="flex items-end justify-between">
         <div className="select-none">
            <Icon />
            <p className="mt-8 leading-[115%] text-16 font-medium tracking-[-2.25%] text-transparent bg-gradient-brand inline-block bg-clip-text">
               vignesh
               <br />
               wadhwani
            </p>
         </div>
         <div className="flex items-center gap-x-8">
            <LinkTooltip href="layers.to/0" spacing={12} className="right-0">
               <button className="size-35 bg-black/[0.03] hover:bg-black/5 transition duration-150 ring-2 ring-black/[0.03] hover:ring-transparent ease-linear group rounded-full flex items-center justify-center">
                  <LayersIcon className="text-black size-15 transition duration-150 group-hover:scale-[0.9] will-change-transform ease-linear group-hover:opacity-100 opacity-65" />
               </button>
            </LinkTooltip>
            <LinkTooltip href="x.com/vigyme" spacing={12} className="right-0">
               <button className="size-35 bg-black/[0.03] hover:bg-black/5 transition duration-150 ring-2 ring-black/[0.03] hover:ring-transparent ease-linear group rounded-full flex items-center justify-center">
                  <XIcon className="text-black size-15 transition duration-150 group-hover:scale-[0.9] will-change-transform ease-linear group-hover:opacity-100 opacity-65" />
               </button>
            </LinkTooltip>
         </div>
      </div>
   );
};

export default Header;
