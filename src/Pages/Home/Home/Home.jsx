import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstractor from '../PopularInstractor/PopularInstractor';
import ExSection from '../ExSection/ExSection';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstractor></PopularInstractor>
            <ExSection></ExSection>
            
        </div>
    );
};

export default Home;