import { Link } from "react-router-dom";

const Navbar = () => {


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link><img className="h-14" src="https://i.ibb.co/NyqZ9fw/logo-removebg-preview.png" alt="Site Logo" /></Link>
            </div>

            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 flex">
                    <Link to="/login"><button className="btn bg-[#247CC6] text-white">Login</button></Link>
                </ul>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;