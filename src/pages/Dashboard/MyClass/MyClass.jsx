import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyClass = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery({
        queryKey: ['myClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructor/myClass?email=${user.email}`);
            console.log(res.data)
            return res.data;
        }
    });

    const totalEnrolled = classes.reduce((count, item) => count + item.enrolled , 0);

    return (
        <div>
            <div>
                <div className="stats shadow my-5">
                    <div className="stat place-items-center">
                        <div className="stat-title">Total My Classes</div>
                        <div className="stat-value">{classes.length}</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Total Student Enrolled in all class</div>
                        <div className="stat-value text-secondary">{totalEnrolled}</div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Available Seat</th>
                                <th>Status</th>
                                <th>Enrolled Students</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                classes.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td> {item?.className} </td>
                                    <td> {item?.availableSeats}</td>
                                    <td> <button className={`btn 
                                    ${item?.instructorStatus == 'active' ? 'btn-accent' : item?.instructorStatus == 'pending' ? 'btn-warning' : 'btn-error'} `}
                                    >{item?.instructorStatus}</button> </td>

                                    <td className="text-center"> {item?.enrolled || 0}</td>
                                    <td> {item?.adminFeedback}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;