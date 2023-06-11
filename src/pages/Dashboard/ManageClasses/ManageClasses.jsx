import { Helmet } from "react-helmet";
import useClass from "../../../hooks/useClass";


const ManageClasses = () => {

    const [classes] = useClass();

    console.log(classes)

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
                    <div className="stat-value text-secondary">${totalClassesPrice.toFixed(2)}</div>
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
                                <h4 className="text-sm" ><span className="" >category:</span> {item?.category} </h4>
                            </div>
                            <div className="mt-5 px-5 flex justify-between items-center">
                                <div className="indicator">
                                    <span className="indicator-item indicator-start badge badge-secondary">Price</span>
                                    <div className="text-2xl font-bold">${item?.price}</div>
                                </div>
                                <div>
                                    {


                                        <div className="flex flex-col gap-2" >
                                            <button disabled={item?.instructorStatus.toLowerCase() == 'deny'} className="btn btn-xs text-white bg-green-600" >Approved</button>
                                            <button disabled={item?.instructorStatus.toLowerCase() == 'active'} className="btn btn-xs text-white bg-red-600" >Denied</button>
                                            <button className="btn btn-xs " >Feedback</button>
                                        </div>
                                    }


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