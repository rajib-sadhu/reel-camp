import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ReelCamp | Home</title>
            </Helmet>
            <Banner/>
        </div>
    );
};

export default Home;