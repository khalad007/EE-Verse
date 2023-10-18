import { Link } from "react-router-dom";


const Navbar2 = () => {
    return (
        <div className="flex justify-center bg-[#247CC6] h-14"> 
            <ul className="flex gap-5 items-center justify-center ">
                <Link to='/'><button className="btn border-none bg-[#247CC6] text-white">Home</button></Link>
                
                
            </ul>
        </div>
    );
};

export default Navbar2;