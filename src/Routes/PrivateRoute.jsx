
import { Navigate, useLocation } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading ) {
        return <div className="min-h-screen flex items-center justify-center" >
            <LoadingAnimation />
        </div>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to="/signIn" state={{ from: location }} replace />
    }

};

export default PrivateRoute;