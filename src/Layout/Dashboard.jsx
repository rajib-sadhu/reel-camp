import { Fade } from "react-awesome-reveal";

import { NavLink, Outlet } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import useUserInfo from "../hooks/useUserInfo";
import useEnrollCart from "../hooks/useEnrollCart";
import usePayments from "../hooks/usePayments";

import { FaShoppingCart } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import { TbCoinRupee } from 'react-icons/tb';

const Dashboard = () => {

    const [payments] = usePayments();
    const totalPriceExpense = payments.reduce((sum, obj) => sum + obj.price, 0);

    const [userInfo, loading] = useUserInfo();
    const [enrollCart] = useEnrollCart();
    const totalPriceCart = enrollCart.reduce((sum, obj) => sum + obj.price, 0);

    if (loading) {
        return <LoadingAnimation />
    }


    return (
        <div className="px-40 my-10" >
            {/* Dashboard Stats */}
            <div className="stats shadow w-full">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <FaShoppingCart className="text-3xl" />
                    </div>
                    <div className="stat-title">Total Cart</div>
                    <div className="stat-value text-primary">{enrollCart.length}</div>
                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-info">
                        <GiPayMoney className="text-3xl" />
                    </div>
                    <div className="stat-title">Total Enrolled Classes</div>
                    <div className="stat-value text-info">{payments.length}</div>
                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure">
                        <TbCoinRupee className="text-3xl" />
                    </div>
                    <div className="stat-title">Total Cart Price</div>
                    <div className="stat-value">${totalPriceCart.toFixed(2)}</div>
                    {/* <div className="stat-desc">21% more than last month</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <TbCoinRupee className="text-3xl" />
                    </div>
                    <div className="stat-title">Total Price Expense</div>
                    <div className="stat-value text-secondary">${totalPriceExpense.toFixed(2)}</div>
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
                    <div className="stat-value">
                        <Fade delay={1e3} cascade damping={1e-1}>
                            {userInfo?.name}
                        </Fade>
                    </div>
                    <div className="stat-title text-lg">{userInfo?.email}</div>
                    <div className="stat-desc text-secondary capitalize text-sm"> Role: {userInfo?.role}</div>
                </div>
            </div>

            {/* Details */}
            <div className="flex justify-center my-10" >
                <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box text-center mx-auto dashboard-Links">
                    <li><NavLink to='/dashboard/selectClasses' >My Selected Classes</NavLink></li>
                    <li><NavLink to='/dashboard/enrolledClasses' >My Enrolled Classes</NavLink></li>
                    { userInfo?.role==='admin' && <li><NavLink to='/dashboard/allUsers' >All Users</NavLink></li> }
                </ul>
            </div>
            <div>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <Outlet />
                </Fade>
            </div>


        </div>
    );
};

export default Dashboard;