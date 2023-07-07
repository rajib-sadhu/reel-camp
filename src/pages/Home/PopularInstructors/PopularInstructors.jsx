
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";


const PopularInstructors = () => {

    const { data: instructor = [] } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await axios('https://reel-camp-server.vercel.app/instructor');
            const topData = res.data.slice(0, 6);
            return topData;
        }
    });

    return (
        <div className="my-20">
            <SectionTitle heading="Popular Instructors" subHeading="Our best faculties" />
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 my-10 md:px-20 px-3' >
                {
                    instructor.map(item => <div key={item._id} className="card md:w-96 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src={item?.photoURL} alt="Shoes" className="rounded-xl object-cover md:h-[20rem] h-[12rem] object-top w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item?.name}</h2>
                            <p>Email: {item?.email} </p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;