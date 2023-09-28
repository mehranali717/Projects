import { Navigate, useRoutes } from "react-router-dom";
import Mainlayout from "../Layoutes/Mainlayout/Mainlayout";
import {Blog, Contact, Coupons, Home, ProductDetail, Products, Shop} from "../Pages/";
const Routes =()=>{
    let routes = useRoutes([
        {
            element:<Mainlayout />,
            children:[
                {path:"/home", element:<Home/>},
                {path:"/shop", element:<Shop/>},
                {path:"/products", element:<Products/>},
                {path:"/blog", element:<Blog/>},
                {path:"/coupons", element:<Coupons/>},
                {path:"/contact", element:<Contact/>},
                {path:"/productDetail", element:<ProductDetail/>},
                {path:"*" , element:<Navigate to="/home" />}
            ]
        }
    ])
    return routes
}
export default Routes;