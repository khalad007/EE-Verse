import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Navbar2 from "../Pages/Shared/Navbar/Navbar2";
import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
            </div>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            
            <div className='max-w-6xl mx-auto'>
                <Footer></Footer> 
            </div>
        </div>
    );
};

export default Root;