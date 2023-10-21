import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CurtCard from "./CurtCard";


const MyCart = () => {

    const curtsLoaded = useLoaderData();

    const [curts, setCurts] = useState(curtsLoaded)


    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center my-20">Your <span className="text-[#247CC6]">Cart's..!</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    curts.map( item => (
                        <CurtCard 
                        key={item._id} 
                        curt={item} 
                        curts={curts} 
                        setCurts={setCurts}>

                        </CurtCard>
                    ))
                }
            </div>
            

        </div>
    );
};

export default MyCart;