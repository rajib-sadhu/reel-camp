import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    const handleRole = async (user) => {

        const { value: role } = await Swal.fire({
            title: 'Select user role',
            input: 'select',
            inputOptions: {
                'admin': 'admin',
                'instructor': 'instructor',
                'student': 'student'
            },
            inputPlaceholder: 'Select role',
            showCancelButton: true,
            width:'36rem'
            ,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    fetch(`http://localhost:5000/users/admin/${user._id}?role=${value}`, {
                        method: 'PATCH'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('response data', data);
                            if (data.modifiedCount) {
                                refetch();
                                resolve();
                            }
                        })
                })
            }
        })

        if (role) {
            Swal.fire(`You selected: ${role}`)
        }
    }


    const handleDelete = (user) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
                    .catch(err => console.log(err))
            }
        })

    }



    return (
        <div>
            <Helmet>
                <title>Reel Camp | All Users</title>
            </Helmet>
            <div>
            <div className="stats shadow my-5">
                <div className="stat place-items-center">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{users.length}</div>
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
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td> {user?.name} </td>
                                    <td> {user?.email}</td>
                                    <td className="text-start">
                                        <button onClick={() => handleRole(user)} className="btn">
                                            {user?.role}
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className="btn btn-error hover:bg-red-700 text-white"><FaTrash /></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>


            </div>
        </div>
    );
};

export default AllUsers;