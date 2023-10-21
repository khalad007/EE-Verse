

const Banner = () => {
    return (
        <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/jLP070M/banner.jpg)' }}>
            <div className="hero-content text-center text-neutral-content relative">
                <div className="lg:right-[170px] md:right-20 w-96 text-black absolute lg:block md:block hidden">
                    <h1 className="mb-8 lg:text-6xl text-5xl font-bold">EE <span className="text-[#247CC6]">Verse..!</span></h1>
                    <p className="mb-5 font-semibold md:hidden">An infinite realm for Electronics Device .... A parallel dimension where electronics product dance,</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;