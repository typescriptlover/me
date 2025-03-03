import Background from './Background';
import Container from './Container';
import Header from './Header';
import Hero from './Hero';
import Work from './Work';

const Home = () => {
   return (
      <>
         <Background />
         <Container>
            <Header />
            <Hero />
         </Container>
         <Work />
      </>
   );
};

export default Home;
