import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Enrolled from "../pages/Dashboard/Enrolled/Enrolled";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Dashboard/Payment/Payment";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: '',
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'signIn',
                element: <SignIn />,
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard /></PrivateRoute>,
                children: [
                    {
                        path: 'selectClasses',
                        element: <Cart />
                    },
                    {
                        path: 'enrolledClasses',
                        element: <Enrolled />
                    },
                    {
                        path: 'payment',
                        element: <Payment />
                    }
                ]
            }
        ]
    }
])