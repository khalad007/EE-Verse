import swal from "sweetalert";


const Slider = ({ slider }) => {

    const handleSlideDetails = (e) => {
        e.preventDefault();

        swal("Sorry.!", "Page is Under Construction.!", "error", {
            button: "Ok!",
        }); 

    };

    const { slide1, slide2, slide3, slogan } = slider;
    return (
        <div class="carousel w-[90%] mx-[5%] mt-10 h-[60vh] lg:h-[80vh] rounded-lg">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={slide1} class="w-full" />
                <div
                    class="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">{slogan}
                            </h1>


                            <button onClick={handleSlideDetails} class="btn bg-[#247CC6] border-0 mt-11 lg:m-8 text-white">Details</button>
                        </div>

                    </div>
                    <a href="#slide2" class="btn btn-circle">❯</a>

                </div>
                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>
            {/* .............................................................................. */}
            <div id="slide2" class="carousel-item relative w-full">
                <img src={slide2} class="w-full" />
                <div
                    class="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">{slogan}
                            </h1>


                            <button onClick={handleSlideDetails} class="btn bg-[#247CC6] border-0 mt-11 lg:m-8 text-white">Details</button>
                        </div>

                    </div>
                    <a href="#slide3" class="btn btn-circle">❯</a>

                </div>
                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>
            {/* .............................................................................. */}
            <div id="slide3" class="carousel-item relative w-full">
                <img src={slide3} class="w-full" />
                <div
                    class="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <div>
                        <div class=" text-center">
                            <h1 class="text-lg lg:text-6xl text-white">{slogan}
                            </h1>


                            <button onClick={handleSlideDetails} class="btn bg-[#247CC6] border-0 mt-11 lg:m-8 text-white">Details</button>
                        </div>

                    </div>
                    <a href="#slide1" class="btn btn-circle">❯</a>

                </div>
                <div class="absolute inset-0 bg-black opacity-50 z-10 "></div>
            </div>
            {/* .............................................................................. */}
           
        </div>
    );
};

export default Slider;