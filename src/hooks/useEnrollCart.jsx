// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useEnrollCart = () => {

    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');

    const [axiosSecure] = useAxiosSecure();


    const { isLoading, refetch, data: enrollCart = [] } = useQuery({
        queryKey: ['selectClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectClasses?email=${user?.email}`);
            // console.log(res)
            return res.data;
        }
    })

    return [enrollCart, isLoading, refetch];

};

export default useEnrollCart;