
import usePayments from "../../../hooks/usePayments";
import useClass from "../../../hooks/useClass";
import { Helmet } from "react-helmet";



const Enrolled = () => {

    const [payments] = usePayments();
    const totalPriceExpense = payments.reduce((sum, obj) => sum + obj.price, 0);
    const [classes] = useClass();


    const setClassName = (classId) => {
        const findName = classes.find(item => item._id === classId);
        const name = findName?.className
        return name;
    }

    if (!payments.length) {
        return <div className="text-center my-10" > No classes in enrolled </div>
    }

    return (
        <div>
            <Helmet>
                <title>Reel Camp | Enrolled Classes</title>
            </Helmet>

            <div className="stats shadow my-5">
                <div className="stat place-items-center">
                    <div className="stat-title">Total Enrolled Classes</div>
                    <div className="stat-value">{payments.length}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Expenses</div>
                    <div className="stat-value text-secondary">${totalPriceExpense.toFixed(2)}</div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Name</th>
                            <th>Transaction Id</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((item, index) => <tr key={item._id} >
                                <th>{index + 1}</th>
                                <td>{setClassName(item.classId)}</td>
                                <td>{item?.transactionId}</td>
                                <td>${item?.price}</td>
                                <td>{(new Date(item?.date)).toLocaleTimeString()}, {(new Date(item?.date)).toDateString()} </td>
                                <td><button className="btn">Enrolled</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enrolled;