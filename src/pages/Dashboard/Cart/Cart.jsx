import useEnrollCart from "../../../hooks/useEnrollCart";
import {AiFillDelete} from 'react-icons/ai';
import {FaStripe} from 'react-icons/fa';


const Cart = () => {

    const [enrollCart] = useEnrollCart();

    const handleDelete = () =>{

    }

    if(!enrollCart.length){
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
                            <th>Names</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Enrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            enrollCart.map((item, index )=> <tr key={item._id} >
                                <th>
                                    {index+1}
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
                                <td>${item?.price}</td>
                                <td>
                                    <button onClick={handleDelete} className="btn btn-error text-2xl"><AiFillDelete/></button>
                                </td>
                                <td>
                                    <button className="btn btn-success text-2xl"><FaStripe/><span className="text-lg capitalize" >Pay</span></button>
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