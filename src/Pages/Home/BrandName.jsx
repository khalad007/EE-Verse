import { Link } from "react-router-dom";


const BrandName = ({ brand }) => {

    const {  brandLogo, brandName } = brand;


    return (
        <Link to={`/brandproduct/${brandName}`}>
            <div className="card w-40 bg-base-100 shadow-xl  ">
                <figure className="px-10 pt-10">
                    <img src={brandLogo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brandName}!</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandName;