import { json, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slider from '../Product/Slider';
import Product from '../Product/Product';
// import Product from '../Product/Product';


const BrandProduct = () => {

    const [product, setProduct] = useState([]);

    const slider = useLoaderData();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${slider.brandName}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    console.log(product)
    return (
        <div>
            <Slider slider={slider}></Slider>
            {product ? (
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 my-7'>
                    {
                        product.map(item => (
                            <Product key={item._id} item={item}></Product>
                        )
                        )
                    }
                </div>
            )
                :
                (
                    <div>
                        <h2>opss</h2>
                    </div>
                )}
        </div>
    );
};

export default BrandProduct;



// import { useEffect, useState } from "react";
// import { json, useLoaderData } from "react-router-dom";
// import Slider from "../Product/Slider";


// const BrandProduct = () => {
//     const [products, setProducts] = useState([]);

//     const slider = useLoaderData();
//     useEffect(() => {
//         fetch(`http://localhost:5000/product/${slider.brandName}`)
//         .then(res => json())
//         .then(data => setProducts(data));
//     }, [])
//     console.log(slider);
//     console.log(products);

//     return (
//         <div>
//             <Slider slider={slider}></Slider>
//         </div>
//     );
// };

// export default BrandProduct;


