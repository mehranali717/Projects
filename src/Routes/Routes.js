import { Navigate, useRoutes } from "react-router-dom";
import Mainlayout from "../Layoutes/Mainlayout/Mainlayout";
import {Blog, Contact, Coupons, Home, ProductDetail, Products, Shop} from "../Pages";
import {BlogDetail, BlogGrid, BlogList} from "../Pages/Blog/Blog_SubPages";
const Routes =()=>{
    return useRoutes([
        {
            element:<Mainlayout />,
            children:[
                {path:"/home", element:<Home/>},
                {path:"/shop", element:<Shop/>},
                {path:"/products", element:<Products/>},
                {element:<Blog/>,
                children:[
                    {path:"blog",element:<BlogList />},
                    {path:"blog-grid",element:<BlogGrid />},
                    {path:"blog-list",element:<BlogList />},
                    {path:"blog-detail",element:<BlogDetail />}
                ]},
                {path:"/coupons", element:<Coupons/>},
                {path:"/contact", element:<Contact/>},
                {path:"/detail", element:<ProductDetail/>},
                {path:"*" , element:<Navigate to="/home" />}
            ]
        }
    ])
}
export default Routes;