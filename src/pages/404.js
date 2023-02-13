import { Analytics, SEO } from '../common/utils';
import Navbar from '@/components/navbar/Navbar';
import { Newsletter } from '@/components/misc';
import Footer from '@/components/footer/Footer';

const FourOhFour = () => {
  return (
    <>
      <SEO />
      <Analytics />

      <Navbar />
      <main>
        <center> 404 <br /> <h3> Not Found ! </h3> <br /> <a href='/'> Go Home</a></center>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};


export default FourOhFour;
