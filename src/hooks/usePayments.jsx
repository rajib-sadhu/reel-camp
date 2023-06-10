
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePayments = () => {

    const {user} = useAuth();

    const [axiosSecure] = useAxiosSecure();

    const { isLoading, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`);
            // console.log(res)
            return res.data;
        }
    })


    return [payments, isLoading];
};

export default usePayments;