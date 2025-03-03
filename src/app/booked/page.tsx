import Booked from '@/components/Booked';
import { Suspense } from 'react';

const BookedPage = () => {
   return (
      <Suspense>
         <Booked />
      </Suspense>
   );
};

export default BookedPage;
