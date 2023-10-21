
import {  FaCalendar } from 'react-icons/fa';
const BlogAndEvents = () => {
    return (
        


        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div className="card  card-side bg-base-100 shadow-xl">
                <figure><img className="w-64 h-60" src="https://i.ibb.co/4YbTkXf/blog-Ass9-1-1.jpg" alt="Movie" /></figure>
                <div className="card-body">
                <p className='flex text-center items-center justify-center text-xs'><FaCalendar></FaCalendar> December2, 2023</p>
                    <h2 className="card-title">Headset</h2>
                   
                </div>
            </div>
            {/* .............................................................. */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-64 h-60" src="https://i.ibb.co/4FD5fMC/blog-Ass9-2.jpg" alt="Movie" /></figure>
                <div className="card-body">
                <p className='flex text-center items-center justify-center text-xs'><FaCalendar></FaCalendar> August2, 2023</p>
                    <h2 className="card-title">LifeCam</h2>
                   
                </div>
            </div>
            

            {/* .............................................................. */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-64 h-60"  src="https://i.ibb.co/1KtSc3c/blog-Ass9-1.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <p className='flex text-center items-center justify-center text-xs'><FaCalendar></FaCalendar> October21, 2023</p>
                    <h2 className="card-title">Xbox!</h2>
                    
                </div>
            </div>
            {/* .............................................................. */}
        </div>
    );
};

export default BlogAndEvents;