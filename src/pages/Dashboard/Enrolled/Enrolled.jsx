
import usePayments from "../../../hooks/usePayments";
import useClass from "../../../hooks/useClass";



const Enrolled = () => {

    const [payments] = usePayments();
    const [classes] = useClass();


    const setClassName = (classId) => {
        const findName = classes.find(item => item._id === classId);
        const name = findName?.className
        return name;
    }

    return (
        <div>
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