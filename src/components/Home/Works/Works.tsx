import { works } from '../../../data/works';
import Work from './Work';

const Works = () => {
   return (
      <div className="mt-32 sm:mt-36 lg:mt-44 grid grid-cols-1 lg:grid-cols-3">
         <div className="hidden lg:block lg:col-span-1"></div>
         <div className="col-span-1 lg:col-span-2 flex flex-col gap-y-14">
            {works.map((work, workIndex) => (
               <Work key={workIndex} index={workIndex} {...work} />
            ))}
         </div>
      </div>
   );
};

export default Works;
