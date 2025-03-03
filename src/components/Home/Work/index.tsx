import WorkContainer from '@/components/ui/Work/Container';

import Bleed from './Bleed';
import Crypto from './Crypto';
import Realle from './Realle';

const Work = () => {
   return (
      <WorkContainer>
         <Bleed />
         <Crypto />
         <Realle />
      </WorkContainer>
   );
};

export default Work;
