import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import ExtraSection from "./ExtraSection/ExtraSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Reel Camp | Home</title>
            </Helmet>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
            <ExtraSection/>
        </div>
    );
};

export default Home;