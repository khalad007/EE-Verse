import { Link } from "react-router-dom";

const Navbar = () => {


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>

            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 flex">
                    <Link to="/login"><button className="btn bg-[#247CC6] ">Login</button></Link>
                </ul>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;