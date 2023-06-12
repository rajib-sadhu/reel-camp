import { Navigate, useLocation } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="min-h-[10rem] flex items-center justify-center" >
            <LoadingAnimation />
        </div>
    }
    if (user && isInstructor) {
        return children;
    }
    else {
        return <Navigate to="/" state={{ from: location }} replace />
    }
};

export default InstructorRoute;