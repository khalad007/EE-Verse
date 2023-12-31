import { Link } from "react-router-dom";


const Product = ({ item }) => {
    const { _id, name, brandName, description, photoURL, price, rating, type } = item;


    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="w-44 h-40" src={photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}!
                    </h2>
                    <p><span className="font-bold">Brand :</span> {brandName}</p>
                    <p>{description}</p>
                    <p><span className="font-bold">Rating :</span> {rating}</p>
                    <p><span className="font-bold">Price : </span>{price}$</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{type}</div>

                    </div>
                </div>
                <div className="flex justify-center gap-10 mb-2">
                    <Link to={`/update/${_id}`}><button className="btn bg-[#247CC6] text-white">Update</button></Link>
                    <Link to={`/productdetails/${_id}`}>  <button className="btn bg-[#247CC6] text-white">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;