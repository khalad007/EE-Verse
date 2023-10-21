import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandName from "./BrandName";
import NewArrival from "./NewArrival";
import Subscribe from "./Subscribe";
import HowItWorks from "./HowItWorks";



const Home = () => {

    const brands = useLoaderData();
    
    console.log(brands)
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center font-bold lg:text-5xl text-4xl my-10">Our <span className="text-[#247CC6]">Brand ..!</span></h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6 lg:ml-44 md:ml-32 ml-10">
                
                {
                    brands.map(brand => <BrandName key={brand._id} brand={brand}></BrandName>)
                }
            </div>


            <div className='max-w-6xl mx-auto'>
                <h1 className="text-center font-bold lg:text-5xl text-4xl my-10">New <span className="text-[#247CC6]">Arrival ..!</span></h1>
                <NewArrival></NewArrival>
            </div>

            <div>
                <h1 className="text-center font-bold mt-14">--- Process</h1>
                <h1 className="text-center font-bold lg:text-5xl text-4xl mb-10">How it <span className="text-[#247CC6]">work's ..!</span></h1>
            <HowItWorks></HowItWorks>
            </div>

            <div className='max-w-6xl mx-auto'>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;