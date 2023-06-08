import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

const Main = () => {

    const [ETheme, setETheme] = useState(false)
    const themeToggler = { ETheme, setETheme }

    return (
        <ThemeContext.Provider value={themeToggler} >
            <div data-theme={ETheme ? "cupcake" : "dark"} >
                <Navbar />
                <div className="md:min-h-[38rem] min-h-screen" >
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
};

export default Main;