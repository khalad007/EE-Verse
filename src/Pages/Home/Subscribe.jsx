

const Subscribe = () => {
    return (
        <div className="flex w-full bg-[#247CC6] rounded-t-lg mt-8">
            <div className="w-1/2 text-center pt-8">
                <h1 className="text-2xl text-white font-extrabold ">Sign Up For Newsletter</h1>
            </div>
            <div className="relative w-1/2 pt-8">
                <input type="text"  placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                <button className="btn  bg-[#247CC6] absolute top-8 text-white right-0 rounded-l-none">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;