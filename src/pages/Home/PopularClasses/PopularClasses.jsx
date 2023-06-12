
import SectionTitle from "../../../components/SectionTitle";
import ClassCard from "../../../components/ClassCard/ClassCard";
import useClass from "../../../hooks/useClass";
import LoadingAnimation from "../../../components/LoadingAnimation";



const PopularClasses = () => {

    const [classes, loading] = useClass();
    const sortClasses = classes.sort((a,b) => b.enrolled - a.enrolled);
    console.log(sortClasses)
    const sliceClasses = sortClasses.slice(0,6);


    return (
        <div className="mb-10">
            <SectionTitle heading="Popular Classes" subHeading="Explore our classes" />
            {
                loading && <LoadingAnimation/>
            }
            <div className="grid md:grid-cols-2 grid-cols-1 md:px-32 gap-10 mt-10 px-3">
                {
                    sliceClasses.map(item => <ClassCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularClasses;