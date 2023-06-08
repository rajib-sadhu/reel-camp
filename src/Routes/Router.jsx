import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:'',
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'signIn',
                element:<SignIn/>,
            },
            {
                path:'signUp',
                element:<SignUp/>
            }
        ]
    }
])