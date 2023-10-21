import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProduct from "../Pages/AllProduct/AllProduct";

import BrandProduct from "../Pages/BrandProduct/BrandProduct";
import Update from "../Pages/Update/Update";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tenth-assignment-server-mv319buzq-abirs-projects-823d9b34.vercel.app/brand')
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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
                loader: ({ params }) =>  fetch(`https://tenth-assignment-server-mv319buzq-abirs-projects-823d9b34.vercel.app/brand/${params.name}`)
                
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://tenth-assignment-server-mv319buzq-abirs-projects-823d9b34.vercel.app/update/${params.id}`)
            },
            {
                path: '/productdetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) =>  fetch(`https://tenth-assignment-server-mv319buzq-abirs-projects-823d9b34.vercel.app/productdetails/${params.id}`)
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch("https://tenth-assignment-server-mv319buzq-abirs-projects-823d9b34.vercel.app/curt")
            }
            
        ]
    }
]);

export default router;