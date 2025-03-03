import WorkHeader from '@/components/ui/Work/Header';
import WorkPreview from '@/components/ui/Work/Preview';
import WorkPreviewContainer from '@/components/ui/Work/PreviewContainer';

import CTA from '@/components/Assets/Realle/CTA.png';
import Landing from '@/components/Assets/Realle/Landing.webp';
import RealleLogo from '@/components/Assets/Realle/Logo';
import Make from '@/components/Assets/Realle/Make.webp';
import Safe from '@/components/Assets/Realle/Safe.png';

const Realle = () => {
   return (
      <div>
         <WorkHeader
            Logo={RealleLogo}
            description="Dedicated to finding your dream home."
            logoClassName="w-75"
         />
         <WorkPreviewContainer>
            <WorkPreview src={Landing} alt="realle landing" />
            <WorkPreview src={Make} alt="realle make it happen" />
            <WorkPreview src={Safe} alt="realle safe in your hands" />
            <WorkPreview src={CTA} alt="realle cta" />
         </WorkPreviewContainer>
      </div>
   );
};

export default Realle;
