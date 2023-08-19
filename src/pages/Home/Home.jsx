import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import ExtraSection from "./ExtraSection/ExtraSection";
import Difference from "./Difference/Difference";
import Reviews from "./Reviews/Reviews";
import JoinUs from "./JoinUs/JoinUs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Reel Camp | Home</title>
            </Helmet>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <ExtraSection />
            <Difference />
            <JoinUs/>
            <Reviews />
        </div>
    );
};

export default Home;