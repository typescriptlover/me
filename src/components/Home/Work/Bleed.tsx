import WorkHeader from '@/components/ui/Work/Header';
import WorkPreview from '@/components/ui/Work/Preview';
import WorkPreviewContainer from '@/components/ui/Work/PreviewContainer';

import Countless from '@/components/Assets/Bleed/Countless.webp';
import CTA from '@/components/Assets/Bleed/CTA.png';
import Landing from '@/components/Assets/Bleed/Landing.png';
import ModerationSecurity from '@/components/Assets/Bleed/ModerationSecurity.png';
import Music from '@/components/Assets/Bleed/Music.png';

const Bleed = () => {
   return (
      <div>
         <WorkHeader
            Logo={() => (
               <p className="font-semibold inline-block text-19 text-transparent bg-clip-text bg-gradient-to-br from-0% via-55% to-75% from-[#92C8D2] via-[#202C2F] to-[#4B676C]">
                  Bleed
               </p>
            )}
            description="All-in-one app for over 20+ million users worldwide."
            notSVG
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
