import { Outlet } from "react-router-dom";
import { Header, Products } from "../../Section"

const Mainlayout =()=>{

    return <>
             <Header />
             <Outlet/>
             {/* <Products /> */}
    </>
}
export default Mainlayout;