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

    const handleRole = async (user, value) => {

        const res = await axiosSecure.patch(`https://reel-camp-server.vercel.app/users/admin/${user._id}?role=${value}`);

        if (res.data.modifiedCount){
            refetch();
            Swal.fire(
                `User now ${user?.role} to ${value}`,
                'User role changed!',
                'success'
            )
        }


        //     const { value: role } = await Swal.fire({
        //         title: 'Select user role',
        //         input: 'select',
        //         inputOptions: {
        //             'admin': 'admin',
        //             'instructor': 'instructor',
        //             'student': 'student'
        //         },
        //         inputPlaceholder: 'Select role',
        //         showCancelButton: true,
        //         width: '36rem'
        //         ,
        //         inputValidator: (value) => {
        //             return new Promise((resolve) => {
        //                 fetch(`https://reel-camp-server.vercel.app/users/admin/${user._id}?role=${value}`, {
        //                     method: 'PATCH'
        //                 })
        //                     .then(res => res.json())
        //                     .then(data => {
        //                         console.log('response data', data);
        //                         if (data.modifiedCount) {
        //                             refetch();
        //                             resolve();
        //                         }
        //                     })
        //             })
        //         }
        //     })

        //     if (role) {
        //         Swal.fire(`You selected: ${role}`)
        //     }
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

                fetch(`https://reel-camp-server.vercel.app/users/${user._id}`, {
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

    const totalStudent = users.reduce((count, item) => {
        if (item.role == 'student') {
            return count + 1;
        }
        return count;
    }, 0);


    const totalInstructors = users.reduce((count, item) => {
        if (item.role == 'instructor') {
            return count + 1;
        }
        return count;
    }, 0);


    const totalAdmin = users.reduce((count, item) => {
        if (item.role == 'admin') {
            return count + 1;
        }
        return count;
    }, 0);



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

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Students</div>
                        <div className="stat-value text-secondary">{totalStudent}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Instructors</div>
                        <div className="stat-value text-info">{totalInstructors}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Admins</div>
                        <div className="stat-value">{totalAdmin}</div>
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
                                <th>Delete</th>
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
                                    <td><span className="badge badge-outline" >{user?.role}</span></td>
                                    <td className="text-start space-x-2">
                                        <button disabled={user?.role == 'admin'} onClick={() => handleRole(user, 'admin')} className="btn">
                                            Admin
                                        </button>
                                        <button disabled={user?.role == 'instructor' || user?.role == 'admin'} onClick={() => handleRole(user, 'instructor')} className="btn">
                                            Instructor
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