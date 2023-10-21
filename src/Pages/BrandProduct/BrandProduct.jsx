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
            {
            product.length > 0  ? (
                
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 my-12'>
                    
                    {
                        product.map(item => ( 
                            <Product key={item._id} item={item}></Product>
                        )
                        )
                    }
                </div>
            ) : (
                <div className='text-5xl text-center my-16'>
                    <h2 className='text-red-600'>opss</h2><br />
                    <h2>There Is no product for this brand </h2>
                </div>
            )}
        </div>
    );
};

export default BrandProduct;




