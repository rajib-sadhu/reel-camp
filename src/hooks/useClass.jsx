import { useQuery } from "@tanstack/react-query";

const useClass = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://reel-camp-server.vercel.app/classes');
            // console.log(res)
            return res.json();
        }
    })

    return [classes, loading, refetch];
};

export default useClass;