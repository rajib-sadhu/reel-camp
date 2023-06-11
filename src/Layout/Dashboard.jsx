import { Fade } from "react-awesome-reveal";

import { NavLink, Outlet } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import useUserInfo from "../hooks/useUserInfo";



const Dashboard = () => {

    const [userInfo, loading] = useUserInfo();

    if (loading) {
        return <LoadingAnimation />
    }


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col w-full md:px-20">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn drawer-button w-40 lg:hidden my-5 ms-5">Open Sub Menu</label>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <Outlet />
                </Fade>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li className="md:mt-0 mt-20 mb-5" >
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        <img src={userInfo?.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-value text-2xl">
                                <Fade delay={1e3} cascade damping={1e-1}>
                                    {userInfo?.name}
                                </Fade>
                            </div>
                            <div className="stat-title">{userInfo?.email}</div>
                            <div className="stat-desc text-secondary capitalize text-sm"> Role: {userInfo?.role}</div>
                        </div>
                    </li>


                    {
                        userInfo?.role === 'admin' &&
                        <>
                            <li><NavLink to='/dashboard/allUsers' >Manage Users</NavLink></li>
                            <li><NavLink to='/dashboard/manageClasses' >Manage Classes</NavLink></li>
                        </>
                    }
                    {
                        userInfo?.role === 'instructor' &&
                        <>
                            <li><NavLink to='/dashboard/addClass' >Add a class</NavLink></li>
                            <li><NavLink to='/dashboard/myClass' >My Classes</NavLink></li>
                        </>
                    }
                    {
                        userInfo?.role === 'student' &&
                        <>
                            <li><NavLink to='/dashboard/selectClasses' >My Selected Classes</NavLink></li>
                            <li><NavLink to='/dashboard/enrolledClasses' >My Enrolled Classes</NavLink></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
// {/* <div className="px-40 my-10" >
// {/* Dashboard Stats */}
// <div className="stats shadow w-full">

    // <div className="stat">
    //     <div className="stat-figure text-primary">
    //         <FaShoppingCart className="text-3xl" />
    //     </div>
    //     <div className="stat-title">Total Cart</div>
    //     <div className="stat-value text-primary">{enrollCart.length}</div>
    //     {/* <div className="stat-desc">21% more than last month</div> */}
    // </div>

//     <div className="stat">
//         <div className="stat-figure text-info">
//             <GiPayMoney className="text-3xl" />
//         </div>
//         <div className="stat-title">Total Enrolled Classes</div>
//         <div className="stat-value text-info">{payments.length}</div>
//         {/* <div className="stat-desc">21% more than last month</div> */}
//     </div>

//     <div className="stat">
//         <div className="stat-figure">
//             <TbCoinRupee className="text-3xl" />
//         </div>
//         <div className="stat-title">Total Cart Price</div>
//         <div className="stat-value">${totalPriceCart.toFixed(2)}</div>
//         {/* <div className="stat-desc">21% more than last month</div> */}
//     </div>

//     <div className="stat">
//         <div className="stat-figure text-secondary">
//             <TbCoinRupee className="text-3xl" />
//         </div>
//         <div className="stat-title">Total Price Expense</div>
//         <div className="stat-value text-secondary">${totalPriceExpense.toFixed(2)}</div>
//         {/* <div className="stat-desc">21% more than last month</div> */}
//     </div>

    // <div className="stat">
    //     <div className="stat-figure text-secondary">
    //         <div className="avatar online">
    //             <div className="w-16 rounded-full">
    //                 <img src={userInfo?.photoURL} />
    //             </div>
    //         </div>
    //     </div>
    //     <div className="stat-value">
    //         <Fade delay={1e3} cascade damping={1e-1}>
    //             {userInfo?.name}
    //         </Fade>
    //     </div>
    //     <div className="stat-title text-lg">{userInfo?.email}</div>
    //     <div className="stat-desc text-secondary capitalize text-sm"> Role: {userInfo?.role}</div>
    // </div>
// </div>

// {/* Details */}
// <div className="flex justify-center my-10" >
//     <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box text-center mx-auto dashboard-Links">
//         <li><NavLink to='/dashboard/selectClasses' >My Selected Classes</NavLink></li>
//         <li><NavLink to='/dashboard/enrolledClasses' >My Enrolled Classes</NavLink></li>
//         { userInfo?.role==='admin' && <li><NavLink to='/dashboard/allUsers' >All Users</NavLink></li> }
//     </ul>
// </div>
// <div>
//     <Fade delay={1e3} cascade damping={1e-1}>
//         <Outlet />
//     </Fade>
// </div>


// </div> */}