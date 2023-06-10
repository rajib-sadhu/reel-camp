
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import LoadingAnimation from "../components/LoadingAnimation";



const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="min-h-[10rem] flex items-center justify-center" >
            <LoadingAnimation/>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    else {
        return <Navigate to="/" state={{ from: location }} replace />
    }

};

export default AdminRoute;