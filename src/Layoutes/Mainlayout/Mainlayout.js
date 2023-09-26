import { Outlet } from "react-router-dom";
import { Header } from "../../Section"

const Mainlayout =()=>{
    return <>
             <Header />
             <Outlet/>
    </>
}
export default Mainlayout;