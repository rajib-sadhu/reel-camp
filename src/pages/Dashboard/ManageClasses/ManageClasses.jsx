import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";


const ManageClasses = () => {

    const [feedback, setFeedback] = useState('');
    const [itemId, setItemId] = useState('');

    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes/check')
            // console.log(res.data)
            return res.data;
        }
    })

    const totalClassesPrice = classes.reduce((sum, item) => sum + item.price, 0);
    const activeClasses = classes.reduce((count, item) => {
        if (item.instructorStatus.toLowerCase() == 'active') {
            return count + 1;
        }
        return count;
    }, 0);


    const declinedClasses = classes.reduce((count, item) => {
        if (item.instructorStatus.toLowerCase() == 'decline') {
            return count + 1;
        }
        return count;
    }, 0);


    const pendingClasses = classes.reduce((count, item) => {
        if (item.instructorStatus.toLowerCase() == 'pending') {
            return count + 1;
        }
        return count;
    }, 0);


    const handleClassStatus = async (item, status) => {

        const res = await axiosSecure.patch(`/classes/admin/status/${item._id}?status=${status}`);
        console.log(res.data)
        if (res.data.modifiedCount) {
            refetch();
            Swal.fire(
                `${status}`,
                `This class is ${status} now!`,
                'success'
            )
        }
    }

    const handleFeedback = async (id) => {
        console.log(id)
        const res = await axios.patch(`http://localhost:5000/classes/admin/feedback/${itemId}`, { feedback: feedback });
        if (res.data.modifiedCount) {
            refetch();
            setFeedback('');
            setItemId('');
            Swal.fire(
                `Feedback send`,
                `This class is have feedback now!`,
                'success'
            )
        }

    }

    return (
        <div className="mb-20">
            <Helmet>
                <title>Reel Camp | Enrolled Classes</title>
            </Helmet>

            <div className="stats shadow my-5">
                <div className="stat place-items-center">
                    <div className="stat-title">Total Classes</div>
                    <div className="stat-value">{classes.length}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Classes Value</div>
                    <div className="stat-value text-secondary">${totalClassesPrice}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Active Classes</div>
                    <div className="stat-value text-info">{activeClasses}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Decline Classes</div>
                    <div className="stat-value">{declinedClasses}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Pending Classes</div>
                    <div className="stat-value text-error">{pendingClasses}</div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8" >
                {
                    classes.map((item) => <div key={item._id} className="rounded-xl overflow-hidden bg-accent text-black">

                        <div className=" relative" >
                            <img src={item?.image || 'https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png'} className="h-[15rem] w-full object-cover" alt="" />
                            <div className="absolute z-20 -bottom-[40px] left-[20px]">
                                <div className="flex items-end gap-2">
                                    <img src={item?.instructorImage} className="w-20 h-20 object-cover rounded-[50%] border-4" alt="" />
                                    <h1 className="font-semibold mb-2 text-lg" ><span className="text-xs" >Instructor:</span> {item?.instructorName}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 p-5" >
                            <h4 className="text-xl font-semibold" ><span className="text-sm" >Class Name:</span> <br /> {item?.className} </h4>
                            <div className="mt-2 font-medium" >
                                <h4 className="text-sm" ><span className="" >Email:</span> {item?.instructorEmail} </h4>
                                <h4 className="text-sm" ><span className="" >Available Seats:</span> {item?.availableSeats} </h4>
                                {
                                    item?.category == 'NA' || <h4 className="text-sm" ><span className="" >Category:</span> {item?.category} </h4>
                                }
                                <h4 className="text-sm" ><span className="" >Status:</span> {item?.instructorStatus} </h4>

                            </div>
                            <div className="mt-5 px-5 flex justify-between items-center">
                                <div className="indicator">
                                    <span className="indicator-item indicator-start badge badge-secondary">Price</span>
                                    <div className="text-2xl font-bold">${item?.price.toFixed(2)}</div>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-2" >
                                        <button onClick={() => handleClassStatus(item, 'active')} disabled={item?.instructorStatus == 'denied'} className="btn btn-xs text-white bg-green-600" >Approved</button>
                                        <button onClick={() => handleClassStatus(item, 'denied')} disabled={item?.instructorStatus == 'active' || item?.instructorStatus == 'denied'} className="btn btn-xs text-white bg-red-600" >Denied</button>
                                        <a onClick={() => setItemId(item._id)} className="btn btn-xs" href="#my_modal_8">Send Feedback</a>
                                    </div>
                                    {/* Feedback Modal Elements */}
                                    <div className="modal text-black" id="my_modal_8">
                                        <div className="modal-box bg-white">
                                            <h3 className="font-bold text-lg mb-2">Send Feedback!</h3>
                                            <textarea className="w-full bg-white border-2 p-2" rows="5"
                                                value={feedback} onChange={(e) => setFeedback(e.target.value)}
                                            ></textarea>
                                            <div className="modal-action">
                                                <a onClick={() => handleFeedback()} href="#" className="btn">Send</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default ManageClasses;