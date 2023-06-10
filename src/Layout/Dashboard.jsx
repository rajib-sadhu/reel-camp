
import { NavLink, Outlet } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import useUserInfo from "../hooks/useUserInfo";
import useEnrollCart from "../hooks/useEnrollCart";

const Dashboard = () => {


    const [userInfo, loading] = useUserInfo();
    const [enrollCart] = useEnrollCart();
    const totalPrice = enrollCart.reduce((sum,obj)=> sum + obj.price ,0);

    if (loading) {
        return <LoadingAnimation />
    }


    return (
        <div className="px-40 my-10" >
            {/* Dashboard Stats */}
            <div className="stats shadow w-full">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Cart</div>
                    <div className="stat-value text-primary">{ enrollCart.length }</div>
                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Enrolled Classes</div>
                    <div className="stat-value text-primary">0</div>
                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Price</div>
                    <div className="stat-value text-secondary">${totalPrice.toFixed(2)}</div>
                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={userInfo?.photoURL} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">{userInfo?.name}</div>
                    <div className="stat-title text-lg">{userInfo?.email}</div>
                    <div className="stat-desc text-secondary capitalize text-sm"> Role: {userInfo?.role}</div>
                </div>
            </div>

            {/* Details */}
            <div className="flex justify-center my-10" >
                <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box text-center mx-auto dashboard-Links">
                    <li><NavLink to='/dashboard/selectClasses' >My Selected Classes</NavLink></li>
                    <li><NavLink to='/dashboard/enrolledClasses' >My Enrolled Classes</NavLink></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>


        </div>
    );
};

export default Dashboard;