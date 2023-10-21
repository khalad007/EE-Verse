import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const ProductDetails = () => {
    const product = useLoaderData();

    const {  name, brandName, description, photoURL, price, rating, type } = product;

    const curt = { name, brandName, description, photoURL, price, rating, type }
    console.log(curt);

    const handleCurt = () => {
        fetch("https://tenth-assignment-server-mv319buzq-abirs-projects-823d9b34.vercel.app/curt", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(curt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You Added the Product!",
                        icon: "success",
                        button: "Aww yiss!",
                    })
                }
            })
    }


    return (
        <div className="flex items-center justify-center">
            <div className="card lg:w-1/2 items-center justify-center bg-base-100 shadow-xl my-12">
                <figure><img className="rounded-lg" src={photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p className="font-bold">Brand : <span>{brandName}</span></p>
                    <p>{description}</p>
                    <p className="font-bold">Type : <span>{type}</span></p>
                    <p className="font-bold">Price : <span>{price}</span></p>
                    <p className="font-bold">Rating : <span>{rating}</span></p>
                    <div className="card-actions justify-end">
                        <button onClick={handleCurt} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;