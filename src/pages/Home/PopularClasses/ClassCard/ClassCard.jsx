
const ClassCard = ({ item }) => {
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
                    <button className="btn btn-primary">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;