import useEnrollCart from "../../../hooks/useEnrollCart";
import { AiFillDelete } from 'react-icons/ai';
import { FaStripe } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = () => {

    const [enrollCart, , refetch] = useEnrollCart();

    const handleDelete = (item) => {
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

                fetch(`http://localhost:5000/selectClasses/${item._id}`, {
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
            }
        })
    }

    if (!enrollCart.length) {
        return <div className="text-center" > No classes in enroll cart </div>
    }

    return (
        <div className="" >
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Images</th>
                            <th>Class Names</th>
                            <th>Instructor Names</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Enrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            enrollCart.map((item, index) => <tr key={item._id} >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item?.className}</td>
                                <td>{item?.instructorName}</td>
                                <td>${item?.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-error text-2xl"><AiFillDelete /></button>
                                </td>
                                <td>
                                    <Link to='/dashboard/payment' state={{item:item}} >
                                        <button className="btn btn-success text-2xl"><FaStripe /><span className="text-lg capitalize" >Pay</span></button>
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;