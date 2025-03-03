import WorkHeader from '@/components/ui/Work/Header';
import WorkPreview from '@/components/ui/Work/Preview';
import WorkPreviewContainer from '@/components/ui/Work/PreviewContainer';

import Dashboard from '@/components/Assets/Crypto/Dashboard.png';
import Landing from '@/components/Assets/Crypto/Landing.png';
import CryptoLogo from '@/components/Assets/Crypto/Logo';

const Crypto = () => {
   return (
      <div>
         <WorkHeader
            Logo={CryptoLogo}
            description="Increasing revenue with the easiest crypto payment integration."
            logoClassName="w-70 invert"
         />
         <WorkPreviewContainer>
            <WorkPreview src={Landing} alt="cypto landing" />
            <WorkPreview src={Dashboard} alt="cypto dashboard" />
         </WorkPreviewContainer>
      </div>
   );
};

export default Crypto;
