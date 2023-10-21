import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProduct from "../Pages/AllProduct/AllProduct";

import BrandProduct from "../Pages/BrandProduct/BrandProduct";
import Slider from "../Pages/Product/Slider";
import Update from "../Pages/Update/Update";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brand')
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allproduct',
                element: <AllProduct></AllProduct>
            },
            {
                path: '/brandproduct/:name',
                element: <PrivateRoute><BrandProduct></BrandProduct></PrivateRoute>,
                loader: ({ params }) =>  fetch(`http://localhost:5000/brand/${params.name}`)
                
            },
            {
                path: '/update',
                element: <Update></Update>
            },
            {
                path: '/productdetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) =>  fetch(`http://localhost:5000/productdetails/${params.id}`)
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/curt")
            }
            
        ]
    }
]);

export default router;