import WorkHeader from '@/components/ui/Work/Header';
import WorkPreview from '@/components/ui/Work/Preview';
import WorkPreviewContainer from '@/components/ui/Work/PreviewContainer';

import Countless from '@/components/Assets/Bleed/Countless.png';
import CTA from '@/components/Assets/Bleed/CTA.png';
import Landing from '@/components/Assets/Bleed/Landing.png';
import ModerationSecurity from '@/components/Assets/Bleed/ModerationSecurity.png';
import Music from '@/components/Assets/Bleed/Music.png';

const Bleed = () => {
   return (
      <div>
         <WorkHeader
            Logo={() => <p>Bleed</p>}
            description="All-in-one app for over 20+ million users worldwide."
            logoClassName="w-60 invert"
         />
         <WorkPreviewContainer>
            <WorkPreview priority first src={Landing} alt="bleed landing" />
            <WorkPreview
               src={ModerationSecurity}
               alt="bleed moderation & security"
            />
            <WorkPreview src={Music} alt="bleed music" />
            <WorkPreview src={Countless} alt="bleed countless more" />
            <WorkPreview src={CTA} alt="bleed call to action" />
         </WorkPreviewContainer>
      </div>
   );
};

export default Bleed;
