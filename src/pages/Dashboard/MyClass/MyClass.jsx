import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const MyClass = () => {

    const { user } = useAuth()

    const { data: classes = [] } = useQuery({
        queryKey: ['myClasses'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes/instructor?email=${user.email}`);
            console.log(res)
            return res.json();
        }
    })

    return (
        <div>
            <div>
                <div className="stats shadow my-5">
                    <div className="stat place-items-center">
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value">{classes.length}</div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className="text-start" >Role</th>
                                <th>Action</th>
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
                                    ${item?.instructorStatus=='active'?'btn-accent':item?.instructorStatus=='pending'?'btn-warning':'btn-error'} `}
                                     >{item?.instructorStatus}</button> </td>

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