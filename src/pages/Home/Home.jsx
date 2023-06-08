import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Reel Camp | Home</title>
            </Helmet>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
        </div>
    );
};

export default Home;