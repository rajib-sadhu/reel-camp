import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ClassCard from "./ClassCard/ClassCard";

const PopularClasses = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setClasses(data)
            })
    }, [])

    return (
        <div className="mb-10">
            <SectionTitle heading="Popular Classes" subHeading="Explore our classes" />
            <div className="grid md:grid-cols-2 grid-cols-1 px-32 gap-10 mt-10">
                {
                    classes.map(item=><ClassCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularClasses;