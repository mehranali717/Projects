import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../Section"
const Mainlayout =()=>{
    return <>
             <Header />
             <Outlet/>
             <Footer/>
    </>
}
export default Mainlayout;