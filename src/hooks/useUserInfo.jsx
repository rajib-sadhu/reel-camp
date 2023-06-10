import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useUserInfo = () => {

    const {user} = useAuth();

    const { data: userInfo = [], isLoading: loading } = useQuery({
        queryKey: ['userInfo'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/info?email=${user?.email}`);
            // console.log(res)
            return res.json();
        }
    })

    return [userInfo, loading];
};

export default useUserInfo;