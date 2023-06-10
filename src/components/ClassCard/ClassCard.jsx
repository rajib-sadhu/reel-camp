import useAuth from "../../hooks/useAuth";
import useClass from "../../hooks/useClass";

const ClassCard = ({ item }) => {

    const { user } = useAuth();
    const [,, refetch] = useClass();
    const handleEnroll = () => {

    }


    return (
        <div className="card card-side bg-base-100 shadow-xl h-[18rem]">
            <figure><img className="object-cover w-[20rem] h-full" src={item?.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item?.className}</h2>
                <p>
                    <p>Instructor: {item?.instructorName} </p>
                    <p>Price: ${item?.price} </p>
                    <p>Available Seats: {item?.availableSeats} </p>
                </p>
                <div className="card-actions justify-end">
                    <button onClick={handleEnroll} className="btn btn-primary">Add Enroll Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;