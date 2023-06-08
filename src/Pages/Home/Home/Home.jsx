
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstractor from '../PopularInstractor/PopularInstractor';
import ExSection from '../ExSection/ExSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstractor></PopularInstractor>
            <ExSection></ExSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;