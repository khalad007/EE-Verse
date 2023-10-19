import Banner from "./Banner";
import BrandName from "./BrandName";
import NewArrival from "./NewArrival";
import Subscribe from "./Subscribe";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandName></BrandName>

            <div className='max-w-6xl mx-auto'>
                <h1 className="text-center font-bold lg:text-5xl my-10">New <span className="text-[#247CC6]">Arrival ..!</span></h1>
                <NewArrival></NewArrival>
            </div>

            <div className='max-w-6xl mx-auto'>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;