

const HowItWorks = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:ml-44 md:ml-32 ml-24 my-14">
            <div className="card w-60 bg-base-100   ">
                <figure className="px-10 pt-10">
                    <h1 className="bg-black text-white w-12 h-12 font-bold rounded-full flex justify-center items-center">1</h1>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Register!</h2>
                    <p>Register yourself as a EE Verse user</p>
                </div>
            </div>
            <div className="card w-60 bg-base-100   ">
                <figure className="px-10 pt-10">
                    <h1 className="bg-black text-white w-12 h-12 font-bold rounded-full flex justify-center items-center">2</h1>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Choose your product.!</h2>
                    <p>Choose ur product ,which you want to buy</p>
                </div>
            </div>
            <div className="card w-60 bg-base-100   ">
                <figure className="px-10 pt-10">
                    <h1 className="bg-black text-white w-12 h-12 font-bold rounded-full flex justify-center items-center">3</h1>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Buy IT !</h2>
                    <p>That's it , now you know what to do .. enjoy</p>
                </div>
            </div>
        </div >
    );
};

export default HowItWorks;